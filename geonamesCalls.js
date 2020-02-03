let request = require('request');

let username= "harryminasyan";


function getZipcodes(query, callback){
if(query !== ''){
    request.get(createQuery(query), (error, response, body)=>{
        let results = refineResultsJSON(JSON.parse(body))
        callback(results);
    })
    }else{callback([])};    
}


function createQuery(startsWith){
    let query = "http://api.geonames.org/postalCodeSearchJSON?";
    query += "postalcode_startsWith=" + startsWith;
    query += "&username=" + username;
    query += "&country=US&maxRows=5";
    return query
}


function refineResultsJSON(json){
    let results=[];
    if(json && json.postalCodes){
        let codes = json.postalCodes;
        for(let i =0; i < codes.length; i++){
            results.push(codes[i].postalCode)
        }
    }
    return results;
}




module.exports.getZipcodes = getZipcodes;