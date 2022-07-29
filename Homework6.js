//Homework 6


//Task 1

function myTimeout(cb, interval) {
	const inter = setInterval(() => {
  	cb()
   	clearInterval(inter, interval)
  }, interval)
}

//Task 2


function squarePromise(prom) {
	return prom.then((data) => {
  	if(isNaN(Number(data)) !== true) {
    	return data**2
    }
    return `Cannot convert ${data} to a number`
  }).catch(err => `Error: ${err}`)
}

//Task 3

function getMonthName(num) {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]; 
  return monthNames[num - 1]
}

//Task 4

function longestTime(h, m, s){
	const hourToSec = h * 3600
  const minToSec = m * 60
  
  if(hourToSec > minToSec && hourToSec > s){
  	return h
  } else if(minToSec > hourToSec && minToSec > s) {
  	return m
  }
  return s
}


//Task 5

function threeDaysAgo(date){
  date.setDate(date.getDate() - 3)
 return date.toLocaleString();
}
