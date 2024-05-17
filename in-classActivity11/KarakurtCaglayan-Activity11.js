$(document).ready(function() {
    $('#nav_list a').click(function(event) {
        event.preventDefault();

        var speakerTitle = $(this).attr('title');
        var fileName = 'json_files/' + speakerTitle + '.json';

        $.ajax({
            url: fileName,
            dataType: 'json',
            success: function(data) {
                $('main').empty();

                $.each(data.speakers, function(index, speaker) {
                    var speakerHTML = "<h1>" + speaker.title + "</h1>" +
                                      "<h2>" + speaker.month + "<br>" + speaker.speaker + "</h2>" +
                                      "<p>" + speaker.text + "</p>" +
                                      "<img src='" + speaker.image + "' alt='" + speaker.title + "'>";

                    $('main').append(speakerHTML);
                });
            },
        });
    });
}); // end ready