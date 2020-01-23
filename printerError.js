const s = 'aaaxbbbbyyhwawiwjjjwwm';
let amount = 0;

for(let i = 0; i < s.length; i++){

    if(s.charAt(i) > 'm'){
        amount++;
    }
}
console.log(`${amount}/${s.length}`);

  
    


