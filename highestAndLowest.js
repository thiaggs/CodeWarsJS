function highAndLow(numbers){
    
    let array = numbers.split(' ');
    console.log(array);
    let maior = parseInt(array[0]), 
        menor = parseInt(array[0]);

    let maiorC = array[0],
        menorC = array[0];

    array.forEach(function(number){

        if(parseInt(number) > maior){
            maior = parseInt(number);
            maiorC = number;
        };

        if(parseInt(number) < menor){
            menor = parseInt(number);
            menorC = number;
        };

    });

    const string = `${maiorC} ${menorC}`;
    return string;
  };

  
  console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));