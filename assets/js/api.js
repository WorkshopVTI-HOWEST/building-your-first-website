const API_URL = "https://flask.lukasolivier.be";

async function getQuote() {
    const response = await fetch(`${API_URL}/quote`);
    const data = await response.json();
    return data.quote;
  }
  
  async function addQuote(e) {
    e.preventDefault();
    const $quoteInputElement = document.querySelector("#quote-input");
    const quote = $quoteInputElement.value;
    console.log(quote);
    const response = await fetch(`${API_URL}/quotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quote }),
    });
    const data = await response.json();
  }
  