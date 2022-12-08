//counter up animation in books number
let options = {
  root: null,
  rootMargin: "0px 0px -650px 0px",
  threshold: 1,
};
let observer = new IntersectionObserver(counterOnPort, options);
const countersArray = document.querySelectorAll(".counter-container");
countersArray.forEach((counter) => {
  observer.observe(counter);
});

function counterOnPort(entries, ob) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.documentElement.style.setProperty("--hidden", "none");
      console.log("intersecting");
      entry.target.firstElementChild.innerHTML = "0";
      const updateCounter = () => {
        let number =
          +entry.target.firstElementChild.getAttribute("data-target");
        let increment = 50;
        let c = +entry.target.firstElementChild.innerHTML;

        if (c < number) {
          entry.target.firstElementChild.innerHTML = c + increment;
          setTimeout(updateCounter, 10);
        } else if (c > number) {
          entry.target.firstElementChild.innerHTML = number;
        }
      };
      updateCounter();

      observer.unobserve(entry.target);
    }
  });
}

//top list slider
const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");
const cards = document.getElementsByClassName("top-list-card");
let cardsLength = cards.length;
let l = 0;
let movePercentage = 7.2; // percentage equal to the width of each item plus the margin
let itemsPerSliderLength = movePercentage * 14; //14 is the number of items i want inside the slider
let max = movePercentage * cardsLength - itemsPerSliderLength; //max value of l so that it doesnt keep on moving after the last item has appeared
nextButton.addEventListener("click", function () {
  if (cards.length > 14) {
    //14 is the number of items inside the slider. if the length of the array is less than 14 the slider should not move.
    l = l + movePercentage;
    if (l > max) {
      l = l - movePercentage;
    }
    for (const i of cards) {
      i.style.left = "-" + l + "%";
    }
    console.log(l);
  }
});
prevButton.addEventListener("click", function () {
  if (l > 0) {
    l = l - movePercentage;
  } else if (l < 0) {
    l = 0;
  }
  for (const i of cards) {
    i.style.left = "-" + l + "%";
  }
});

// //superhero cards on load flip
const optionSuperhero = {
  root: null,
  rootMargin: "0px",
  threshold: 0.8,
};

let superheroCards = document.getElementsByClassName("card");
let i = 0;
let j = 0;

let aboutSection = document.querySelector(".about");

let observerSuperhero = new IntersectionObserver(
  superHeroIntersects,
  optionSuperhero
);

observerSuperhero.observe(aboutSection);

function superHeroIntersects(entries, ob) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const autoRotate = () => {
        setTimeout(function () {
          superheroCards[i].style.transform = "rotateY(180deg)";
          i++;
          if (i < superheroCards.length) {
            autoRotate();
            if (i == superheroCards.length - 1) {
              console.log(i);
              const rotateBack = () => {
                setTimeout(function () {
                  superheroCards[j].style.transform = "rotateY(0deg)";
                  j++;
                  if (j < superheroCards.length) {
                    rotateBack();
                  }
                }, 50);
              };
              rotateBack();
            }
          }
        }, 50);
      };
      autoRotate();
      let i = 0;
      let j = 0;
    }
  });
}

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
