let request = require('request');


appId = 'harrymin-ProductS-PRD-e16de56b6-438fa4a5';


    
   

                                        // For Items
getItems = (rawQuery, callBack)=>{
     

        let itemsRequest = refineItemsQuery(rawQuery);
        let query = createItemsQuery(itemsRequest);
        request.get(query, (error, response, body)=>{
            if(error){
                console.log(error);
                return error;
           }
        let refinedResults = modifyItemsJson(JSON.parse(body));
        // let refinedResults = JSON.parse(body);
        callBack(refinedResults);
    })
 }
  

   modifyItemsJson=(json)=>{
        let refinedResults=[];
        if(json){
            if(json.findItemsAdvancedResponse[0].ack[0]==='Success'){
                let searchResults = json.findItemsAdvancedResponse[0].searchResult;
                let count = searchResults[0]['@count'];
                if(count > 0){
                    
                    let items = searchResults[0].item; 
                    for(let i=0; i<count;i++){
                        // Checking if zip is there
                        refinedResults[i]= {};
                        if(items[i].postalCode){
                            refinedResults[i].zip = items[i].postalCode[0];
                        }else{ 
                            refinedResults[i].zip = "N/A";
                        }
                        if(items[i].galleryURL){
                            refinedResults[i].image = items[i].galleryURL[0];
                        }
                       
                        refinedResults[i].shipping = getShippingDetails(items[i]);
                        refinedResults[i].seller = getSellerInfo(items[i]);
                        refinedResults[i].itemId = items[i].itemId[0];
                        refinedResults[i].price = "$" + items[i].sellingStatus[0].currentPrice[0].__value__;
                        refinedResults[i].title = items[i].title[0];
                
                    }
                    return refinedResults;
                } else{ return refinedResults="Failure";}
            } else{  return refinedResults = "Failure"}
        }else{ return "Failure"}
   }


   // helps to convert raw query object into modified usable by EbayCalls class
function refineItemsQuery(raw){
    let theRequest={
        keyword: raw.keyword,
        category: raw.category,
        condition: {
            new: (raw.new=="true"),
            used: (raw.used=="true"),
            unspecified: (raw.unspecified=="true"),
        },
        shipping:{
            free: raw.free,
            local: raw.local
        },
        distance: raw.distance,
        zip: raw.zip
    }
    return theRequest;
}

function createItemsQuery(params){
    findItemsQuery = "http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsAdvanced&SERVICE-VERSION=1.0.0&SECURITY-APPNAME="+appId+"&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&paginationInput.entriesPerPage=50";
    findItemsQuery += "&keywords="+params.keyword;
    if(params.category != 0){
        findItemsQuery += "&categoryId="+params.category;
    }
    findItemsQuery += "&buyerPostalCode="+params.zip;


    let itemFilter = 0
    let valueFilter = 0;

    findItemsQuery += "&itemFilter("+itemFilter+").name=MaxDistance&itemFilter("+itemFilter+").value="+params.distance;
    itemFilter++;

    if(params.shipping.free){
        findItemsQuery += "&itemFilter("+itemFilter+").name=FreeShippingOnly&itemFilter("+itemFilter+").value="+params.shipping.free;
        itemFilter++;
    }
    if(params.shipping.local){
        findItemsQuery += "&itemFilter("+itemFilter+").name=LocalPickupOnly&itemFilter("+itemFilter+").value="+params.shipping.local;
        itemFilter++;
    }



    findItemsQuery += "&itemFilter("+itemFilter+").name=HideDuplicateItems&itemFilter("+itemFilter+").value=true";
    itemFilter++;

    findItemsQuery += "&itemFilter("+itemFilter+").name=Condition";
    
    
    if(params.condition.new){
       findItemsQuery += "&itemFilter("+itemFilter+").value("+valueFilter+")=New";
        valueFilter++;
    }
    if(params.condition.used){
        findItemsQuery += "&itemFilter("+itemFilter+").value("+valueFilter+")=Used";
        valueFilter++;
    }
    if(params.condition.unspecified){
        findItemsQuery += "&itemFilter("+itemFilter+").value("+valueFilter+")=Unspecified";
        valueFilter++;
    }
    
    if(!params.condition.new && !params.condition.used && !params.condition.unspecified){
        findItemsQuery += "&itemFilter("+itemFilter+").value("+valueFilter+")=New";
        valueFilter++;
        findItemsQuery += "&itemFilter("+itemFilter+").value("+valueFilter+")=Used";
        valueFilter++;
        findItemsQuery += "&itemFilter("+itemFilter+").value("+valueFilter+")=Unspecified";
        valueFilter++;
    }

    // Specifiying to send the seller profile and seller website
    findItemsQuery += "&outputSelector(0)=SellerInfo&outputSelector(1)=StoreInfo";
    return findItemsQuery
}

function getShippingDetails(item){
    let shipping={};
    let shippingInfo;
     //  Chekcing if shipping is free
     if(item.shippingInfo[0]){
        shippingInfo = item.shippingInfo[0];
        if(shippingInfo.shippingServiceCost){
            let cost = shippingInfo.shippingServiceCost[0].__value__;
            if(cost === "0.0"){
                shipping.cost = {name: "Shipping Cost" , value: "Free Shipping"};
            }else{
                shipping.cost = {name: "Shipping Cost" , value: "$"+cost};
            }
        }
        if(shippingInfo.shipToLocations){
            shipping.toLocations = {name: "Shipping Locations" , value:shippingInfo.shipToLocations[0]};
        }
        if(shippingInfo.handlingTime){
            let handling = shippingInfo.handlingTime[0];
            if(handling === "0" || handling === "1"){
                shipping.handling = {name: "Handling Time" , value: handling + " Day"}
            }else{
                shipping.handling = {name: "Handling Time" , value: handling + " Days"}
            }
        }
        shipping.expedited = {name: "Expedited Shipping" , value: Boolean(shippingInfo.expeditedShipping[0])} ;
        shipping.oneDay = {name: "One Day Shipping" , value: Boolean(shippingInfo.oneDayShippingAvailable[0])};
        shipping.returnAccepted = {name: "Return Accepted" , value: Boolean(item.returnsAccepted[0])};
    }
    return shipping;
}

function getSellerInfo(item){
    let seller={}
    let sellerInfo = item.sellerInfo;
    let storeInfo = item.storeInfo;
    if(sellerInfo){
        sellerInfo = sellerInfo[0];
        if(sellerInfo.sellerUserName){
            seller.username = {name: "username" , value:sellerInfo.sellerUserName[0]};
        }
        if(sellerInfo.feedbackScore){
            seller.feedbackScore = {name: "Feedback Score" , value:sellerInfo.feedbackScore[0]};
        }
        if(sellerInfo.positiveFeedbackPercent){
            seller.popularity = {name: "Popularity" , value:sellerInfo.positiveFeedbackPercent[0]};
        }
        if(sellerInfo.feedbackRatingStar){
            seller.feedbackStars = {name: "Feedback Rating Star" , value:sellerInfo.feedbackRatingStar[0]};
        }
        if(sellerInfo.topRatedSeller){
            seller.topRated = {name: "Top Rated" , value: Boolean(sellerInfo.topRatedSeller[0])};
        }
    }
    if(storeInfo){
        storeInfo = storeInfo[0];
        if(storeInfo.storeName){
            seller.storeName = {name: "Store Name" , value:storeInfo.storeName[0]};
        }
        if(storeInfo.storeURL){
            seller.storeURL ={name: "Buy Product At" , value: storeInfo.storeURL[0]};
        }
    }
    return seller;
}




                                                    // FOR A SINGLE ITEM
// called from app.js
function getItem(itemId, callBack){
    let query = createItemQuery(itemId.itemId);

    request.get(query, (error, response, body)=>{
        if(error){
            console.log(error);
            return error;
        } 
        let refinedResults = modifyItemJson(JSON.parse(body));

        // let refinedResults = JSON.parse(body);
        callBack(refinedResults);
    })
}

// creates the query string to send to the api
function createItemQuery(itemId){
    let query = "http://open.api.ebay.com/shopping?callname=GetSingleItem&responseencoding=JSON";
    query += "&appid="+appId+"&siteid=0&version=967";
    query +="&ItemID=" + itemId;
    query += "&IncludeSelector=Description,Details,ItemSpecifics"
    return query;
}
// called after receiving th data from the api
function modifyItemJson(json){
    let item;
    if(json){
        if(json.Ack === "Success"){
            item = json.Item;
            return createItemObject(item);
        }else{ return "Failure"}
    }else{return "Failure"}
}
// Called from modifyItemJson(json) and received rawItem
function createItemObject(rawItem){
    let item={};
 
    // Getting Title
    if(rawItem.Title){
        item.title = rawItem.Title;
    }
    // getting Link
    if(rawItem.ViewItemURLForNaturalSearch){
        item.link = rawItem.ViewItemURLForNaturalSearch;
    }
    // Storing the pictures
    if(rawItem.PictureURL){
        item.pictures = {name: "Product Images", value: rawItem.PictureURL};
    }
    // Getting itemDetials
    item.itemDetails = getItemDetails(rawItem);
    return item;
}
// Done
function getItemDetails(rawItem){
    let itemSpecs = [];
  
    if(rawItem.Subtitle){
        itemSpecs.push({Name:"Subtitle", Value:  [rawItem.Subtitle]});
    }
    if(rawItem.CurrentPrice.Value){
        itemSpecs.push({Name: "Price", Value: ["$" + rawItem.CurrentPrice.Value]});
    }
    if(rawItem.Location){
        itemSpecs.push({Name: "Location", Value: [rawItem.Location]});
    }
    if(rawItem.ReturnPolicy){
        itemSpecs.push({Name: "Return Policy", Value: [rawItem.ReturnPolicy.ReturnsAccepted]});
    }
    
    if(rawItem.ItemSpecifics){
        let specifics = rawItem.ItemSpecifics.NameValueList;

        for(let i =0; i < specifics.length; i++){
            itemSpecs.push(specifics[i]);
        }
    }
    
    return itemSpecs;
}
// 


                                    // SIMILAR ITEMS
function getSimilarItems(itemId, callBack){
    let query = createSimilarItemsQuery(itemId.itemId);
    request.get(query, (error, response, body)=>{
        if(error){
            console.log(error);
            return error;
        } 
        // let refinedResults = JSON.parse(body);
        
        let results = JSON.parse(body)
        

        let refinedResults;
        if(results.getSimilarItemsResponse.ack==="Success"){
            let items = results.getSimilarItemsResponse.itemRecommendations.item;
           
            refinedResults = modifySimilarItemsJson(items);
        }else{
            refinedResults = "Failure";
        }
        callBack(refinedResults);
    })

}

function createSimilarItemsQuery(itemId){
    let query = "http://svcs.ebay.com/MerchandisingService?OPERATION-NAME=getSimilarItems&SERVICE-NAME=MerchandisingService&SERVICE-VERSION=1.1.0";
    query += "&CONSUMER-ID="+appId+"&RESPONSE-DATA-FORMAT=JSON"
    query += "&REST-PAYLOAD";
    query += "&itemId="+itemId;
    query += "&maxResults=20";
    return query;
}

function modifySimilarItemsJson(rawItems){
   
    if(rawItems.length < 1){
        return {ack: 0};
    }
    let response = {ack: 1}
    let items=[];



    for(let i=0; i < rawItems.length; i++){
        items[i]={};
        if(rawItems[i].imageURL){
            items[i].picture = rawItems[i].imageURL;
        }
        if(rawItems[i].title){
            items[i].title = rawItems[i].title;
        }
        if(rawItems[i].viewItemURL){
            items[i].link = rawItems[i].viewItemURL;
        }
        if(rawItems[i].buyItNowPrice){
            items[i].price = {name: "Price", value: "$" + rawItems[i].buyItNowPrice.__value__};
        }
        if(rawItems[i].shippingCost){
            items[i].shipping = {name: "Shipping Cost", value: "$" + rawItems[i].shippingCost.__value__};
        }
        if(rawItems[i].timeLeft){
            let str = String(rawItems[i].timeLeft)
            items[i].daysLeft = {name: "Days Left", value: str.substring(str.lastIndexOf("P")+1, str.lastIndexOf("D"))};
        }

    }

   
    response.items = items;
    return response;
}


module.exports.getItems = getItems;
module.exports.getItem = getItem;
module.exports.getSimilarItems = getSimilarItems;