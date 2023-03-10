const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "871437c4e9mshc2391cef2da6a18p1465a7jsnc6aad1416602",
    "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  },
};

function fetchQuote() {
  fetch("https://quotes15.p.rapidapi.com/quotes/random/", options)
    .then((response) => response.json())
    .then((response) => {
      //dom
      document.querySelector(".quote").textContent = response.content;
      console.log(response);
      console.log(response.content);
    })
    .catch((err) => console.error(err));
}
setInterval(() => {
  fetchQuote();
}, 10000);

function fetchRecipes() {
  fetch(
    "https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup",
    options
  )
    .then((response) => response.json())

    .then((response) => {
      //dom
      document.querySelector(".recipe").textContent = response.content;
      console.log(response);
      console.log(response.content);
    })

    .catch((err) => console.error(err));
}

addEventListener(
  "submit",
  (recipes) => {
    fetchRecipes();
  },
  SubmitEvent
);
