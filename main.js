let button = document.querySelector("main > div > button");
if (button) {
  button.addEventListener("click", function () {
    const rating = document.querySelector("input[type = 'radio']:checked");
    if (rating) {
      localStorage.setItem("feedbackRating", rating.value);
      window.location.href = "submit.html";
    } else {
      alert("Please Select a Rating.");
    }
  });
  console.log(localStorage.getItem("feedbackRating"));
}

const rate = document.querySelector("main > div > p.rate > span");
console.log(rate);
if (rate) {
  const r = localStorage.getItem("feedbackRating");
  if (r) {
    rate.innerHTML = `${r}`;
  } else {
    rate.textContent = `No Rating Provided`;
  }
}
