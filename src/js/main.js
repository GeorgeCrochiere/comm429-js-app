document.querySelector("button").addEventListener("click", () => {
    // Disable refresh of page
    event.preventDefault();
    // Get category
    const category = document.querySelector("select").value;
    let newQuote;
    if (category == -1) {
        const rand = Math.floor(Math.random() * data.length);
        newQuote = quoteFactory(data[rand]);
    } else {
        const filteredData = data.filter((quote) => quote.category == category);
        const rand = Math.floor(Math.random() * filteredData.length);
        newQuote = quoteFactory(filteredData[rand]);
    }

    document.querySelector("section").insertBefore(newQuote, document.querySelector("section").firstChild);
});

document.querySelectorAll("button")[1].addEventListener("click", () => {
    // Disable normal event
    event.preventDefault();
    // Remove all quotes
    document.querySelector("section").innerHTML = "";
});

const quoteFactory = (quoteObject) => {
    const blockQuote = document.createElement("blockquote");
    blockQuote.innerHTML =
        `<p>"${quoteObject.quote}"</p>
    <div class="desc">
        <cite>-${quoteObject.author}</cite>
        <p>${quoteObject.category}</p>
    </div>`;
    return blockQuote;
}
