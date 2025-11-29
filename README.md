## Santo Café - Landing Page
Landing page desenvolvida para a Santo Café Cafeteria, focada em performance, conversão e experiência do usuário. O projeto utiliza uma abordagem moderna com Web Components e design responsivo.

## Estrutura Técnica
Arquitetura de Pastas:

santo-cafe/
├── index.html
├── assets/
│   ├── css/
│   │   ├── style.css (estilos principais e variáveis)
│   │   └── components.css (estilos dos componentes)
│   ├── js/
│   │   ├── main.js (inicialização e lógica principal)
│   │   ├── components.js (Web Components customizados)
│   │   ├── music-player.js (controle de áudio)
│   │   ├── click-effects.js (interações de clique)
│   │   └── scroll-effects.js (animações no scroll)
│   ├── images/ (assets visuais)
│   └── audio/ (trilha sonora ambiente)

## Web Components Implementados
Product Card
Componente reutilizável para exibição de produtos do cardápio, com atributos para nome, descrição, preço, imagem e categoria.

Review Carousel
Sistema de carrossel para depoimentos de clientes, com navegação suave e indicadores de progresso.

Combo Counter
Componente promocional que exibe contadores para combos especiais, com suporte a preços originais e descontos.

Location Finder
Integração com mapas para localização da cafeteria, incluindo informações de endereço e horários de funcionamento.

## Funcionalidades Principais
Sistema de música ambiente com controles personalizados

Navegação por anchors com scroll suave

Efeitos visuais interativos em cliques e hover

Design totalmente responsivo com breakpoints mobile-first

Integração nativa com iFood, WhatsApp e Google Maps

Modal de produtos com galeria de imagens

Formulário de newsletter com validação

## Tecnologias e Dependências
HTML5 Semântico para estruturação

CSS3 com Custom Properties (variáveis CSS)

JavaScript ES6+ com módulos

Bootstrap 5.3.0 para grid e componentes base

Font Awesome 6.4.0 para ícones

Web Components API para elementos customizados

## Características Técnicas
Performance otimizada com carregamento seletivo de recursos

Acessibilidade com ARIA labels e navegação por teclado

SEO friendly com meta tags estruturadas

Código modular e componentizado para fácil manutenção

Variáveis CSS centralizadas para consistência visual

Event delegation para eficiência em eventos

## Estrutura de Desenvolvimento
O projeto segue uma arquitetura component-based, onde cada funcionalidade é encapsulada em seu próprio módulo JavaScript e conjunto de estilos. A comunicação entre componentes é feita através de Custom Events e propriedades, mantendo o acoplamento baixo.

Os estilos utilizam CSS Variables para temas e cores, facilitando a customização. A lógica JavaScript é dividida em módulos especializados, cada um responsável por uma funcionalidade específica.ot {
    --primary-color: #8B4513;
    --secondary-color: #D2B48C;
    --accent-color: #556B2F;
    --light-color: #F5F5DC;
    --dark-color: #3E2723;
}
