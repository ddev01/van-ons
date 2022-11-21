// const stickyElement = document.querySelector('div.sticky-button-div');
// const todolistBody = document.querySelector('div.todobody');

// stickyElement.addEventListener('click', function(){
//   console.log('clicked')
// });
// function addInputForm(){
//   let todolistBody = document.querySelector('div.todobody');
// }
// const submitButton = document.querySelector("[type=submit]")
// submitButton.addEventListener("click", (e) => {
//   console.log(e)
//   let titleVal = document.querySelector('input#ttitle').value
//   let descVal = document.querySelector('input#tdesc').value
  
//   //if enter button is clicked and inputed value length is greated than 0.
//   if (titleVal.length > 0) {
//     const target = document.querySelector("div.todo-list-wrapper");
//     const addElement = document.createElement("article");
//     const elementcontent = `
//     <i class="fa-regular fa-circle gray-check"></i>
//     <h4>${titleVal}</h4>
//     <p>${descVal}</p>
//     `;
//     addElement.innerHTML = elementcontent;
//     addElement.classList.add('todo')
//     target.append(addElement);
//     document.querySelector('input#ttitle').value = ''
//     document.querySelector('input#tdesc').value = ''
//   }})
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
    newElement.classList.add('todo', 'unfinished-task')
    target.append(newElement)
    updateTodoCounter()
  })
  //The following code can also be put into the parent so the popup form gets hidden after submitting new tasks instead of only after clicking X
  document.querySelector('.exit-popup').addEventListener('click', (e)=>{
    let popupForm = document.querySelector('div.popup-form-trans')
    popupForm.remove()
    stickyButtonElement.classList.remove('hide-item')

  })
})
//Turns ints into words E.G. 5 > Five, 21 > Twenty one
function numToWord(num){
  var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
              'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  var numString = num.toString();
  if (num < 0) throw new Error('Negative numbers are not supported.');
  if (num === 0) return 'zero';
  //the case of 1 - 20
  if (num < 20) {
    return ones[num];
  }
  if (numString.length === 2) {
    return tens[numString[0]] + ' ' + ones[numString[1]];
  }
}
//changes <p class="you-have-todos"> placeholder innerHTML to display amount of todo items and possible overdue todo items
function updateTodoCounter(){
  const target = document.querySelector('p.you-have-todos')
  const unfinishedTodoCount = document.querySelectorAll('article.unfinished-task').length
  const overdueTodoCount = document.querySelectorAll('article.overdue-task').length
  //Conditional statement so we don't add unnecessary overdue tasks sentence when there are none
  if (overdueTodoCount >= 1){
    target.innerHTML = `
    You have <span class='underline-bold'>${numToWord(unfinishedTodoCount)}</span> todo's, <span class='underline-bold'>${numToWord(overdueTodoCount)}</span> of them is overdue
    `
  }
  else{
    target.innerHTML = `
    You have <span class='underline-bold'>${numToWord(unfinishedTodoCount)}</span> todo's
    `
  }
}
updateTodoCounter();