 1	// ===================================
     2	// Mobile Menu Toggle
     3	// ===================================
     4	
     5	const hamburger = document.querySelector('.hamburger');
     6	const navMenu = document.querySelector('.nav-menu');
     7	
     8	if (hamburger && navMenu) {
     9	    hamburger.addEventListener('click', () => {
    10	        navMenu.classList.toggle('active');
    11	        hamburger.classList.toggle('active');
    12	    });
    13	
    14	    // Close menu when clicking on a link
    15	    const navLinks = document.querySelectorAll('.nav-menu a');
    16	    navLinks.forEach(link => {
    17	        link.addEventListener('click', () => {
    18	            navMenu.classList.remove('active');
    19	            hamburger.classList.remove('active');
    20	        });
    21	    });
    22	
    23	    // Close menu when clicking outside
    24	    document.addEventListener('click', (e) => {
    25	        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    26	            navMenu.classList.remove('active');
    27	            hamburger.classList.remove('active');
    28	        }
    29	    });
    30	}
    31	
    32	// ===================================
    33	// Smooth Scroll for Anchor Links
    34	// ===================================
    35	
    36	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    37	    anchor.addEventListener('click', function (e) {
    38	        const href = this.getAttribute('href');
    39	        
    40	        // Skip empty anchors
    41	        if (href === '#' || href === '#!') {
    42	            e.preventDefault();
    43	            return;
    44	        }
    45	
    46	        const target = document.querySelector(href);
    47	        
    48	        if (target) {
    49	            e.preventDefault();
    50	            const headerOffset = 80;
    51	            const elementPosition = target.getBoundingClientRect().top;
    52	            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    53	
    54	            window.scrollTo({
    55	                top: offsetPosition,
    56	                behavior: 'smooth'
    57	            });
    58	        }
    59	    });
    60	});
    61	
    62	// ===================================
    63	// Header Scroll Effect
    64	// ===================================
    65	
    66	const header = document.querySelector('.header');
    67	let lastScrollTop = 0;
    68	
    69	window.addEventListener('scroll', () => {
    70	    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    71	    
    72	    if (scrollTop > 100) {
    73	        header.classList.add('scrolled');
    74	    } else {
    75	        header.classList.remove('scrolled');
    76	    }
    77	    
    78	    lastScrollTop = scrollTop;
    79	});
    80	
    81	// ===================================
    82	// Scroll to Top Button
    83	// ===================================
    84	
    85	const scrollToTopBtn = document.querySelector('.scroll-to-top');
    86	
    87	if (scrollToTopBtn) {
    88	    window.addEventListener('scroll', () => {
    89	        if (window.pageYOffset > 300) {
    90	            scrollToTopBtn.classList.add('visible');
    91	        } else {
    92	            scrollToTopBtn.classList.remove('visible');
    93	        }
    94	    });
    95	
    96	    scrollToTopBtn.addEventListener('click', () => {
    97	        window.scrollTo({
    98	            top: 0,
    99	            behavior: 'smooth'
   100	        });
   101	    });
   102	}
   103	
   104	// ===================================
   105	// FAQ Accordion
   106	// ===================================
   107	
   108	const faqItems = document.querySelectorAll('.faq-item');
   109	
   110	faqItems.forEach(item => {
   111	    const question = item.querySelector('.faq-question');
   112	    
   113	    question.addEventListener('click', () => {
   114	        const isActive = item.classList.contains('active');
   115	        
   116	        // Close all FAQ items
   117	        faqItems.forEach(faq => {
   118	            faq.classList.remove('active');
   119	        });
   120	        
   121	        // Open clicked item if it wasn't active
   122	        if (!isActive) {
   123	            item.classList.add('active');
   124	        }
   125	    });
   126	});
   127	
   128	// ===================================
   129	// Intersection Observer for Scroll Animations
   130	// ===================================
   131	
   132	const observerOptions = {
   133	    threshold: 0.1,
   134	    rootMargin: '0px 0px -50px 0px'
   135	};
   136	
   137	const observer = new IntersectionObserver((entries) => {
   138	    entries.forEach(entry => {
   139	        if (entry.isIntersecting) {
   140	            entry.target.classList.add('visible');
   141	        }
   142	    });
   143	}, observerOptions);
   144	
   145	// Observe all elements with fade-in class
   146	const fadeElements = document.querySelectorAll('.fade-in');
   147	fadeElements.forEach(el => observer.observe(el));
   148	
   149	// Add fade-in class to cards and sections automatically
   150	const animateElements = document.querySelectorAll(`
   151	    .problem-card,
   152	    .comparison-card,
   153	    .service-item,
   154	    .reason-card,
   155	    .flow-item,
   156	    .target-card,
   157	    .faq-item
   158	`);
   159	
   160	animateElements.forEach((el, index) => {
   161	    el.classList.add('fade-in');
   162	    el.style.transitionDelay = `${index * 0.1}s`;
   163	});
   164	
   165	// ===================================
   166	// Counter Animation for Stats
   167	// ===================================
   168	
   169	const animateCounter = (element, target, duration = 2000) => {
   170	    const start = 0;
   171	    const increment = target / (duration / 16);
   172	    let current = start;
   173	    
   174	    const timer = setInterval(() => {
   175	        current += increment;
   176	        if (current >= target) {
   177	            element.textContent = target + (element.dataset.suffix || '');
   178	            clearInterval(timer);
   179	        } else {
   180	            element.textContent = Math.floor(current) + (element.dataset.suffix || '');
   181	        }
   182	    }, 16);
   183	};
   184	
   185	const statObserver = new IntersectionObserver((entries) => {
   186	    entries.forEach(entry => {
   187	        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
   188	            entry.target.classList.add('counted');
   189	            const number = entry.target.querySelector('.stat-number');
   190	            if (number) {
   191	                const text = number.textContent;
   192	                const match = text.match(/\d+/);
   193	                if (match) {
   194	                    const target = parseInt(match[0]);
   195	                    const suffix = text.replace(/\d+/, '');
   196	                    number.dataset.suffix = suffix;
   197	                    animateCounter(number, target, 2000);
   198	                }
   199	            }
   200	        }
   201	    });
   202	}, { threshold: 0.5 });
   203	
   204	const statItems = document.querySelectorAll('.stat-item');
   205	statItems.forEach(item => statObserver.observe(item));
   206	
   207	// ===================================
   208	// Form Validation (if contact form exists)
   209	// ===================================
   210	
   211	const contactForm = document.querySelector('#contact-form');
   212	
   213	if (contactForm) {
   214	    contactForm.addEventListener('submit', (e) => {
   215	        e.preventDefault();
   216	        
   217	        // Get form data
   218	        const formData = new FormData(contactForm);
   219	        const data = Object.fromEntries(formData);
   220	        
   221	        // Basic validation
   222	        let isValid = true;
   223	        const errors = [];
   224	        
   225	        if (!data.name || data.name.trim() === '') {
   226	            isValid = false;
   227	            errors.push('お名前を入力してください');
   228	        }
   229	        
   230	        if (!data.email || !isValidEmail(data.email)) {
   231	            isValid = false;
   232	            errors.push('有効なメールアドレスを入力してください');
   233	        }
   234	        
   235	        if (!data.message || data.message.trim() === '') {
   236	            isValid = false;
   237	            errors.push('お問い合わせ内容を入力してください');
   238	        }
   239	        
   240	        if (isValid) {
   241	            // Here you would typically send the form data to a server
   242	            console.log('Form submitted:', data);
   243	            alert('お問い合わせありがとうございます。\n担当者より24時間以内にご連絡いたします。');
   244	            contactForm.reset();
   245	        } else {
   246	            alert('入力内容をご確認ください:\n' + errors.join('\n'));
   247	        }
   248	    });
   249	}
   250	
   251	// Email validation helper
   252	function isValidEmail(email) {
   253	    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   254	    return re.test(email);
   255	}
   256	
   257	// ===================================
   258	// Price Highlight Animation
   259	// ===================================
   260	
   261	const priceBox = document.querySelector('.price-box');
   262	
   263	if (priceBox) {
   264	    const priceObserver = new IntersectionObserver((entries) => {
   265	        entries.forEach(entry => {
   266	            if (entry.isIntersecting) {
   267	                entry.target.style.animation = 'pulse 2s ease-in-out infinite';
   268	            }
   269	        });
   270	    }, { threshold: 0.5 });
   271	    
   272	    priceObserver.observe(priceBox);
   273	}
   274	
   275	// Add pulse animation to CSS dynamically
   276	const style = document.createElement('style');
   277	style.textContent = `
   278	    @keyframes pulse {
   279	        0%, 100% {
   280	            transform: scale(1);
   281	        }
   282	        50% {
   283	            transform: scale(1.02);
   284	        }
   285	    }
   286	`;
   287	document.head.appendChild(style);
   288	
   289	// ===================================
   290	// Lazy Loading for Images (if any are added later)
   291	// ===================================
   292	
   293	if ('loading' in HTMLImageElement.prototype) {
   294	    const images = document.querySelectorAll('img[loading="lazy"]');
   295	    images.forEach(img => {
   296	        img.src = img.dataset.src;
   297	    });
   298	} else {
   299	    // Fallback for browsers that don't support lazy loading
   300	    const script = document.createElement('script');
   301	    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
   302	    document.body.appendChild(script);
   303	}
   304	
   305	// ===================================
   306	// Service Card Hover Effects Enhancement
   307	// ===================================
   308	
   309	const serviceCards = document.querySelectorAll('.service-card-large');
   310	
   311	serviceCards.forEach(card => {
   312	    card.addEventListener('mouseenter', function() {
   313	        this.style.transform = 'scale(1.02)';
   314	        this.style.transition = 'transform 0.3s ease-out';
   315	    });
   316	    
   317	    card.addEventListener('mouseleave', function() {
   318	        this.style.transform = 'scale(1)';
   319	    });
   320	});
   321	
   322	// ===================================
   323	// Pricing Table Responsive Scroll Hint
   324	// ===================================
   325	
   326	const pricingTable = document.querySelector('.comparison-table');
   327	
   328	if (pricingTable && window.innerWidth < 968) {
   329	    const scrollHint = document.createElement('div');
   330	    scrollHint.textContent = '← スクロールできます →';
   331	    scrollHint.style.cssText = `
   332	        text-align: center;
   333	        font-size: 0.875rem;
   334	        color: #6B7280;
   335	        margin-top: 0.5rem;
   336	        animation: fadeInOut 3s ease-in-out infinite;
   337	    `;
   338	    
   339	    const fadeInOutStyle = document.createElement('style');
   340	    fadeInOutStyle.textContent = `
   341	        @keyframes fadeInOut {
   342	            0%, 100% { opacity: 0.5; }
   343	            50% { opacity: 1; }
   344	        }
   345	    `;
   346	    document.head.appendChild(fadeInOutStyle);
   347	    
   348	    pricingTable.parentElement.appendChild(scrollHint);
   349	    
   350	    // Remove hint after user scrolls
   351	    pricingTable.addEventListener('scroll', function() {
   352	        scrollHint.style.display = 'none';
   353	    }, { once: true });
   354	}
   355	
   356	// ===================================
   357	// CTA Button Tracking (Analytics Ready)
   358	// ===================================
   359	
   360	const ctaButtons = document.querySelectorAll('.cta .btn, .hero-cta .btn');
   361	
   362	ctaButtons.forEach(button => {
   363	    button.addEventListener('click', function(e) {
   364	        const buttonText = this.textContent.trim();
   365	        const buttonHref = this.getAttribute('href');
   366	        
   367	        // Log for analytics (replace with your analytics code)
   368	        console.log('CTA Button Clicked:', {
   369	            text: buttonText,
   370	            href: buttonHref,
   371	            timestamp: new Date().toISOString()
   372	        });
   373	        
   374	        // Example: Google Analytics event tracking
   375	        if (typeof gtag !== 'undefined') {
   376	            gtag('event', 'cta_click', {
   377	                'event_category': 'engagement',
   378	                'event_label': buttonText,
   379	                'value': 1
   380	            });
   381	        }
   382	    });
   383	});
   384	
   385	// ===================================
   386	// Performance: Debounce Scroll Events
   387	// ===================================
   388	
   389	function debounce(func, wait = 10, immediate = true) {
   390	    let timeout;
   391	    return function() {
   392	        const context = this, args = arguments;
   393	        const later = function() {
   394	            timeout = null;
   395	            if (!immediate) func.apply(context, args);
   396	        };
   397	        const callNow = immediate && !timeout;
   398	        clearTimeout(timeout);
   399	        timeout = setTimeout(later, wait);
   400	        if (callNow) func.apply(context, args);
   401	    };
   402	}
   403	
   404	// Apply debounce to scroll event handlers
   405	window.addEventListener('scroll', debounce(() => {
   406	    // Scroll-dependent operations can be added here
   407	}, 10));
   408	
   409	// ===================================
   410	// Console Welcome Message
   411	// ===================================
   412	
   413	console.log('%c🌿 Green運用代行サービス', 'font-size: 24px; font-weight: bold; color: #00C851;');
   414	console.log('%c業界初の面談課金モデルで、リスクフリーの採用活動を実現', 'font-size: 14px; color: #666;');
   415	console.log('%cお問い合わせ: contact@example.com', 'font-size: 12px; color: #999;');
   416	
   417	// ===================================
   418	// Initialize all functions on DOM ready
   419	// ===================================
   420	
   421	document.addEventListener('DOMContentLoaded', () => {
   422	    console.log('✅ All scripts initialized successfully');
   423	    
   424	    // Add a small delay to ensure smooth animations
   425	    setTimeout(() => {
   426	        document.body.classList.add('loaded');
   427	    }, 100);
   428	});
