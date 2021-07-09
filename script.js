//Setting Todays Date To Show On Jumbotron
function displayDate() {
var today = moment();
// DOnt forget this again MMM Do, YYYY
$("#currentDay").text(today.format("MMM Do, YYYY"));
currentTime = today.format("H");
//set variables on hours to change color based on if it is past present or future.
	if (currentTime == 09){
		document.getElementById("09").className='present';
	}
	if (currentTime == 10){
		document.getElementById("10").className='present';
	}
	if (currentTime == 11){
		document.getElementById("11").className='present';
	}
	if (currentTime == 12){
		document.getElementById("12").className='present';
	}

	if (currentTime == 13){
		document.getElementById("13").className='present';
	}
	if (currentTime == 14){
		document.getElementById("14").className='present';
	}
	if (currentTime == 15){
		document.getElementById("15").className='present';
	}
	if (currentTime == 16){
		document.getElementById("16").className='present';
	}
	if (currentTime == 17){
		document.getElementById("17").className='present';
	}
	if (currentTime > 09){
		document.getElementById("09").className='future';
	}
	if (currentTime > 10){
		document.getElementById("10").className='future';
	}
	if (currentTime > 11){
		document.getElementById("11").className='future';
	}
	if (currentTime > 12){
		document.getElementById("12").className='future';
	}

	if (currentTime > 13){
		document.getElementById("13").className='future';
	}
	if (currentTime > 14){
		document.getElementById("14").className='future';
	}
	if (currentTime > 15){
		document.getElementById("15").className='future';
	}
	if (currentTime > 16){
		document.getElementById("16").className='future';
	}
	if (currentTime > 17){
		document.getElementById("17").className='future';
	}
	if (currentTime < 09){
		document.getElementById("09").className='past';
	}
	if (currentTime < 10){
		document.getElementById("10").className='past';
	}
	if (currentTime < 11){
		document.getElementById("11").className='past';
	}
	if (currentTime < 12){
		document.getElementById("12").className='past';
	}

	if (currentTime < 13){
		document.getElementById("13").className='past';
	}
	if (currentTime < 14){
		document.getElementById("14").className='past';
	}
	if (currentTime < 15){
		document.getElementById("15").className='past';
	}
	if (currentTime < 16){
		document.getElementById("16").className='past';
	}
	if (currentTime < 17){
		document.getElementById("17").className='past';
	}
	

}


displayDate();





// Saves entries in planner to local storage   

 
var timeBlock = document.getElementsByClassName(".form-control");
var saveButton = document.getElementById("button-addon2");


function saveLastTodo (){

	window.localStorage.setItem('Todo: ', document.getElementById("needTodo").value);
	
		       
	
console.log(window.localStorage.getItem('Todo: '));
}




    


