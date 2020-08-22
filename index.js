// Import stylesheets
import './style.css';

let buttons = document.querySelectorAll("button");
buttons.forEach((button)=>{
  button.addEventListener("click",(e) => {
    document.querySelector("label").textContent=e.target.textContent;});
  });
