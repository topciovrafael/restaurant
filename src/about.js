import poza from "./imagine2.jpg";

function createAbout(){
    const tot=document.createElement("div");
    tot.setAttribute("id", "smc");
    const titlu=document.createElement("div");
    titlu.setAttribute("id", "titlu");
    titlu.innerText="About:";

    const descriere=document.createElement("div");
    descriere.setAttribute("id", "scurt");
    descriere.innerText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero expedita itaque perferendis earum sit eligendi ipsum ipsa blanditiis quia sapiente nostrum eaque repudiandae vitae quasi est odit, dignissimos illo esse? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero expedita itaque perferendis earum sit eligendi ipsum ipsa blanditiis quia sapiente nostrum eaque repudiandae vitae quasi est odit, dignissimos illo esse?";

    const imagine=document.createElement("img");
    imagine.setAttribute("id", "imagine2");
    imagine.src=poza;


    tot.appendChild(titlu);
    tot.appendChild(descriere);
    tot.appendChild(imagine);

    return tot;
}

function loadAbout(){
    const main=document.getElementById("content");
    main.innerHTML="";
    main.appendChild(createAbout());
}

export default loadAbout;