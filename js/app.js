$(document).ready(function(){
    $("#btnfunction").click(function(e){
        e.preventDefault();
        $("#overlay").fadeToggle(1000, "swing");
    });
});