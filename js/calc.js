//limit to 1 choice - education
function eduChkcontrol(j) {
var total=0;
for(var i=0; i < document.form1.ckb.length; i++){
if(document.form1.ckb[i].checked){
total =total +1;}
if(total > 1){
alert("Please Select only one") 
document.form1.ckb[j].checked = false ;
return false;}}}

//limit to 1 choice - paramedic
function paramedicChkcontrol(j) {
var total=0;
for(var i=0; i < document.form2.paraCkb.length; i++){
if(document.form2.paraCkb[i].checked){
total =total +1;}
if(total > 1){
alert("Please Select only one") 
document.form2.paraCkb[j].checked = false ;
return false;}}}

//limit to 1 choice - bilingual
function bilingChkcontrol(j) {
var total=0;
for(var i=0; i < document.form3.bilingCkb.length; i++){
if(document.form3.bilingCkb[i].checked){
total =total +1;}
if(total > 1){
alert("Please Select only one") 
document.form3.bilingCkb[j].checked = false ;
return false;}}}

//limit to 1 choice - fire investigator
function fiChkcontrol(j) {
var total=0;
for(var i=0; i < document.form5.fiCkb.length; i++){
if(document.form5.fiCkb[i].checked){
total =total +1;}
if(total > 1){
alert("Please Select only one") 
document.form5.fiCkb[j].checked = false ;
return false;}}}

//limit to 1 choice - arson investigator
function aiChkcontrol(j) {
var total=0;
for(var i=0; i < document.form6.aiCkb.length; i++){
if(document.form6.aiCkb[i].checked){
total =total +1;}
if(total > 1){
alert("Please Select only one") 
document.form6.aiCkb[j].checked = false ;
return false;}}}

//limit to 1 choice - fire inspector
function finsChkcontrol(j) {
var total=0;
for(var i=0; i < document.form7.finsCkb.length; i++){
if(document.form7.finsCkb[i].checked){
total =total +1;}
if(total > 1){
alert("Please Select only one") 
document.form7.finsCkb[j].checked = false ;
return false;}}}

// get the result of the selected option
function checkAmbulanceValue(elmt) {
  let value = elmt.options[elmt.selectedIndex].value;
  return value;
}
// add option into select
function addOptionToSelect() {
  let select = document.getElementById('ambulance');
  for (let i = 0; i < 13; i++) {
    let o = document.createElement('option');
    o.id = 'item' + (i*25)
    o.name = 'item' + (i*25)
    o.value = i * 250;
    o.innerHTML = i * 10;
    select.appendChild(o);
  }

}
addOptionToSelect();
//add values of selected to check boxes and display totals
function calcTotal() {
  let ckbValue = 0;
  let parCkbValue = 0;
  let bilingCkbValue = 0;
  let fiCkbValue = 0;
  let aiCkbValue = 0;
  let finsCkbValue = 0;
  let ambulanceValue = 0;
  let itemTotal = 55563;
  // cbk
  const radioButtonsCkb = document.querySelectorAll('input[name="ckb"]');
  for (const radioButton of radioButtonsCkb) {
    if (radioButton.checked) {
      ckbValue = radioButton.value;
      break;
    }
  }
  // paraCBK
  let radioButtonsPara = document.querySelectorAll('input[name="paraCkb"]');
  for (let radioButton of radioButtonsPara) {
    if (radioButton.checked) {
      parCkbValue = radioButton.value;
      break;
    }
  }
  // bilingCkbValue
  let radioButtonsBiling = document.querySelectorAll('input[name="bilingCkb"]');
  for (let radioButton of radioButtonsBiling) {
    if (radioButton.checked) {
      bilingCkbValue = radioButton.value;
      break;
    }
  }
  // fire investigator - fiCkb
  let radioButtonsFi = document.querySelectorAll('input[name="fiCkb"]');
  for (let radioButton of radioButtonsFi) {
    if (radioButton.checked) {
      fiCkbValue = radioButton.value;
      break;
    }
  }
  // arson investigator - aiCkb
  let radioButtonsAi = document.querySelectorAll('input[name="aiCkb"]');
  for (let radioButton of radioButtonsAi) {
    if (radioButton.checked) {
      aiCkbValue = radioButton.value;
      break;
    }
  }
  // fire inspector - fiCkb
  let radioButtonsFins = document.querySelectorAll('input[name="finsCkb"]');
  for (let radioButton of radioButtonsFins) {
    if (radioButton.checked) {
      finsCkbValue = radioButton.value;
      break;
    }
  }
  //ambulance
  let select = document.getElementById('ambulance')
  ambulanceValue = checkAmbulanceValue(select);

  //currency formatter
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});
  // total 
  itemTotal += +parCkbValue;
  itemTotal += +bilingCkbValue;
  itemTotal += +ckbValue;    
  itemTotal += +fiCkbValue;
  itemTotal += +aiCkbValue;
  itemTotal += +finsCkbValue;
  itemTotal += +ambulanceValue;
  document.getElementById("total_salary").innerHTML = "Annual salary: " + formatter.format(itemTotal) + "<br /><br />Hourly wage: " + formatter.format(itemTotal/2079.72);
  //inner HTML fills in the space between the opening and closing <p> tags with the total
}

//backwards compatibility for event listener submit button
let calcButton = document.getElementById("calcButton"); //sButton HTML element is assign JS value of submitButton
if (calcButton.addEventListener) //now you can add event listener
{
  calcButton.addEventListener("click", calcTotal, false); //event is click, action is calctotal, false for bwc
} else if (calcButton.attachEvent) {
  calcButton.attachEvent("onclick", formatter.format(calcTotal));
}

//reset button
let clearResult = () => {
  clearFormsNow();
  clearText();
}

function clearFormsNow() {
    Array.prototype.forEach.call(document.forms,function(el,idx,array){
        el.reset();      
    });    // result();  
}

let clearText = () => {
  document.getElementById("total_salary").textContent = "";
}
