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
