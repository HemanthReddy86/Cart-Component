const likeBtns = document.querySelectorAll('.like-btn');

likeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.toggle('is-active');
    });
});

const minusBtns = document.querySelectorAll(".minus-btn");

minusBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(parseInt(btn.nextElementSibling.value) > 0) {
            btn.nextElementSibling.value = parseInt(btn.nextElementSibling.value) -1 ;
        }
    })
    })

   const plusBtns = document.querySelectorAll(".plus-btn");
   
   plusBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.previousElementSibling.value = parseInt(btn.previousElementSibling.value) + 1;
    });
   });