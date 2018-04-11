var totalCharacters = 140;
var showPosts = false;

$(document).ready(
    function() {
        $("#postForm").keyup(function(event){
            var inputText = event.target.value;
            $('#charRemaining').html(totalCharacters - inputText.length);
        });

        getComments();
    }
);

$("#postForm").submit(function (event) {
    event.preventDefault();

    $.post("/addComment", {comment: event.target.inputPost.value}, function (result) {
        $("#charRemaining").html(totalCharacters);
        event.target.reset();
        getComments();

        //alert(result.id);
	console.log("saved comment with id %d", result.id);
    });
});

$("#feedPosts").click(function (event)
{
    console.log(event.target.name);
    if(event.target.name)
    {
        $.ajax({
            url: '/removeComment/' + event.target.name,
            type: 'DELETE',
            success: function(result) {
                getComments();
            }
        });
    }
});

function getComments(){
    $.get( "/getComments", function( data ) {

        var posts = "";
        for(var i=0; i<data.length; i++)
        {
            posts += "<div class='row well text-left'><div class='col-xs-9'>" + 
                data[i].comment + "</div><div class='col-xs-3'>" + 
                "<button type='button' name='" + data[i]._id + "' class='btn btn-danger'>"+
                "Delete</button></div></div></div>";
        }

        $( "#feedPosts" ).html( posts );
        $( "#count" ).html( data.length );

        if(!showPosts){
            $("#feedPosts").hide();
        }
        else{
            $("#feedPosts").show();
        }

        setTimeout(getComments, 10000);
    });
}

$("#btn-count").click(function (event) {
    var options = {easing:'swing', duration: 500};
    if(!showPosts)
    {
        $("#feedPosts").slideToggle( options );
        showPosts = true;
    }
    else
    {
        $("#feedPosts").slideToggle( options );
        showPosts = false;
    }
});
