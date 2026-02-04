
        // ========================================
        // Default Configuration
        // ========================================
        const defaultConfig = {
            hero_title: 'Criando experiências digitais únicas',
            hero_subtitle: 'Developer & Streamer',
            hero_description: 'Desenvolvedor apaixonado por código e criação de conteúdo. Transformando ideias em projetos inovadores, uma linha de código por vez.',
            cta_button_text: 'Ver Projetos',
            projects_title: 'Projetos',
            work_title: 'Trabalhos',
            partners_title: 'Parceiros',
            contact_title: 'Contato',
            footer_name: 'DevStreamer',
            primary_color: '#5dfdcb',
            secondary_color: '#7d53de',
            background_color: '#001929',
            text_color: '#c3c3e6',
            accent_color: '#4ea5d9',
            font_family: 'REM',
            font_size: 16
        };

        let config = { ...defaultConfig };

        // ========================================
        // Mobile Menu Toggle
        // ========================================
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // ========================================
        // Contact Form Handling
        // ========================================
        const contactForm = document.getElementById('contactForm');
        const formSuccess = document.getElementById('formSuccess');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulate form submission
            contactForm.style.display = 'none';
            formSuccess.classList.add('show');
            
            // Reset form after 5 seconds
            setTimeout(() => {
                contactForm.reset();
                contactForm.style.display = 'block';
                formSuccess.classList.remove('show');
            }, 5000);
        });

        // ========================================
        // Smooth Scroll for Navigation
        // ========================================
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // ========================================
        // Config Change Handler - Updates UI
        // ========================================
        async function onConfigChange(newConfig) {
            config = { ...defaultConfig, ...newConfig };
            
            // Update hero section
            const heroTitle = document.getElementById('heroTitle');
            const titleText = config.hero_title || defaultConfig.hero_title;
            const words = titleText.split(' ');
            if (words.length > 2) {
                const highlightWords = words.slice(1, 3).join(' ');
                const restWords = words.slice(3).join(' ');
                heroTitle.innerHTML = `${words[0]} <span class="highlight">${highlightWords}</span> ${restWords}`;
            } else {
                heroTitle.textContent = titleText;
            }
            
            document.getElementById('heroBadge').textContent = `🎮 ${config.hero_subtitle || defaultConfig.hero_subtitle}`;
            document.getElementById('heroDescription').textContent = config.hero_description || defaultConfig.hero_description;
            document.getElementById('ctaButton').textContent = config.cta_button_text || defaultConfig.cta_button_text;
            
            // Update section titles
            document.getElementById('projectsTitle').textContent = config.projects_title || defaultConfig.projects_title;
            document.getElementById('workTitle').textContent = config.work_title || defaultConfig.work_title;
            document.getElementById('partnersTitle').textContent = config.partners_title || defaultConfig.partners_title;
            document.getElementById('contactTitle').textContent = config.contact_title || defaultConfig.contact_title;
            
            // Update footer
            document.getElementById('footerName').textContent = config.footer_name || defaultConfig.footer_name;
            
            // Update colors via CSS variables
            const root = document.documentElement;
            root.style.setProperty('--aquamarine', config.primary_color || defaultConfig.primary_color);
            root.style.setProperty('--slate-blue', config.secondary_color || defaultConfig.secondary_color);
            root.style.setProperty('--ink-black', config.background_color || defaultConfig.background_color);
            root.style.setProperty('--periwinkle', config.text_color || defaultConfig.text_color);
            root.style.setProperty('--fresh-sky', config.accent_color || defaultConfig.accent_color);
            
            // Update font
            const fontFamily = config.font_family || defaultConfig.font_family;
            root.style.setProperty('--font-family', `'${fontFamily}', sans-serif`);
            
            // Update font size proportionally
            const baseSize = config.font_size || defaultConfig.font_size;
            document.body.style.fontSize = `${baseSize}px`;
        }

        // ========================================
        // Map Config to Capabilities
        // ========================================
        function mapToCapabilities(config) {
            return {
                recolorables: [
                    {
                        get: () => config.background_color || defaultConfig.background_color,
                        set: (value) => {
                            config.background_color = value;
                            window.elementSdk.setConfig({ background_color: value });
                        }
                    },
                    {
                        get: () => config.text_color || defaultConfig.text_color,
                        set: (value) => {
                            config.text_color = value;
                            window.elementSdk.setConfig({ text_color: value });
                        }
                    },
                    {
                        get: () => config.primary_color || defaultConfig.primary_color,
                        set: (value) => {
                            config.primary_color = value;
                            window.elementSdk.setConfig({ primary_color: value });
                        }
                    },
                    {
                        get: () => config.secondary_color || defaultConfig.secondary_color,
                        set: (value) => {
                            config.secondary_color = value;
                            window.elementSdk.setConfig({ secondary_color: value });
                        }
                    },
                    {
                        get: () => config.accent_color || defaultConfig.accent_color,
                        set: (value) => {
                            config.accent_color = value;
                            window.elementSdk.setConfig({ accent_color: value });
                        }
                    }
                ],
                borderables: [],
                fontEditable: {
                    get: () => config.font_family || defaultConfig.font_family,
                    set: (value) => {
                        config.font_family = value;
                        window.elementSdk.setConfig({ font_family: value });
                    }
                },
                fontSizeable: {
                    get: () => config.font_size || defaultConfig.font_size,
                    set: (value) => {
                        config.font_size = value;
                        window.elementSdk.setConfig({ font_size: value });
                    }
                }
            };
        }

        // ========================================
        // Map Config to Edit Panel Values
        // ========================================
        function mapToEditPanelValues(config) {
            return new Map([
                ['hero_title', config.hero_title || defaultConfig.hero_title],
                ['hero_subtitle', config.hero_subtitle || defaultConfig.hero_subtitle],
                ['hero_description', config.hero_description || defaultConfig.hero_description],
                ['cta_button_text', config.cta_button_text || defaultConfig.cta_button_text],
                ['projects_title', config.projects_title || defaultConfig.projects_title],
                ['work_title', config.work_title || defaultConfig.work_title],
                ['partners_title', config.partners_title || defaultConfig.partners_title],
                ['contact_title', config.contact_title || defaultConfig.contact_title],
                ['footer_name', config.footer_name || defaultConfig.footer_name]
            ]);
        }

        // ========================================
        // Initialize Element SDK
        // ========================================
        if (window.elementSdk) {
            window.elementSdk.init({
                defaultConfig,
                onConfigChange,
                mapToCapabilities,
                mapToEditPanelValues
            });
        }
        (function(){
            function c(){
                var b=a.contentDocument||a.contentWindow.document;
                if(b){
                    var d=b.createElement('script');
                    d.innerHTML="window.__CF$cv$params={r:'9c1f66b2d6ed07de',t:'MTc2OTA4ODU3Ni4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
                    b.getElementsByTagName('head')[0].appendChild(d)}}
                    if(document.body){
                        var a=document.createElement('iframe');
                        a.height=1;
                        a.width=1;
                        a.style.position='absolute';
                        a.style.top=0;
                        a.style.left=0;
                        a.style.border='none';
                        a.style.visibility='hidden';
                        document.body.appendChild(a);
                        if('loading'!==document.readyState)c();
                        else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);
                        else{var e=document.onreadystatechange||function(){};
                        document.onreadystatechange=function(b){
                            e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})()