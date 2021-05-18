class Cards {

    homepage(name, price, url, description, id){

                        /* CREATE MAIN DIV */

        let objects = document.getElementById('objects');
        let newDiv = document.createElement("div");
        newDiv.className ="objects_elements";
        objects.appendChild(newDiv);

                        /* CREATE LINK TO PRODUCT PAGE */
        
        let newLink = document.createElement("a");
        newLink.href="product.html?id=" + id;
        newDiv.appendChild(newLink);

                        /* ADD IMG OF PRODUCT */

        let newImg = document.createElement("img");
        newImg.className = "objects_img";
        newImg.src = url;
        newLink.appendChild(newImg); 

                        /* CREATE TITLE CARD */
        
        let newName = document.createElement("h2");
        newName.className = "objects_title";
        newName.textContent = name; 
        newLink.appendChild(newName);

                        /* CREATE DIV DESCRIPTION OF PRODUCT */

        let newDivDescription = document.createElement("div");
        newDivDescription.textContent = description;
        newLink.appendChild(newDivDescription);

                        /* CREATE DIV PRICE */

        let newDivPrice = document.createElement("div");
        newDivPrice.className = "objects_price";
        newDivPrice.textContent = price /100 + " €";
        newLink.appendChild(newDivPrice);

    }

    product(data){

                    /* PRODUCT TITLE */

        let card = document.getElementById('card');
        let divNameProduct = data.name; 
        let newTitle = document.createElement('h2');
        card.appendChild(newTitle);
        newTitle.textContent = divNameProduct;
        newTitle.className = "productTitle"; 

                    /* PRODUCT PRICE */

        let price = data.price;
        let priceProduct = document.createElement('p');
        card.appendChild(priceProduct);
        priceProduct.textContent = price / 100 + " €";
        priceProduct.className = "productPrice";

                    /* PRODUCT IMG */

        let newImg = document.createElement('img');
        card.appendChild(newImg);
        newImg.src = data.imageUrl;
        newImg.className = "productImg";

                    /* PRODUCT DESCRIPTION */

        let newDescription = document.createElement('p');
        let descriptionProduct = data.description;
        card.appendChild(newDescription);
        newDescription.textContent =  descriptionProduct;
        newDescription.className = "productDescription";

                    /* LENSES CHOICE FORM */

        let newDivForm = document.createElement('div'); 
        card.appendChild(newDivForm);
        newDivForm.className = "productForm";
        let newTitleForm = document.createElement('p'); 
        newDivForm.appendChild(newTitleForm);
        newTitleForm.textContent = "Choisissez la lentille qui vous convient : ";
        let newForm = document.createElement('form');
        newDivForm.appendChild(newForm);
        newForm.id = "lensesForm";

            for (let i=0; i < data.lenses.length; i++){
                let lensesChoice = data.lenses[i];
                let newInput = document.createElement('input');
                let newLabel = document.createElement('label');
                let newBr = document.createElement('br');
                newForm.appendChild(newInput);
                newForm.appendChild(newLabel);
                newForm.appendChild(newBr);
                newInput.setAttribute("type","radio");
                newInput.setAttribute("name","lenses");
                newInput.setAttribute("value", data.lenses[i]);
                    if(i==0){
                        newInput.setAttribute("checked", "checked");
                    }
                newLabel.setAttribute("for", lensesChoice);
                newLabel.textContent = lensesChoice ;
            }
        
                    /* CREATE SUBMIT BUTTON */ 
        
        let inputSubmit = document.createElement('input');
        newDivForm.appendChild(inputSubmit);
        inputSubmit.className = 'btn-grad';
        inputSubmit.id = 'validForm';
        inputSubmit.setAttribute("type", "submit"); 
        inputSubmit.setAttribute("value", "Ajouter au panier");

                    /*CREATE GO HOME BUTTON */

        let inputHome = document.createElement('a');
        
        newDivForm.appendChild(inputHome);
        
        inputHome.className = 'btn-grad-2';
        inputHome.href = "index.html";
        inputHome.textContent = "Retour à l'accueil";
        //inputHome.setAttribute("value", "Retour à l'accueil");

                    /* CREATE LINK TO SHOP */

        let linkToShopping = document.createElement('a');
        newDivForm.appendChild(linkToShopping);
        linkToShopping.setAttribute("href", "shopping.html");
        linkToShopping.innerHTML = "Voir le panier (<span>0</span>)";
        linkToShopping.className = "linkToShopping";
           
    }

    shopping(id,quantity,price,url,name,choice,i){

            let divShop = document.getElementById('shop');
            let divItem = document.createElement('div');
            divItem.className = 'div-item';
            divItem.id='div-item'+i;
            divShop.appendChild(divItem);
            

            let divImg = document.createElement('div')
            let newImg = document.createElement("img");
            divItem.appendChild(divImg)
            newImg.className = "shop_img";
            divImg.className = "div_img";
            newImg.src = url;
            divImg.appendChild(newImg);
     
            let divName = document.createElement('div');
            divItem.appendChild(divName)
            let nameProduct = document.createElement('p');
            let lenseProduct = document.createElement('p');
            divName.appendChild(nameProduct);
            divName.appendChild(lenseProduct);
            divName.className = "div-name";
            nameProduct.textContent = name;
            nameProduct.className = 'name-product';
            lenseProduct.textContent = choice;
            lenseProduct.className = 'lense-product';

            let divQuantity = document.createElement('div');
            let minus = document.createElement('i');
            let plus = document.createElement('i');
            let quantityProduct = document.createElement('p');
            
            quantityProduct.textContent = "Quantité : " + quantity;
            quantityProduct.id = 'quantite' + i;
            divName.appendChild(divQuantity);
            divQuantity.appendChild(minus);
            divQuantity.appendChild(quantityProduct);
            divQuantity.appendChild(plus);
            divQuantity.className = 'divQty';
            
            plus.className = 'fas fa-plus plus';
            plus.setAttribute('data-id',id);
            plus.setAttribute('data-lense', choice);
            plus.setAttribute('data-number', i);

            minus.className = 'fas fa-minus minus';
            minus.setAttribute('data-id',id);
            minus.setAttribute('data-lense', choice);
            minus.setAttribute('data-number', i);

            let divPrice = document.createElement('div');
            let priceProduct = document.createElement('p');
            divItem.appendChild(divPrice);
            divPrice.appendChild(priceProduct);
            priceProduct.textContent = price * quantity +' €'; 
            priceProduct.id = 'price' + i;   
        
    }
    
}