// Seleciona o input e o rótulo
const arquivoInput = document.getElementById('arquivo');
const uploadLabel = document.querySelector('.upload-botao h1');

// Adiciona um evento 'change' ao input
arquivoInput.addEventListener('change', function() {
    // Verifica se um arquivo foi selecionado
    if (arquivoInput.files.length > 0) {
        // Obtém o nome do arquivo selecionado
        const nomeArquivo = arquivoInput.files[0].name;
        // Atualiza o texto do rótulo com o nome do arquivo
        uploadLabel.textContent = nomeArquivo;
    } else {
        // Caso nenhum arquivo seja selecionado, redefine o texto
        uploadLabel.textContent = 'Faça o Upload aqui!';
    }
});

//------------------

document.getElementById('arquivo').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file && file.type === "text/plain") {
        const reader = new FileReader();
        reader.onload = function(e) {
            const content = e.target.result;
            localStorage.setItem('fileContent', content); // Armazenar conteúdo no Local Storage
            document.getElementById('editar-btn').disabled = false; // Habilitar o botão
        };
        reader.readAsText(file);
    }
});

document.getElementById('editar-btn').addEventListener('click', function() {
    window.location.href = '/pages/editar.html'; // Redirecionar para a página de edição
});