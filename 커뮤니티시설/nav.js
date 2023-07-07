let navlogo = document.querySelector("#logo")

window.addEventListener('scroll', function(){
    if(window.scrollY > 100) {
        navlogo.classList.add("hide")
    }else if(window.scrollY <= 100){
        navlogo.classList.remove("hide")
    }
});