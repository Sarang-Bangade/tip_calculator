 const billAmountInput = document.getElementById('billAmount')
 const tipPercentageInput = document.getElementById('tipPercentage')
 const numPeopleInput = document.getElementById('numPeople')
 const calculateTipButton = document.getElementById('calculateTip')
 const totalTipDisplay = document.getElementById('totalTip')
 const tipPerPersonDisplay = document.getElementById('tipPerPerson')


 calculateTipButton.addEventListener('click', calculateTip)

 function calculateTip(){

    const billAmount =  parseFloat(billAmountInput.value)
    const tipPercentage =  parseFloat(tipPercentageInput.value)
    const numPeople =  parseInt(numPeopleInput.value)

    


 }