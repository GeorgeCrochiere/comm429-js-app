testJS();

function testJS() {
    const paragraphElement = document.createElement('p');
    paragraphElement.textContent = String('If this element is present, Hello World from JavaScript!');
    paragraphElement.style.color = 'blue';

    const jsSection = document.getElementById('jsContentTest');
    jsSection.appendChild(paragraphElement);
}
