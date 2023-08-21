const dateStart = document.querySelector('#start')
const dateEnd= document.querySelector('#end')
const button = document.querySelector('#btn')
const span =document.querySelector('h1')

function calcDiference(){
  let start = dateStart.value;
  let end = dateEnd.value;

  start = new Date(start)
  end = new Date(end)
  
  let diferenceInTime = Math.abs(start-end);
  let timeInOneDay = (1000 * 60 * 60 *24)
  let diferenceDay = Math.ceil(diferenceInTime / timeInOneDay);
  
  return diferenceDay;
}

button.addEventListener('click',(e)=>{
e.preventDefault();
const d = calcDiference();
span.innerHTML = `<span>The diference is of  ${d} day(s)</span>`

})