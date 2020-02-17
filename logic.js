function logic()
{
     const Total=parseFloat(document.querySelector('#total').value)
     const Rate=parseFloat(document.querySelector('#rate').value)
     console.log(Rate);
     const Tip=total*(Rate/100)
     const taxRate=5.5
     const Tax=Total*(taxRate/100)
     const GrandTotal=Total+Tip+Tax;
     document.querySelector('#tip').innerHTML=`$${Tip.toFixed(2)}`
     document.querySelector('#tax').innerHTML=`$${Tax.toFixed(2)}`
     document.querySelector('#total').innerHTML=`$${GrandTotal.toFixed(2)}`
}
     document.querySelector('#btn').addEventListener('click',logic)