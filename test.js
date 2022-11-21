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
  const monthNow = dateNow.getUTCMonth(); 
  const yearNow = dateNow.getUTCFullYear();
  console.log(new Date(yearNow, monthNow, dayNow))
  console.log(new Date(year, monthStrip, dayStrip))
  // console.log(temp[0][0])
  // console.log(dateWordList[parseInt(temp[0])])
  // console.log(dateWordList[1])
})