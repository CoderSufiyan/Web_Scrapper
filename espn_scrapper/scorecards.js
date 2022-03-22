const request = require("request");
const cheerio = require("cheerio");

function getInfoFromScorecard(url){
    // console.log("from scoredcard.js ", url);
    request(url, cb);
}

function cb(err, res, body){
    if(err){
        console.log(err);
    }else{
        getMatchDetails(body);
    }
}

function getMatchDetails(html){
    let selecTool = cheerio.load(html);
    // 1. get venue
    // 2. get date
    // 3. get team names
    // 4. get result
}

module.exports = {
    gifs : getInfoFromScorecard,
};