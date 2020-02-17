function code()
{
     const Total=parseFloat(document.querySelector('#total').value)
     const Rate=parseFloat(document.querySelector('#field-rate').value)
     console.log(Rate);
     const Tip=total*(Rate/100)
     const TaxRate=5.5
     const Tax=total*(TaxRate/100)
     const GrandTotal=total+tip+tax;
     document.querySelector('#tip').innerHTML=`$${Tip.toFixed(2)}`
     document.querySelector('#tax').innerHTML=`$${Tax.toFixed(2)}`
     document.querySelector('#total').innerHTML=`$${GrandTotal.toFixed(2)}`
}
     document.querySelector('#button').addEventListener('click',code)