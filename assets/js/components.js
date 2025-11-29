// ===== WEB COMPONENT 1: ORDER TRACKER =====
class OrderTracker extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = `
            <div class="order-tracker-container">
                <div class="tracker-header">
                    <h3><i class="fas fa-shipping-fast"></i> Pedidos em Andamento</h3>
                    <div class="live-badge">
                        <span class="pulse"></span>
                        AO VIVO
                    </div>
                </div>
                
                <div class="orders-list">
                    <div class="order-item">
                        <div class="order-avatar">M</div>
                        <div class="order-info">
                            <strong>Maria</strong>
                            <span>• Cappuccino + Croissant</span>
                            <div class="order-status preparing">
                                <i class="fas fa-blender"></i> Preparando
                            </div>
                        </div>
                    </div>
                    
                    <div class="order-item">
                        <div class="order-avatar">J</div>
                        <div class="order-info">
                            <strong>João</strong>
                            <span>• 2x Espresso + Torta</span>
                            <div class="order-status delivered">
                                <i class="fas fa-motorcycle"></i> Entregue
                            </div>
                        </div>
                    </div>
                    
                    <div class="order-item">
                        <div class="order-avatar">A</div>
                        <div class="order-info">
                            <strong>Ana</strong>
                            <span>• Combo Trabalho</span>
                            <div class="order-status on-the-way">
                                <i class="fas fa-road"></i> A caminho
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="tracker-footer">
                    <div class="stats">
                        <div class="stat">
                            <strong>15+</strong>
                            <span>Pedidos hoje</span>
                        </div>
                        <div class="stat">
                            <strong>4.8</strong>
                            <span>Avaliação</span>
                        </div>
                        <div class="stat">
                            <strong>30min</strong>
                            <span>Entrega média</span>
                        </div>
                    </div>
                    
                    <a href="https://www.ifood.com.br/busca?q=santo+cafe" class="btn btn-warning btn-sm" target="_blank">
                        <i class="fas fa-plus"></i> Fazer Meu Pedido
                    </a>
                </div>
            </div>
        `;
    }
}

// ===== WEB COMPONENT 2: LOCATION FINDER =====
class LocationFinder extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = `
            <div class="location-finder-container">
                <div class="location-card">
                    <div class="map-preview">
                        <div class="map-placeholder">
                            <i class="fas fa-map-marked-alt"></i>
                            <p>Visualização do Mapa</p>
                            <small>Rua Luiz de Camões, 337 - Porto Alegre</small>
                        </div>
                    </div>
                    
                    <div class="location-actions">
                        <div class="action-item">
                            <i class="fas fa-car"></i>
                            <div>
                                <strong>Como Chegar</strong>
                                <p>Navegação passo a passo</p>
                            </div>
                            <a href="https://maps.google.com/?q=Rua Luiz de Camões, 337 - Santo Antônio, Porto Alegre - RS" 
                               class="btn btn-outline-primary btn-sm" target="_blank">
                                <i class="fas fa-directions"></i>
                            </a>
                        </div>
                        
                        <div class="action-item">
                            <i class="fas fa-clock"></i>
                            <div>
                                <strong>Horário de Funcionamento</strong>
                                <p>Segunda a Sábado: 9h-21h</p>
                            </div>
                        </div>
                        
                        <div class="action-item">
                            <i class="fas fa-parking"></i>
                            <div>
                                <strong>Estacionamento</strong>
                                <p>Grátis no local</p>
                            </div>
                        </div>
                        
                        <div class="action-item">
                            <i class="fas fa-wifi"></i>
                            <div>
                                <strong>Wi-Fi Grátis</strong>
                                <p>Para clientes</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="visit-cta">
                        <a href="https://maps.google.com/?q=Rua Luiz de Camões, 337 - Santo Antônio, Porto Alegre - RS" 
                           class="btn btn-primary w-100" target="_blank">
                            <i class="fas fa-road"></i> Ver Rota no Google Maps
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
}

// ===== WEB COMPONENT 3: SOCIAL PROOF =====
class SocialProof extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = `
            <div class="social-proof-container">
                <h2 class="text-center mb-5">O que Nossos Clientes Dizem</h2>
                
                <div class="proof-stats">
                    <div class="stat-card">
                        <div class="stat-number">4.8</div>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <div class="stat-label">Avaliação no iFood</div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-number">500+</div>
                        <div class="stat-icon"><i class="fas fa-users"></i></div>
                        <div class="stat-label">Clientes Satisfeitos</div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-number">98%</div>
                        <div class="stat-icon"><i class="fas fa-thumbs-up"></i></div>
                        <div class="stat-label">Recomendam</div>
                    </div>
                </div>
                
                <div class="reviews-grid">
                    <div class="review-item">
                        <div class="review-header">
                            <div class="reviewer">Carlos Silva</div>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                        <p>"Melhor café da região! Sempre peço no iFood e chega rápido e quentinho."</p>
                        <div class="review-source">
                            <i class="fab fa-ifood"></i> iFood
                        </div>
                    </div>
                    
                    <div class="review-item">
                        <div class="review-header">
                            <div class="reviewer">Ana Costa</div>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                        <p>"Ambiente incrível para trabalhar. Wi-Fi ótimo e o cappuccino é divino!"</p>
                        <div class="review-source">
                            <i class="fab fa-google"></i> Google
                        </div>
                    </div>
                    
                    <div class="review-item">
                        <div class="review-header">
                            <div class="reviewer">Pedro Santos</div>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                        <p>"Os combos são perfeitos para o dia a dia. Entrega sempre no prazo!"</p>
                        <div class="review-source">
                            <i class="fab fa-ifood"></i> iFood
                        </div>
                    </div>
                </div>
                
                <div class="proof-cta text-center mt-5">
                    <a href="https://www.ifood.com.br/busca?q=santo+cafe" class="btn btn-light btn-lg" target="_blank">
                        <i class="fas fa-utensils"></i> Experimente Você Também
                    </a>
                </div>
            </div>
        `;
    }
}

// ===== WEB COMPONENT 4: PRODUCT CARD (Mantido para o menu) =====
class ProductCard extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        const name = this.getAttribute('name') || 'Produto';
        const description = this.getAttribute('description') || 'Descrição do produto';
        const price = this.getAttribute('price') || 'R$ 0,00';
        const image = this.getAttribute('image') || 'https://via.placeholder.com/300x200';
        
        this.innerHTML = `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card product-card h-100">
                    <img src="${image}" class="card-img-top" alt="${name}" style="height: 200px; object-fit: cover;">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text flex-grow-1">${description}</p>
                        <div class="d-flex justify-content-between align-items-center mt-auto">
                            <span class="h5 text-primary mb-0">${price}</span>
                            <button class="btn btn-outline-primary btn-sm">Adicionar</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// ===== REGISTRAR TODOS OS WEB COMPONENTS =====
customElements.define('order-tracker', OrderTracker);
customElements.define('location-finder', LocationFinder);
customElements.define('social-proof', SocialProof);
customElements.define('product-card', ProductCard);