var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
	document.getElementById("name").focus();
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;
};

function displayResults() {
    var sum = 0;
    var highest = scores[0];
	var average = 0;

    for (var i = 0; i < scores.length; i++) {
		average = (average * (i) + parseInt(scores[i])) / (i + 1);
        sum += scores[i];
        if (scores[i] > highest) {
            highest = scores[i];
			index = i;
        }
    }

    document.getElementById("results").innerHTML = "<h2>Results</h2>" + "<p>Average Score: " + average + "<p>High Score = " + names[index] + " with a score of " + highest + "</p>";
}

function addScore(){
	var name = $("name").value;
	var score =($("score").value);
	
	if (name !== "" && score !== "" && !isNaN(score) && score >= 0 && score <= 100) {
        names.push(name);
        scores.push(score);
        $("name").value = "";
        $("score").value = "";
        alert("Score added");
		document.getElementById("name").focus();
    } else {
        alert("You must enter a name and a valid score.");
    }
}


function displayScores() {
    var table = "<tr><th>Name</th><th>Score</th></tr>";

    for (var i = 0; i < names.length; i++) {
        table += "<tr><td>" + names[i] + "</td><td>" + scores[i] + "</td></tr>";
    }
    $("scores_table").innerHTML = "<h2> Scores </h2><br />" + table;
}