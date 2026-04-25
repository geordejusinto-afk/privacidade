// =============================================
// script.js - Dicas da Josi
// =============================================

// Configuração Tailwind
function initializeTailwind() {
    tailwind.config = {
        content: [],
        theme: {
            extend: {}
        }
    }
}

// Data atual
function mostrarDataAtual() {
    const dataElement = document.getElementById('data-atual');
    const dataDicaElement = document.getElementById('data-dica');
    
    const data = new Date(2026, 3, 24);
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    
    const dataFormatada = data.toLocaleDateString('pt-BR', options)
        .replace(/^./, str => str.toUpperCase());
    
    dataElement.textContent = dataFormatada;
    dataDicaElement.innerHTML = `
        <div class="text-sm font-medium text-gray-400">24 de abril de 2026</div>
        <div class="text-xs bg-amber-100 text-amber-700 px-3 py-1 rounded-2xl inline-block mt-1">Sexta-feira</div>
    `;
}

// Redirecionamento automático (substitui o meta refresh)


// Dark mode toggle
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    alert('🌙 Modo escuro ativado! (Em produção real, implementamos dark mode completo)');
}

// Mobile menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

// Copiar link
function copiarLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        const btn = event.currentTarget;
        const originalText = btn.innerHTML;
        btn.innerHTML = `<i class="fa-solid fa-check"></i> Copiado!`;
        setTimeout(() => { btn.innerHTML = originalText; }, 2000);
    });
}

// Salvar dica
function salvarDica() {
    alert('✅ Dica salva na sua lista de favoritos!\n\n(Na versão completa com backend, seria salva no seu perfil)');
}

// Inicialização
window.onload = function() {
    initializeTailwind();
    mostrarDataAtual();
    redirecionarAutomatico();

    console.log('%c✅ Site Dicas da Josi carregado com sucesso!', 'color:#e11d48; font-weight:bold;');
    console.log('Tecnologia usada: HTML5 + Tailwind CSS + JavaScript externo');
};
