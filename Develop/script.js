// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  $(function () {

    
    //Hour Variable
    var hour9 = $("#hour-9");
    var hour10 = $("#hour-10");
    var hour11 = $("#hour-11");
    var hour12 = $("#hour-12");
    var hour13 = $("#hour-1");
    var hour14 = $("#hour-2");
    var hour15 = $("#hour-3");
    var hour16 = $("#hour-4");
    var hour17 = $("#hour-5");
    
    
      //Main clock
    setInterval(update, 1000) 
    
    update()

    // Past - grey Future = green Present = red
    function update() {
      var time = dayjs().format(`hh:mm:ss`)
      $(`#main-time`).text(time) 
      
    var currentTime = 14
    // var currentTime = dayjs().format(`HH`) 
    console.log(currentTime)
    
    // 9am
    { if (currentTime === 9 && currentTime < 10) 
    {
      hour9.addClass(`present`) }

      else if (currentTime < 9) {
        hour9.addClass(`future`)   
      }

    else {
    hour9.addClass(`past`) } }

    // 10am
    { if (currentTime === 10) 
      {
        hour10.addClass('present') }

        else if (currentTime < 10) {
          hour10.addClass(`future`)
        }

        else {
          hour10.addClass(`past`)
        }
    }
    
    // 11am
    { if (currentTime === 11) 
      {
        hour11.addClass('present') }

        else if (currentTime < 11) {
          hour11.addClass(`future`)
        }

        else {
          hour11.addClass(`past`)
        }
    }
    
    // 12am
    { if (currentTime === 12) 
      {
        hour12.addClass('present') }

        else if (currentTime < 12) {
          hour12.addClass(`future`)
        }

        else {
          hour12.addClass(`past`)
        }
    }
    
    // 1pm
    { if (currentTime === 13) 
      {
        hour13.addClass('present') }

        else if (currentTime < 13) {
          hour13.addClass(`future`)
        }

        else {
          hour13.addClass(`past`)
        }
    }
    
    // 2pm
    { if (currentTime === 14) 
      {
        hour14.addClass('present') }

        else if (currentTime < 14) {
          hour14.addClass(`future`)
        }

        else {
          hour14.addClass(`past`)
        }
    }
    
    // 3pm
    { if (currentTime === 15) 
      {
        hour15.addClass('present') }

        else if (currentTime < 15) {
          hour15.addClass(`future`)
        }

        else {
          hour15.addClass(`past`)
        }
    }


}});


// Make an event listener that ties to save button and updates cards text to current input

// Expand css vairable to apply to all current time slots

// Find way to save current data in local storage

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.



