//Selectors
const currentDay = document.querySelector("#currentDay");

//Event Listeners

//Functions

var updateDate = function () {
  document.getElementById("currentDay").innerHTML = moment().format(
    "MMMM Do YYYY, h:mm:ss a"
  );
};
setInterval(updateDate, 1000);
updateDate();

// To Do

/* 
-Have it so the current date&time is displayed when page loads
-Create timeblocks for each hour of the day
-Make it so timeblocks can be typed in and whatever is typed is saved
-Color code timeblocks for current time
-
*/
