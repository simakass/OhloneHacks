function myFunk() {
  var type=document.getElementById('class-type').value;
  var time_start= parseInt(document.getElementById('class-time-start').value);
  var time_end=parseInt(document.getElementById('class-time-end').value);

  var days_of_the_week = [];

  if (document.getElementById("monday-checkbox").checked == true) {
    days_of_the_week.push("Monday");
  }

  days_of_the_week.forEach(function(day_of_week, i ) {
    console.log(day_of_week)
    for (var i = time_start; i <= time_end; i++) {
      $("#row-" + i + " >   *." + day_of_week).html(type);
    }
  });
  if (document.getElementById("tuesday-checkbox").checked == true) {
    days_of_the_week.push("Tuesday");
  }

  days_of_the_week.forEach(function(day_of_week, i ) {
    console.log(day_of_week)
    for (var i = time_start; i <= time_end; i++) {
      $("#row-" + i + " >   *." + day_of_week).html(type);
    }
  });
  if (document.getElementById("wednesday-checkbox").checked == true) {
    days_of_the_week.push("Wednesday");
  }

  days_of_the_week.forEach(function(day_of_week, i ) {
    console.log(day_of_week)
    for (var i = time_start; i <= time_end; i++) {
      $("#row-" + i + " >   *." + day_of_week).html(type);
    }
  });
  if (document.getElementById("thursday-checkbox").checked == true) {
    days_of_the_week.push("Thursday");
  }

  days_of_the_week.forEach(function(day_of_week, i ) {
    console.log(day_of_week)
    for (var i = time_start; i <= time_end; i++) {
      $("#row-" + i + " >   *." + day_of_week).html(type);
    }
  });
  if (document.getElementById("friday-checkbox").checked == true) {
    days_of_the_week.push("Friday");
  }

  days_of_the_week.forEach(function(day_of_week, i ) {
    console.log(day_of_week)
    for (var i = time_start; i <= time_end; i++) {
      $("#row-" + i + " >   *." + day_of_week).html(type);
    }
  });
}
