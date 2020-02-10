function spinWords(str){

    let strArr = str.split(" ");
    let newStr ='';

    strArr.forEach(function(word){
        let newWord = word;
        if(word.length > 4){
            newWord = word.split('').reverse().join('');
        }
        newWord += ' ';
        newStr += newWord;
    })
    
    return newStr.trim();
};

    console.log(spinWords('Just kidding there is still one more'));