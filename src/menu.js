import gamberi from "../images/gamberi.jpg";
import pomodoro from "../images/pomodoro.jpg";
import pepe from "../images/gamberi.jpg";
import salsiccia from "../images/salsiccia.jpg";
import digustuoso from "../images/digustuoso.jpg";



function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");
    menu.setAttribute("id", "smc");
    menu.appendChild(
      createMenuItem(
        "Salsiccia",
        "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Gamberi",
        "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil"
      )
    );

    menu.appendChild(
      createMenuItem(
        "Pomodoro",
        "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli"
      )
    );
  
    return menu;
  }
  
  function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
  
    const foodName = document.createElement("h2");
    foodName.textContent = name;
  
    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;
  
    const foodImage = document.createElement("img");
    foodImage.class
    foodImage.src = `./${name.toLowerCase()}.jpg`;
    foodImage.classList.add("poza-mancare");


  
    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);
  
    return menuItem;
  }
  
  function loadMenu() {
    const main = document.getElementById("content");
    main.textContent = "";
    main.appendChild(createMenu());
  }
  
  export default loadMenu;