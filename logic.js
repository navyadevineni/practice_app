function logic()
{
     const Total=parseFloat(document.querySelector('#total').value)
     const Rate=parseFloat(document.querySelector('#rate').value)
     console.log(rate);
     const tip=total*(rate/100)
     const taxRate=5.5
     const tax=total*(taxRate/100)
     const GrandTotal=total+tip+tax;
     document.querySelector('#tip').innerHTML=`$${Tip.toFixed(2)}`
     document.querySelector('#tax').innerHTML=`$${Tax.toFixed(2)}`
     document.querySelector('#total').innerHTML=`$${GrandTotal.toFixed(2)}`
}
     document.querySelector('#btn').addEventListener('click',logic)