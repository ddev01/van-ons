const stickyButtonElement = document.querySelector("i.sticky-button")
stickyButtonElement.addEventListener("click", (e)=>{
  let bodyTarget = document.querySelector('body')
  stickyButtonElement.classList.add('hide-item')
  let newElement = document.createElement('div')
  newElement.classList.add('popup-form-trans')
  let date = new Date()
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1; 
  const year = date.getUTCFullYear();
  content = `
  <div class="popup-form">
  <i class="fa-solid fa-xmark exit-popup clickable-button"></i>
  <h1 class="todo-h1">Add new todo</h1>
  <input type="text" placeholder="What are you going to do?" class="task-name-input clickable-button">
  <div class="date-div">
    <h1>Date</h1>
    <input type="date" id="start" class="date-input" name="trip-start" value="${year}-${month}-${day}">
  </div>
  <input type="text" placeholder="What are you going to do?" class="task-descr-input clickable-button">
  <input type="submit" value="Save todo" onclick="return false" class="clickable-button submit-new-todo">
</div>
  `
  newElement.innerHTML = content
  bodyTarget.append(newElement)
  document.querySelector('.submit-new-todo').addEventListener('click', (e)=>{
    let target = document.querySelector("div.todo-list-wrapper");
    let titleVal = document.querySelector('.task-name-input').value
    let dateVal = document.querySelector('.date-input').value
    console.log(dateVal)
    let descrVal = document.querySelector('.task-descr-input').value
    let newElement = document.createElement('article')
    let content = `
    <span class="fa-stack fa-1x green-checkmark clickable-button">
      <i class="fa-regular fa-circle gray-circle fa-stack-1x clickable-button"></i>
    </span>
    <h4>${titleVal}</h4>
    <p>${descrVal}</p>
    <p>${dateVal}
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