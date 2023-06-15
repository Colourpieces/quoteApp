const quote = document.querySelector(".quote");
const author = document.querySelector("#author");

const btnGetQuote = document.querySelector("#getQuote");
btnGetQuote.addEventListener("click", () => {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      quote.innerHTML = "";
      quote.appendChild(document.createTextNode(data.quote));

      author.innerHTML = "";
      author.appendChild(document.createTextNode(data.author));
    });
});
