
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

  //Btn
  var btn9 = $(`#btn9`);
  var btn10 = $(`#btn10`);
  var btn11 = $(`#btn11`);
  var btn12 = $(`#btn12`);
  var btn1 = $(`#btn1`);
  var btn2 = $(`#btn2`);
  var btn3 = $(`#btn3`);
  var btn4 = $(`#btn4`);
  var btn5 = $(`#btn5`);

  //Containers
  var h9t = $(`#h9t`);
  var h10t = $(`#h10t`);
  var h11t = $(`#h11t`);
  var h12t = $(`#h12t`);
  var h1t = $(`#h1t`);
  var h2t = $(`#h2t`);
  var h3t = $(`#h3t`);
  var h4t = $(`#h4t`);
  var h5t = $(`#h5t`);

// Save and Display for Hour Tasks

// 9am
  var h9Task = localStorage.getItem("h9Task")
  if (h9Task) {
    document.getElementById("h9t").innerHTML = localStorage.h9Task}

  $(btn9).click(function(){
localStorage.h9Task = (h9t).val()
})
  
// 10am
  var h10Task = localStorage.getItem("h10Task")
  if (h10Task) {
    document.getElementById("h10t").innerHTML = localStorage.h10Task}

  $(btn10).click(function(){
localStorage.h10Task = (h10t).val()
})

// 11am
  var h11Task = localStorage.getItem("h11Task")
  if (h11Task) {
    document.getElementById("h11t").innerHTML = localStorage.h11Task}

  $(btn11).click(function(){
localStorage.h11Task = (h11t).val()
})

// 12am
  var h12Task = localStorage.getItem("h12Task")
  if (h12Task) {
    document.getElementById("h12t").innerHTML = localStorage.h12Task}

  $(btn12).click(function(){
localStorage.h12Task = (h12t).val()
})

// 1am
  var h1Task = localStorage.getItem("h1Task")
  if (h1Task) {
    document.getElementById("h1t").innerHTML = localStorage.h1Task}

  $(btn1).click(function(){
localStorage.h1Task = (h1t).val()
})

// 2am
  var h2Task = localStorage.getItem("h2Task")
  if (h2Task) {
    document.getElementById("h2t").innerHTML = localStorage.h2Task}

  $(btn2).click(function(){
localStorage.h2Task = (h2t).val()
})

// 3am
  var h3Task = localStorage.getItem("h3Task")
  if (h3Task) {
    document.getElementById("h3t").innerHTML = localStorage.h3Task}

  $(btn3).click(function(){
localStorage.h3Task = (h3t).val()
})

// 4am
  var h4Task = localStorage.getItem("h4Task")
  if (h4Task) {
    document.getElementById("h4t").innerHTML = localStorage.h4Task}

  $(btn4).click(function(){
localStorage.h4Task = (h4t).val()
})

// 5am
  var h5Task = localStorage.getItem("h5Task")
  if (h5Task) {
    document.getElementById("h5t").innerHTML = localStorage.h5Task}

  $(btn5).click(function(){
localStorage.h5Task = (h5t).val()
})


  //Main clock & Min Clock
  setInterval(update, 1000) 
  
  update()


  function update() {
    var time = dayjs().format(`ddd MMM D`)
    var minTime = dayjs().format(`h:mm:ss`)
    $(`#main-time`).text(time) 
    $(`#min-time`).text(minTime) 

  // Color Updaters
  var currentTime = dayjs().format(`HH`) 
  console.log(currentTime)
  
  // 9am
  { if (currentTime === "9") 
  {
    hour9.addClass(`present`) }

    else if (currentTime < 9) {
      hour9.addClass(`future`)   
    }

  else {
  hour9.addClass(`past`) } }

  // 10am
  { if (currentTime === "10") 
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
  { if (currentTime === "11") 
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
  { if (currentTime === "12") 
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
  { if (currentTime === "13") 
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
  { if (currentTime === "14") 
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
  { if (currentTime === "15") 
    {
      hour15.addClass('present') }

      else if (currentTime < 15) {
        hour15.addClass(`future`)
      }

      else {
        hour15.addClass(`past`)
      }
  }

  // 4pm
  { if (currentTime === "16") 
    {
      hour16.addClass('present') }

      else if (currentTime < 16) {
        hour16.addClass(`future`)
      }

      else {
        hour16.addClass(`past`)
      }
  }

  // 5pm
  { if (currentTime === "17") 
    {
      hour17.addClass('present') }

      else if (currentTime < 17) {
        hour17.addClass(`future`)
      }

      else {
        hour17.addClass(`past`)
      }
  }
}});
