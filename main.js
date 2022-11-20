// const stickyElement = document.querySelector('div.sticky-button-div');
// const todolistBody = document.querySelector('div.todobody');

// stickyElement.addEventListener('click', function(){
//     console.log('clicked')
// });
// function addInputForm(){
//     let todolistBody = document.querySelector('div.todobody');
// }
// const submitButton = document.querySelector("[type=submit]")
// submitButton.addEventListener("click", (e) => {
//     console.log(e)
//     let titleVal = document.querySelector('input#ttitle').value
//     let descVal = document.querySelector('input#tdesc').value
    
//     //if enter button is clicked and inputed value length is greated than 0.
//     if (titleVal.length > 0) {
//         const target = document.querySelector("div.todo-list-wrapper");
//         const addElement = document.createElement("article");
//         const elementcontent = `
//         <i class="fa-regular fa-circle gray-check"></i>
//         <h4>${titleVal}</h4>
//         <p>${descVal}</p>
//         `;
//         addElement.innerHTML = elementcontent;
//         addElement.classList.add('todo')
//         target.append(addElement);
//         document.querySelector('input#ttitle').value = ''
//         document.querySelector('input#tdesc').value = ''
//     }})
const stickyButtonElement = document.querySelector("i.sticky-button")
stickyButtonElement.addEventListener("click", (e)=>{
    let bodyTarget = document.querySelector('body')
    stickyButtonElement.classList.add('hide-item')
    let newElement = document.createElement('div')
    newElement.classList.add('popup-form-trans')
    content = `
    <div class="popup-form">
        <i class="fa-solid fa-xmark exit-popup clickable-button"></i>
        <h1>Add new todo</h1>
        <input type="text" placeholder="What are you going to do?" class="task-name-input clickable-button">
        <input type="text" placeholder="Temporary placeholder" class="task-name-input-2 clickable-button">
        <input type="text" placeholder="What are you going to do?" class="task-descr-input clickable-button">
        <input type="submit" value="Save todo" onclick="return false" class="clickable-button submit-new-todo">
    </div>
    `
    newElement.innerHTML = content
    bodyTarget.append(newElement)
    document.querySelector('.submit-new-todo').addEventListener('click', (e)=>{
        let target = document.querySelector("div.todo-list-wrapper");
        let titleVal = document.querySelector('.task-name-input').value
        let dateVal = document.querySelector('.task-name-input-2').value
        let descrVal = document.querySelector('.task-descr-input').value
        let newElement = document.createElement('article')
        let content = `
        <i class="fa-regular fa-circle gray-check clickable-button"></i>
        <h4>${titleVal}</h4>
        <p>${descrVal}</p>
        `;
        newElement.innerHTML = content
        newElement.classList.add('todo')
        target.append(newElement)
    })
    document.querySelector('.exit-popup').addEventListener('click', (e)=>{
        let popupForm = document.querySelector('div.popup-form-trans')
        popupForm.remove()
        stickyButtonElement.classList.remove('hide-item')

    })
})
