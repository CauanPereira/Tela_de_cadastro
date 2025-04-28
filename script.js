var btn = document.querySelector('.btn');
var form = document.querySelector('.form');
var text = document.querySelector('.feedback');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para não recarregar a página

    // Verificando se todos os campos obrigatórios estão preenchidos
    var camposPreenchidos = true;
    var campos = form.querySelectorAll('[required]');
    campos.forEach(function(campo) {
        if (!campo.value) {
            camposPreenchidos = false;
        }
    });

    if (camposPreenchidos) {
        // Se todos os campos estão preenchidos, mostra a mensagem de sucesso
        text.style.display = 'block';
        form.reset(); // Opcional: Limpa os campos do formulário após o envio
    } else {
        // Se algum campo obrigatório não foi preenchido, o formulário não é enviado
        text.style.display = 'none';
    }
});
