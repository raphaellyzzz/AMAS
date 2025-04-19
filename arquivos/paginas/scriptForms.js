document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = form.nome.value.trim();
        const email = form.email.value.trim();
        const telefone = form.telefone.value.trim();
        const cidade = form.cidade.value.trim();
        const mensagem = form.mensagem.value.trim();

        if (nome && email && telefone && cidade && mensagem) {
            alert('Mensagem enviada com sucesso!');
            form.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});