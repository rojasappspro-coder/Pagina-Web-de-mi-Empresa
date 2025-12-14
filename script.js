// script.js

// ==============================================
// ESTRUCTURAS DE DATOS (Simulando los arrays de React)
// ==============================================

const servicesData = [
    {
        icon: "smartphone",
        title: "Desarrollo de Apps Móviles",
        description: "Aplicaciones nativas e híbridas para iOS y Android con diseño intuitivo y rendimiento óptimo.",
    },
    {
        icon: "globe",
        title: "Desarrollo Web",
        description: "Sitios web y plataformas web responsivas, rápidas y optimizadas para todos los dispositivos.",
    },
    {
        icon: "cloud",
        title: "Soluciones en la Nube",
        description: "Infraestructura escalable y segura en la nube para tus aplicaciones y datos empresariales.",
    },
    {
        icon: "code",
        title: "Software Personalizado",
        description: "Desarrollo de software a medida que se adapta perfectamente a tus necesidades específicas.",
    },
    {
        icon: "database",
        title: "Integración de Sistemas",
        description: "Conectamos tus aplicaciones y sistemas para un flujo de trabajo más eficiente.",
    },
    {
        icon: "rocket",
        title: "Consultoría Tecnológica",
        description: "Asesoramiento experto para elegir las mejores soluciones tecnológicas para tu negocio.",
    },
];

const projectsData = [
    {
        title: "E-Commerce Mobile App",
        description: "Aplicación móvil para comercio electrónico con pasarela de pagos integrada",
        image: "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjI1ODM0MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        tags: ["React Native", "Node.js", "MongoDB"],
    },
    {
        title: "Plataforma de Gestión",
        description: "Sistema web para gestión empresarial con dashboard analítico",
        image: "https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzYyNTc2NDI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        tags: ["React", "TypeScript", "PostgreSQL"],
    },
    {
        title: "Solución Cloud Enterprise",
        description: "Infraestructura escalable en la nube para empresa multinacional",
        image: "https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyNjA4NzAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        tags: ["AWS", "Docker", "Kubernetes"],
    },
];

const testimonialsData = [
    {
        name: "María González",
        role: "CEO, TechStart Solutions",
        content: "Rojas AppsPro transformó completamente nuestra visión en una aplicación móvil excepcional. Su profesionalismo y atención al detalle superaron nuestras expectativas.",
        rating: 5,
        initials: "MG",
    },
    {
        name: "Carlos Mendoza",
        role: "Director de IT, InnovaCore",
        content: "El equipo demostró un conocimiento técnico impresionante. Entregaron el proyecto a tiempo y con una calidad superior. Sin duda los recomendaría.",
        rating: 5,
        initials: "CM",
    },
    {
        name: "Ana Ruiz",
        role: "Fundadora, EcoMarket",
        content: "Gracias a Rojas AppsPro, pudimos lanzar nuestra plataforma de e-commerce con éxito. Su soporte continuo ha sido invaluable para nuestro crecimiento.",
        rating: 5,
        initials: "AR",
    },
];

// ==============================================
// FUNCIONES GLOBALES
// ==============================================

/**
 * Simula el scrollToSection de React.
 * @param {string} id - El ID de la sección a la que hacer scroll.
 */
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // Cierra el menú móvil si está abierto
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('mobile-menu-icon');
        if (mobileMenu && menuIcon && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            menuIcon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        }
    }
}

// ==============================================
// LÓGICA DE LA BARRA DE NAVEGACIÓN (Navbar)
// ==============================================

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('mobile-menu-icon');
    const currentYearSpan = document.getElementById('current-year');
    
    // Configurar el año actual en el Footer
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }


    /**
     * Maneja el cambio de estilo de la navbar al hacer scroll.
     */
    function handleScroll() {
        if (window.scrollY > 10) {
            navbar.classList.remove('bg-transparent');
            navbar.classList.add('bg-white', 'shadow-md');
        } else {
            navbar.classList.remove('bg-white', 'shadow-md');
            navbar.classList.add('bg-transparent');
        }
    }

    // Evento de scroll para el efecto de la navbar
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar al cargar para establecer el estado inicial

    // Lógica del botón de menú móvil
    mobileMenuButton.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('hidden');
        menuIcon.setAttribute('data-lucide', isOpen ? 'menu' : 'x');
        // Re-renderizar los iconos de Lucide
        lucide.createIcons(); 
    });

    // Manejar clics para scroll suave
    document.querySelectorAll('[data-scroll-to]').forEach(button => {
        button.addEventListener('click', (e) => {
            const targetId = e.currentTarget.getAttribute('data-scroll-to');
            scrollToSection(targetId);
        });
    });

    // ==============================================
    // RENDERIZADO DE SECCIONES (Services, Portfolio, Testimonials)
    // ==============================================

    /**
     * Renderiza los servicios.
     */
    function renderServices() {
        const container = document.getElementById('services-container');
        if (!container) return;

        container.innerHTML = servicesData.map(service => `
            <div class="rounded-xl border border-slate-200 bg-white text-card-foreground shadow-sm p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <i data-lucide="${service.icon.toLowerCase()}" class="w-6 h-6 text-white"></i>
                </div>
                <h3 class="text-xl font-semibold text-slate-900 mb-2">${service.title}</h3>
                <p class="text-slate-600">${service.description}</p>
            </div>
        `).join('');
        lucide.createIcons(); // Vuelve a renderizar los iconos
    }

    /**
     * Renderiza el portafolio.
     */
    function renderPortfolio() {
        const container = document.getElementById('portfolio-container');
        if (!container) return;

        container.innerHTML = projectsData.map(project => `
            <div class="rounded-xl border border-slate-200 bg-white text-card-foreground overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <div class="relative h-48 overflow-hidden">
                    <img
                        src="${project.image}"
                        alt="${project.title}"
                        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-semibold text-slate-900 mb-2">${project.title}</h3>
                    <p class="text-slate-600 mb-4">${project.description}</p>
                    <div class="flex flex-wrap gap-2">
                        ${project.tags.map(tag => `
                            <span class="inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold bg-slate-100 text-slate-800">${tag}</span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }

    /**
     * Renderiza los testimonios.
     */
    function renderTestimonials() {
        const container = document.getElementById('testimonials-container');
        if (!container) return;

        container.innerHTML = testimonialsData.map(testimonial => {
            const stars = Array(testimonial.rating).fill().map(() => `
                <i data-lucide="star" class="w-5 h-5 fill-yellow-400 text-yellow-400"></i>
            `).join('');

            return `
                <div class="rounded-xl border border-slate-200 bg-white text-card-foreground shadow-sm">
                    <div class="p-6">
                        <div class="flex gap-1 mb-4">${stars}</div>
                        <p class="text-slate-600 mb-6">"${testimonial.content}"</p>
                        <div class="flex items-center gap-3">
                            <div class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white font-medium">
                                ${testimonial.initials}
                            </div>
                            <div>
                                <div class="text-slate-900 font-medium">${testimonial.name}</div>
                                <div class="text-slate-500 text-sm">${testimonial.role}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        lucide.createIcons(); // Vuelve a renderizar los iconos
    }

    // Llamar a las funciones de renderizado
    renderServices();
    renderPortfolio();
    renderTestimonials();

    // ==============================================
    // LÓGICA DEL FORMULARIO DE CONTACTO (Contact)
    // ==============================================

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulación de envío de datos del formulario
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            console.log("Datos del formulario enviados:", data);

            // Simulación del toast (usando la librería Sonner)
            if (window.toast) {
                toast.success("Mensaje enviado correctamente. ¡Nos pondremos en contacto pronto!");
            } else {
                alert("Mensaje enviado correctamente. ¡Nos pondremos en contacto pronto!");
            }

            // Resetear el formulario
            contactForm.reset();
        });
    }

});