// Utilizado .addEventListener para executar o bloco após o carregamento do DOM, evitando erros de carregamento
document.addEventListener('DOMContentLoaded', () => {

    // Coleta todos os links da navegação e todas as seções de conteúdo
    const linksNavegacao = document.querySelectorAll('header nav ul li a');
    const secoesConteudo = document.querySelectorAll('.secaoConteudo');

    // Função para mostrar a seção selecionada pela barra de navegação
    const mostrarSecao = (idAlvo) => {

        // Remove a classe 'ativa' de todas as seções
        secoesConteudo.forEach(secao => {
            secao.classList.remove('ativa');
        });

        // Remove a classe 'ativo' de todos os links de navegação
        linksNavegacao.forEach(link => {
            link.classList.remove('ativo');
        });

        // Adiciona a classe 'ativa' à seção correspondente ao ID selecionado
        const secaoAlvo = document.querySelector(idAlvo);
        if (secaoAlvo) {
            secaoAlvo.classList.add('ativa');
        }

        // Adiciona a classe 'ativo' ao link correspondente ao ID selecionado
        const linkAtivo = document.querySelector(`header nav ul li a[href="${idAlvo}"]`);
        if (linkAtivo) {
            linkAtivo.classList.add('ativo');
        }
    };

    // Adiciona um evento de clique a cada link da navegação
    linksNavegacao.forEach(link => {
        link.addEventListener('click', (evento) => {
            // Remove o comportamento padrão do link de rolar a página
            evento.preventDefault();

            // Coleta o ID da seção selecionada usando o atributo href do link
            const idAlvo = link.getAttribute('href');

            // Chama a função para mostrar a seção correspondente
            mostrarSecao(idAlvo);
        });
    });

    //Chama a função automaticamente ao carregar a página na seção inicial "Sobre"
    mostrarSecao('#sobre');

    // Balão de sucesso do formulário
    // Seleciona o formulário de contato e o balão de sucesso
    const formulario = document.getElementById('formularioContato');
    const balao = document.getElementById('balaoSucesso');
    // Utilizado .addEventListener para adicionar o evento ao detectar o submit do formulário
    formulario.addEventListener('submit', function(e) {
        // Previne o comportamento padrão do formulário
        e.preventDefault();
        // Limpa os campos do formulário
        formulario.reset();
        // Exibe o balão de sucesso com animação
        // Utilizado .style.display para exibir o balão de sucesso
        balao.style.display = 'block';
        // Utilizado .style.animation para aplicar a animação de fadeIn
        // Utilizado forwards para manter o estado final da animação
        balao.style.animation = 'fadeIn 0.5s forwards';
        // Utilizado setTimeout para remover o balão de sucesso após 2.5 segundos
        setTimeout(() => {
            // Utilizado .style.animation para aplicar a animação de fadeOut durante 0.5 segundos
            balao.style.animation = 'fadeOut 0.5s forwards';
            // Utilizado setTimeout para ocultar o balão de sucesso após a animação de fadeOut wm 0.5 segundos
            setTimeout(() => {
                balao.style.display = 'none';
                balao.style.animation = '';
            }, 500);
        }, 2500);
    });
});