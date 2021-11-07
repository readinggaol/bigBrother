const grawlixGen = (num) => {
    let grawlix = "!@#$%^&*";
    let grawWord = "";
    for(let i = 0; i < num; i++){
        let index = Math.floor(Math.random() * grawlix.length);
        grawWord += grawlix[index];
    }
    return grawWord;
};

const examine = (word) => {
    let shit = new RegExp("[Ss][Hh][Ii][Tt]");
    let fuck = new RegExp("[Ff][Uu][Cc][Kk]");
    let regArr = [shit, fuck];
    for(let exp of regArr){
        if(exp.test(word)){
            return true;
        }
    }
    return false;
}

(function($) {
    $.fn.bigBrother = function(options){

        let settings = $.extend({
            censorType: "g",
            keywords: null,
            keyUnique: null
        }, options)

        let text = $(this).val();
        let words = text.split(" ");
        //for each word, examine and replace with...
            for(let i = 0; i < words.length; i++){
                if(examine(words[i])){
                    //grawlix
                    if(settings.censorType == "g"){
                        words[i] = grawlixGen(words[i].length);
                    }
                    //[redacted]
                    if(settings.censorType == "r"){
                        words[i] = "[redacted]";
                    }
                    //removed
                    if(settings.censorType == "x"){
                        words.splice(i, 1);
                    }
                }
            }
        
        //join the array back into one string and return it
        words = words.join(" ")
        return words;

    }
}(jQuery));