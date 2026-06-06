// 1. Restringir datas passadas no calendário
const campoData = document.getElementById('data');
const hoje = new Date();

// Formata a data atual para o padrão YYYY-MM-DD exigido pelo input HTML
const ano = hoje.getFullYear();
const mes = String(hoje.getMonth() + 1).padStart(2, '0');
const dia = String(hoje.getDate()).padStart(2, '0');
const dataMinima = `${ano}-${mes}-${dia}`;

// Define que a data mínima selecionável é o dia de hoje
campoData.min = dataMinima;

// 2. Ação ao enviar o formulário
document.getElementById('formAgendamento').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede a página de recarregar

    // Dispara o pop-up moderno do SweetAlert2 centralizado na tela
    Swal.fire({
        title: 'Agendamento Confirmado!',
        text: 'Seu horário foi reservado com sucesso.',
        icon: 'success',
        confirmButtonColor: '#008080',
        confirmButtonText: 'OK'
    }).then((result) => {
        if (result.isConfirmed) {
            // Limpa os campos após o usuário clicar em OK
            document.getElementById('formAgendamento').reset();
        }
    });
});