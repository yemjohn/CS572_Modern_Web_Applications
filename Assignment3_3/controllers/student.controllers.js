
const studentsData= require("../data/student.json")
module.exports.getAll= function(req, res) {
    console.log("JSON GET received");
    res.status(200).json(studentsData);//all games
}

module.exports.getOne= function(req, res) {
    console.log("One JSON received");
    const studentIndex= req.params.studentIndex;
    const studentSelected= studentsData[studentIndex];
    res.status(200).json(studentSelected);
    }; 
