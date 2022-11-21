const buttonElement = document.querySelector('.butt')
buttonElement.addEventListener('click', (e)=>{
  const dateInput = document.querySelector('.date-input').value
  const temp = dateInput.split('-')
  const dateWordList = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December']
  console.log(temp)
  let year = temp[0]
  let month = temp[1]
  let day = temp[2]
  if (day[0] === '0'){
    console.log('day yes')
    var dayStrip = day[1]
    console.log(dayStrip)
  }
  if (month[0] === '0'){
    console.log('month yes')
    var monthStrip = month[1]
    console.log(dateWordList[monthStrip - 1])
  }
  else{
    console.log(dateWordList[month - 1])
  }
  let dateNow = new Date()
  const dayNow = dateNow.getUTCDate();
  const monthNow = dateNow.getUTCMonth()+1; 
  const yearNow = dateNow.getUTCFullYear();
  console.log(yearNow, monthNow, dayNow)
  const first = new Date(yearNow, monthNow, dayNow)
  console.log(year, month, day)
  const second = new Date(year, month+1, day)
  console.log(first)
  console.log(second)
  difference = first.getTime() - second.getTime()
  console.log(difference)
  console.log(difference / (1000 * 60 * 60 * 24)); // 41
  // console.log(temp[0][0])
  // console.log(dateWordList[parseInt(temp[0])])
  // console.log(dateWordList[1])
})