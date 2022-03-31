module.exports.addOne= function(req, res){
    console.log("Two digists are to be added")
    const operandOne= parseInt(req.params.operandOne);
    const operandTwo= parseInt(req.query.operandTwo);
    const sum= operandOne+operandTwo;
    res.status(200).json({"Operand 1 is ": operandOne, "Operand 2 is ": operandTwo," and the sum is":sum});
}