var time = 500;
var counter = 0;
var level = 1;

function changePositionWithClick()
{
    counter++;

    if(counter == 3)
    {
        time -= 100;
        counter = 0;
        alert("You completed level " + level);
        level++;
    }
}

function changePosition()
{
    document.getElementById("button").style.marginTop = Math.random()*650 + "px";
    document.getElementById("button").style.marginLeft = Math.random()*650 + "px";
}

function timer()
{
    setTimeout(changePosition, time);
}