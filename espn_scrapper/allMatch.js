let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";

const request = require("request");
const cheerio = require("cheerio");
const {gifs} = require("./scorecards");

function getAllMatch(url) {
    // console.log("from allMatch.js ",url);
    request(url, cb);
}

function cb(err, res, body){
    if(err){
        console.log("error", err);
    }else{
        extractAllMatchLink(body);
    }
}

function extractAllMatchLink(html){
    
    let selecTool = cheerio.load(html);
    let scoreCardElemArr = selecTool('a[data-hover="Scorecard"]');
    for(let i = 0; i < scoreCardElemArr.length; i++){
        let scorecardLink = selecTool(scoreCardElemArr[i].attr("href"));
        let fullLink = "https://www.espncricinfo.com" + scorecardLink;
        gifs(fullLink);
    }
}

module.exports = {
    getAllMatch: getAllMatch,
};