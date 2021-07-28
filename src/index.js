module.exports = function toReadable (number) {
    let numberDict = {
        1:'one', 
        2:'two', 
        3:'three',  
        4:'four', 
        5:'five',
        6:'six', 
        7:'seven', 
        8:'eight', 
        9:'nine',
        10:'ten',
        11:'eleven',
        12:'twelve',
        13:'thirteen',
        14:'fourteen',
        15:'fifteen',
        16:'sixteen',
        17:'seventeen',
        18:'eighteen', 
        19:'nineteen',
        20:'twenty', 
        30:'thirty', 
        40:'forty', 
        50:'fifty',
        60:'sixty',
        70:'seventy',
        80:'eighty',
        90:'ninety'
      }
    
    let numberString = number.toString()

    if (number == 0) {
        return "zero";
    }else if (numberString.length === 2 || Number(numberString) <= 20) {
        if (Number(numberString) <= 20 || numberString[1] === "0"){
            
            return numberDict[numberString];
        }else{
            let tens = numberDict[numberString[0] * 10] + " ";
            let num = numberDict[numberString[1]];

            return tens + num;
        }
    }else if (numberString.length === 3) {
        let hundred = numberDict[numberString[0]] + " hundred ";
        numberString = numberString.slice(1);
        if (Number(numberString) === 0){
            return hundred.trim()
        }else if (Number(numberString) <= 20 || numberString[1] === "0"){
            return hundred + numberDict[Number(numberString)];
        }else{    
            let tens = numberDict[numberString[0] * 10] + " ";
            let num = numberDict[numberString[1]];

            return hundred + tens + num;

        }
    }
    
  
}
