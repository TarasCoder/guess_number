const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
btn.addEventListener("click", function(ev) {
    ev.preventDefault();
    console.log(input.value);
    input.value = "";
})