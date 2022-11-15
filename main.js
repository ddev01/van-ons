// const stickyElement = document.querySelector('div.sticky-button-div');
// const todolistBody = document.querySelector('div.todobody');

// stickyElement.addEventListener('click', function(){
//     console.log('clicked')
// });
// function addInputForm(){
//     let todolistBody = document.querySelector('div.todobody');
// }
const submitButton = document.querySelector("[type=submit]")
submitButton.addEventListener("click", (e) => {
    let titleVal = document.querySelector('input#ttitle').value
    let descVal = document.querySelector('input#tdesc').value
    
    //if enter button is clicked and inputed value length is greated than 0.
    if (titleVal.length > 0) {
        const target = document.querySelector("div.todobody");
        const addElement = document.createElement("article");
        const elementcontent = `
        <i class="fa-regular fa-circle gray-check"></i>
        <h4>${titleVal}</h4>
        <p>${descVal}</p>
        `;
        addElement.innerHTML = elementcontent;
        addElement.classList.add('todo')
        target.append(addElement);
    }})