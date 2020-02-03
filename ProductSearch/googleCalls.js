let request = require('request');


let appId = 'AIzaSyCp6PwSM_pddrQE-KJv-IyvDffgLD4ATp0'
let cx = '004896094713341615049:bphnee4vflq';

function getImages(query, callBack){
    request.get(buildQuery(query), (error, response, body)=>{
        if(error){
            console.log(error);
            return error;
       }
    
    
    let refinedResults = modifyImagesJson(JSON.parse(body));
    callBack(refinedResults);
    })
}

function buildQuery(name){
    let query = "https://www.googleapis.com/customsearch/v1?";
    query += "q="+name;
    query += "&cx=" + cx;
    query += "&imgSize=huge&imgType=news&num=8&searchType=image"
    query += "&key="+appId;
    return query;
}

function modifyImagesJson(json){
    let images = [];
    let items;
    if(json && json.items){
        items = json.items;
        for(let i=0; i<items.length; i++){
            images[i]=items[i].link
        }   
    }
    return images;
}


module.exports.getImages = getImages