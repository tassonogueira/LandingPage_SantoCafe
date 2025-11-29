// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Santo Café - Landing Page carregada!');
    
    // Populate menu with product cards
    const menuContainer = document.getElementById('menu-container');
    
    const menuItems = [
        {
            name: 'Espresso Santo',
            description: 'Nosso carro-chefe, preparado com grãos selecionados da América Central. Intenso e aromático.',
            price: 'R$ 8,90',
            image: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
        },
        {
            name: 'Cappuccino Especial',
            description: 'Cappuccino cremoso com raspas de chocolate belga e canela. Uma experiência única.',
            price: 'R$ 12,50',
            image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
        },
        {
            name: 'Croissant de Amêndoas',
            description: 'Croissant folhado artesanal recheado com creme de amêndoas e açúcar de confeiteiro.',
            price: 'R$ 9,90',
            image: 'https://images.unsplash.com/photo-1555507036-ab794f27d2e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
        }
    ];
    
    if (menuContainer) {
        // Limpar container primeiro
        menuContainer.innerHTML = '';
        
        menuItems.forEach(item => {
            const productCard = document.createElement('product-card');
            productCard.setAttribute('name', item.name);
            productCard.setAttribute('description', item.description);
            productCard.setAttribute('price', item.price);
            productCard.setAttribute('image', item.image);
            menuContainer.appendChild(productCard);
        });
        
        console.log(`✅ ${menuItems.length} cards de cardápio criados`);
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Debug: Verificar componentes carregados
    setTimeout(() => {
        console.log('🔍 Componentes carregados:');
        console.log('- order-tracker:', document.querySelector('order-tracker') ? '✅' : '❌');
        console.log('- location-finder:', document.querySelector('location-finder') ? '✅' : '❌');
        console.log('- social-proof:', document.querySelector('social-proof') ? '✅' : '❌');
        console.log('- product-card:', document.querySelectorAll('product-card').length);
    }, 500);
});