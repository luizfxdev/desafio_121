// Mapeamento dos dragões e seus cavaleiros vencedores
const dragonWeaknesses = {
    'Fogo': 'Água',
    'Água': 'Terra',
    'Terra': 'Fogo',
    'Ar': 'Terra'
};

// Elementos do DOM
const dragonInput = document.getElementById('dragon-type');
const revealBtn = document.getElementById('reveal-btn');
const returnBtn = document.getElementById('return-btn');
const resultText = document.getElementById('result-text');

// Função para determinar o cavaleiro vencedor
function determineKnight(dragonType) {
    // Converte a entrada para capitalizada (primeira letra maiúscula)
    const formattedType = dragonType.charAt(0).toUpperCase() + dragonType.slice(1).toLowerCase();

    // Verifica se o tipo de dragão é válido
    if (dragonWeaknesses.hasOwnProperty(formattedType)) {
        return `Cavaleiro de ${dragonWeaknesses[formattedType]}`;
    } else {
        return 'Tipo de dragão desconhecido! Use Fogo, Água, Terra ou Ar.';
    }
}

// Event listener para o botão DESVENDAR
revealBtn.addEventListener('click', () => {
    const dragonType = dragonInput.value.trim();

    if (dragonType) {
        const result = determineKnight(dragonType);
        resultText.textContent = result;

        // Efeito visual no resultado
        resultText.style.animation = 'none';
        void resultText.offsetWidth; // Trigger reflow
        resultText.style.animation = 'fadeIn 0.5s ease-in-out';
    } else {
        resultText.textContent = 'Por favor, digite um tipo de dragão.';
    }
});

// Event listener para o botão RETORNAR
returnBtn.addEventListener('click', () => {
    dragonInput.value = '';
    resultText.textContent = '';

    // Efeito visual no input
    dragonInput.style.animation = 'none';
    void dragonInput.offsetWidth; // Trigger reflow
    dragonInput.style.animation = 'fadeIn 0.5s ease-in-out';
    dragonInput.focus();
});

// Adiciona animação de fadeIn ao CSS dinamicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// Permite submeter com Enter
dragonInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        revealBtn.click();
    }
});