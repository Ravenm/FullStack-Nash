/**
 * Created by ravens on 9/14/2017.
 */

$(function () {
   getImage();
   getThought();
});

function getImage() {
    console.log( "ready!" );
    $.get( "http://localhost:5050/get_image", function( data ) {

        console.log(data.url)
        $('#main_image').css('background-image','url('+data.url+')');
    });
}

function getThought() {
    console.log( "ready!" );
    $.get( "http://localhost:5050/get_thought", function( data ) {

        console.log(data.thought)
        var updatefield = document.getElementById('showerThought');
        updatefield.textContent = data.thought;
    });
}

function getNew(){
    var i = $('input[name="reThought"]:checked').val();
    if(i < 2){
        getImage();
    }
    if(i != 1){
        getThought();
    }
}