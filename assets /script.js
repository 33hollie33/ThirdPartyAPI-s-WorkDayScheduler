var now = dayjs();
// used day js for the scheduler
$(function () {
console.log(now.format)

// made variables 

  let currentDay = document.getElementById("currentDay");

  let ending = getEnding();
  let dayOfWeek = getDayOfWeek();
  let month = getMonth();

  console.log(now.format("dddd, MMMM D"));
  currentDay.innerHTML = (now.format("dddd, MMMM Do YYYY"));  

  createHourBlocks();
});


function createHourBlocks() {

  // created a for loop

  for (let hour = 0; hour <= 24; hour++) {
    let blockWrap = $('<div>');
    blockWrap.attr('id', "hour-" + hour)
    blockWrap.addClass("row time-block");
    if (now.hour() == hour) {
      blockWrap.addClass("present");
    }
    else if (now.hour() > hour) {
      blockWrap.addClass("past");
    }
    else {
      blockWrap.addClass("future");
    }

    let hourWrap = $('<div>');
    hourWrap.addClass("col-2 col-md-1 hour text-center py-3")

    let timeOfDay = "";
    if (hour >= 0 && hour <= 12) {
      timeOfDay = "AM";
    }
    else {
      timeOfDay = "PM";
    }

    hourWrap.text(hour + timeOfDay);

    let textareaWrap = $('<textarea>');
    textareaWrap.addClass("col-8 col-md-10 description");

    let taskValue = localStorage.getItem(blockWrap.attr('id'));
    if (taskValue != undefined) {
      textareaWrap.val(taskValue);
    }

    textareaWrap.attr('rows', "3");

    let buttonWrap = $("<button>");
    buttonWrap.addClass("btn saveBtn col-2 col-md-1")

    buttonWrap.on('click', function () {
      let id = this.parentElement.id;
      let userTask = textareaWrap.val();
      localStorage.setItem(id, userTask);
      console.log(localStorage);
    });

    buttonWrap.append('<i class="fas fa-save" aria-hidden="true"></i>');
    blockWrap.append(hourWrap);
    blockWrap.append(textareaWrap);
    blockWrap.append(buttonWrap);

    $('#container').append(blockWrap);
  }

}

// created a function for the week 
function getDayOfWeek() {
  if (now.day() == 0) {
    return "Sunday";
  } else if (now.day() == 1) {
    return "Monday";
  }
  else if (now.day() == 2) {
    return "Tuesday";
  }
  else if (now.day() == 3) {
    return "Wednesday";
  }
  else if (now.day() == 4) {
    return "Thursday";
  }
  else if (now.day() == 5) {
    return "Friday";
  }
  else if (now.day() == 6) {
    return "Saturday";
  }
}
// created a function for the month
function getMonth() {
  if (now.month() == 0) {
    return "January";
  } else if (now.month() == 1) {
    return "February";
  }
  else if (now.month() == 2) {
    return "March";
  }
  else if (now.month() == 3) {
    return "April";
  }
  else if (now.month() == 4) {
    return "May";
  }
  else if (now.month() == 5) {
    return "June";
  }
  else if (now.month() == 6) {
    return "July";
  }
  else if (now.month() == 7) {
    return "August";
  }
  else if (now.month() == 8) {
    return "September";
  }
  else if (now.month() == 9) {
    return "October";
  }
  else if (now.month() == 10) {
    return "November";
  }
  else if (now.month() == 11) {
    return "December";
  }
}


function getEnding() {
  if (now.date() == 1 || now.date() == 31) {
    return "-st";
  } else if (now.date() == 2) {
    return "-nd";
  }
  else if (now.date() == 3) {
    return "-rd";
  } else {
    return "-th";
  }
}
