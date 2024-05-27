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
    function fetchFilmData() {
        $.ajax({
            url: 'films.json', // Path to your JSON file
            dataType: 'json',
            success: function(data) {
                // Iterate through each film
                $('.image-container').each(function(index) {
                    var film = data[index]; // Assuming the order of films in the JSON file matches the order of image containers

                    // Find the film info div for this image container
                    var filmInfoDiv = $(this).find('.film_info');

               
                     var generalInfoDiv = filmInfoDiv.find('.general_info');
                    generalInfoDiv.html('<p>Name: ' + film.name + '</p>' +
                                        '<p>Director: ' + film.director + '</p>' +
                                        '<p>Year: ' + film.year + '</p>');
                });
            },
            error: function(xhr, status, error) {
                console.error('Error fetching film data:', error);
            }
        });
    }

    // Call the fetchFilmData function to fetch and populate film data
    fetchFilmData();
    
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
