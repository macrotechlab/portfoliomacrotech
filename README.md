<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zoomp Academia | Transforme Seu Corpo e Sua Energia</title>
    <meta name="description" content="Academia moderna com musculação, funcional, bike indoor e acompanhamento profissional.">
    <meta name="keywords" content="academia, musculação, fitness, treino, saúde, bem-estar">
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

    <style>
        /* Design System Variables */
        :root {
            --primary: #39FF14;
            --secondary: #8A4DFF;
            --background: #050505;
            --surface: #111111;
            --surface-alt: #1A1A1A;
            --text-primary: #FFFFFF;
            --text-secondary: #B3B3B3;
            --border: #2A2A2A;
            
            --font-heading: 'Bebas Neue', sans-serif;
            --font-body: 'Inter', sans-serif;
            
            --radius-card: 20px;
            --radius-btn: 999px;
            --radius-input: 16px;
            
            --max-width: 1280px;
        }

        /* Base & Reset */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: var(--font-body); background-color: var(--background); color: var(--text-primary); line-height: 1.6; }
        h1, h2, h3, h4 { font-family: var(--font-heading); letter-spacing: 1px; }
        a { text-decoration: none; color: inherit; transition: color 0.3s ease; }
        img { max-width: 100%; height: auto; }
        
        /* Container */
        .container { max-width: var(--max-width); margin: 0 auto; padding: 0 16px; }

        /* Buttons */
        .btn {
            display: inline-block;
            padding: 12px 24px;
            border-radius: var(--radius-btn);
            font-weight: 600;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .btn-primary {
            background-color: var(--primary);
            color: #000000;
            box-shadow: 0 0 15px rgba(57, 255, 20, 0.4);
        }
        .btn-primary:hover { box-shadow: 0 0 25px rgba(57, 255, 20, 0.6); }
        .btn-secondary {
            background-color: transparent;
            color: var(--text-primary);
            border: 2px solid var(--text-primary);
        }
        .btn-secondary:hover { background-color: var(--text-primary); color: #000; }

        /* Header (Sticky Navigation) */
        header {
            position: sticky; top: 0; z-index: 100;
            background-color: rgba(17, 17, 17, 0.95);
            border-bottom: 1px solid var(--border);
            padding: 16px 0;
        }
        .nav-container { display: flex; justify-content: space-between; align-items: center; }
        .logo { font-family: var(--font-heading); font-size: 2rem; color: var(--primary); font-weight: bold; }
        .desktop-menu { display: none; }
        .hamburger { font-size: 1.5rem; cursor: pointer; color: var(--text-primary); }
        
        /* Hero Section */
        .hero {
            background: linear-gradient(to bottom, rgba(5,5,5,0.4), rgba(5,5,5,1)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop') center/cover;
            padding: 80px 0 40px;
            text-align: center;
            min-height: 80vh;
            display: flex;
            align-items: center;
        }
        .hero h1 { font-size: 3.5rem; margin-bottom: 16px; line-height: 1.1; }
        .hero p { font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 32px; }
        .hero-btns { display: flex; flex-direction: column; gap: 16px; align-items: center; width: 100%; }
        .hero-btns .btn { width: 100%; max-width: 280px; }

        /* Trust Bar (Social Proof) */
        .trust-bar {
            background-color: var(--surface);
            padding: 32px 0;
            border-top: 1px solid var(--border);
            border-bottom: 1px solid var(--border);
        }
        .trust-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; text-align: center; }
        .trust-item span { font-weight: 600; color: var(--primary); display: block; margin-top: 8px; }

        /* About Section (Split Content) */
        .about { padding: 64px 0; }
        .about-grid { display: grid; gap: 32px; }
        .about-img { border-radius: var(--radius-card); overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
        .about h2 { font-size: 2.5rem; margin-bottom: 16px; color: var(--primary); }
        .stats { display: flex; gap: 24px; margin-top: 32px; }
        .stat h3 { font-size: 2.5rem; color: var(--text-primary); line-height: 1; }
        .stat p { color: var(--text-secondary); font-size: 0.9rem; }

        /* Services Grid (Modalidades) */
        .services { padding: 64px 0; background-color: var(--surface-alt); }
        .services h2 { text-align: center; font-size: 2.5rem; margin-bottom: 48px; padding: 0 16px; }
        .services-grid { display: grid; grid-template-columns: 1fr; gap: 16px; padding: 0 16px; }
        .service-card { 
            background: var(--surface); 
            padding: 32px 24px; 
            border-radius: var(--radius-card); 
            text-align: center; 
            border: 1px solid var(--border);
            font-family: var(--font-heading);
            font-size: 1.8rem;
            letter-spacing: 1px;
            transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .service-card:hover { transform: translateY(-5px); border-color: var(--primary); }

        /* Pricing Cards */
        .pricing { padding: 64px 0; }
        .pricing h2 { text-align: center; font-size: 2.5rem; margin-bottom: 48px; }
        .pricing-grid { display: grid; gap: 32px; }
        .price-card { background: var(--surface); padding: 40px 32px; border-radius: var(--radius-card); text-align: center; border: 1px solid var(--border); display: flex; flex-direction: column; justify-content: space-between; }
        .price-card.featured { border-color: var(--primary); box-shadow: 0 0 30px rgba(57,255,20,0.15); position: relative; }
        .badge { position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: var(--primary); color: #000; padding: 6px 16px; border-radius: var(--radius-btn); font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }
        .price-card h3 { font-size: 2.5rem; margin-bottom: 16px; }
        .price-card .price { font-size: 3rem; font-family: var(--font-heading); color: var(--text-primary); margin-bottom: 24px; }
        .price-card .price span { font-size: 1rem; font-family: var(--font-body); color: var(--text-secondary); }

        /* Conversion Banner (CTA Final) */
        .cta-final {
            background: linear-gradient(135deg, var(--secondary), var(--primary));
            padding: 64px 24px;
            text-align: center;
            border-radius: var(--radius-card);
            margin: 64px 16px;
            color: #000000;
        }
        .cta-final h2 { font-size: 3.5rem; margin-bottom: 8px; line-height: 1; }
        .cta-final p { margin-bottom: 32px; font-weight: 600; font-size: 1.1rem; }
        .cta-final .btn-primary { background-color: #000000; color: #FFFFFF; box-shadow: 0 10px 20px rgba(0,0,0,0.3); }
        .cta-final .btn-primary:hover { background-color: var(--surface); color: var(--primary); }

        /* Rodapé Completo (Footer + Contact Section) */
        footer { 
            background-color: var(--surface); 
            border-top: 1px solid var(--border); 
            padding: 64px 0 24px;
        }
        .footer-grid { 
            display: grid; 
            grid-template-columns: 1fr; 
            gap: 48px; 
            margin-bottom: 48px;
        }
        .footer-brand .logo { margin-bottom: 16px; }
        .footer-brand p { color: var(--text-secondary); font-size: 0.95rem; max-width: 320px; }
        
        .footer-heading { 
            font-family: var(--font-heading); 
            font-size: 1.5rem; 
            color: var(--primary); 
            margin-bottom: 20px; 
            letter-spacing: 1px;
        }
        
        .footer-links-list { list-style: none; }
        .footer-links-list li { margin-bottom: 12px; }
        .footer-links-list a:hover { color: var(--primary); }

        /* Contact Info Elements */
        .contact-info li { 
            display: flex; 
            align-items: flex-start; 
            gap: 12px; 
            margin-bottom: 16px; 
            color: var(--text-secondary);
            font-size: 0.95rem;
        }
        .contact-info a:hover { color: var(--primary); }
        
        /* Google Maps Container */
        .map-container { 
            border-radius: var(--radius-card); 
            overflow: hidden; 
            border: 1px solid var(--border);
            height: 200px;
            width: 100%;
        }
        .map-container iframe { width: 100%; height: 100%; border: 0; }

        /* Social Media Badges */
        .social-media { display: flex; gap: 12px; margin-top: 20px; flex-wrap: wrap; }
        .social-icon { 
            background: var(--surface-alt); 
            border: 1px solid var(--border); 
            padding: 8px 16px; 
            border-radius: var(--radius-btn); 
            font-size: 0.85rem; 
            font-weight: 500;
        }
        .social-icon:hover { border-color: var(--primary); color: var(--primary); }

        .footer-bottom { 
            border-top: 1px solid var(--border); 
            padding-top: 24px; 
            text-align: center; 
        }
        .copyright { color: var(--text-secondary); font-size: 0.85rem; }

        /* Sticky Mobile CTA */
        .sticky-mobile-cta {
            position: fixed; bottom: 0; left: 0; right: 0;
            background: rgba(17, 17, 17, 0.95);
            border-top: 1px solid var(--border);
            padding: 12px 16px;
            z-index: 99;
            display: block;
        }
        .sticky-mobile-cta .btn { width: 100%; }

        /* Media Queries (Tablet & Desktop Responsiveness) */
        @media (min-width: 768px) {
            .desktop-menu { display: flex; gap: 24px; align-items: center; list-style: none; }
            .hamburger { display: none; }
            
            .hero h1 { font-size: 5rem; }
            .hero-btns { flex-direction: row; justify-content: center; }
            .hero-btns .btn { width: auto; }
            
            .trust-grid { grid-template-columns: repeat(4, 1fr); }
            .about-grid { grid-template-columns: 1fr 1fr; align-items: center; gap: 64px; }
            .services-grid { grid-template-columns: repeat(2, 1fr); }
            .pricing-grid { grid-template-columns: repeat(3, 1fr); gap: 24px; }
            
            .footer-grid { grid-template-columns: repeat(2, 1fr); }
            .map-container { height: 250px; }
            .sticky-mobile-cta { display: none; }
            body { padding-bottom: 0; }
        }

        @media (min-width: 1024px) {
            .footer-grid { grid-template-columns: 2fr 1fr 1.5fr 2fr; gap: 32px; }
        }

        @media (min-width: 1280px) {
            .services-grid { grid-template-columns: repeat(5, 1fr); }
        }
        
        /* Ajuste de padding para o mobile por causa do botão fixo abaixo */
        @media (max-width: 767px) {
            body { padding-bottom: 80px; }
        }
    </style>
</head>
<body>

    <header>
        <div class="container nav-container">
            <a href="#inicio" class="logo">ZOOMP</a>
            <nav aria-label="Navegação Principal">
                <ul class="desktop-menu">
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#modalidades">Modalidades</a></li>
                    <li><a href="#planos">Planos</a></li>
                    <li><a href="#contato">Contato</a></li>
                    <li><a href="#planos" class="btn btn-primary">Treine Agora</a></li>
                </ul>
            </nav>
            <div class="hamburger" aria-label="Abrir menu de navegação" role="button">☰</div>
        </div>
    </header>

    <section id="inicio" class="hero">
        <div class="container">
            <h1>SEU FOCO. NOSSA ENERGIA.<br>SEUS RESULTADOS.</h1>
            <p>Mais que uma academia, um estilo de vida.</p>
            <div class="hero-btns">
                <a href="#planos" class="btn btn-primary">Treine Agora</a>
                <a href="#contato" class="btn btn-secondary">Conheça a Unidade</a>
            </div>
        </div>
    </section>

    <section class="trust-bar">
        <div class="container trust-grid">
            <div class="trust-item"><span>+500 alunos</span></div>
            <div class="trust-item"><span>Equipe qualificada</span></div>
            <div class="trust-item"><span>Resultados reais</span></div>
            <div class="trust-item"><span>Horários flexíveis</span></div>
        </div>
    </section>

    <section id="sobre" class="about container">
        <div class="about-grid">
            <div class="about-img">
                <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop" alt="Área interna moderna da Zoomp Academia" loading="lazy">
            </div>
            <div class="about-content">
                <h2>Muito mais que treino. Uma comunidade.</h2>
                <p>Ambiente moderno com acompanhamento profissional de ponta e foco total em garantir que você alcance a sua melhor performance física e mental.</p>
                <div class="stats">
                    <div class="stat"><h3>+500</h3><p>Alunos ativos</p></div>
                    <div class="stat"><h3>+10</h3><p>Modalidades</p></div>
                    <div class="stat"><h3>100%</h3><p>Foco em você</p></div>
                </div>
            </div>
        </div>
    </section>

    <section id="modalidades" class="services">
        <div class="container">
            <h2>Encontre o treino que combina com você</h2>
            <div class="services-grid">
                <div class="service-card">Musculação</div>
                <div class="service-card">Bike Indoor</div>
                <div class="service-card">Funcional</div>
                <div class="service-card">Dança</div>
                <div class="service-card">Alongamento</div>
            </div>
        </div>
    </section>

    <section id="planos" class="pricing container">
        <h2>Escolha seu plano</h2>
        <div class="pricing-grid">
            <div class="price-card">
                <div>
                    <h3>Start</h3>
                    <div class="price">R$ 99<span>/mês</span></div>
                    <p style="color: var(--text-secondary); margin-bottom: 24px;">O essencial para começar a sua jornada fitness ativa.</p>
                </div>
                <a href="#" class="btn btn-secondary">Começar</a>
            </div>
            <div class="price-card featured">
                <span class="badge">Mais Popular</span>
                <div>
                    <h3 style="color: var(--primary);">Premium</h3>
                    <div class="price">R$ 149<span>/mês</span></div>
                    <p style="color: var(--text-secondary); margin-bottom: 24px;">Acesso total livre, horário flexível e benefícios exclusivos.</p>
                </div>
                <a href="#" class="btn btn-primary">Treinar Agora</a>
            </div>
            <div class="price-card">
                <div>
                    <h3>VIP</h3>
                    <div class="price">R$ 299<span>/mês</span></div>
                    <p style="color: var(--text-secondary); margin-bottom: 24px;">Acompanhamento e consultoria altamente personalizada.</p>
                </div>
                <a href="#" class="btn btn-secondary">Quero Saber Mais</a>
            </div>
        </div>
    </section>

    <section class="cta-final container">
        <h2>Vem ser Zoomp</h2>
        <p>Sua melhor versão começa aqui</p>
        <a href="#" class="btn btn-primary">Quero Treinar</a>
    </section>

    <footer id="contato">
        <div class="container">
            <div class="footer-grid">
                
                <div class="footer-brand">
                    <div class="logo">ZOOMP</div>
                    <p>Transformando vidas através do movimento, foco e alta energia. Junte-se à nossa comunidade premium.</p>
                    <div class="social-media">
                        <a href="#" class="social-icon">Instagram</a>
                        <a href="#" class="social-icon">Facebook</a>
                        <a href="#" class="social-icon">TikTok</a>
                        <a href="#" class="social-icon">WhatsApp</a>
                    </div>
                </div>

                <div>
                    <h3 class="footer-heading">Navegação</h3>
                    <ul class="footer-links-list">
                        <li><a href="#inicio">Início</a></li>
                        <li><a href="#sobre">Sobre Nós</a></li>
                        <li><a href="#modalidades">Modalidades</a></li>
                        <li><a href="#planos">Planos e Preços</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="footer-heading">Contactos</h3>
                    <ul class="contact-info">
                        <li>
                            <span>📞 <strong>Telefone:</strong><br><a href="tel:+5511999999999">(11) 99999-9999</a></span>
                        </li>
                        <li>
                            <span>💬 <strong>WhatsApp:</strong><br><a href="https://wa.me/5511999999999" target="_blank">Enviar Mensagem</a></span>
                        </li>
                        <li>
                            <span>✉️ <strong>E-mail:</strong><br><a href="mailto:contato@zoompacademia.com.br">contato@zoompacademia.com</a></span>
                        </li>
                        <li>
                            <span>📍 <strong>Endereço:</strong><br>Av. Fitness Premium, 1000<br>São Paulo - SP</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 class="footer-heading">Localização</h3>
                    <div class="map-container">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197542258525!2d-46.65868212474811!3d-23.561349678798155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0605bb%3A0x8678de87566e9c35!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>

            </div>

            <div class="footer-bottom">
                <p class="copyright">© 2026 Zoomp Academia. Todos os direitos reservados. Termos de Uso e Políticas de Privacidade.</p>
            </div>
        </div>
    </footer>

    <div class="sticky-mobile-cta">
        <a href="#planos" class="btn btn-primary">Treine Agora</a>
    </div>

</body>
</html>

```
