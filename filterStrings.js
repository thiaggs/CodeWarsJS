const l = [1,2,'aasf','1','123',123];

let newL= [];

l.forEach(function(x){

    if(typeof(x) === 'number'){
        newL.push(x);
    }
});

console.log(newL);