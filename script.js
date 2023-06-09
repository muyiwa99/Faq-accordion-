// Putting the box clases and Hidden classes into variables.
const btn = document.getElementsByClassName("box");
const answer = document.getElementsByClassName("hidden");
const arrow = document.getElementsByClassName("img");

// Using a loop with an event listener to diplay the hidden content when clicked
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    // Implementing an if statement which closes the previous box when another is clicked
    for (let j = 0; j < answer.length; j++) {
      if (i == j) {
        answer[j].style.display =
          answer[j].style.display === "block" ? "none" : "block";
      } else {
        answer[j].style.display = "none";
      }
    }
  });
}
