window.onload = function() {
    // Verifica se há conteúdo salvo no localStorage
    const content = localStorage.getItem('fileContent');
    if (content) {
        // Inicializa o TinyMCE com o conteúdo salvo
        tinymce.init({
            selector: 'textarea#default',
            width: 900,
            height: 800,
            setup: (editor) => {
                editor.on('init', () => {
                    editor.setContent(content); // Preenche o editor com o conteúdo salvo
                });
            },
            plugins: [
                'advlist autolink link image lists charmap preview anchor pagebreak',
                'searchreplace wordcount visualblocks code fullscreen insertdatetime media table',
                'emoticons template codesample'
            ],
            toolbar: 'undo redo | styles | bold italic underline | alignleft aligncenter alignright alignjustify | ' +
                     'bullist numlist outdent indent | link image | print preview media fullscreen | ' +
                     'forecolor backcolor emoticons',
            menubar: 'favs file edit view insert format tools table',
            content_style: 'body{font-family:Helvetica,Arial,sans-serif; font-size:16px}'
        });
    } else {
        console.log("Nenhum conteúdo encontrado no Local Storage.");
    }
};

// Ao clicar em Salvar
document.getElementById('save-btn').addEventListener('click', function() {
    // Recupera o conteúdo do TinyMCE, incluindo todas as formatações HTML
    const content = tinymce.get('default').getContent();
    const fileName = 'Arquivoteste.html'; // Alterei para .html para garantir que as formatações HTML sejam mantidas

    // Armazenar o conteúdo e o nome do arquivo no localStorage
    localStorage.setItem('savedFile', JSON.stringify({ content, fileName }));

    // Redireciona para a página de gerenciamento
    window.location.href = 'gerenciar.html'; // Caminho correto
});
