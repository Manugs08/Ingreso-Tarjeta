
const form= document.querySelector(".form");
const nombre= document.getElementById("name");
const tarjeta= document.getElementById("cardNum")
const mes=document.getElementById("month");
const año=document.getElementById("year");
const cvc=document.getElementById("cvc");
const submit=document.querySelector(".submit");
const advertirNom=document.querySelector(".advNombre");
const advertirDate=document.querySelector(".advDate");
const advertirCvc=document.querySelector(".advCvc");
const advertirTarjeta=document.querySelector(".advTarjeta");
const numTarjeta=document.querySelector(".numeros");
const dueño=document.querySelector(".dueño");
const vencimiento=document.querySelector(".vencimiento");
const cvcAtras=document.querySelector(".cvcAtras")
const datosConteiner=document.querySelector(".datos-conteiner")
form.addEventListener("submit",(e)=>{

    e.preventDefault();
    let errorDateMes=false;
    let errorDateAño=false;
    let errorName=false;
    let errorCvc=false;
    let errorTarjeta=false;
    if(nombre.value.trim()===""){
        nombre.style.border="1px solid var(--Red400)";
        advertirNom.style.display="block"; 
        errorName=true;   
    } else{
        nombre.style.border="1px solid var(--Gray400)";
        advertirNom.style.display="none";
    }

    if(mes.value.trim()===""){
        mes.style.border="1px solid var(--Red400)";
        errorDateMes=true;
    }else{
        mes.style.border="1px solid var(--Gray400)";
    }
    if(año.value.trim()===""){
        año.style.border="1px solid var(--Red400)";
        errorDateAño=true;
    }else{
        año.style.border="1px solid var(--Gray400)";
    }
    if(errorDateMes || errorDateAño){
        advertirDate.style.display="block";
    }else{
        advertirDate.style.display="none";
    }

    if(cvc.value.trim()===""){
        cvc.style.border="1px solid var(--Red400)";
        advertirCvc.style.display="block";
        errorCvc=true;
    }else{
        cvc.style.border="1px solid var(--Gray400)";
        advertirCvc.style.display="none";
    }

    if(tarjeta.value.trim()==="" || /[A-Z]/.test(tarjeta.value) || /[a-z]/.test(tarjeta.value) || !/^\d{4} \d{4} \d{4} \d{4}$/.test(tarjeta.value) ){
        tarjeta.style.border="1px solid var(--Red400)";
        advertirTarjeta.style.display="block";
        errorTarjeta=true;
    } else{
        tarjeta.style.border="1px solid var(--Gray400)";
        advertirTarjeta.style.display="none";
    }

    numTarjeta.innerHTML=tarjeta.value
    dueño.innerHTML=nombre.value
    vencimiento.innerHTML=`${mes.value}/${año.value}`
    cvcAtras.innerHTML=cvc.value
    if(errorCvc || errorDateAño || errorDateMes || errorName || errorTarjeta){
        return
    }

    form.style.display="none"
    const contendor=document.createElement("div");
    contendor.classList.add("contenedor-msg");
    datosConteiner.appendChild(contendor);
    
    const img=document.createElement("img");
    contendor.appendChild(img);
    img.classList.add("img");
    img.src="images/icon-complete.svg"

    const h2=document.createElement("h2");
    contendor.appendChild(h2);
    h2.classList.add("gracias");
    h2.innerHTML="THANK YOU!"

    const p=document.createElement("p");
    contendor.appendChild(p);
    p.classList.add("msg");
    p.innerHTML="We've added your card details"

    const continueBotton=document.createElement("button");
    contendor.appendChild(continueBotton);
    continueBotton.classList.add("boton");
    continueBotton.innerHTML="Continue"

})
