// calculate total price

function updateTotal() {
  const bestTotalPrice = Number(bestPrice.innerText);
  const memoryCost = Number(extraMemoryCost.innerText);
  const storageCost = Number(extraStorageCost.innerText);
  const deliveryCharge = Number(deliveryCost.innerText);
  const totalCost = bestTotalPrice + memoryCost + storageCost + deliveryCharge;
  totalPrice.innerText = totalCost;
  inTotalPrice.innerText = totalCost;
}

// <!--------Memory Area Start-------->

const memory8gb = document.getElementById('memory8gb');

memory8gb.addEventListener('click', function () {
  extraMemoryCost.innerText = '0';
  updateTotal();
});

const memory16gb = document.getElementById('memory16gb');

memory16gb.addEventListener('click', function () {
  extraMemoryCost.innerText = '180';
  updateTotal();
});
// <!--------memory Area End-------->

/* -----------------------------------------------------------------------*/

// <!--------Storage Area Start-------->

const storage256gb = document.getElementById('storage256gb');

storage256gb.addEventListener('click', function () {
  extraStorageCost.innerText = '0';
  updateTotal();
});

const storage512gb = document.getElementById('storage512gb');

storage512gb.addEventListener('click', function () {
  extraStorageCost.innerText = '100';
  updateTotal();
});

const storage1tb = document.getElementById('storage1tb');

storage1tb.addEventListener('click', function () {
  extraStorageCost.innerText = '180';
  updateTotal();
});
// <!--------Storage Area End-------->

/* -----------------------------------------------------------------------*/

// <!--------Delivery Area Start-------->
const freeDelivery = document.getElementById('freeDelivery');
const chargeDelivery = document.getElementById('chargeDelivery');

const deliveryCost = document.getElementById("deliveryCost");

freeDelivery.addEventListener('click', function () {
  deliveryCost.innerText = '0';
  updateTotal();
});
chargeDelivery.addEventListener('click', function () {
  deliveryCost.innerText = '20';
  updateTotal();
});
// <!--------Delivery Area End-------->

/* -----------------------------------------------------------------------*/

// -------total price start
const totalPrice = document.getElementById('totalPrice');

totalPrice.addEventListener('click', function () {
  totalPrice.innerText = '1299';
  updateTotal();
});

const bestPrice = document.getElementById('bestPrice');

bestPrice.addEventListener('click', function () {
  bestPrice.innerText = '1299';
  updateTotal();
});

inTotalPrice.addEventListener('click', function () {
  inTotalPrice.innerText = totalCost.value;
  // updateTotal();
});
