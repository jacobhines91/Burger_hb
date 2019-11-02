$(document).ready(function() {

    // Add a new burger
    $("#submitNewBurger").on("click", function() {
        event.preventDefault();

        var newBurger = {
            name: $("#newBurger").val().trim(),
            devoured: false
        }
        
        $.ajax("/", {
            type: "POST",
            data: newBurger
        });
        location.reload();
    })

    // Devour burger
    $(".devourBtn").on("click", function() {
        event.preventDefault();

        var idObject = {
            id: $(this).attr("id")
        }

        $.ajax("/", {
            type: "PUT",
            data: idObject
        });
        location.reload();
    })



})