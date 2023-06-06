

const submit = document.getElementById("popup")

submit.addEventListener('click', () =>{
    submit.classList.add("open-popup")

});

const ok = document.getElementById("ok")

submit.addEventListener('click', () =>{
    submit.classList.remove("open-popup")

});
