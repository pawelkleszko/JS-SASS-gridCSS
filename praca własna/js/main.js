const addElementForm = document.querySelector('.form--add');
const searchElementForm = document.querySelector('.form--search');
const addedContent = document.querySelector('.content');
const searchResult = document.querySelector('show-info');


const addElement = (e, node, text, attr, value) => {
    e.preventDefault();
    const element = document.createElement(node)
    if (text) {
        element.textContent = text
    }
    if (attr) {
        element.setAttribute(attr, value)
    }
    addedContent.appendChild(element)
}

// const showInfo = (elements) => {
//     console.log(elements);
// }

addElementForm.addEventListener('submit', (e) => addElement(e, addElementForm.elements.node.value, addElementForm.elements.text.value, addElementForm.elements.attr.value, addElementForm.elements.value.value, ));
// searchElementForm.addEventListener('submit', (e) => searchElement(e, searchElementForm.elements['search'].value));