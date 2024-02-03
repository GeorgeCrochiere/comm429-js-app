document.querySelector("button").addEventListener(() => {
    // Get category
    const category = document.querySelector("select").value;
    let newQuote;
    if (category === -1) {
        const rand = Math.floor(Math.random() * data.length);
        newQuote = quoteFactory(data[rand]);
    } else {
        const filteredData = data.filter((quote) => quote.category == category);
        const rand = Math.floor(Math.random() * filteredData.length);
        newQuote = quoteFactory(filteredData[rand]);
    }

    document.querySelector("section").appendChild(newQuote);
});

function quoteFactory(quoteObject) {

}