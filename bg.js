const button = document.querySelector("button");
const h2El = document.querySelector("h2");
const bgEl = document.querySelector("section");
// const hexColorE1 = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
button.addEventListener("click" , () => {
    let color = "#" ;
    color += Math.random().toString (16).slice(2,8);
    bgEl.style.backgroundColor = color;
    h2El.innerText = color;
});
