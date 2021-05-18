let url = new URLSearchParams(window.location.search); // get the url adress
let id = url.get('id'); // extract id of url
//console.log(id);
let request = new Request();
let cards = new Cards();
let shopping = new Shopping();

request.getApiData("http://localhost:3000/api/cameras/" + id)
.then(response => {
        //console.log(response);

        if(id && response){    
                
                cards.product(response);

                let validForm = document.getElementById('validForm');
                
                validForm.addEventListener('click', function(){

                let choice = document.querySelector('input[name="lenses"]:checked').value;
                shopping.shopNumbers();
                shopping.addToShop(response,choice);

                })
                shopping.onLoadShopNumbers(); 
        }else{
                window.location.href='index.html';
        }
                       
});


