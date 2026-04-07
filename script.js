
let button = document.getElementById("btn");

// click event listener that runs "showResult" when the button is pressed
button.addEventListener("click", showResult);


/*
    showResult()

    Purpose to get user- selected values from the dropdowns and check if all options are selected,
    then send the vaules to the "getActivity" to determine its activity,
    later then display the result using "displayResult"
  

    it separates click handling from main logic.
*/
function showResult() {
    let people = document.getElementById("people").value;
    let time = document.getElementById("time").value;
    let energy = document.getElementById("energy").value;

    // Validation 
    if (people === "" || time === "" || energy === "") {
        displayResult("⚠️ Please select all options first!", "red");
        return; // stops function early
    }

   
    let result = getActivity(people, time, energy);

    displayResult(result, "#00adb5");
}


/*
    getActivity(p, t, e)

    p = number of people
    t = time available
    e = energy level

    based on users choices it will decide what will be suggested,
    then returns a string with the suggested activity
 

    this function separates logic from UI manipulation.
*/
function getActivity(p, t, e) {

    if (p == "1" && e == "low") {
        return "📱 Play mobile games or watch YouTube/tiktok, maybe learn something new even";
    }
    else if (p == "1" && e == "high") {
        return "🏃 Go for a run/walk or workout";
    }
    else if (p == "2" && e == "mid") {
        return "🎲 Play card or a calm board games";
    }
    else if (p == "2" && e == "high") {
        return "🏓 Play ping pong or something that involves high intensity";
    }
    else if (p == "3" && e == "high") {
        return "⚽ Play football or any other sports group activity ";
    }
    else if (t == "kort") {
        return "🧩 Do a quick quiz or mini-game";
    }
    else if (t == "lang" && p != "1") {
        return "🎮 Start a game night together";
    }
    else if (t == "lang") {
        return "🎮 Play a longer story-based game";
    }
    else {
        return "🎯 Try something new!";
    }
}

/*
    displayResult(text, color)
*/
function displayResult(text, color) {
    let resultDiv = document.getElementById("result");

    // Set text content
    resultDiv.innerHTML = text;

    // Change text color dynamically
    resultDiv.style.color = color;

    // fade-in effect
    resultDiv.style.opacity = 0;
    setTimeout(() => {
        resultDiv.style.opacity = 1;
    }, 100);
}