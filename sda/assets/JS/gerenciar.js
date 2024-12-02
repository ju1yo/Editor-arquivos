window.onload = function() {
    const savedFile = JSON.parse(localStorage.getItem('savedFile'));
    if (savedFile) {
        const gerenciarItem = document.getElementById('gerenciar-item');
        gerenciarItem.innerHTML += `
            <img src="/assets/image/perfil.png" alt="">
            <p>Novo Arquivo</p>
            <i class="ri-download-cloud-2-line" id="cloud" onclick="downloadFile('${savedFile.fileName}', '${encodeURIComponent(savedFile.content)}')"></i>
            <i class="ri-delete-bin-7-line" id="trash" onclick="deleteFile(this)"></i>
        `;
    }
};

function downloadFile(fileName, encodedContent) {
    // Decodificar o conteúdo antes de usá-lo
    const content = decodeURIComponent(encodedContent);

    // Remover qualquer extensão .html do nome do arquivo
    const fileNameWithoutHtml = fileName.replace(/\.html$/, '').trim(); // Remove a extensão .html, se existir

    // Garantir que o nome do arquivo tenha a extensão .txt
    const fileNameWithTxtExtension = "NOVOARQUIVO.TXT";  // Definindo o nome fixo como "NOVOARQUIVO.TXT"

    // Remover qualquer conteúdo HTML do conteúdo do arquivo
    const plainTextContent = content.replace(/<\/?[^>]+(>|$)/g, ""); // Remove todas as tags HTML

    // Criando um Blob com o conteúdo do arquivo (somente texto)
    const blob = new Blob([plainTextContent], { type: 'text/plain' });
    const link = document.createElement('a');

    // Criar uma URL para o Blob
    link.href = URL.createObjectURL(blob);

    // Definir o nome do arquivo a ser baixado como "NOVOARQUIVO.TXT"
    link.download = fileNameWithTxtExtension;

    // Acionar o clique no link para fazer o download
    link.click();

    // Liberar a URL do Blob após o download
    URL.revokeObjectURL(link.href);
}

function deleteFile(element) {
    const gerenciarItem = element.parentElement;
    gerenciarItem.remove();
    localStorage.removeItem('savedFile'); // Limpar o arquivo salvo
}
