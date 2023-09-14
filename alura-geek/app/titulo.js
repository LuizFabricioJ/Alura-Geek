const text = document.querySelector(".sec-text");
const textLoad = () =>{
    setTimeout(() => {
        text.textContent = "Star Wars";
    }, 0);
    setTimeout(() => {
        text.textContent = "Uma experiência";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Uma ideia";
    }, 8000);
}
textLoad();
setInterval(textLoad, 12000);