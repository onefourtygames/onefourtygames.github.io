import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
const resources = {
    en: {
        translation: {
            "home": "Home",
            "about": "About Us",
            "privacy": "Privacy Policy",
            "terms": "Terms of Use",
            "contact": "Contact",
            "welcome": "Creating the next generation of games.",
            "first_game": "Our First Game",
            "rights": "All rights reserved.",
            "form": {
                "name": "Name",
                "email": "Email",
                "message": "Message",
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
            "home": "Inicio",
            "about": "Sobre Nosotros",
            "privacy": "Política de Privacidad",
            "terms": "Términos de Uso",
            "contact": "Contacto",
            "welcome": "Creando la próxima generación de videojuegos.",
            "first_game": "Nuestro Primer Juego",
            "rights": "Todos los derechos reservados.",
            "form": {
                "name": "Nombre",
                "email": "Correo Electrónico",
                "message": "Mensaje",
                "send": "Enviar Mensaje",
                "sending": "Enviando...",
                "success": "¡Mensaje enviado con éxito!",
                "error": "Error al enviar el mensaje."
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "es", // Default language (Spanish as per user request implied by 'Ingles y castellano')
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
