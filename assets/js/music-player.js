// ===== SISTEMA DE MÚSICA AMBIENTE =====
class MusicPlayer {
    constructor() {
        this.audioElement = document.getElementById('backgroundMusic');
        this.controlElement = document.getElementById('musicControl');
        this.isPlaying = false;
        this.volume = 0.3;
        
        this.init();
    }
    
    init() {
        // Configurar volume
        this.audioElement.volume = this.volume;
        
        // Event listeners
        this.controlElement.addEventListener('click', () => this.togglePlayback());
        
        // Eventos de teclado para controle de música
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
        
        // Tentar reproduzir automaticamente (com tratamento de erro)
        this.attemptAutoPlay();
        
        // Atualizar ícone baseado no estado
        this.updateIcon();
    }
    
    attemptAutoPlay() {
        const playPromise = this.audioElement.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                this.isPlaying = true;
                this.updateIcon();
            }).catch(error => {
                console.log('Reprodução automática impedida. O usuário precisa interagir primeiro.');
                this.isPlaying = false;
                this.updateIcon();
            });
        }
    }
    
    togglePlayback() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }
    
    play() {
        const playPromise = this.audioElement.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                this.isPlaying = true;
                this.updateIcon();
                this.showNotification('Música ligada');
            }).catch(error => {
                console.error('Erro ao reproduzir música:', error);
                this.showNotification('Clique para ativar a música', 'error');
            });
        }
    }
    
    pause() {
        this.audioElement.pause();
        this.isPlaying = false;
        this.updateIcon();
        this.showNotification('Música pausada');
    }
    
    updateIcon() {
        const icon = this.controlElement.querySelector('i');
        if (icon) {
            icon.className = this.isPlaying ? 'fas fa-pause' : 'fas fa-music';
        }
    }
    
    handleKeyboard(event) {
        // Espaço para play/pause
        if (event.code === 'Space' && !event.target.matches('input, textarea')) {
            event.preventDefault();
            this.togglePlayback();
        }
        
        // Setas para volume
        if (event.code === 'ArrowUp') {
            event.preventDefault();
            this.adjustVolume(0.1);
        } else if (event.code === 'ArrowDown') {
            event.preventDefault();
            this.adjustVolume(-0.1);
        }
    }
    
    adjustVolume(change) {
        this.volume = Math.max(0, Math.min(1, this.volume + change));
        this.audioElement.volume = this.volume;
        
        this.showNotification(`Volume: ${Math.round(this.volume * 100)}%`);
    }
    
    showNotification(message, type = 'info') {
        // Criar notificação temporária
        const notification = document.createElement('div');
        notification.className = `music-notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            bottom: 100px;
            right: 20px;
            background: var(--primary-color);
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            z-index: 1001;
            font-size: 0.9rem;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Remover após 2 segundos
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 2000);
    }
    
    // Método para trocar a música
    changeTrack(trackUrl) {
        this.audioElement.src = trackUrl;
        this.audioElement.load();
        
        if (this.isPlaying) {
            this.audioElement.play().catch(error => {
                console.error('Erro ao trocar de música:', error);
            });
        }
    }
}

// ===== INICIALIZAR MUSIC PLAYER =====
document.addEventListener('DOMContentLoaded', function() {
    window.musicPlayer = new MusicPlayer();
    
    // Adicionar estilos para as notificações
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        
        .music-notification.error {
            background: #dc3545 !important;
        }
        
        .music-notification.success {
            background: #28a745 !important;
        }
    `;
    document.head.appendChild(style);
});