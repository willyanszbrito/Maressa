document.addEventListener('DOMContentLoaded', () => {
    const toastContainer = document.getElementById('toast-container');

    // Sequência de "entregas" virtuais
    const gifts = [
        { icon: '🎁', text: 'Preparando seu presente...' },
        { icon: '🍫', text: 'Caixa de Bombom Garoto (com Caribe!) entregue.' },
        { icon: '🍌', text: 'Bala Fini de Banana adicionada ao pacote.' },
        { icon: '✨', text: 'Tudo pronto. Pode entrar!' }
    ];

    let delay = 500;

    gifts.forEach((gift) => {
        setTimeout(() => {
            createToast(gift.icon, gift.text);
        }, delay);
        delay += 2000; // Intervalo entre as mensagens
    });

    function createToast(icon, text) {
        const bubble = document.createElement('div');
        bubble.classList.add('chat-bubble');
        
        bubble.innerHTML = `
            <span class="toast-icon">${icon}</span>
            <span class="toast-text">${text}</span>
        `;

        toastContainer.appendChild(bubble);

        // Remove a notificação após 5 segundos para não poluir a tela
        setTimeout(() => {
            bubble.style.opacity = '0';
            bubble.style.transition = 'opacity 0.5s';
            setTimeout(() => bubble.remove(), 500);
        }, 5000); 
    }
});