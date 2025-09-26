console.log("Bem Vindo")

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    toggleButton.addEventListener('click', function () {
        menu.classList.toggle('show');
        
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const line1 = "Da calça ao boné, produzimos uniformes completos";
    const line2 = "para sua equipe com qualidade e confiança";

    const el1 = document.querySelector('.typed-text-line1');
    const el2 = document.querySelector('.typed-text-line2');

    let i = 0;
    let j = 0;

    function typeLine1() {
        if (i < line1.length) {
            el1.textContent += line1.charAt(i);
            i++;
            setTimeout(typeLine1, 40);
        } else {
            setTimeout(typeLine2, 500);
        }
    }

    function typeLine2() {
        if (j < line2.length) {
            el2.textContent += line2.charAt(j);
            j++;
            setTimeout(typeLine2, 40);
        }
    }

    typeLine1();
});
