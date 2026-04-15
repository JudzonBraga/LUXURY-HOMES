// ============================================
// DATOS DE PROPIEDADES POR CIUDAD
// ============================================

        const propertiesData = {
            arequipa: [
                { image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg", price: "USD 850,000", title: "Villa Colonial", location: "Valle de Sachaca", description: "Espectacular villa colonial restaurada con acabados de lujo, piscina climatizada y jardines de 2,000m². Cuenta con 4 suites, sala de cine y bodega privada." },
                { image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg", price: "USD 1,200,000", title: "Residencia La Mansión", location: "Cayma", description: "Imponente residencia de 800m² construidos sobre terreno de 1,500m². Vista privilegiada al valle, acabados en mármol italiano y domótica completa." },
                { image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg", price: "USD 620,000", title: "Casa de Campo", location: "Yanahuara", description: "Exclusiva casa de campo con diseño contemporáneo, 3 dormitorios, terraza con BBQ y área de piscina privada rodeada de áreas verdes." }
            ],
            lima: [
                { image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg", price: "USD 2,450,000", title: "Penthouse Panorámico", location: "San Isidro", description: "Penthouse de 350m² con terraza de 180m², vista 360° al golf de San Isidro. Acabados de lujo, 3 suites con walk-in closet, home theater y jacuzzi exterior." },
                { image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg", price: "USD 3,890,000", title: "Mansión Contemporánea", location: "La Molina", description: "Mansión de 1,200m² en el country club más exclusivo. Piscina infinita, gimnasio, sauna, cancha de pádel y jardín diseñado por paisajista reconocido." },
                { image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg", price: "USD 5,200,000", title: "Frente al mar", location: "Miraflores", description: "Espectacular dúplex frente al mar con diseño vanguardista. 4 suites, infinity pool con vista al océano, terraza de 200m² y acceso privado al malecón." },
                { image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg", price: "USD 1,975,000", title: "Atelier Barranco", location: "Barranco", description: "Loft de autor de 280m² con galería de arte privada, terraza con jacuzzi y acabados personalizados por arquitecto de renombre. Vista al mar." }
            ],
            huancayo: [
                { image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg", price: "USD 450,000", title: "Casa Andina", location: "El Tambo", description: "Acogedora casa de 220m² con jardín interior, chimenea de piedra, 3 dormitorios y acabados en madera de cedro. Ideal para familias." },
                { image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg", price: "USD 580,000", title: "Villa Los Andes", location: "Chilca", description: "Villa campestre de 350m² con vista a la cordillera, piscina temperada, huerto orgánico y cabaña de invitados independiente." }
            ],
            ica: [
                { image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg", price: "USD 720,000", title: "Residencia Huacachina", location: "Oasis", description: "Residencia de lujo frente a la laguna Huacachina. Terraza panorámica, piscina de agua salada, 4 suites y acceso directo a dunas para sandboard." },
                { image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg", price: "USD 550,000", title: "Casa Viñedos", location: "Tacama", description: "Propiedad dentro del viñedo más exclusivo de Ica. Casa principal de 300m², bodega privada, piscina y jardines diseñados por paisajista francés." }
            ],
            piura: [
                { image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg", price: "USD 680,000", title: "Mansión del Sol", location: "Máncora", description: "Beachfront villa con diseño mediterráneo, 4 suites, piscina infinita, terraza al mar y acceso privado a la playa. Ideal para inversión vacacional." },
                { image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg", price: "USD 890,000", title: "Beachfront Villa", location: "Los Órganos", description: "Exclusiva villa de 450m² frente al mar con arquitectura contemporánea, piscina de borde infinito, bar en terraza y amaneceres inolvidables." }
            ],
            ucayali: [
                { image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg", price: "USD 380,000", title: "Casa Amazónica", location: "Pucallpa", description: "Casa de estilo amazónico con acabados sostenibles, 3 dormitorios, piscina ecológica y jardín tropical con especies nativas." },
                { image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg", price: "USD 420,000", title: "Jardín de la Selva", location: "Yarinacocha", description: "Propiedad frente al lago Yarinacocha con muelle privado, casa principal de 280m² y cabañas para invitados. Ideal para eco-lodge." }
            ],
            cajamarca: [
                { image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg", price: "USD 520,000", title: "Hacienda Colonial", location: "Baños del Inca", description: "Hacienda restaurada del siglo XVIII, 500m² construidos, capilla privada, jardines con fuentes y aguas termales dentro de la propiedad." },
                { image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg", price: "USD 610,000", title: "Residencia Los Andes", location: "Santa Apolonia", description: "Residencia de estilo republicano con vista panorámica a los Andes. 4 suites, biblioteca, terraza acristalada y chimeneas en cada ambiente." }
            ],
            cusco: [
                { image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg", price: "USD 1,450,000", title: "Casona Imperial", location: "San Blas", description: "Casona restaurada en el corazón del barrio artístico de San Blas. Paredes de piedra vista, patio central con fuente, 5 suites y galería de arte." },
                { image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg", price: "USD 1,890,000", title: "Villa Sagrado Valle", location: "Urubamba", description: "Villa de lujo en el Valle Sagrado, 600m² construidos, piscina climatizada, jardines andinos, y vista privilegiada a las montañas." },
                { image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg", price: "USD 980,000", title: "Casa Intihuatana", location: "Sacred Valley", description: "Propiedad eco-lujo con arquitectura bioclimática, 4 suites con vista a los Andes, terraza solar y acceso a río privado." }
            ]
        };

        // Estado global
        let currentCity = 'lima';
        let currentProperties = propertiesData[currentCity] || [];
        let selectedProperty = null;

        const locationsCarousel = document.getElementById('locationsCarousel');
        const cityBtns = document.querySelectorAll('.city-btn');

        function renderLocations() {
            if (!locationsCarousel) return;

            if (selectedProperty === null) {
                // MODO CARRUSEL
                const cardWidth = 350;
                const cardGap = 24;
                const containerPadding = 32;
                const containerWidth = locationsCarousel.clientWidth;
                const totalCardsWidth = (currentProperties.length * cardWidth) + ((currentProperties.length - 1) * cardGap);
                const needsArrows = totalCardsWidth > (containerWidth - containerPadding);

                let cardsHTML = '';
                currentProperties.forEach((prop, idx) => {
                    cardsHTML += `
                        <div class="carousel-card" data-index="${idx}" data-title="${prop.title}">
                            <img class="carousel-card-image" src="${prop.image}" alt="${prop.title}">
                            <div class="carousel-card-price">${prop.price}</div>
                            <div class="carousel-card-title">${prop.title}</div>
                            <div class="carousel-card-location">${prop.location}</div>
                        </div>
                    `;
                });

                locationsCarousel.innerHTML = `
                    <div class="carousel-no-selection">
                        <div class="carousel-cards-container" id="carouselCardsContainer">
                            ${cardsHTML}
                        </div>
                        ${needsArrows ? `
                            <div class="carousel-nav-arrow carousel-nav-left" id="carouselNavLeft">
                                <i class="fas fa-chevron-left"></i>
                            </div>
                            <div class="carousel-nav-arrow carousel-nav-right" id="carouselNavRight">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        ` : ''}
                    </div>
                `;

                document.querySelectorAll('.carousel-card').forEach(card => {
                    card.addEventListener('click', (e) => {
                        const index = parseInt(card.getAttribute('data-index'));
                        const clickedCard = card;

                        // 1. Agregar clase de animación al card clickeado
                        clickedCard.classList.add('moving-up');

                        // 2. Guardar la propiedad seleccionada
                        const selectedProp = currentProperties[index];

                        // 3. Esperar a que termine la animación del card
                        setTimeout(() => {
                            selectedProperty = selectedProp;

                            // 4. Limpiar el carrusel y mostrar el modo detalle
                            locationsCarousel.style.opacity = '0';

                            setTimeout(() => {
                                renderLocationsDetail();
                                locationsCarousel.style.opacity = '1';
                            }, 200);
                        }, 400);
                    });
                });

                const cardsContainer = document.getElementById('carouselCardsContainer');
                const leftArrow = document.getElementById('carouselNavLeft');
                const rightArrow = document.getElementById('carouselNavRight');

                if (cardsContainer) {
                    const checkScrollButtons = () => {
                        if (leftArrow && rightArrow) {
                            const maxScroll = cardsContainer.scrollWidth - cardsContainer.clientWidth;
                            leftArrow.style.opacity = cardsContainer.scrollLeft <= 0 ? '0.3' : '1';
                            leftArrow.style.cursor = cardsContainer.scrollLeft <= 0 ? 'not-allowed' : 'pointer';
                            rightArrow.style.opacity = cardsContainer.scrollLeft >= maxScroll - 5 ? '0.3' : '1';
                            rightArrow.style.cursor = cardsContainer.scrollLeft >= maxScroll - 5 ? 'not-allowed' : 'pointer';
                        }
                    };

                    if (leftArrow) {
                        leftArrow.addEventListener('click', () => {
                            if (cardsContainer.scrollLeft > 0) {
                                cardsContainer.scrollBy({ left: -374, behavior: 'smooth' });
                                setTimeout(checkScrollButtons, 350);
                            }
                        });
                    }

                    if (rightArrow) {
                        rightArrow.addEventListener('click', () => {
                            const maxScroll = cardsContainer.scrollWidth - cardsContainer.clientWidth;
                            if (cardsContainer.scrollLeft < maxScroll - 5) {
                                cardsContainer.scrollBy({ left: 374, behavior: 'smooth' });
                                setTimeout(checkScrollButtons, 350);
                            }
                        });
                    }

                    cardsContainer.addEventListener('scroll', checkScrollButtons);
                    setTimeout(checkScrollButtons, 100);
                }
            }
        }

        // Función separada para renderizar el modo detalle (con animación)
        function renderLocationsDetail() {
            if (!locationsCarousel || !selectedProperty) return;

            const otherProperties = currentProperties.filter(p => p !== selectedProperty);

            let topCardsHTML = '';
            otherProperties.forEach((prop) => {
                topCardsHTML += `
                    <div class="selection-top-card" data-title="${prop.title}">
                        <img src="${prop.image}" alt="${prop.title}">
                        <div class="card-price">${prop.price}</div>
                    </div>
                `;
            });

            // También incluimos el card seleccionado (activo)
            topCardsHTML += `
                <div class="selection-top-card active" data-title="${selectedProperty.title}">
                    <img src="${selectedProperty.image}" alt="${selectedProperty.title}">
                    <div class="card-price">${selectedProperty.price}</div>
                </div>
            `;

            locationsCarousel.innerHTML = `
                <div class="carousel-with-selection">
                    <div class="selection-top-row" id="selectionTopRow">
                        ${topCardsHTML}
                    </div>
                    <div class="selection-bottom-row">
                        <div class="selection-image">
                            <img src="${selectedProperty.image}" alt="${selectedProperty.title}">
                        </div>
                        <div class="selection-details">
                            <div class="detail-price">${selectedProperty.price}</div>
                            <div class="detail-title">${selectedProperty.title}</div>
                            <div class="detail-location">${selectedProperty.location}</div>
                            <div class="detail-description">${selectedProperty.description}</div>
                            <div class="detail-cta">
                                <a href="https://wa.me/51999999999?text=Hola,%20quiero%20más%20información" target="_blank" class="btn-luxury" style="padding: 0.5rem 1rem; font-size: 0.7rem;">AGENDAR VISITA</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            // Eventos para cambiar selección desde la fila superior
            document.querySelectorAll('.selection-top-card').forEach(card => {
                card.addEventListener('click', () => {
                    const title = card.getAttribute('data-title');
                    const newSelected = currentProperties.find(p => p.title === title);
                    if (newSelected && newSelected !== selectedProperty) {
                        // Animar cambio de selección
                        const bottomRow = document.querySelector('.selection-bottom-row');
                        if (bottomRow) {
                            bottomRow.style.animation = 'none';
                            bottomRow.offsetHeight; // Reiniciar animación
                            bottomRow.style.animation = 'slideUpFade 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards';
                        }

                        // Actualizar clase active en los cards
                        document.querySelectorAll('.selection-top-card').forEach(c => {
                            if (c.getAttribute('data-title') === title) {
                                c.classList.add('active');
                            } else {
                                c.classList.remove('active');
                            }
                        });

                        // Actualizar contenido
                        selectedProperty = newSelected;
                        const detailPrice = document.querySelector('.detail-price');
                        const detailTitle = document.querySelector('.detail-title');
                        const detailLocation = document.querySelector('.detail-location');
                        const detailDescription = document.querySelector('.detail-description');
                        const detailImage = document.querySelector('.selection-image img');

                        if (detailPrice) detailPrice.textContent = newSelected.price;
                        if (detailTitle) detailTitle.textContent = newSelected.title;
                        if (detailLocation) detailLocation.textContent = newSelected.location;
                        if (detailDescription) detailDescription.textContent = newSelected.description;
                        if (detailImage) detailImage.src = newSelected.image;
                    }
                });
            });
        }

        window.addEventListener('resize', () => {
            if (selectedProperty === null) {
                renderLocations();
            }
        });

        function changeCity(city) {
            currentCity = city;
            currentProperties = propertiesData[currentCity] || [];
            selectedProperty = null;
            renderLocations();

            cityBtns.forEach(btn => {
                if (btn.getAttribute('data-city') === city) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        }

        cityBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const city = btn.getAttribute('data-city');
                if (city) changeCity(city);
            });
        });

        changeCity('lima');

        // ============================================
        // NAVEGACIÓN Y SCROLL
        // ============================================

        const navTab = document.getElementById('navTab');
        const navMenu = document.getElementById('navMenu');
        const navOverlay = document.getElementById('navOverlay');
        const navClose = document.getElementById('navClose');
        const navItems = document.querySelectorAll('.nav-item');

        function openNav() {
            navMenu.classList.add('open');
            navOverlay.classList.add('active');
            const navTabIcon = navTab.querySelector('i');
            const navTabSpan = navTab.querySelector('span');
            if (navTabIcon) navTabIcon.className = 'fas fa-times';
            if (navTabSpan) navTabSpan.style.display = 'none';
        }

        function closeNav() {
            navMenu.classList.remove('open');
            navOverlay.classList.remove('active');
            const navTabIcon = navTab.querySelector('i');
            const navTabSpan = navTab.querySelector('span');
            if (navTabIcon) navTabIcon.className = 'fas fa-bars';
            if (navTabSpan) navTabSpan.style.display = 'inline';
        }

        navTab.addEventListener('click', (e) => {
            e.stopPropagation();
            if (navMenu.classList.contains('open')) closeNav();
            else openNav();
        });

        navClose.addEventListener('click', closeNav);
        navOverlay.addEventListener('click', closeNav);

        function navigateToSection(sectionId) {
            closeNav();
            setTimeout(() => {
                if (sectionId === 'contact') {
                    const message = encodeURIComponent('Hola, vi su página LUXURY HOMES y me interesa conocer más sobre sus propiedades de lujo.');
                    window.open(`https://wa.me/51999999999?text=${message}`, '_blank');
                    // alert('📞 Contáctanos: +51 1 789 1234\n✉️ luxury@homes.pe');
                    return;
                }
                if (sectionId === 'locations') {
                    const locationsSection = document.getElementById('locations-section');
                    if (locationsSection) locationsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    return;
                }
                const targetIndex = parseInt(sectionId);
                if (!isNaN(targetIndex) && sectionPositions[targetIndex] !== undefined) {
                    if (isHorizontalMode) {
                        isHorizontalMode = false;
                        isTransitioning = false;
                        isEnteringHorizontal = false;
                    }
                    smoothScrollTo(sectionPositions[targetIndex]);
                }
            }, 200);
        }

        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const sectionId = item.getAttribute('data-section');
                navigateToSection(sectionId);
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('open')) closeNav();
        });

        // Scroll secuencial
        const container = document.getElementById('verticalContainer');
        const sections = document.querySelectorAll('.vertical-section');
        const horizontalScrollDiv = document.getElementById('horizontalScroll');
        const horizontalItems = document.querySelectorAll('.horizontal-item');
        const leftBtn = document.getElementById('scrollLeft');
        const rightBtn = document.getElementById('scrollRight');

        const SCROLL_DURATION = 800;
        const HORIZONTAL_SCROLL_DURATION = 600;

        let isScrolling = false;
        let isHorizontalMode = false;
        let currentHorizontalIndex = 0;
        let targetScrollTop = 0;
        let startScrollTop = 0;
        let startTime = 0;
        let animationFrame = null;
        let sectionPositions = [];
        let isTransitioning = false;
        let canExitForward = false;
        let canExitBackward = false;
        let isEnteringHorizontal = false;

        function updateSectionPositions() {
            sectionPositions = [];
            let accumulated = 0;
            sections.forEach((section, index) => {
                sectionPositions.push(accumulated);
                accumulated += window.innerHeight;
            });
        }

        function easeOutCubic(t) {
            return 1 - Math.pow(1 - t, 3);
        }

        function smoothScrollTo(scrollTop, callback) {
            if (animationFrame) cancelAnimationFrame(animationFrame);
            const maxScroll = container.scrollHeight - container.clientHeight;
            targetScrollTop = Math.max(0, Math.min(scrollTop, maxScroll));
            startScrollTop = container.scrollTop;
            if (Math.abs(startScrollTop - targetScrollTop) < 5) {
                if (callback) callback();
                return;
            }
            isScrolling = true;
            startTime = performance.now();
            function animate(now) {
                const elapsed = now - startTime;
                let progress = Math.min(1, elapsed / SCROLL_DURATION);
                const easeProgress = easeOutCubic(progress);
                const newScrollTop = startScrollTop + (targetScrollTop - startScrollTop) * easeProgress;
                container.scrollTop = newScrollTop;
                if (progress < 1) animationFrame = requestAnimationFrame(animate);
                else {
                    container.scrollTop = targetScrollTop;
                    isScrolling = false;
                    animationFrame = null;
                    if (callback) callback();
                }
            }
            animationFrame = requestAnimationFrame(animate);
        }

        function smoothHorizontalTo(index, callback) {
            if (index < 0) index = 0;
            if (index >= horizontalItems.length) index = horizontalItems.length - 1;
            if (index === currentHorizontalIndex) {
                if (callback) callback();
                return;
            }
            const targetLeft = index * horizontalScrollDiv.clientWidth;
            const startLeft = horizontalScrollDiv.scrollLeft;
            const distance = targetLeft - startLeft;
            const duration = HORIZONTAL_SCROLL_DURATION;
            const startTimeHoriz = performance.now();
            function animateHorizontal(now) {
                const elapsed = now - startTimeHoriz;
                let progress = Math.min(1, elapsed / duration);
                const easeProgress = easeOutCubic(progress);
                const newLeft = startLeft + distance * easeProgress;
                horizontalScrollDiv.scrollLeft = newLeft;
                if (progress < 1) requestAnimationFrame(animateHorizontal);
                else {
                    horizontalScrollDiv.scrollLeft = targetLeft;
                    currentHorizontalIndex = index;
                    updateExitFlags();
                    if (callback) callback();
                }
            }
            requestAnimationFrame(animateHorizontal);
        }

        function updateExitFlags() {
            canExitForward = (currentHorizontalIndex === horizontalItems.length - 1);
            canExitBackward = (currentHorizontalIndex === 0);
        }

        function exitHorizontalForward() {
            if (!canExitForward) return;
            isHorizontalMode = false;
            isTransitioning = false;
            isEnteringHorizontal = false;
            setTimeout(() => { if (sectionPositions[2]) smoothScrollTo(sectionPositions[2]); }, 80);
        }

        function exitHorizontalBackward() {
            if (!canExitBackward) return;
            isHorizontalMode = false;
            isTransitioning = false;
            isEnteringHorizontal = false;
            setTimeout(() => { if (sectionPositions[0] !== undefined) smoothScrollTo(sectionPositions[0]); }, 80);
        }

        function enterHorizontalMode(fromAbove) {
            isHorizontalMode = true;
            isEnteringHorizontal = true;
            isTransitioning = false;
            if (fromAbove) {
                currentHorizontalIndex = 0;
                canExitForward = false;
                canExitBackward = true;
                smoothHorizontalTo(0, () => { setTimeout(() => { isEnteringHorizontal = false; }, 100); });
            } else {
                currentHorizontalIndex = horizontalItems.length - 1;
                canExitForward = true;
                canExitBackward = false;
                smoothHorizontalTo(horizontalItems.length - 1, () => { setTimeout(() => { isEnteringHorizontal = false; }, 100); });
            }
        }

        let lastWheelTime = 0;
        const WHEEL_COOLDOWN = 400;

        container.addEventListener('wheel', (e) => {
            e.preventDefault();
            const now = Date.now();
            if (isTransitioning && !isEnteringHorizontal) return;
            if (isScrolling || (now - lastWheelTime) < WHEEL_COOLDOWN) return;
            lastWheelTime = now;
            const direction = e.deltaY > 0 ? 1 : -1;
            const currentScroll = container.scrollTop;
            updateSectionPositions();
            let currentSectionIndex = 0;
            for (let i = 0; i < sectionPositions.length; i++) {
                if (currentScroll >= sectionPositions[i] - 50) currentSectionIndex = i;
            }
            const isAtPropiedadesSection = (currentSectionIndex === 1);
            if (isHorizontalMode) {
                if (direction === 1) {
                    if (currentHorizontalIndex < horizontalItems.length - 1) smoothHorizontalTo(currentHorizontalIndex + 1);
                    else exitHorizontalForward();
                } else if (direction === -1) {
                    if (currentHorizontalIndex > 0) smoothHorizontalTo(currentHorizontalIndex - 1);
                    else exitHorizontalBackward();
                }
                return;
            }
            const targetSectionIndex = currentSectionIndex + direction;
            if (direction === 1 && isAtPropiedadesSection && !isHorizontalMode) {
                isHorizontalMode = true;
                isEnteringHorizontal = true;
                isTransitioning = false;
                currentHorizontalIndex = 0;
                canExitForward = false;
                canExitBackward = true;
                smoothHorizontalTo(0, () => { setTimeout(() => { isEnteringHorizontal = false; }, 100); });
                if (horizontalItems.length > 1) {
                    setTimeout(() => {
                        if (isHorizontalMode && currentHorizontalIndex < horizontalItems.length - 1) {
                            smoothHorizontalTo(currentHorizontalIndex + 1);
                        }
                    }, 150);
                }
                return;
            }
            if (direction === -1 && isAtPropiedadesSection && !isHorizontalMode) {
                isHorizontalMode = true;
                isEnteringHorizontal = true;
                isTransitioning = false;
                currentHorizontalIndex = horizontalItems.length - 1;
                canExitForward = true;
                canExitBackward = false;
                smoothHorizontalTo(horizontalItems.length - 1, () => { setTimeout(() => { isEnteringHorizontal = false; }, 100); });
                if (horizontalItems.length > 1) {
                    setTimeout(() => {
                        if (isHorizontalMode && currentHorizontalIndex > 0) {
                            smoothHorizontalTo(currentHorizontalIndex - 1);
                        }
                    }, 150);
                }
                return;
            }
            if (targetSectionIndex >= 0 && targetSectionIndex < sectionPositions.length) {
                smoothScrollTo(sectionPositions[targetSectionIndex]);
            }
        }, { passive: false });

        if (leftBtn && rightBtn) {
            function isAtPropiedadesSection() {
                const currentScroll = container.scrollTop;
                updateSectionPositions();
                let currentSectionIndex = 0;
                for (let i = 0; i < sectionPositions.length; i++) {
                    if (currentScroll >= sectionPositions[i] - 50) currentSectionIndex = i;
                }
                return currentSectionIndex === 1;
            }

            leftBtn.addEventListener('click', () => {
                if (isAtPropiedadesSection()) {
                    if (!isHorizontalMode && !isEnteringHorizontal) {
                        enterHorizontalMode(true);
                        setTimeout(() => {
                            if (currentHorizontalIndex > 0) smoothHorizontalTo(currentHorizontalIndex - 1);
                            else exitHorizontalBackward();
                        }, 400);
                    } else if (isHorizontalMode) {
                        if (currentHorizontalIndex > 0) smoothHorizontalTo(currentHorizontalIndex - 1);
                        else exitHorizontalBackward();
                    }
                    return;
                }
                if (sectionPositions[1] !== undefined) {
                    if (isHorizontalMode) {
                        isHorizontalMode = false;
                        isTransitioning = false;
                        isEnteringHorizontal = false;
                    }
                    smoothScrollTo(sectionPositions[1], () => {
                        setTimeout(() => {
                            if (!isHorizontalMode && !isEnteringHorizontal) {
                                enterHorizontalMode(true);
                                setTimeout(() => {
                                    if (currentHorizontalIndex > 0) smoothHorizontalTo(currentHorizontalIndex - 1);
                                    else exitHorizontalBackward();
                                }, 400);
                            }
                        }, 300);
                    });
                }
            });

            rightBtn.addEventListener('click', () => {
                if (isAtPropiedadesSection()) {
                    if (!isHorizontalMode && !isEnteringHorizontal) {
                        enterHorizontalMode(true);
                        setTimeout(() => {
                            if (currentHorizontalIndex < horizontalItems.length - 1) smoothHorizontalTo(currentHorizontalIndex + 1);
                            else exitHorizontalForward();
                        }, 400);
                    } else if (isHorizontalMode) {
                        if (currentHorizontalIndex < horizontalItems.length - 1) smoothHorizontalTo(currentHorizontalIndex + 1);
                        else exitHorizontalForward();
                    }
                    return;
                }
                if (sectionPositions[1] !== undefined) {
                    if (isHorizontalMode) {
                        isHorizontalMode = false;
                        isTransitioning = false;
                        isEnteringHorizontal = false;
                    }
                    smoothScrollTo(sectionPositions[1], () => {
                        setTimeout(() => {
                            if (!isHorizontalMode && !isEnteringHorizontal) {
                                enterHorizontalMode(true);
                                setTimeout(() => {
                                    if (currentHorizontalIndex < horizontalItems.length - 1) smoothHorizontalTo(currentHorizontalIndex + 1);
                                    else exitHorizontalForward();
                                }, 400);
                            }
                        }, 300);
                    });
                }
            });
        }

        window.addEventListener('resize', () => {
            updateSectionPositions();
            const currentScroll = container.scrollTop;
            let closestIndex = 0;
            let minDistance = Infinity;
            sectionPositions.forEach((pos, idx) => {
                const distance = Math.abs(currentScroll - pos);
                if (distance < minDistance) { minDistance = distance; closestIndex = idx; }
            });
            smoothScrollTo(sectionPositions[closestIndex]);
        });

        updateSectionPositions();
        smoothScrollTo(0);
