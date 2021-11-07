"use strict"

$(document).ready( () => {
    $("#censor").click( () =>{
        $("#output").text($("#user_input").bigBrother());
    });
})