document.addEventListener('DOMContentLoaded', () => {
    const toastContainer = document.getElementById('toast-container');
    const screenIntro = document.getElementById('screen-intro');
    const screenMessage = document.getElementById('screen-message');
    const btnReveal = document.getElementById('btn-reveal');
    const typingContainer = document.getElementById('typing-container');

    // O Texto da Carta Expandido
    const letterText = `Querida Maressa,

Não queria deixar este momento passar em branco, mesmo de longe.

Aproveito para reforçar o quanto admiro a sua força inabalável diante dos desafios. Você inspira muito! Mas o que te torna única é esse carisma e a capacidade de manter um sorriso doce mesmo nas adversidades.

Você é uma pessoa incrível e muito amável.

Com carinho,
Will.`;

    // --- Lógica dos Toasts (Notificações na tela 1) ---
    const gifts = [
        { icon: '🎁', text: 'Conectando ao amigo secreto...' },
        { icon: '🍫', text: 'Caixa de Bombom Garoto (com Caribe!) detectada.' },
        { icon: '✨', text: 'Uma mensagem especial aguarda.' }
    ];

    let delay = 500;

    gifts.forEach((gift) => {
        setTimeout(() => {
            createToast(gift.icon, gift.text);
        }, delay);
        delay += 1800;
    });

    function createToast(icon, text) {
        if (screenIntro.classList.contains('hidden')) return;

        const bubble = document.createElement('div');
        bubble.classList.add('chat-bubble');
        bubble.innerHTML = `<span class="toast-icon">${icon}</span><span class="toast-text">${text}</span>`;
        toastContainer.appendChild(bubble);

        setTimeout(() => {
            bubble.style.opacity = '0';
            bubble.style.transition = 'opacity 0.5s';
            setTimeout(() => bubble.remove(), 500);
        }, 4000); 
    }

    // --- Lógica de Troca de Tela e Animação da Carta ---
    btnReveal.addEventListener('click', () => {
        toastContainer.innerHTML = ''; // Limpa notificações
        screenIntro.classList.add('hidden');
        screenMessage.classList.remove('hidden');

        // Inicia a animação de digitação
        typeWriter(letterText, typingContainer);
    });

    // Função que faz o efeito de máquina de escrever
    function typeWriter(text, element) {
        let i = 0;
        element.innerHTML = ''; // Limpa o container
        element.classList.add('typing-cursor'); // Adiciona o cursor piscando

        function typing() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                // Velocidade da digitação (quanto menor o número, mais rápido)
                setTimeout(typing, 50); 
            } else {
                // Remove o cursor quando termina
                element.classList.remove('typing-cursor');
            }
        }
        typing();
    }
});