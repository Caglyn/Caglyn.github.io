$(document).ready(function () {
    
    $(function () {
        $("#birthday").
        datepicker();
    });

    var languages = [
        "ActionScript", "AppleScript", "Asp", "JavaScript", "Lisp", "Perl", "PHP", "Phyton" 
    ];
    
    $(function () {
        $("#language").autocomplete({source: languages});
    })
})