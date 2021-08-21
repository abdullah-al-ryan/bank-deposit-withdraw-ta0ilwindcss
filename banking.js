//handle deposit button event

document.getElementById('deposit-button').addEventListener('click', function()
{
    //get the amount depositted
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);
    
    //update deposit total
    const depositTotal = document.getElementById('deposit-total');

    const previousDepositText = depositTotal.innerText;

    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotal = previousDepositAmount + newDepositAmount;
    
    depositTotal.innerText = newDepositTotal;

    // clear the deposit input field
    depositInput.value = '';

    // update balance total
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
})

//handle withdraw event handler

document.getElementById('withdraw-button').addEventListener('click', function()
{
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newwithdrawAmount = parseFloat(withdrawAmountText);
    // console.log(withdrawAmountText);

    // set withdraw total 

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newwithdrawTotal = previousWithdrawTotal + newwithdrawAmount;
    withdrawTotal.innerText = newwithdrawTotal;

    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newwithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

    //clear withdraw input
    withdrawInput.value = '';
})