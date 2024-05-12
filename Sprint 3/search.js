$(document).ready(function(){
    var movies = [ // Mvoie list for auto complete
        "Following", "Memento", "Insomnia", "Batman Begins", "The Prestige", 
        "The Dark Knight", "Inception", "The Dark Knight Rises", "Interstaller", 
        "Dunkirk", "Tenet", "Oppenheimer", "Man of Steel"
    ];

    // Auto complete widget from jquery library
    $(function () {
        $("#searchInput").autocomplete({source: movies}); // Auto complete function
    })

    // Tab widget from jquery library
    $(".film_info").each(function() {
        $(this).tabs({ 
            active: 0 
        }); 
    });

    // Accordion widget from jquery library
    $(function() {
        $("#awards_info").accordion();
    });
    
    //Dialog widget from jquery library
    $("#dialog-info").dialog({
        dialogClass: 'no-close', // For not showing the close button of dialog
        autoOpen: true,
        modal: true,
        width: 300,
        height: 200,
        buttons: { // Button for closing the information dialog
            Ok: function() {
                $(this).dialog("close");
            }
        }
    });
});

// Function for Subscribe button
function subscribeAction()
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    // If the name or email input is blank, give an error
    if(name.trim() === "" || email.trim() === "") {
        alert("Please fill in all required fields.");
        return;
    }

    alert("Thanks for subscribing us!");
}
