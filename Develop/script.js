// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
 
$(".saveBtn").on('click', function() {
  //Made variables for the timeBlock and UserInput so I call acurratley log info into local storage
  // this code involves transversing the DOM in order to get info from the correct place
var timeBlock = $(this).parent().attr("id");
var UserInput = $(this).siblings(".description").val();
//code to input info into local storage from a button click in that specific time
localStorage.setItem(timeBlock, UserInput);
});
  function TimeBlockClassByHr () {
  //Created a variable that will have dayjs calculate the current time by the hour
var currentHour = dayjs().hour()
// Created a jQuery function where it will go through each function every hour
$('.timeBlock').each(function() {
  // created varaiable BlockHour and used parseInt
  var BlockHour = parseInt($(this));
// Used jQuery to remove classes so the timeblocks are netural and will always change based on current time
$(this).removeClass("past, present, future");
// If statement to have the timeblocks react to Time by dayjs() and the variable we created previously
//Using the addClass jQuerey code
if (BlockHour < currentHour) {
  $(this).addClass('past');
} else if (BlockHour === currentHour){
  $(this).addClass('present');
} else {
  $(this).addClass('future');
}
}
)}
TimeBlockClassByHr();
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  //created a variable called 'now' that uses dayjs to read the time in the format
  //of Day, Month and date
  var now = dayjs().format('dddd, MMMM D');
  $("#currentDay").text(now);
  //I then made a function that called jQuery to affect the id "currentDay" which is located in the header
  //I then made that paste text in that selected area of the variable now which displays the current day from dayjs
});
