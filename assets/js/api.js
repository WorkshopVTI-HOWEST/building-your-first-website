async function getQuote() {
    const response = await fetch("http://localhost:5000/quote");
    const data = await response.json();
    return data.quote;
  }
  
  async function addQuote(e) {
    e.preventDefault();
    const $quoteInputElement = document.querySelector("#quote-input");
    const quote = $quoteInputElement.value;
    console.log(quote);
    const response = await fetch("http://localhost:5000/quotes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quote }),
    });
    const data = await response.json();
  }
  