class Request {

    async getApiData(url){
      let response = await fetch(url);
      if(response.ok){
        let product = await response.json();
        return product;
        
      }else{
        console.log("Erreur : " + response.status)
      }    
    }

    async sendToApi(url, body){
      let response = await fetch(url,body);
      if(response.ok){
        let product = await response.json();
        console.log('envoyé');
        return product;
        
      }else{
        console.log("Erreur : " + response.status)
      }    
    
    }
    
}
