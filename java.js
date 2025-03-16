function enviarFormularioAjax() {
    var formulario = document.getElementById("meuFormulario");
    
    // Cria um objeto FormData para coletar os dados do formulário
    var formData = new FormData(formulario);
  
    // Envia os dados via AJAX
    fetch('/destino', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      // Exibe a resposta do servidor (caso haja)
      document.getElementById("mensagemResposta").textContent = data.mensagem;
    })
    .catch(error => {
      console.error('Erro ao enviar o formulário:', error);
    });
  }
  