let url = new URLSearchParams(window.location.search); // get the url adress
let orderId = url.get('orderId'); // extract id of url

let span = document.getElementById('orderId');
span.textContent = orderId;