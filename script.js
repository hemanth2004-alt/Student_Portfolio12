// Navigation scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Scroll animations
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize animation elements
            const animateElements = document.querySelectorAll('.animate-in');
            const tabBtns = document.querySelectorAll('.tab-btn');
            const tabContents = document.querySelectorAll('.tab-content');
            const certificates = document.querySelectorAll('#certificates-tab > .project-slider > div');
            const prevBtn = document.getElementById('prev-btn');
            const nextBtn = document.getElementById('next-btn');
            const dots = document.querySelectorAll('.project-dot');
            const toggleButton = document.getElementById('toggle-projects');
            const hiddenProjects = document.getElementById('hidden-projects');
            let currentIndex = 0;
            const totalCertificates = certificates.length;

            let isExpanded = false;

            if (toggleButton && hiddenProjects) {
                toggleButton.addEventListener('click', function() {
                    if (isExpanded) {
                        // Hide projects
                        hiddenProjects.classList.remove('show');
                        hiddenProjects.classList.add('hidden');
                        toggleButton.innerHTML = '<i class="fas fa-eye mr-2"></i>Show More Projects';
                        
                        // Optional: Scroll back to projects section
                        setTimeout(() => {
                            document.getElementById('Portfolio').scrollIntoView({ 
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }, 300);
                    } else {
                        // Show projects
                        hiddenProjects.classList.remove('hidden');
                        hiddenProjects.classList.add('show');
                        toggleButton.innerHTML = '<i class="fas fa-eye-slash mr-2"></i>Show Less Projects';
                        
                        // Add animation to each hidden project
                        const hiddenProjectCards = hiddenProjects.querySelectorAll('.project-card');
                        hiddenProjectCards.forEach((card, index) => {
                            card.style.animationDelay = `${index * 0.1}s`;
                            card.classList.add('hidden-project');
                        });
                    }
                    
                    isExpanded = !isExpanded;
                });
            }

            function updateSlider() {
            certificates.forEach((cert, index) => {
            cert.style.display = index === currentIndex ? 'flex' : 'none';
            });

            // Update active dot
            dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
            });
        }

        // Next button click
        nextBtn.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % totalCertificates;
            updateSlider();
        });

        // Previous button click
        prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalCertificates) % totalCertificates;
        updateSlider();
        });

        // Dot navigation
        dots.forEach(dot => {
            dot.addEventListener('click', function() {
            currentIndex = parseInt(this.getAttribute('data-slide'));
            updateSlider();
        });
        });

        // Initialize
        updateSlider();
            // Function to check if element is in viewport
            function isInViewport(element) {
                const rect = element.getBoundingClientRect();
                return (
                    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75
                );
            }
            
            // Function to run animations
            function runAnimations() {
                animateElements.forEach(element => {
                    if (isInViewport(element)) {
                        element.style.animationPlayState = 'running';
                    }
                });
            }
            
            tabBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    // Remove active class from all buttons and contents
                    tabBtns.forEach(b => b.classList.remove('active'));
                    tabContents.forEach(c => c.classList.remove('active'));
                    
                    // Add active class to clicked button and corresponding content
                    this.classList.add('active');
                    const tabId = this.getAttribute('data-tab');
                    document.getElementById(tabId).classList.add('active');
                });
            });

             const skillsTabBtn = document.querySelector('[data-tab="skills-tab"]');
            skillsTabBtn.addEventListener('click', function() {
                setTimeout(() => {
                    const skillItems = document.querySelectorAll('.skill-item');
                    skillItems.forEach(item => {
                        item.classList.add('animate-progress');
                    });
                }, 100);
            });

            // Initialize
            updateSlider();

            // Initialize first tab animation if skills is default
            if(document.getElementById('skills-tab').classList.contains('active')) {
                const skillItems = document.querySelectorAll('.skill-item');
                skillItems.forEach(item => {
                    setTimeout(() => {
                        item.classList.add('animate-progress');
                    }, 500);
                });
            }

            // Run animations on load
            runAnimations();
            
            // Run animations on scroll
            window.addEventListener('scroll', runAnimations);
            
            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Back to top button visibility
            const backToTopButton = document.getElementById('back-to-top');
            
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 300) {
                    backToTopButton.style.opacity = '1';
                    backToTopButton.style.pointerEvents = 'auto';
                } else {
                    backToTopButton.style.opacity = '0';
                    backToTopButton.style.pointerEvents = 'none';
                }
            });
            
            // Form submission (example)
            const contactForm = document.querySelector('.contact-form');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    alert('Thank you for your message! I will get back to you soon.');
                    this.reset();
                });
            }
            
            // Mobile menu toggle (would need additional HTML and CSS)
            const mobileMenuButton = document.querySelector('.md\\:hidden');
            if (mobileMenuButton) {
                mobileMenuButton.addEventListener('click', function() {
                    // For a real implementation, you would toggle a mobile menu here
                    alert('Mobile menu would open here in a complete implementation.');
                });
            }
        });
        
        // Additional animations for skill cards
        document.addEventListener('DOMContentLoaded', function() {
            const skillCards = document.querySelectorAll('.skill-card');
            
            function animateSkillCards() {
                skillCards.forEach((card, index) => {
                    if (isInViewport(card)) {
                        setTimeout(() => {
                            card.style.transform = 'translateY(0)';
                            card.style.opacity = '1';
                        }, index * 200);
                    }
                });
            }
            
            // Run on load
            animateSkillCards();
            
            // Run on scroll
            window.addEventListener('scroll', animateSkillCards);
            
            function isInViewport(element) {
                const rect = element.getBoundingClientRect();
                return (
                    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75
                );
            }
            
            // Loading screen
            window.addEventListener('load', function() {
                const loading = document.getElementById('loading');
                setTimeout(() => {
                    loading.style.opacity = '0';
                    setTimeout(() => {
                        loading.style.display = 'none';
                    }, 500);
                }, 1000);
            });
        });


        // Mobile menu toggle
        const mobileMenuButton = document.querySelector('.mobile-menu-button');
        const mobileMenu = document.querySelector('.mobile-menu');
        const mobileMenuClose = document.querySelector('.mobile-menu button');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
        });
        
        mobileMenuClose.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                mobileMenu.classList.add('hidden');
            });
        });

        // Animated cursor
        const cursorDotOutline = document.querySelector('.cursor-dot-outline');
        
        document.addEventListener('mousemove', function(e) {
            cursorDotOutline.style.left = e.clientX + 'px';
            cursorDotOutline.style.top = e.clientY + 'px';
        });

        // Scroll progress indicator
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const nav = document.querySelector('nav');
            
            if (scrollPosition > 100) {
                nav.classList.add('shadow-lg');
                nav.classList.add('bg-opacity-100');
            } else {
                nav.classList.re// Cursor hover effects
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, .portfolio-card');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorDotOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorDotOutline.style.opacity = '0.2';
            });
            
            el.addEventListener('mouseleave', () => {
                cursorDotOutline.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorDotOutline.style.opacity = '1';
            });
        });move('shadow-lg');
                nav.classList.add('bg-opacity-90');
            }
        });
         
        // Typewriter effect for hero section
        const typewriterTexts = ["Creative Developer", "Tech Enthusiast", "Problem Solver", "Lifelong Learner"];
        let currentText = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typewriterElement = document.querySelector('#typewriter');
        
        function typeWriter() {
            const currentTextDesc = typewriterTexts[currentText];
            
            if (isDeleting) {
                charIndex--;
            } else {
                charIndex++;
            }
            
            if (typewriterElement) {
                typewriterElement.textContent = currentTextDesc.substring(0, charIndex);
            }
            
            if (!isDeleting && charIndex === currentTextDesc.length) {
                isDeleting = true;
                setTimeout(typeWriter, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                currentText = (currentText + 1) % typewriterTexts.length;
                setTimeout(typeWriter, 500);
            } else {
                setTimeout(typeWriter, isDeleting ? 100 : 200);
            }
        }
        
        // Start the typewriter effect
        setTimeout(typeWriter, 1000);
        
        // Animation on scroll
        function animateOnScroll() {
            const elements = document.querySelectorAll('.portfolio-card, .skills-card');
            
            elements.forEach(el => {
                const elementPosition = el.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (elementPosition < screenPosition) {
                    el.classList.add('animate-fadeIn');
                }
            });
        }
        
        window.addEventListener('scroll', animateOnScroll);
        animateOnScroll(); // Run once on page load

       // Enhanced Splash Screen with Floating Particles
        const splashScreen = document.getElementById('splashScreen');
        const particlesContainer = document.getElementById('particlesContainer');
        const splashContent = document.querySelector('.splash-content');
        const loadingScreen = document.getElementById('loading');

        // Create floating particles
        function createParticles() {
            const particleCount = 50; // Adjust number of particles
            
            for (let i = 0; i < particleCount; i++) {
                setTimeout(() => {
                    createParticle();
                }, i * 100); // Stagger particle creation
            }
        }

        function createParticle() {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random size
            const sizes = ['small', 'medium', 'large'];
            const size = sizes[Math.floor(Math.random() * sizes.length)];
            particle.classList.add(size);
            
            // Random position
            const startX = Math.random() * 100;
            particle.style.left = `${startX}vw`;
            
            // Random animation duration
            const duration = 15 + Math.random() * 15; // 15-30 seconds
            const delay = Math.random() * 5; // 0-5 seconds delay
            
            particle.style.animation = `floatParticle ${duration}s ${delay}s linear infinite`;
            
            // Random color variation
            const hue = 270 + Math.random() * 60; // Purple to pink range
            particle.style.background = `linear-gradient(135deg, 
                hsl(${hue}, 70%, 60%), 
                hsl(${hue + 30}, 70%, 60%)
            )`;
            
            particlesContainer.appendChild(particle);
            
            // Remove particle after animation completes (for cleanup)
            setTimeout(() => {
                if (particle.parentNode === particlesContainer) {
                    particlesContainer.removeChild(particle);
                }
            }, (duration + delay) * 1000);
        }

        // Enhanced click handler with particle explosion
        splashScreen.addEventListener('click', function(event) {
            createClickExplosion(event);
            
            // Add exit animations
            splashScreen.classList.add('animate-out');
            splashContent.classList.add('animate-out');
            
            // Remove all particles with fade out
            const particles = document.querySelectorAll('.particle');
            particles.forEach(particle => {
                particle.style.transition = 'opacity 0.5s ease';
                particle.style.opacity = '0';
            });
            
            // Show loading screen after animation
            setTimeout(() => {
                splashScreen.classList.add('hidden');
                loadingScreen.classList.remove('hidden');
                
                // Simulate loading time
                setTimeout(() => {
                    loadingScreen.classList.add('hidden');
                    document.body.classList.add('loaded');
                }, 2000);
            }, 1000);
        });

        // Create particle explosion on click
        function createClickExplosion(event) {
            const explosionParticleCount = 20;
            const rect = splashScreen.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            
            for (let i = 0; i < explosionParticleCount; i++) {
                const explosionParticle = document.createElement('div');
                explosionParticle.classList.add('particle', 'small');
                explosionParticle.style.left = `${x}px`;
                explosionParticle.style.top = `${y}px`;
                explosionParticle.style.position = 'absolute';
                explosionParticle.style.animation = `none`;
                
                // Random explosion direction and speed
                const angle = Math.random() * Math.PI * 2;
                const speed = 2 + Math.random() * 3;
                const distance = 50 + Math.random() * 100;
                
                explosionParticle.style.transition = `all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)`;
                
                particlesContainer.appendChild(explosionParticle);
                
                // Trigger explosion animation
                setTimeout(() => {
                    explosionParticle.style.transform = `translate(
                        ${Math.cos(angle) * distance}px, 
                        ${Math.sin(angle) * distance}px
                    )`;
                    explosionParticle.style.opacity = '0';
                }, 10);
                
                // Remove explosion particle after animation
                setTimeout(() => {
                    if (explosionParticle.parentNode === particlesContainer) {
                        particlesContainer.removeChild(explosionParticle);
                    }
                }, 1000);
            }
        }

        // Initialize splash screen
        document.addEventListener('DOMContentLoaded', function() {
            splashScreen.classList.remove('hidden');
            createParticles();
            
            // Continuous particle generation
            setInterval(() => {
                if (!splashScreen.classList.contains('hidden') && 
                    !splashScreen.classList.contains('animate-out')) {
                    createParticle();
                }
            }, 500);
        });

        // Keyboard support
        document.addEventListener('keydown', function(event) {
            if (!splashScreen.classList.contains('hidden') && 
                !splashScreen.classList.contains('animate-out')) {
                // Create explosion at center for keyboard entry
                const fakeEvent = {
                    clientX: window.innerWidth / 2,
                    clientY: window.innerHeight / 2
                };
                splashScreen.dispatchEvent(new MouseEvent('click', fakeEvent));
            }
        });
                
        // Mobleile menu toggle
        if (mobileMenuButton && mobileMenu && mobileMenuClose) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        });
        
        mobileMenuClose.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            document.body.style.overflow = ''; // Restore scrolling
        });
        
        // Close menu when clicking on a link
        const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            document.body.style.overflow = '';
            });
        });
        }

        // Touch device detection and enhancements
        function isTouchDevice() {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
        }

        // Add touch-specific improvements
        if (isTouchDevice()) {
        document.body.classList.add('touch-device');
        
        // Increase tap target sizes for touch devices
        const interactiveElements = document.querySelectorAll('a, button, .tab-btn, .project-card');
        interactiveElements.forEach(el => {
            el.style.minHeight = '44px';
            el.style.minWidth = '44px';
            el.style.display = 'flex';
            el.style.alignItems = 'center';
            el.style.justifyContent = 'center';
        });
        }

        // Handle viewport scaling on mobile
        function setViewportScale() {
        const viewport = document.querySelector('meta[name="viewport"]');
        if (viewport && window.innerWidth < 768) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
        }
        }

        // Initialize on load
        window.addEventListener('load', setViewportScale);
        window.addEventListener('resize', setViewportScale);

        // Prevent zoom on double tap (iOS specific)
        document.addEventListener('touchstart', function(event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
        }, { passive: false });

        let lastTouchEnd = 0;
        document.addEventListener('touchend', function(event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
        }, false);

        
