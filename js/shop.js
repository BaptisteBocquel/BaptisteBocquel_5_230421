let cards = new Cards();
let shopping = new Shopping();
let request = new Request();

request.getApiData("http://localhost:3000/api/cameras/")
.then(response => {
    let shopData = JSON.parse(localStorage.getItem('shop'));
    //console.log(shopData);
    
    if(shopData === null || shopData.length === 0){
    
        shopping.shopEmpty();
        let disabledSubmit = document.getElementById('buttonSubmit');
        disabledSubmit.setAttribute('disabled', true)
    
    
    }else{
        let disabledSubmit = document.getElementById('buttonSubmit');
        disabledSubmit.removeAttribute('disabled');

        let divShop = document.getElementById('shop');
        let titleShop = document.createElement('h1');
        titleShop.textContent = ' Votre Panier :';
        divShop.appendChild(titleShop);

        for (let i=0; i <shopData.length; i++){
    
            let id = shopData[i].id;
            let quantity = shopData[i].quantity;
            let name = shopData[i].name;
            let choice = shopData[i].lense;
            let url = shopping.getUrl(id,response);
            let price = shopping.getPrice(id, response);
            
            cards.shopping(id,quantity,price,url,name,choice,i);
                
        }

        // LISTEN CLICK TO PLUS


        let getClickPlus = document.getElementsByClassName('plus');
     
        for (let j=0; j<getClickPlus.length; j++){
            getClickPlus[j].addEventListener('click', function(){
                request.getApiData("http://localhost:3000/api/cameras/")
                .then(response => {

                    let id = getClickPlus[j].getAttribute('data-id');
                    let lense = getClickPlus[j].getAttribute('data-lense');
                    let number = getClickPlus[j].getAttribute('data-number');
                    let thisprice = parseInt(document.getElementById('price'+number).innerHTML);
                    let newprice = shopping.getPrice(id,response);

                    shopping.shopNumbers();
                    shopping.clickToPlus(shopData,id,lense,number,thisprice,newprice);

                });        
            })
        }

        //LISTEN CLICK TO MINUS
        
        let getClickMinus = document.getElementsByClassName('minus');
             
        for (let k=0; k<getClickMinus.length; k++){
            getClickMinus[k].addEventListener('click', function(){
                request.getApiData("http://localhost:3000/api/cameras/")
                .then(response => {

                    let id = getClickMinus[k].getAttribute('data-id');
                    let lense = getClickMinus[k].getAttribute('data-lense');
                    let number = getClickMinus[k].getAttribute('data-number');
                    let thisprice = parseInt(document.getElementById('price'+number).innerHTML);
                    let newprice = shopping.getPrice(id,response);
                    
                    shopping.shopNumbersMinus();
                    shopping.clickToMinus(shopData,id,lense,number,thisprice,newprice); 

                });      
            })
        }

        // LISTEN CLICK FORM SUBMIT

        document
        .getElementById("form")
        .addEventListener("submit", function(e){
            e.preventDefault();
            
                //GET FORM VALUES
            
                let nameUsers = document.getElementById('exampleFormControlInput1').value;
                let firstNameUsers = document.getElementById('exampleFormControlInput2').value;
                let emailUsers = document.getElementById('exampleFormControlInput3').value;
                let adressUsers = document.getElementById('exampleFormControlInput4').value;
                let cityUsers = document.getElementById('exampleFormControlInput5').value;

                

            
                if(shopping.verifFormValue(firstNameUsers) && shopping.verifFormValue(nameUsers) && shopping.verifFormValue(adressUsers) && shopping.verifFormValue(cityUsers) && shopping.verifFormValue(emailUsers)){
                    // CREATE PRODUCTID ARRAY WITH SHOP PRODUCTS ID

                    let productId = [];

                    for (let i=0; i <shopData.length; i++){
                        productId.push(shopData[i].id);
                    }

                    //CREATE CONTACT OBJECT

                    let contact = {
                    'firstName' : firstNameUsers,
                    'lastName' : nameUsers,
                    'address' : adressUsers,
                    'city' : cityUsers,
                    'email' : emailUsers
                    };


                    // CREATE OBJECT TO SEND

                    let commande = {
                        contact : contact,
                        products : productId
                    }

                    // SEND TO API 

                    let body = {
                        method: "POST",
                        headers: {
                            'Accept': 'application/json', 
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(commande)
                    }

                    
                    request.sendToApi("http://localhost:3000/api/cameras/order", body)
                    .then(response => {

                        //console.log(response);
                        localStorage.clear();
                        document.location.href="confirm.html?orderId=" + response.orderId;

                    })
                } 
        }); 
    }
});





shopping.onLoadShopNumbers(); 
