

const submit = document.getElementById("submit")
const ok = document.getElementById("ok")
const popup = document.getElementById("popup")

submit.addEventListener('click', () =>{
    popup.classList.add("open-popup")

});

ok.addEventListener('click', () =>{
    popup.classList.remove("open-popup")

});
