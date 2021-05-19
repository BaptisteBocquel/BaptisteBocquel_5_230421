let cards = new Cards();
let shopping = new Shopping();
let request = new Request();
let form = new Form();

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
        let introductPrice = document.createElement('p');
        introductPrice.id = "divTotalPrice";
        let totalPrice = document.createElement('span');
        introductPrice.textContent = "Prix Total : ";
        totalPrice.id="totalPrice";
        divShop.appendChild(introductPrice);
        introductPrice.appendChild(totalPrice);
        shopping.getTotalPrice(totalPrice);

        
        
        
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
                    shopping.getTotalPrice(totalPrice);

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
                    shopping.getTotalPrice(totalPrice); 

                });      
            })
        }

        // CONTROL NAME VALUE

        let value1 = document.getElementById("exampleFormControlInput1");
        value1.addEventListener("input", function(){

            form.checkName(value1);  

        })

        // CONTROL FIRSTNAME VALUE

        let value2 = document.getElementById("exampleFormControlInput2");
        value2.addEventListener("input", function(){

            form.checkFirstName(value2);

        })

        // CONTROL EMAIL

        let value3 = document.getElementById("exampleFormControlInput3");
        value3.addEventListener("input", function(){

            form.checkEmail(value3);

        })

        // CONTROL ADRESS

        let value4 = document.getElementById("exampleFormControlInput4");
        value4.addEventListener("input", function(){

            form.checkAdress(value4);

        })

        // CONTROL CP

        let value5 = document.getElementById("exampleFormControlInput5");
        value5.addEventListener("input", function(){

            form.checkCp(value5);

        })  
        
        // CONTROL CITY

        let value6 = document.getElementById("exampleFormControlInput6");
        value6.addEventListener("input", function(){

            form.checkCity(value6);

        })

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
                let cpUsers = document.getElementById('exampleFormControlInput5').value;
                let cityUsers = document.getElementById('exampleFormControlInput6').value;

                

            
               if(form.validateNames(value1) && form.validateNames(value2) && form.validateEmail(value3) && form.validateAdress(value4) && form.validateCp(value5) && form.validateCity(value6)){
                    
                
                    // CREATE PRODUCTID ARRAY WITH SHOP PRODUCTS ID

                    let productId = [];

                    for (let i=0; i <shopData.length; i++){
                        productId.push(shopData[i].id);
                    }

                    //CREATE CONTACT OBJECT

                    let contact = {
                    'firstName' : firstNameUsers,
                    'lastName' : nameUsers,
                    'address' : adressUsers + cpUsers,
                    'city' : cityUsers,
                    'email' : emailUsers
                    };


                    // CREATE OBJECT TO SEND

                    let order = {
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
                        body: JSON.stringify(order)
                    }

                    
                    request.sendToApi("http://localhost:3000/api/cameras/order", body)
                    .then(response => {

                        //console.log(response);
                        localStorage.clear();

                        // CREATE LOCALESTORAGE WITH TOTAL PRICE

                        let getTotalPrice = parseInt(document.getElementById('totalPrice').innerHTML);
                        localStorage.setItem('total', JSON.stringify(getTotalPrice));

                        document.location.href="confirm.html?orderId=" + response.orderId;

                    })
                } 
        }); 
    }
});





shopping.onLoadShopNumbers(); 
