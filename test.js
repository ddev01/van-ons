const buttonElement = document.querySelector('.butt')
buttonElement.addEventListener('click', (e)=>{
  const dateInput = document.querySelector('.date-input').value
  const temp = dateInput.split('-')
  const dateWordList = ['January', 'February', 'March']
  console.log(temp)
  let year = temp[0]
  let month = temp[1]
  let day = temp[2]
  if (day[0] === '0'){
    console.log('yess')
    var dayStrip = day[1]
    console.log(dayStrip)
  }
  console.log(dateWordList[dayStrip - 1])
  // console.log(temp[0][0])
  // console.log(dateWordList[parseInt(temp[0])])
  // console.log(dateWordList[1])
})