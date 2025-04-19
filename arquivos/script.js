document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('nav a.menu-link');
    const offset = 120; // Ajuste para o header fixo

    // Função para rolar suavemente até a seção alvo
    function smoothScroll(targetId) {
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - offset,
            behavior: 'smooth'
        });
    }

    // Adiciona evento de clique aos links do menu
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            smoothScroll(targetId);
        });
    });
});