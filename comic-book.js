// open login-registration form
$("#loginRegistrationButton").click(function () {
  console.log("button clicked");
  $(".login-registration-form-wrapper").css({ display: "flex" });
  $(".body-cover").css({ display: "block" });
  $("body").css({ overflow: "hidden" });
});
// close div on body click
$(document).click(function (e) {
  let loginRegistrationButton = $("#loginRegistrationButton");
  let container = $(".login-registration-form-wrapper");
  if (container.is(e.target)) {
    $(".login-registration-form-wrapper").css({ display: "none" });
    $(".body-cover").css({ display: "none" });
    $("body").css({ overflow: "unset" });
    console.log(e.target);
  }
});

// login register tabs switch
$(".login").click(function () {
  $(".login-frame").css({ display: "grid" });
  $(".registration-frame").css({ display: "none" });
});

$(".register").click(function () {
  $(".login-frame").css({ display: "none" });
  $(".registration-frame").css({ display: "block" });
});

const scrollUp = document.getElementById("scrollUp");
console.log(scrollUp);
const scrollDown = document.getElementById("scrollDown");
const sideListCards = document.getElementsByClassName("side-top-list-card");
let cardsLength = sideListCards.length;
let k = 0;
let movePercentage = 100; // percentage equal to the width of each item plus the margin
let itemsPerSliderLength = movePercentage * 8; //14 is the number of items i want inside the slider
let max = movePercentage * cardsLength - itemsPerSliderLength; //max value of l so that it doesnt keep on moving after the last item has appeared
scrollDown.addEventListener("click", function () {
  if (sideListCards.length > 8) {
    //14 is the number of items inside the slider. if the length of the array is less than 14 the slider should not move.
    k = k + movePercentage;
    if (k > max) {
      k = k - movePercentage;
    }
    for (const i of sideListCards) {
      i.style.top = "-" + k + "%";
    }
    console.log(k);
    console.log(max);
  }
});
scrollUp.addEventListener("click", function () {
  if (k > 0) {
    k = k - movePercentage;
  } else if (k < 0) {
    k = 0;
  }
  for (const i of sideListCards) {
    i.style.top = "-" + k + "%";
  }
});
