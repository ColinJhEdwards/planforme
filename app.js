//Selectors
const saveBtn = document.querySelector(".saveBtn");
const currentDay = moment().format("MMMM Do YYYY, h:mm:ss a");
const textArea = document.querySelectorAll("#todo");
let currentHour = new Date().getHours();
console.log(currentDay);
console.log(textArea);

//Event Listeners
saveBtn.addEventListener("click", function () {
  console.log("You did it");
});

//Functions

var updateDate = function () {
  document.getElementById("currentDay").innerHTML = currentDay;
};
setInterval(updateDate, 1000);
updateDate();

function timeblockColor() {
  const timeBlock = document.querySelectorAll(".timeblock");

  for (let i = 0; i < timeBlock.length; i++) {
    const timeValue = timeBlock[i].dataset.time;
    if (timeValue === "8") {
      if (currentDay.includes("8:")) {
        textArea[11].classList.add("present");
      }
    }
  }
}
setInterval(timeblockColor, 1000);
timeblockColor();

// To Do

/* 
-Have it so the current date&time is displayed when page loads
-Create timeblocks for each hour of the day
-Make it so timeblocks can be typed in and whatever is typed is saved
-Color code timeblocks for current time
-
*/
