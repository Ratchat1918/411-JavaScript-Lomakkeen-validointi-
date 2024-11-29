const lomake = document.getElementById("lomake");

const Kaytajavirhe = document.getElementById("Kaytajavirhe");
const kaytaja = document.getElementById("kaytaja");

function checkId(i){
    let Id=kaytaja.value;
    if(Id==='' || Id===null || Id.length<6){
        i.preventDefault()
        Kaytajavirhe.textContent="*Käyttäjä ID pitää olla vähintään 6 merkkiä pitkä";
    }
}
const salasana=document.getElementById("salasana");
const Passwordvirhe=document.getElementById("Passwordvirhe");

function checkPassword(event) {
    const merkkilista = ["!", "@", "#", "%", "&", "€", "$"];
    let hasUppercase = false;
    let hasSpecialChar = false;
    let password = salasana.value;
    
    for (let i = 0; i < password.length; i++) {
        if (password[i] !== password[i].toLowerCase()) {
            hasUppercase = true;
            break;
        }
    }
    for (let q = 0; q < merkkilista.length; q++) {
        if (password.includes(merkkilista[q])) {
            hasSpecialChar = true;
            break;
        }
    }
    if (password === '' || password === null || password.length < 6 || !hasUppercase || !hasSpecialChar) {
        event.preventDefault();
        Passwordvirhe.textContent = "*Salasanassa oltava 6 merkkiä pitkä ja vähintään yksi numero, yksi iso kirjain ja joku erikoismerkeistä '!@£$€&%#'";
    }
}

const Nimivirhe=document.getElementById("Nimivirhe");
const nimi = document.getElementById("nimi");
const osoite=document.getElementById("osoite");
const Osoitevirhe=document.getElementById("Osoitevirhe");

function checkNimiJaOsoite(i){
    let adress=osoite.value;
    let name=nimi.value;
    if(adress==='' || adress===null){
        i.preventDefault()
        Osoitevirhe.textContent="*Syöto sinun osoite"
    }
    if(name==='' || name===null){
        i.preventDefault()
        Nimivirhe.textContent="*Syöto sinun nimi"
    }

}
const maat=document.getElementById("maat");
const Maatvirhe=document.getElementById("Maatvirhe");
function checkSelection(i){
    let output=maat.value;
    if(output===""){
        i.preventDefault()
        Maatvirhe.textContent="*Maa on valitsettava";
    }
}
const mies=document.getElementById("mies");
const nainen=document.getElementById("nainen");
const Sukupuolivirhe=document.getElementById("Sukupuolivirhe");
function checkGender(){
    if(mies.checked===false && nainen.checked===false){
        Sukupuolivirhe.textContent="*Valitse sukupuoli"
    }
}
const suomi=document.getElementById("suomi");
const muu=document.getElementById("muu");
const Kielivirhe=document.getElementById("Kielivirhe");
function checkLanguage(){
    if(suomi.checked===false && muu.checked===false){
        Kielivirhe.textContent="*Valitse kieli";
    }
}
const sahkoposti=document.getElementById("sahkoposti");
const Sahkovirhe=document.getElementById("Sahkovirhe");
function checkEmail(i){
    const at="@";
    const com=".com";
    const net= ".net";
    if(sahkoposti.value.includes(at)===false || sahkoposti.value.includes(at,2)===false){
        Sahkovirhe.textContent="Syötö voimassa oleva sähköposti";
    }
    if(sahkoposti.value.includes(com)===false){
        Sahkovirhe.textContent="Syötö voimassa oleva sähköposti";
    }

}
const postinumero=document.getElementById("postinumero");
const Postivirhe=document.getElementById("Postivirhe");
function checkPostNumber(i){
    kirjet=['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
    const postnumber=postinumero.value;
    for(let x=0; x<kirjet.length; x++){
        if(postnumber.includes(kirjet[x])===true){
            i.preventDefault()
            Postivirhe.textContent="*Postinumerossa ei saa olla kirjettä";
            break
        }
        if(postnumber==null || postnumber=='' ){
            i.preventDefault()
            Postivirhe.textContent="*Syötö postinumero";
        }
    }
}

lomake.addEventListener("submit",checkPassword);
lomake.addEventListener("submit",checkId);
lomake.addEventListener("submit",checkNimiJaOsoite);
lomake.addEventListener("submit",checkSelection);
lomake.addEventListener("submit",checkGender);
lomake.addEventListener("submit",checkLanguage);
lomake.addEventListener("submit",checkEmail);
lomake.addEventListener("submit",checkPostNumber);