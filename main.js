// Add listener to + button and create popup form to create new todo
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
    <input type="date" id="start" class="date-input clickable-button" name="trip-start" value="${year}-${month}-${day}">
  </div>
  <textarea placeholder="Write a note, for example: Going to walk to grandma via the grocery store to pick up some groceries" class="task-descr-input clickable-button"></textarea>
  <input type="submit" value="Save todo" onclick="return false" class="clickable-button submit-new-todo">
</div>
  `
  newElement.innerHTML = content
  bodyTarget.append(newElement)
  document.querySelector('.submit-new-todo').addEventListener('click', (e)=>{
    let target = document.querySelector("div.todo-list-wrapper");
    let titleVal = document.querySelector('.task-name-input').value
    let dateVal = document.querySelector('.date-input').value
    let descrVal = document.querySelector('.task-descr-input').value
    let newElement = document.createElement('article')
    let todoCount = document.querySelectorAll('article.todo').length
    let content = `
    <span class="fa-stack fa-1x green-checkmark clickable-button">
      <i class="fa-regular fa-circle gray-circle fa-stack-1x clickable-button"></i>
    </span>
    <div class="menu-nav">
    <div class="dropdown-container" tabindex="-1">
      <div class="three-dots"></div>
      <div class="dropdown">
        <div class="dropdown-edit">
          <i class="fa-sharp fa-solid fa-pencil edit-pencil"></i>
          <span class="edit-span">Edit</span></div>
        <div class="dropdown-remove">
          <i class="fa-solid fa-trash edit-remove"></i>
          <span class="remove-span">Remove</span></div>
      </div>
    </div>
    </div>
    <h4>${titleVal}</h4>
    <p>${descrVal}</p>
    <p class="date"><i class="fa-solid fa-calendar-days"></i>${dateVal}</p>
    `;
    newElement.innerHTML = content
    newElement.classList.add('todo', 'todo-gray', 'unfinished-task')
    target.append(newElement)
    updateTodoCounter()
    removeListener(newElement)
  })

  //Hides pupup form. Can also be put into the parent so the popup form gets hidden after submitting new tasks instead of only after clicking X
  document.querySelector('.exit-popup').addEventListener('click', (e)=>{
    let popupForm = document.querySelector('div.popup-form-trans')
    popupForm.remove()
    stickyButtonElement.classList.remove('hide-item')

  })
  // Adds listener to drop down 'remove' and deletes the parent article on click
  function removeListener(element){
    let target = element.querySelector('.dropdown-remove')
    target.addEventListener('click',(e)=>{
      element.remove()
    })
  }
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
    You have <span class='underline-bold'>${numToWord(unfinishedTodoCount + overdueTodoCount)}</span> todo's, <span class='underline-bold'>${numToWord(overdueTodoCount)}</span> of them is overdue
    `
  }
  else{
    target.innerHTML = `
    You have <span class='underline-bold'>${numToWord(unfinishedTodoCount)}</span> todo's
    `
  }
}
updateTodoCounter();
document.querySelectorAll('div.dropdown-remove').forEach(item=>{
  item.addEventListener('click',(e)=>{
    item.closest('article').remove()
    updateTodoCounter()
  })
})