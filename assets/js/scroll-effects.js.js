// ===== SISTEMA DE SCROLL E BOTÕES FLUTUANTES =====

class ScrollEffects {
    constructor() {
        this.navbar = document.getElementById('mainNavbar');
        this.floatingButtons = document.querySelector('.floating-buttons-mobile');
        this.lastScrollY = window.scrollY;
        this.scrolling = false;
        
        this.init();
    }
    
    init() {
        // Event listener para scroll
        window.addEventListener('scroll', () => this.handleScroll());
        
        // Event listener para resize (responsividade)
        window.addEventListener('resize', () => this.handleResize());
        
        // Inicializar estado
        this.handleResize();
        console.log('🎯 Sistema de scroll effects ativado!');
    }
    
    handleScroll() {
        if (!this.scrolling) {
            window.requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;
                
                // Controlar navbar - esconder ao rolar para baixo
                if (currentScrollY > this.lastScrollY && currentScrollY > 100) {
                    // Rolando para baixo - esconder navbar
                    this.navbar.classList.add('hidden');
                } else {
                    // Rolando para cima - mostrar navbar
                    this.navbar.classList.remove('hidden');
                }
                
                // Controlar botões flutuantes no mobile
                if (window.innerWidth <= 768) {
                    if (currentScrollY > 300) {
                        this.floatingButtons.style.display = 'flex';
                    } else {
                        this.floatingButtons.style.display = 'none';
                    }
                }
                
                this.lastScrollY = currentScrollY;
                this.scrolling = false;
            });
            
            this.scrolling = true;
        }
    }
    
    handleResize() {
        // Esconder botões flutuantes no desktop
        if (window.innerWidth > 768) {
            this.floatingButtons.style.display = 'none';
        } else {
            // No mobile, verificar se deve mostrar baseado no scroll
            if (window.scrollY > 300) {
                this.floatingButtons.style.display = 'flex';
            } else {
                this.floatingButtons.style.display = 'none';
            }
        }
    }
}

// ===== SISTEMA DE CLIQUE NA PÁGINA INTEIRA =====

class ClickEffects {
    constructor() {
        this.init();
    }
    
    init() {
        // Adicionar efeito de clique em todos os elementos clicáveis
        document.addEventListener('click', (e) => {
            this.createClickEffect(e);
        });
        
        console.log('🎯 Sistema de click effects ativado!');
    }
    
    createClickEffect(event) {
        // Não aplicar em inputs e textareas
        if (event.target.matches('input, textarea, select, button, a')) {
            return;
        }
        
        const x = event.clientX;
        const y = event.clientY;
        
        const ripple = document.createElement('div');
        ripple.className = 'click-ripple';
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        document.body.appendChild(ripple);
        
        // Remover após animação
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
}

// ===== INICIALIZAÇÃO =====

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar efeitos de scroll
    window.scrollEffects = new ScrollEffects();
    
    // Inicializar efeitos de clique
    window.clickEffects = new ClickEffects();
    
    // Sistema unificado de controle de música
    const musicControls = [
        document.getElementById('musicControl'),
        document.getElementById('musicControlHeader')
    ];
    
    const backgroundMusic = document.getElementById('backgroundMusic');
    let musicPlaying = false;
    
    function toggleMusic() {
        if (musicPlaying) {
            backgroundMusic.pause();
            musicPlaying = false;
            musicControls.forEach(control => {
                control.classList.remove('playing');
            });
        } else {
            backgroundMusic.play().catch(error => {
                console.log('Reprodução automática bloqueada. Clique novamente.');
            });
            musicPlaying = true;
            musicControls.forEach(control => {
                control.classList.add('playing');
            });
        }
    }
    
    // Adicionar event listeners para todos os controles de música
    musicControls.forEach(control => {
        if (control) {
            control.addEventListener('click', toggleMusic);
        }
    });
    
    // Configurar música para volume baixo
    if (backgroundMusic) {
        backgroundMusic.volume = 0.3;
    }
    
    console.log('✅ Todos os sistemas de efeitos carregados!');
});

// ===== ESTILOS DINÂMICOS PARA EFEITOS DE CLIQUE =====

const clickStyles = document.createElement('style');
clickStyles.textContent = `
    .click-ripple {
        position: fixed;
        width: 20px;
        height: 20px;
        background: rgba(139, 69, 19, 0.3);
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(0);
        animation: clickRipple 0.6s ease-out;
        pointer-events: none;
        z-index: 99999;
    }
    
    @keyframes clickRipple {
        to {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
        }
    }
    
    /* Efeito de clique em elementos interativos */
    .btn, .nav-link, .music-control, .music-control-header,
    .floating-btn, product-card .card, combo-counter .card,
    .review-card, .action-item, .info-item {
        transition: all 0.2s ease-in-out;
    }
    
    .btn:active, .nav-link:active, .music-control:active,
    .music-control-header:active, .floating-btn:active,
    product-card .card:active, combo-counter .card:active,
    .review-card:active, .action-item:active, .info-item:active {
        transform: scale(0.97);
    }
`;

document.head.appendChild(clickStyles);