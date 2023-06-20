const quote = document.querySelector(".quote");
const author = document.querySelector("#author");

const btnGetQuote = document.querySelector("#getQuote");
//Synchroner Weg: Anfrage an Server wird abgeschickt. Andere Teile des Scripts werden schon mal parallel ausgeführt.
//Code im Fetch Block wird ausgeführt wenn Antwort vom Server da ist

//btnGetQuote.addEventListener("click", () => {
// fetch("https://dummy-apis.netlify.app/api/quote")
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//   })
//   .then((data) => {
//     quote.innerHTML = "";
//     quote.appendChild(document.createTextNode(data.quote));

//     author.innerHTML = "";
//     author.appendChild(document.createTextNode(data.author));
//   });
//});

//Schreibweise wenn auf jeden Fall auf Antwort gewartet wird. Script wird gestoppt bis Antwort kommt.
btnGetQuote.addEventListener("click", () => {
  getData();
});
async function getData() {
  const response = await fetch("https://dummy-apis.netlify.app/api/quote");

  if (response.ok) {
    data = await response.json();
    quote.innerHTML = "";
    quote.appendChild(document.createTextNode(data.quote));

    author.innerHTML = "";
    author.appendChild(document.createTextNode(data.author));
  }
}
