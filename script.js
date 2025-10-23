document.addEventListener('DOMContentLoaded', () => {
    // Função para animar a primeira seção ao rolar
    const etapaUm = document.querySelector('.etapaUm');
    window.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY;
        // Diminui a opacidade da primeira seção conforme o scroll aumenta
        etapaUm.style.opacity = 1 - Math.min(scrollPosition / (window.innerHeight * 1), 1);
    });

    // Função para animar o conteúdo que aparece na tela
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.1 // A animação começa quando 10% do elemento está visível
    });

    // Seleciona todos os elementos que devem ser animados e os "esconde"
    const elementsToAnimate = document.querySelectorAll('h2, .linha, .info-item');
    elementsToAnimate.forEach(el => el.classList.add('hidden'));
    elementsToAnimate.forEach(el => observer.observe(el));
});