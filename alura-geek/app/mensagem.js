document.querySelector('.forms').addEventListener('submit', function (event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    const nameInput = document.querySelector('input[name="name"]');
    const messageTextarea = document.querySelector('textarea[name="mensagem"]');
    const errorMsg = document.getElementById('error-msg');
    const successMsg = document.getElementById('success-msg');
    const buttonText = document.querySelector('.enviar');

    if (nameInput.value.trim() === '' || messageTextarea.value.trim() === '') {
        errorMsg.textContent = "Por favor, preencha todos os campos obrigatórios.";
        errorMsg.style.display = 'block';
        successMsg.style.display = 'none';
        buttonText.textContent = "Enviar Mensagem";
    } else {
        errorMsg.style.display = 'none';
        successMsg.textContent = "Mensagem enviada com sucesso!";
        successMsg.style.display = 'block';
        buttonText.textContent = "Enviado";

        setTimeout(function () {
            successMsg.style.display = 'none';
            buttonText.textContent = "Enviar Mensagem";
        }, 3000);

        nameInput.value = '';
        messageTextarea.value = '';
    }
}