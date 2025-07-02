document.addEventListener('DOMContentLoaded', function() {

    // --- Lógica das Abas ---
    // Seleciona todos os botões de aba com a classe 'tab'
    const tabButtons = document.querySelectorAll('.tab');
    // Seleciona todos os conteúdos das abas com a classe 'tab-content'
    const tabContents = document.querySelectorAll('.tab-content');

    /**
     * Função global para exibir a aba correspondente ao ID fornecido.
     * Esta função será chamada diretamente do HTML via onclick.
     * @param {string} tabId O ID do elemento div da aba a ser exibida (ex: 'roteiro', 'gastronomia', 'pontos-turisticos').
     */
    window.showTab = function(tabId) {
        // Remove a classe 'active' de todos os botões e conteúdos de aba
        tabButtons.forEach(button => button.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Adiciona a classe 'active' ao conteúdo da aba clicada
        const targetContent = document.getElementById(tabId);
        if (targetContent) {
            targetContent.classList.add('active');
        }

        // Encontra o botão correspondente à aba clicada (usando o atributo onclick)
        // e adiciona a classe 'active' a ele.
        // O seletor foi ajustado para ser robusto com o ID "pontos-turisticos".
        const activeButton = document.querySelector(`.tab[onclick="showTab('${tabId}')"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
    };

    // Ativa a primeira aba ('roteiro') por padrão ao carregar a página,
    // garantindo que um conteúdo seja visível desde o início.
    showTab('roteiro');


    // --- Lógica para Expandir/Recolher Detalhes dos Restaurantes ---
    // Seleciona todos os cards de restaurante
    const restaurantCards = document.querySelectorAll('.restaurant-card');

    restaurantCards.forEach(card => {
        // Para cada card de restaurante, encontra o botão de toggle e a div de informações extras
        const toggleButton = card.querySelector('.toggle-info-btn');
        const moreInfoDiv = card.querySelector('.more-info');

        // Garante que ambos os elementos existam antes de adicionar o event listener
        if (toggleButton && moreInfoDiv) {
            // Adiciona um listener de clique ao botão de toggle
            toggleButton.addEventListener('click', function() {
                // Alterna a classe 'show-details' na div 'moreInfoDiv'.
                // Esta classe controlará a visibilidade e transição via CSS.
                moreInfoDiv.classList.toggle('show-details');

                // Altera o texto do botão para 'Ocultar Detalhes' ou 'Ver Detalhes'
                // com base no estado atual da div 'moreInfoDiv'.
                if (moreInfoDiv.classList.contains('show-details')) {
                    toggleButton.textContent = 'Ocultar Detalhes'; // Texto quando expandido
                } else {
                    toggleButton.textContent = 'Ver Detalhes'; // Texto quando recolhido
                }
            });
        }
    });
});
