

fetch("http://localhost:3000/api/cameras")
.then(response => response.json())
.then(response => {
    console.log(response);
    let objects = document.getElementById('objects');
    
    for (let i = 0; i < response.length; i++){
        
        /********* ITEM RECOVERY ***********/

        let divName = response[i].name; 
        let divDescription = response[i].description;
        let divPrice = response[i].price;              
        let urlImg = response[i].imageUrl; 
        

        /********* CREATE DIV PRODUCTS *******/

        let newDiv = document.createElement("div");
        let newName = document.createElement("h2");
        let newDivDescription = document.createElement("div");
        let newDivPrice = document.createElement("div");
        let newImg = document.createElement("img");
        
        objects.appendChild(newDiv);
        newDiv.appendChild(newImg); 
        newDiv.appendChild(newName);
        newDiv.appendChild(newDivDescription); 
        newDiv.appendChild(newDivPrice); 
        
        /********** STYLE OF PRICE  **************/
        
        newDivPrice.style.marginBottom = "15px";
        newDivPrice.style.marginTop = "15px";

        /********** STYLE OF TITLE *************/

        newName.style.marginTop = "15px";
        newName.style.marginBottom = "15px";
                  
        /********** STYLE OF IMG *************/

        newImg.src = urlImg;
        newImg.style.objectFit = "cover";
        newImg.style.width = "100%";
        newImg.style.height= "250px";

        /********* STYLE DIV PRODUCTS  **********/

        newDiv.style.boxShadow = "1px 1px 15px black";
        newDiv.style.width = " 450px";
        newDiv.style.margin= "30px";
        newDiv.style.padding = "10px";
        newDiv.style.backgroundColor= "#f6eee9";
        

        /********* ADD ELEMENT OF API ************/

        newName.textContent = divName; 
        newDivDescription.textContent = divDescription;
        newDivPrice.textContent = divPrice + " $";
            
    }
    
    })
.catch(error => console.log("Erreur : " + error));