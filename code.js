function code()
{
     const Total=parseFloat(document.querySelector('#total').value)
     const Rate=parseFloat(document.querySelector('#field-rate').value)
     console.log(Rate);
     const Tip=total*(Rate/100)
     const TaxRate=5.5
     const Tax=total*(TaxRate/100)
     const GrandTotal=Total+Tip+Tax;
     document.querySelector('#Tip').innerHTML=`$${Tip.toFixed(2)}`
     document.querySelector('#Tax').innerHTML=`$${Tax.toFixed(2)}`
     document.querySelector('#Total').innerHTML=`$${GrandTotal.toFixed(2)}`
}
     document.querySelector('#button').addEventListener('click',code)