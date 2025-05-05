document.addEventListener('DOMContentLoaded', function() {
    const contatoFormDiv = document.getElementById('contato-form');
    const form = contatoFormDiv.querySelector('form');
    const mensagemSucessoDiv = document.getElementById('mensagem-sucesso');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = form.nome.value.trim();
        const email = form.email.value.trim();
        const telefone = form.telefone.value.trim();
        const cidade = form.cidade.value.trim();
        const mensagem = form.mensagem.value.trim();

        if (nome && email && telefone && cidade && mensagem) {
            const templateParams = {
                nome: nome,
                email: email,
                telefone: telefone,
                cidade: cidade,
                mensagem: mensagem
            };

            emailjs.send('service_v97ai1l', 'template_z9hguwq', templateParams) //se for trocar, a ordem é: service_id e dps template_id
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    mensagemSucessoDiv.style.display = 'block';
                    form.reset();

                    setTimeout(function() {
                        mensagemSucessoDiv.style.display = 'none';
                    }, 4000);
                }, function(error) {
                    console.log('FAILED...', error);
                    alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
                });
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});