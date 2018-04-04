// ChickenMonkey and bandNumber exercise


var chickenMonkey = function(){
    for (var i = 0; i <=100; i++){
        if(i % 5 === 0 && i % 7 === 0){
            echo "ChickenMonkey"
        }else if(i % 5 === 0){
            echo "Chicken";
        }else if(i % 7 === 0){
            echo "Monkey";
        }else{
            echo i;
        }
    }
}

chickenMonkey();

var bandNumber = 0
const takeNumber = function (bandName) {
    bandNumber += 1; 
    return `${bandNumber}: ${bandName}`
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console

