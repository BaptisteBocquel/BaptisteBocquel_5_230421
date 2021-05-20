class Form {
    validateNames(ctrl) {
        var regex = /^[a-zA-Zàâçéèêëùîï -]{2,30}$/;
        return regex.test(ctrl.value);
    }

    checkName(value){
        if(this.validateNames(value) === true){
                
            value.className = "form-control is-valid";
            let getDivValid = document.getElementById('validName');
            getDivValid.textContent = "Validé !";
        }else{
            
            value.className = "form-control is-invalid";
            let getDivInvalid = document.getElementById('invalidName');
            getDivInvalid.textContent = "Invalide !";
        }
    }

    checkFirstName(value){
        if(this.validateNames(value) === true){  
            value.className = "form-control is-valid";
            let getDivValid2 = document.getElementById('validFirstName');
            getDivValid2.textContent = "Validé !";
        }else{
            value.className = "form-control is-invalid";
            let getDivInvalid2 = document.getElementById('invalidFirstName');
            getDivInvalid2.textContent = "Invalide !";
        }
    }

    validateEmail(email) {
        var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email.value);
    }

    checkEmail(email){
        if(this.validateEmail(email) === true){
            email.className = "form-control is-valid";
            let getDivValid3 = document.getElementById('validEmail');
            getDivValid3.textContent = "Validé !";
        }else{
            email.className = "form-control is-invalid";
            let getDivInvalid3 = document.getElementById('invalidEmail');
            getDivInvalid3.textContent = "Invalide !";
        }
    }

    validateAdress(adress) {
        var regex = /^[a-zA-Zàâçéèêëùîï0-9 -]{2,30}$/;
        return regex.test(adress.value);
    }

    checkAdress(adress){
        if(this.validateAdress(adress) === true){
            adress.className = "form-control is-valid";
            let getDivValid4 = document.getElementById('validAdress');
            getDivValid4.textContent = "Validé !";
        }else{
            adress.className = "form-control is-invalid";
            let getDivInvalid4 = document.getElementById('invalidAdress');
            getDivInvalid4.textContent = "Invalide !";
        }
    }

    validateCp(cp) {
        var regex =  /((0[1-9])|([1-8][0-9])|(9[0-8])|(2A)|(2B))[0-9]{3}/;
        return regex.test(cp.value);
    }

    checkCp(cp){
        if(this.validateCp(cp) === true){
            cp.className = "form-control is-valid";
            let getDivValid5 = document.getElementById('validCp');
            getDivValid5.textContent = "Validé !";
        }else{
            cp.className = "form-control is-invalid";
            let getDivInvalid5 = document.getElementById('invalidCp');
            getDivInvalid5.textContent = "Invalide !";
        }
    }

    validateCity(city) {
        var regex =  /^[a-zA-Zàâçéèêëùîï -]{2,30}$/; 
        return regex.test(city.value);
    }

    checkCity(city){
        if(this.validateCity(city) === true){
            city.className = "form-control is-valid";
            let getDivValid6 = document.getElementById('validCity');
            getDivValid6.textContent = "Validé !";
        }else{
            city.className = "form-control is-invalid";
            let getDivInvalid6 = document.getElementById('invalidCity');
            getDivInvalid6.textContent = "Invalide !";
        }
    }

}