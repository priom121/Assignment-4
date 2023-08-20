let sum = 0;
function handleClick(target){
 const selectorItem = document.getElementById('selector-item');
 const itemName = target.childNodes[3].childNodes[3].childNodes[1].innerText;
 console.log(target.childNodes[3].childNodes[3].childNodes[1].innerText);
 const li = document.createElement('li');
 li.innerText = itemName;
 selectorItem.appendChild(li);
const total = target.childNodes[3].childNodes[3].childNodes[3].innerText.split(" ")[0];
sum = parseFloat(sum) + parseFloat(total);
document.getElementById('total-price').innerText = sum;


// discount-------------
if(    sum >= 200) {
 const discountCal = total * 0.2 ;
  const discounts = total - discountCal ;
 document.getElementById('discount').innerText = discounts;
//  total--------------
 const grandTotal = total - discounts;
 document.getElementById('totals').innerText = grandTotal                       
}

}