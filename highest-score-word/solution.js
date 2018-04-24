function high(x){
    var alph = "abcdefghijklmnopqrstuvwxyz".split("");
    var topScore = 0;
     
    var topWord = "";
     
    var arr = x.split(" ");
      
        for(var i = 0; i<arr.length; i++){
            var score = 0;
            var word = arr[i];
            for(var j = 0; j<word.length; j++){
                score += alph.indexOf(word[j])+1
            }
            if (score>topScore){
                topWord = word;
                topScore = score;
            }
        }
        return topWord;
    }