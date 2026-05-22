export const STRINGS = {
  // Common
  currency: "MXN",

  // Navbar
  logo: "Sonrisa Integral",
  nav: {
    home: "Inicio",
    services: "Servicios",
    about: "Nosotros",
    testimonials: "Testimonios",
    contact: "Contacto",
  },
  btnBook: "Agendar cita",

  // Hero
  hero: {
    title: "Sonrisas saludables con tecnología dental moderna",
    subtitle: "Especialistas en ortodoncia, blanqueamiento y estética dental en Zapopan. Recupera tu confianza con los mejores expertos.",
    btnWhatsapp: "Enviar WhatsApp",
    features: [
      "1,500+ pacientes",
      "Atención personalizada",
      "Tecnología de punta"
    ]
  },

  // Expert
  expert: {
    tag: "NUESTRA EXPERTA",
    name: "Dra. Mariana López Hernández",
    description: "Especialista en odontología estética con una visión enfocada en la armonía facial y la salud integral. Egresada de la UdeG y certificada internacionalmente en técnicas avanzadas.",
    experience: "12+",
    experienceText: "Años de experiencia transformando sonrisas en Zapopan.",
    badges: ["Orgullosamente UdeG", "Certificación Invisalign"],
    stats: [
      { number: "5k+", label: "TRATAMIENTOS" },
      { number: "98%", label: "SATISFACCIÓN" },
      { number: "15+", label: "CURSOS INT." }
    ]
  },

  // Services
  services: {
    tag: "NUESTRA ESPECIALIDAD",
    title: "Servicios de Clase Mundial",
    list: [
      {
        id: "cleaning",
        title: "Limpieza Dental Profunda",
        description: "Eliminación de sarro y pulido profesional para una salud gingival óptima.",
        details: "Nuestra limpieza dental profunda utiliza ultrasonido para remover el sarro por debajo de la línea de las encías. Previene la gingivitis, elimina manchas superficiales y deja tus dientes lisos y brillantes. Se recomienda cada 6 meses.",
        price: "$850",
        duration: "45 min",
        image: "/images/dentist.png"
      },
      {
        id: "whitening",
        title: "Blanqueamiento",
        description: "Tecnología LED de última generación.",
        details: "Aclara hasta 4 tonos en una sola sesión de forma segura y sin dañar el esmalte. Usamos geles de peróxido de alta calidad activados por luz LED. Incluye kit de sensibilidad.",
        price: "$2,500",
        duration: "60 min",
        image: "/images/service_whitening.png"
      },
      {
        id: "invisalign",
        tag: "POPULAR",
        title: "Invisalign®",
        description: "Ortodoncia invisible y removible. Diseña tu sonrisa en 3D.",
        details: "El sistema de alineadores transparentes más avanzado del mundo. Es estético, cómodo y removible, permitiéndote comer y cepillarte con normalidad. Incluye escaneo 3D y visualización del resultado final antes de empezar.",
        priceDesde: "$35,000",
        duration: "Variable (Aprox. 12-18 meses)"
      },
      {
        id: "ortho",
        title: "Ortodoncia",
        description: "Brackets metálicos y estéticos de alta calidad.",
        details: "Tratamiento correctivo para alinear tus dientes y mejorar la mordida. Contamos con opciones de brackets metálicos tradicionales o estéticos (zafiro/cerámica) que son casi invisibles.",
        priceDesde: "$12,000",
        duration: "Variable (Aprox. 18-24 meses)"
      },
      {
        id: "veneers",
        title: "Carillas",
        description: "Diseño de sonrisa permanente con porcelana ultrafina.",
        details: "Láminas ultrafinas de porcelana que se adhieren a la parte frontal de los dientes para corregir color, forma, tamaño o longitud. Es el secreto detrás de las 'sonrisas de Hollywood'. Mínima invasión.",
        priceDesde: "$4,500",
        unit: "/ pieza",
        duration: "2-3 Sesiones"
      }
    ],
    moreInfo: "Más info"
  },

  // Promotions
  promotions: {
    title: "Promociones del Mes",
    promo1: { tag: "GRATIS", desc: "PRIMERA VALORACIÓN" },
    promo2: { tag: "20% OFF", desc: "LIMPIEZA DENTAL" },
    promo3: { tag: "MSI", desc: "TARJETAS PARTICIPANTES" },
    btn: "¡Aprovechar Ahora!",
    modal: {
      title: "Gran Promoción del Mes",
      details: "¡Aprovecha nuestro paquete especial! Incluye primera valoración gratuita, 20% de descuento en tu primera limpieza dental profunda y la opción de diferir tus pagos a meses sin intereses con tarjetas participantes. ¡No dejes pasar esta oportunidad para renovar tu sonrisa!",
      btnWhatsapp: "¡Conoce más!",
      btnBook: "Agendar cita"
    }
  },

  // Appointment
  appointment: {
    title: "Agenda tu Cita",
    form: {
      service: "Servicio",
      serviceOptions: ["Primera Valoración", "Limpieza", "Blanqueamiento", "Ortodoncia", "Carillas", "Promociones del Mes"],
      date: "Fecha",
      time: "Horarios Disponibles",
      name: "Nombre Completo",
      phone: "Teléfono / WhatsApp",
      email: "Email",
      comments: "Comentarios Adicionales",
      disclaimer: "Al agendar, confirmas que has leído nuestro aviso de privacidad.",
      btnSubmit: "Confirmar Cita"
    }
  },

  // Testimonials
  testimonials: {
    title: "Confianza que brilla",
    reviews: [
      {
        id: 1,
        quote: "Excelente trato de la Dra. Mariana. Mi tratamiento de Invisalign fue más rápido de lo esperado y el resultado es increíble.",
        name: "Andrea Gómez",
        type: "Paciente de Ortodoncia"
      },
      {
        id: 2,
        quote: "Me hice un blanqueamiento y la tecnología que usan es de punta. Cero dolor y mis dientes quedaron muy naturales.",
        name: "Luis Ramírez",
        type: "Paciente Estética"
      },
      {
        id: 3,
        quote: "La clínica está impecable y el personal es muy amable. Me siento muy segura atendiendo a mis hijos aquí.",
        name: "Fernanda Torres",
        type: "Madre de familia"
      }
    ]
  },

  // FAQ
  faq: {
    title: "Preguntas Frecuentes",
    questions: [
      {
        q: "¿Cada cuánto debo realizarme una limpieza?",
        a: "Se recomienda realizar una limpieza dental profesional cada 6 meses."
      },
      {
        q: "¿Atienden urgencias dentales?",
        a: "Sí, contamos con un horario especial y línea directa para urgencias."
      },
      {
        q: "¿Los tratamientos son dolorosos?",
        a: "Utilizamos técnicas modernas y anestesia local para asegurar que no sientas dolor."
      },
      {
        q: "¿Manejan pagos a meses sin intereses?",
        a: "Sí, tenemos 3, 6 y 12 meses sin intereses con tarjetas participantes."
      }
    ]
  },

  // Location
  location: {
    title: "Ubícanos en Zapopan",
    address: {
      label: "Dirección",
      value: "Av. Universidad 1234, Local 5, Zapopan, Jal."
    },
    phone: {
      label: "Teléfono",
      value: "33 4455 6677"
    },
    hours: {
      label: "Horarios",
      days: "Lunes a Viernes: 9:00 - 19:00",
      weekend: "Sábados: 9:00 - 14:00"
    },
    paymentMethods: "MÉTODOS DE PAGO"
  },

  // Footer
  footer: {
    slogan: "Excelencia en salud dental y estética. Transformamos vidas a través de sonrisas saludables y hermosas.",
    links: {
      clinica: {
        title: "Clínica",
        items: ["Inicio", "Servicios", "Dra. Mariana", "Agendar"]
      },
      legal: {
        title: "Legal",
        items: ["Aviso Legal", "Privacidad", "Cookies"]
      }
    },
    urgencies: {
      title: "Urgencias",
      text: "¿Dolor agudo?",
      subtext: "Llama al 33 5511 2233 para atención inmediata."
    },
    copyright: "© 2024 Clínica Dental Sonrisa Integral. Excelencia en salud dental.",
    madeBy: "Zapopan, Jalisco",
    tech: "Hecho con tecnología de punta"
  }
};
