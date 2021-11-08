"use strict"

$(document).ready( () => {
    $("#censor").click( () =>{
        let myKeys = ["China", "Tiananmen", "Tankman"];

        $("#output").text($("#user_input").bigBrother({
            censorType: "g",
            keywords: myKeys,
            keyUnique: "r"
        }));
    });
})