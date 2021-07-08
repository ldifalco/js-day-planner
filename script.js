//Setting Todays Date To Show On Jumbotron
function displayDate() {}
var today = moment();
console.log(today);
$("#currentDay").text(today.format("MMM Do, YYYY"));


//set variables on hours to change color based on if it is past present or future.



    


 // Saves entries in planner to local storage   

 
var timeBlock = document.getElementsByClassName(".form-control");
var saveButton = document.querySelectorAll(".save-btn")

function saveLastToDo (){
    toDo ={
    timeBlock: timeBlock.value,
};
localStorage.setItem("toDo", JSON.stringify(toDo));
}

function renderLastToDo() {
    lastToDo = JSON.parse(localStorage.getItem("toDo"));

}

saveButton.forEach(item => {
item.addEventListener("click", function(event) {
event.preventDefault();
saveLastToDo();
renderLastToDo();
});

})




    


