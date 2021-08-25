
let htmlInfoEl = document.getElementById('info-HTML');
htmlInfoEl.addEventListener('mouseover', htmlInfo, false);


function htmlInfo(ev){
  let target = ev.target;
  alert(target.innerHTML);

}


let firstNameEl = document.getElementById('fName');
let lastNameEl = document.getElementById('lName');

firstNameEl.addEventListener('blur', (ev)=> checkCharLength(ev, 3), false);
lastNameEl.addEventListener('blur', ev => checkCharLength(ev, 4), false);


function checkCharLength(ev){
  let el = ev.target; 
  console.log(el);
  let elErrMsg = document.getElementById(`${el.id}Err`);
  let elLabel = el.parentNode.textContent;
  let charLenth = el.value.length;
  if(charLenth < el.min){
    elErrMsg.textContent = `${elLabel} must contain a minimum of ${el.min} characters.`;
  }else{
    elErrMsg.textContent = '';
  }
}
