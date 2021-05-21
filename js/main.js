let request = new Request();
let cards = new Cards();
let shopping = new Shopping();

request.getApiData("http://localhost:3000/api/cameras/")
.then(response => {
    
    
    for (let i = 0; i < response.length; i++){
        
        /********* ITEM RECOVERY ***********/
       
        let productName = response[i].name; 
        let productDescription = response[i].description;
        let productPrice = response[i].price;              
        let urlImg = response[i].imageUrl; 
        let productId = response[i]._id;
        
        /********* CREATE DIV PRODUCTS *******/
        
        cards.homepage(productName, productPrice, urlImg, productDescription, productId)
        
    }
    
    shopping.onLoadShopNumbers(); 
});
    

    






