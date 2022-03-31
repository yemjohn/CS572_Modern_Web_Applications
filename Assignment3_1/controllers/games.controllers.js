
const gamesData= require("../data/games.json")
module.exports.getAll= function(req, res) {
    console.log("JSON GET received");
    // res.status(200).json(gamesData);//all games
    let offSet=0;
    let count=5;
    if(req.query && req.query.offSet){
        offSet= parseInt(req.query.offSet, 10);
    }
    if(req.query && req.query.count){
        count= parseInt(req.query.count, 10);
    }
    const pageGames= gamesData.slice(offSet, offSet+count);
    res.status(200).json(pageGames)//page games display 

    }; 

module.exports.getOne= function(req, res) {
    console.log("One JSON received");
    const gameIndex= req.params.gameIndex;
    const gameSelected= gamesData[gameIndex];
    res.status(200).json(gameSelected);
    }; 
module.exports.addOne= function(req, res){
    console.log("A single json is to be added")
    res.status(200).json(req.body);
}