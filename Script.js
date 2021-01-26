function checarLogin(){
    //VARIAVEIS PEGAS
    let a = document.getElementById('UserImput')
    a.innerText = 'asuhds'

    //USUARIO 
    let usuario = document.getElementById('UserMain')   
    usuario.innerText = a.value


    //REFRESH DO SITE
    const refresh = document.getElementById('Login')
    if(refresh.parentNode){
        refresh.parentNode.removeChild(refresh) 
    }
    
}

