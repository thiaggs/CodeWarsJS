function findOutlier(integers){
    let evens = 0;
    let odds = 0;
    let y;

    for(let i = 0; i < 3; i++){
        if(integers[i] % 2 === 0){
            evens++;
        }else{
            odds++;
        }
        
    }
   
    if(evens > odds){

        integers.forEach(function(x){
            if(x % 2 !== 0){
                y = x;
            }

        });
    }else{
        integers.forEach(function(x){
            if(x % 2 === 0){
                y = x;
            }

        });

    }

    return y;
}

  console.log(findOutlier([2,6,8,10,3]))