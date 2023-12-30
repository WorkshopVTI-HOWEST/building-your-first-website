setQuote();

document.querySelector("#add-quote").addEventListener("click", addQuote);

async function setQuote() {
  const $quoteElement = document.querySelector("#quote-api");
  $quoteElement.innerHTML = await getQuote();
}