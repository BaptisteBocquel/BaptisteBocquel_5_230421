class Shopping {
    
    constructor(){
        this.shop = [];
        this.localStorage();
    }

    // Check if productNumbers exist in localStorage and get value to the shop span
    onLoadShopNumbers(){
        let productNumbers = JSON.parse(localStorage.getItem('shopNumbers'));
        if(productNumbers){
            document.querySelector('.nav-item span').textContent = productNumbers;
            let linkShop = document.querySelector('.linkToShopping span');
            if(linkShop){
                linkShop.textContent = productNumbers;
            }
        }
    }

    // add 1 to the linkShop and shopNumbers 
    shopNumbers() {
        
        let productNumbers = JSON.parse(localStorage.getItem('shopNumbers'));   
        if (productNumbers){
            localStorage.setItem('shopNumbers', productNumbers + 1);
            document.querySelector('.nav-item span').textContent = productNumbers + 1; 
            let linkShopping = document.querySelector('.linkToShopping span');
            if(linkShopping){
                linkShopping.textContent = productNumbers + 1;
            }
        } else {
            localStorage.setItem('shopNumbers', 1);
            document.querySelector('.nav-item span').textContent = 1;
            let linkShopping = document.querySelector('.linkToShopping span');
            if(linkShopping){
                linkShopping.textContent = productNumbers + 1;
            }
        }
        
        
    }

    shopNumbersMinus() {
        
        let productNumbers = JSON.parse(localStorage.getItem('shopNumbers'));   
        
            localStorage.setItem('shopNumbers', productNumbers - 1);
            if(productNumbers == 0){
                localStorage.removeItem('shopNumbers');
                
            }else{
                localStorage.setItem('shopNumbers', productNumbers - 1);
                document.querySelector('.nav-item span').textContent = productNumbers - 1; 
                let linkShopping = document.querySelector('.linkToShopping span');
                if(linkShopping){
                linkShopping.textContent = productNumbers - 1;
                }
            }
            
        }

    setItem(){
        localStorage.setItem('shop', JSON.stringify(this.shop)); // Create localeStorage with array
    }

    getItem(){
        this.shop = JSON.parse(localStorage.getItem('shop'));
    }

    localStorage(){
        if(localStorage.getItem('shop') == null){
            this.shop = [];
        }else{
            this.getItem();
        }
    }

    addToShop(data, choice){
        
        for(let cartItem of this.shop){
            if(cartItem.id === data._id && cartItem.lense === choice){
                cartItem.quantity++;
                return this.setItem();;
            }
        }
        this.shop.push({
            'name' : data.name,
            'id': data._id,
            'lense': choice,
            'quantity': 1
        });
        
        this.setItem();
    }

    shopEmpty(){
        let divShop = document.getElementById('shop');
        let shopEmpty = document.createElement('p');
        divShop.appendChild(shopEmpty);
        shopEmpty.textContent = 'Votre panier est vide.';
        shopEmpty.id = 'empty';
    }


   clickToPlus(data,id,choice,number,thisprice,newprice){
    for(let cartItem of data){
        if(cartItem.id === id && cartItem.lense === choice){
            cartItem.quantity++;
            let newQty = cartItem.quantity;
            let getQty = document.getElementById('quantite'+number);
            let getPrice = document.getElementById('price'+number);
            getQty.textContent = "Quantité : " + newQty;
            getPrice.textContent = thisprice + newprice + ' €';
            return localStorage.setItem('shop', JSON.stringify(data));
        }
    };
   }

   clickToMinus(data,id,choice,number,thisprice, newprice){
    for(let cartItem of data){
        if(cartItem.id === id && cartItem.lense === choice){
            cartItem.quantity--;
            let newQty = cartItem.quantity;

            if(newQty>0){
                
                let getQty = document.getElementById('quantite'+number);
                let getPrice = document.getElementById('price'+number)
                getQty.textContent = "Quantité : " + newQty;
                getPrice.textContent = thisprice - newprice + ' €';
                return localStorage.setItem('shop', JSON.stringify(data));
            }else{
                let getDivItem = document.getElementById('div-item'+number)
                getDivItem.style.display = 'none';
                data.splice(number,1);
                document.location.reload();
                return localStorage.setItem('shop', JSON.stringify(data));
                
                
            }
            
        }
    };
   }
   

   verifLengthArray(array){
       if (array.length == 0){
           alert("Votre panier est vide");
           return false;
       }else{
           return true;
       }
   }

   getPrice(id, response){
        for(let i=0; i<response.length; i++){
            if( response[i]._id == id){
                return response[i].price/100;
            }
        }
    }

    getUrl(id, response){
        for(let i=0; i<response.length; i++){
            if( response[i]._id == id){
                return response[i].imageUrl;
            }
        }
    }

    getTotalPrice(totalPrice){

        
        let allPrice = document.getElementsByClassName('prices');
        let somme = 0;
        for (let i = 0; i<allPrice.length; i++){
            somme = somme + parseInt(allPrice[i].innerHTML);
        }
        totalPrice.textContent = somme + ' €';
    }
    
}