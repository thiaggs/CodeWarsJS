let myString = "indivisibility";
myString = myString.toLowerCase();

let myMap = new Map();
let amount;
let cont = 0;

for(let i = 0; i < myString.length; i++){

    if(myMap.has(myString.charAt(i))){
        amount = myMap.get(myString.charAt(i));
        amount++;

        myMap.set(myString.charAt(i), amount);
    }else{
        myMap.set(myString.charAt(i), 1);
    }
}

myMap.forEach(function(value, key){

    if(myMap.get(key) > 1){
        cont++;
    }
});

console.log(cont);
