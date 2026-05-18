// Le toggle Dark/Light Mode fonctionnel depuis la navbar

let toggle_btn = document.querySelector("#btn_toggle");
toggle_btn.addEventListener("click", function(){
    if(document.body.style.backgroundColor =="black"){
        document.body.style.backgroundColor="#0a1128ea";
        document.body.style.color="white";

        // Sauvegarde le mode clair dans le localStorage
        localStorage.setItem("theme", "light");
    }
    else{
        document.body.style.backgroundColor="black";
        document.body.style.color="white";

        // Sauvegarde le mode sombre dans le localStorage 
        localStorage.setItem("theme", "dark");
    }
});

// Le thème sauvegardé dans localStorage (persiste entre les pages)
let theme = localStorage.getItem("theme");
if(theme == "dark"){
    document.body.style.backgroundColor="black";
    document.body.style.color="white";
}

// La navbar qui change de style au scroll (fond, ombre, effet shrink) 
const nav = document.getElementById("navbar");
window.addEventListener("scroll", ()=>{
    if(window.scrollY > 5){
        nav.classList.add("nav-scroll");
    }
    else{
        nav.classList.remove("nav-scroll");
    }
})
// Le bouton « Retour en haut » qui apparaît au scroll
let btn_retour = document.querySelector("#btn-retour");
window.addEventListener("scroll", ()=>{
    if(window.scrollY > 300){
        btn_retour.style.display ="block";
    }
    else{
        btn_retour.style.display ="none";
    }
});
      // Retour en haut 
btn_retour.addEventListener("click", () =>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

