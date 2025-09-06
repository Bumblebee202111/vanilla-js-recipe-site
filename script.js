const ingredientItems = document.querySelectorAll('.recipe-ingredients li');

ingredientItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('checked-off');
    })
})