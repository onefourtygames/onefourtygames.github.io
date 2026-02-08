import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
const resources = {
    en: {
        translation: {
            "nav": {
                "home": "Home",
                "games": "Our Games",
                "services": "Services",
                "about": "About Us",
                "contact": "Contact"
            },
            "footer": {
                "privacy": "Privacy Policy",
                "terms": "Terms of Use",
                "rights": "All rights reserved."
            },
            "seo": {
                "default": {
                    "title": "One Fourty Games - Mobile Puzzle Games",
                    "description": "Play Block Crash and other addictive mobile puzzle games. Train your brain with our challenging and fun experiences. Download for iOS & Android."
                }
            },
            "home": {
                "welcome": "Creating the next generation of games.",
                "hero_subtitle": "We craft digital experiences where logic meets creativity.",
                "cta_games": "Our Games",
                "cta_build": "Build With Us",
                "features": {
                    "innovation": {
                        "title": "Innovation",
                        "desc": "Pushing boundaries with unique mechanics."
                    },
                    "technology": {
                        "title": "Technology",
                        "desc": "Built with the latest tech for smooth performance."
                    },
                    "passion": {
                        "title": "Passion",
                        "desc": "Games made by gamers, for gamers."
                    }
                }
            },
            "services": {
                "hero_title": "Build With Us",
                "hero_subtitle": "Turn your ideas into digital reality. We design, develop, and launch premium games and applications for visionary clients.",
                "items": {
                    "game_dev": {
                        "title": "Game Development",
                        "desc": "We build immersive gaming experiences using Unity, Godot, and Web technologies (Phaser, React). From casual mobile games to complex mechanics.",
                        "features": ["Mobile & Web Games", "Unity & Godot Experts", "Multiplayer Integration", "Game Design & Polish"]
                    },
                    "app_dev": {
                        "title": "App Development",
                        "desc": "Custom mobile and web applications tailored to your business needs. We specialize in React Native, iOS, and Android development.",
                        "features": ["Cross-platform (React Native)", "Native iOS & Android", "Progressive Web Apps", "UI/UX Design"]
                    },
                    "consulting": {
                        "title": "Consulting & Strategy",
                        "desc": "Already have a project? We help you optimize performance, improve monetization strategies, and refine user retention.",
                        "features": ["Technical Audit", "Monetization Strategy", "Performance Optimization", "Market Analysis"]
                    }
                },
                "cta": {
                    "title": "Ready to start your project?",
                    "text": "Let's collaborate to build something extraordinary. Contact us today for a free consultation.",
                    "button": "Get into Contact"
                }
            },
            "games_page": {
                "title": "Our Games",
                "subtitle": "Explore our collection of immersive and challenging experiences.",
                "block_crash": {
                    "desc": "Block Crash! is an addictive puzzle game that challenges your spatial reasoning. Fit blocks together, clear lines, and beat your high score in this vibrant and engaging experience. Designed for puzzle lovers of all ages."
                },
                "links": {
                    "app_store": "App Store",
                    "google_play": "Google Play",
                    "android_beta": "Android (Beta)"
                }
            },
            "block_crash_page": {
                "hero": {
                    "title": "Block Crash!",
                    "subtitle": "The ultimate puzzle challenge for your mind.",
                    "download_text": "Available now on iOS and Android"
                },
                "about": {
                    "title": "About the Game",
                    "desc_1": "Block Crash! reinvents the classic block puzzle genre with modern mechanics and a sleek, dark aesthetic. Test your spatial reasoning skills as you fit blocks onto the grid, clear lines, and aim for the high score.",
                    "desc_2": "With intuitive touch controls and satisfying sound effects, it's the perfect game to pick up for a quick session or master over hours of gameplay."
                },
                "features": {
                    "title": "Key Features",
                    "items": [
                        "Endless gameplay with increasing difficulty",
                        "Sleek dark mode graphics",
                        "Satisfying sound effects and haptics",
                        "Compete for the highest score"
                    ]
                },
                "gallery": {
                    "title": "Screenshots"
                }
            },
            "form": {
                "name": "Name",
                "email": "Email",
                "message": "Message",
                "read_more": "Read More",
                "like_post": "Like this post",
                "thanks": "Thanks!",
                "share_post": "Share this post",
                "link_copied": "Link Copied!",
                "send": "Send Message",
                "sending": "Sending...",
                "success": "Message sent successfully!",
                "error": "Failed to send message.",
                "demo": "(Demo: This triggers your mail client. For usage without mail client, configure Formspree.)"
            }
        }
    },
    es: {
        translation: {
            "nav": {
                "home": "Inicio",
                "games": "Juegos",
                "services": "Servicios",
                "about": "Sobre Nosotros",
                "contact": "Contacto"
            },
            "footer": {
                "privacy": "Política de Privacidad",
                "terms": "Términos de Uso",
                "rights": "Todos los derechos reservados."
            },
            "seo": {
                "default": {
                    "title": "One Fourty Games - Juegos de Puzzles Móviles",
                    "description": "Juega a Block Crash y otros adictivos juegos de puzzles para móvil. Entrena tu cerebro con nuestras experiencias desafiantes y divertidas. Descarga para iOS y Android."
                }
            },
            "home": {
                "welcome": "Creando la próxima generación de videojuegos.",
                "hero_subtitle": "Creamos experiencias digitales donde la lógica se encuentra con la creatividad.",
                "cta_games": "Nuestros Juegos",
                "cta_build": "Trabaja con Nosotros",
                "features": {
                    "innovation": {
                        "title": "Innovación",
                        "desc": "Superando límites con mecánicas únicas."
                    },
                    "technology": {
                        "title": "Tecnología",
                        "desc": "Construido con la última tecnología para un rendimiento fluido."
                    },
                    "passion": {
                        "title": "Pasión",
                        "desc": "Juegos hechos por gamers, para gamers."
                    }
                }
            },
            "services": {
                "hero_title": "Construye con Nosotros",
                "hero_subtitle": "Convierte tus ideas en realidad digital. Diseñamos, desarrollamos y lanzamos juegos y aplicaciones premium para clientes visionarios.",
                "items": {
                    "game_dev": {
                        "title": "Desarrollo de Videojuegos",
                        "desc": "Creamos experiencias de juego inmersivas usando Unity, Godot y tecnologías Web (Phaser, React). Desde juegos móviles casuales hasta mecánicas complejas.",
                        "features": ["Juegos Móviles y Web", "Expertos en Unity y Godot", "Integración Multijugador", "Diseño y Pulido de Juegos"]
                    },
                    "app_dev": {
                        "title": "Desarrollo de Apps",
                        "desc": "Aplicaciones móviles y web personalizadas adaptadas a las necesidades de tu negocio. Nos especializamos en React Native, desarrollo iOS y Android.",
                        "features": ["Multiplataforma (React Native)", "Nativo iOS y Android", "Web Apps Progresivas", "Diseño UI/UX"]
                    },
                    "consulting": {
                        "title": "Consultoría y Estrategia",
                        "desc": "¿Ya tienes un proyecto? Te ayudamos a optimizar el rendimiento, mejorar estrategias de monetización y refinar la retención de usuarios.",
                        "features": ["Auditoría Técnica", "Estrategia de Monetización", "Optimización de Rendimiento", "Análisis de Mercado"]
                    }
                },
                "cta": {
                    "title": "¿Listo para empezar tu proyecto?",
                    "text": "Colaboremos para construir algo extraordinario. Contáctanos hoy para una consulta gratuita.",
                    "button": "Ponte en Contacto"
                }
            },
            "games_page": {
                "title": "Nuestros Juegos",
                "subtitle": "Explora nuestra colección de experiencias inmersivas y desafiantes.",
                "block_crash": {
                    "desc": "¡Block Crash! es un adictivo juego de puzzles que desafía tu razonamiento espacial. Encaja bloques, limpia líneas y supera tu puntuación más alta en esta experiencia vibrante y atractiva. Diseñado para amantes de los puzzles de todas las edades."
                },
                "links": {
                    "app_store": "App Store",
                    "google_play": "Google Play",
                    "android_beta": "Android (Beta)"
                }
            },
            "block_crash_page": {
                "hero": {
                    "title": "Block Crash!",
                    "subtitle": "El desafío definitivo de puzzles para tu mente.",
                    "download_text": "Disponible ahora en iOS y Android"
                },
                "about": {
                    "title": "Sobre el Juego",
                    "desc_1": "Block Crash! reinventa el género clásico de puzzles de bloques con mecánicas modernas y una estética oscura y elegante. Pon a prueba tus habilidades de razonamiento espacial mientras encajas bloques en la cuadrícula, limpias líneas y aspiras a la puntuación más alta.",
                    "desc_2": "Con controles táctiles intuitivos y efectos de sonido satisfactorios, es el juego perfecto para una sesión rápida o para dominar durante horas."
                },
                "features": {
                    "title": "Características Principales",
                    "items": [
                        "Juego infinito con dificultad creciente",
                        "Gráficos elegantes en modo oscuro",
                        "Efectos de sonido y hápticos satisfactorios",
                        "Compite por la puntuación más alta"
                    ]
                },
                "gallery": {
                    "title": "Capturas de Pantalla"
                }
            },
            "form": {
                "name": "Nombre",
                "email": "Correo Electrónico",
                "message": "Mensaje",
                "send": "Enviar Mensaje",
                "sending": "Enviando...",
                "success": "¡Mensaje enviado con éxito!",
                "error": "Error al enviar el mensaje.",
                "demo": "(Demo: Esto abre tu cliente de correo. Para usarlo sin cliente, configura Formspree.)"
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "es", // Default language
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
