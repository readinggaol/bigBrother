class Word{
    constructor(text, isKey){
        this.text = text;
        this.isKey = isKey;
        this.code = "";
    }
}

const grawlixGen = (num) => {
    let grawlix = "!@#$%^&*";
    let grawWord = "";
    for(let i = 0; i < num; i++){
        let index = Math.floor(Math.random() * grawlix.length);
        grawWord += grawlix[index];
    }
    return grawWord;
};

const examine = (word, keys) => {
    //define regex in array
    let regArr = [
        new RegExp("[Ss][Hh][Ii][Tt]"),
        new RegExp("[Ff][Uu][Cc][Kk]"),
        new RegExp("[Cc][Uu][Nn][Tt]")
    ]
    //check word against user keywords
    if(keys.includes(word)){
        return new Word(word, true);
    }

    //test word against all defined regex
    for(let exp of regArr){
        if(exp.test(word)){
            return new Word(word, false);
        }
    }
    return word;
}

const handlePunctuation = (word) => {
    let parts = [];
    let exp = new RegExp("[a-zA-Z]");
    //if the last index of the word is not a letter
    //slice the word on the punctuation mark and add both to the array
    //otherwise, just push the word and return
    if(!exp.test(word[word.length - 1])){
        parts.push(word.slice(0, word.length - 1));
        parts.push(word[word.length - 1]);
        return parts;
    }else{
        parts.push(word);
        return parts;
    }
}

(function($) {
    $.fn.bigBrother = function(options){
        //default settings
        let settings = $.extend({
            censorType: "g",
            keywords: null,
            keyUnique: null
        }, options)


        let text = $(this).val();
        let words = text.split(" ");
        let userKeys = [];
        //If the user has included keywords, push them into a variable
        //An empty list is used instead of just reading them from settings to avoid crashing on null 
        if(settings.keywords != null){
            for(let key of settings.keywords){
                userKeys.push(key);
            }
        }

        for(let i = 0; i < words.length; i++){
            //check the current word for punctuation 
            let currentWordArray = handlePunctuation(words[i]); 
            let currentWord = examine(currentWordArray[0], userKeys);

            //if the current word is a word that needs to be censored
            //replace it with...
            if(currentWord instanceof Word){
                if(currentWord.isKey == true && settings.keyUnique != null){
                    currentWord.code = settings.keyUnique;
                }else{
                    currentWord.code = settings.censorType;
                }
                //grawlix
                if(currentWord.code == "g"){
                    if(currentWordArray.length > 1){
                        words[i] = grawlixGen(words[i].length) + currentWordArray[1];
                    }else{
                        words[i] = grawlixGen(words[i].length);
                    }
                }
                //[redacted]
                if(currentWord.code == "r"){
                    if(currentWordArray.length > 1){
                        words[i] = "[redacted]" + currentWordArray[1];
                    }else{
                        words[i] = "[redacted]";
                    }     
                }
                //removed
                if(currentWord.code == "x"){
                    if(currentWordArray.length > 1){
                        words[i] = currentWordArray[1];
                    }else{
                        words.splice(i, 1);
                    }                
                }
            }
        }       
        //join the array back into one string and return it
        words = words.join(" ")
        return words;
    }
}(jQuery));


