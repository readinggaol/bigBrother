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
    $.fn.bigBrother = function(){
        let text = $(this).val();
        let words = text.split(" ");
        for(let i = 0; i < words.length; i++){
            if(examine(words[i])){
                words[i] = grawlixGen(words[i].length);
            }
            console.log(words[i]);
        }
        words = words.join(" ")

        return words;

    }
}(jQuery));