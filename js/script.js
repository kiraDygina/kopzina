let x = document.querySelector('.knopka');
x.addEventListener('click', function(event) {
    event.preventDefault(); // Предотвратить стандартное поведение формы
    let serh = document.querySelector('input[type="search"]');
    let serh_value = serh.value.trim().toLowerCase();
    if (serh_value == 'хна') {
        window.location.href = 'https://kiradygina.github.io/p2zola-hna/';
    }

    if (serh_value == 'хна для брів') {
        window.location.href = 'https://kiradygina.github.io/p2zola-hna/';
    }
    if (serh_value == 'Хна') {
        window.location.href = 'https://kiradygina.github.io/p2zola-hna/';
    }
});


const smartBasketWrapper = document.querySelector('.smart-basket__wrapper');
smartBasketWrapper.style.backgroundColor = 'red';