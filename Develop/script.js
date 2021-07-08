//Setting Todays Date To Show On Jumbotron
var today = moment();
console.log(today);
$("#currentDay").text(today.format("MMM Do, YYYY"));

//var hour = moment();
//console.log(hour);
//$(".hour").text(hour.format("HH"));
//set variables on hours to change color based on if it is past present or future.



    


 // Saves entries in planner to local storage   

 
var timeBlock = document.getElementsByClassName("form-control");
var saveButton = document.getElementsByClassName("save-btn");

function saveLastToDo (){
    toDo ={
    timeBlock: timeBlock.value,
};
localStorage.setItem("toDo", JSON.stringify(toDo));
}

function renderLastToDo() {
    lastToDo = JSON.parse(localstorage.getItem("toDo"));

}

saveButton.addEventListener("click", function(event) {
event.preventDefault();
saveLastToDo();
renderLastToDo();
});

function init(){

    renderLastToDo();
}
init();


//     var toDo = {
//         stuffToDo: timeBlockInput.value.trim(),
//     };

//     localStorage.setItem("to-do", JSON.stringify(toDo));

// },

// function renderLastToDo() {
//     lastToDo = JSON.parse(localStorage.getItem("to-do"));
//     if (lastToDo !== null){
//     document.    

//     }

// },







