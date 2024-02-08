let dataCategories = [];
data.forEach((entry) => {
    dataCategories.push(entry.category);
});
dataCategories = dataCategories.filter(unique);

document.querySelector("h2").innerText = `Select random quotes out of a list of ${data.length} options!`;

setSelector();

// Filter function for unique values
function unique(value, index, array) {
    return array.indexOf(value) === index
}

function setSelector() {
    const selector = document.querySelector("select");

    const defaultOption = document.createElement("option");
    defaultOption.value = -1;
    defaultOption.text = "Random";
    selector.appendChild(defaultOption);

    dataCategories.forEach((category) => {
        const option = document.createElement("option");
        option.value = category;
        option.text = category;
        selector.appendChild(option);
    });
};

