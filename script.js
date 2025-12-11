document.addEventListener('DOMContentLoaded', () => {
    const toastContainer = document.getElementById('toast-container');
    const screenIntro = document.getElementById('screen-intro');
    const screenMessage = document.getElementById('screen-message');
    const btnReveal = document.getElementById('btn-reveal');

    // --- Lógica dos Toasts (Notificações) ---
    const gifts = [
        { icon: '🎁', text: 'Conectando ao amigo secreto...' },
        { icon: '🍫', text: 'Caixa de Bombom Garoto (com Caribe!) detectada.' },
        { icon: '✨', text: 'Tudo pronto.' }
    ];

    let delay = 500;

    gifts.forEach((gift) => {
        setTimeout(() => {
            createToast(gift.icon, gift.text);
        }, delay);
        delay += 1800;
    });

    function createToast(icon, text) {
        // Só mostra toasts se estiver na primeira tela
        if (screenIntro.classList.contains('hidden')) return;

        const bubble = document.createElement('div');
        bubble.classList.add('chat-bubble');
        
        bubble.innerHTML = `
            <span class="toast-icon">${icon}</span>
            <span class="toast-text">${text}</span>
        `;

        toastContainer.appendChild(bubble);

        setTimeout(() => {
            bubble.style.opacity = '0';
            bubble.style.transition = 'opacity 0.5s';
            setTimeout(() => bubble.remove(), 500);
        }, 4000); 
    }

    // --- Lógica de Troca de Tela ---
    btnReveal.addEventListener('click', () => {
        // Limpa toasts pendentes
        toastContainer.innerHTML = '';
        
        // Esconde a tela de intro
        screenIntro.classList.add('hidden');
        
        // Mostra a tela da mensagem com uma pequena animação do CSS
        screenMessage.classList.remove('hidden');
    });
});