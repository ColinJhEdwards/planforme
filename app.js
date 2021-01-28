$(document).ready(function () {
  //Selectors
  const saveBtn = document.querySelectorAll(".saveBtn");
  const currentDay = moment().format("MMMM Do YYYY, h:mm:ss a");
  const textArea = document.querySelectorAll("#todo");

  console.log(currentDay);
  console.log(textArea);

  $(".saveBtn").on("click", function () {
    const time = $(this).attr("id");
    const value = $(this).siblings("textarea").val();
    console.log(time, value);
    localStorage.setItem(time, value);
  });
  //Functions

  function getLocalStorage() {
    for (let i = 9; i <= 20; i++) {
      $(`#${i}`).siblings("textarea").val(localStorage.getItem(i));
    }
  }

  function timeblockColor() {
    const currentHour = moment().hours();
    console.log(`CurrentHour: ${currentHour}`);
    $(".timeblock").each(function () {
      const rowHour = parseInt($(this).attr("data-time"));
      if (rowHour < currentHour) {
        $(this).addClass("past");
      } else if (rowHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }

  var updateDate = function () {
    document.getElementById("currentDay").innerHTML = moment().format(
      "MMMM Do YYYY, h:mm:ss a"
    );
  };
  setInterval(updateDate, 1000);
  updateDate();
  getLocalStorage();
  timeblockColor();
});

// To Do

/* 
-Have it so the current date&time is displayed when page loads
-Create timeblocks for each hour of the day
-Make it so timeblocks can be typed in and whatever is typed is saved
-Color code timeblocks for current time
-
*/
