"use strict"

$(document).ready( () => {
    $("#censor").click( () =>{
        let myKeys = ["Tiananmen", "square"];

        $("#output").text($("#user_input").bigBrother({
            censorType: "r",
            keywords: myKeys
        }));
    });
})