import poza from "./imagine.jpg";

function createHomePage(){
    const tot=document.createElement("div");
    const titlu=document.createElement("div");
    titlu.setAttribute("id", "titlu");
    tot.setAttribute("id", "smc");

    const scurt=document.createElement("div");
    scurt.setAttribute("id", "scurt");


    const lung=document.createElement("div");
    lung.setAttribute("id", "lung");

    const imagine=document.createElement("img");
    imagine.setAttribute("id", "imagine2");
    imagine.src=poza;

    titlu.innerText="Name of Restaurant!";
    scurt.innerText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi odio eligendi voluptas aliquam vel, exercitationem tempora nemo aliquid cum accusamus necessitatibus inventore quam doloremque, laudantium id sapiente ad, tenetur excepturi?";
    lung.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus vero voluptas perspiciatis soluta praesentium repudiandae totam rerum corporis aut. Natus quos perspiciatis minima saepe. Est quam placeat ad dolores non. Error sequi neque suscipit, veniam iure quidem vero recusandae unde omnis reiciendis doloribus quia, magnam aliquam quam voluptate eveniet. Iusto, neque. Repellat soluta eaque quidem officiis accusamus consectetur eius quasi! Sit blanditiis doloribus tenetur, molestias nostrum at exercitationem non debitis placeat, in quidem ullam. Tempora quas, sapiente facere itaque, cupiditate quae omnis corrupti nobis obcaecati laboriosam ut nostrum, fugiat ipsam!";

    tot.appendChild(titlu);
    tot.appendChild(scurt);
    tot.appendChild(lung);
    tot.appendChild(imagine);

    return tot;
}

function loadHome(){
    const main=document.getElementById("content");
    main.innerHTML="";
    main.appendChild(createHomePage());
}

export default loadHome;