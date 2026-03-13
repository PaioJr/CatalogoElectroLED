const productos = [
    {
        nombre: "Led NEON Flex Fucsia por metro",
        categoria: "Cintas y Neón",
        precio: 3500,
        imagen: "https://i.postimg.cc/7YMDWPXb/manguera-led-neon-fucsia-01-copia-8d911060a3b556341717539973845420-1024-1024.webp", 
        descripcion: "Ideal para decoración y carteles. Alta flexibilidad y brillo uniforme."
    },
    {
        nombre: "Led NEON Flex Naranja por metro",
        categoria: "Cintas y Neón",
        precio: 3500,
        imagen: "https://i.postimg.cc/tCbrsjPH/D-NQ-NP-2X-936947-MLA90360150512-082025-F.webp", 
        descripcion: "Ideal para decoración y carteles. Resistente y duradero."
    },
    {
        nombre: "Led NEON Flex Verde por metro",
        categoria: "Cintas y Neón",
        precio: 3500,
        imagen: "https://i.postimg.cc/8z9MrR3d/teve-n05m-placa-meli-05-copia-90fd7cc114b565f85017539973845461-1024-1024.webp", 
        descripcion: "Ideal para decoración y carteles. Bajo consumo LED."
    },
    {
        nombre: "Led NEON Flex Azul por metro",
        categoria: "Cintas y Neón",
        precio: 3500,
        imagen: "https://i.postimg.cc/0NZvBnst/manguera-led-neon-azul-01-1-838785380dbc2e1d8017539973849155-1024-1024.webp", 
        descripcion: "Color azul intenso. Ideal para interiores y cartelería."
    },
    {
        nombre: "Led NEON Flex Rojo por metro",
        categoria: "Cintas y Neón",
        precio: 3500,
        imagen: "https://i.postimg.cc/g2HrGvpm/manguera-led-neon-rojo-01-1-17d7bdea512493266f17539973848554-1024-1024.webp", 
        descripcion: "Color rojo vibrante para destacar cualquier diseño."
    },
    {
        nombre: "Led NEON Flex Amarillo por metro",
        categoria: "Cintas y Neón",
        precio: 3500,
        imagen: "https://i.postimg.cc/yY5kfVPk/manguera-led-neon-amarilla-02-d53914b8def49e25ca17539973843679-1024-1024.webp", 
        descripcion: "Luz amarilla brillante, gran impacto visual."
    },
    {
        nombre: "Led NEON Flex Violeta por metro",
        categoria: "Cintas y Neón",
        precio: 3500,
        imagen: "https://i.postimg.cc/ZKj1ZRgk/D-NQ-NP-2X-973878-MLA90049462114-082025-F.webp", 
        descripcion: "Tono violeta moderno para decoraciones exclusivas."
    },
    {
        nombre: "Led NEON Flex RGB por metro",
        categoria: "Cintas y Neón",
        precio: 14500,
        imagen: "https://i.postimg.cc/zvz0PwqG/D-NQ-NP-2X-820961-MLA99988659909-112025-F.webp", 
        descripcion: "Multicolor con efectos programables. Máxima versatilidad."
    },
    {
        nombre: "Tira 5050 Interior Cálida x 5mts",
        categoria: "Cintas y Neón",
        precio: 8900,
        imagen: "https://i.postimg.cc/gJv98K0W/D-NQ-NP-2X-852449-MLA90942364305-082025-F.webp",
        descripcion: "Doble pista de cobre para mejor disipación. Fraccionable cada 5cm."
    },
    {
        nombre: "Tira Led RGB 5050 12v Interior 5mts",
        categoria: "Cintas y Neón",
        precio: 18000,
        imagen: "https://i.postimg.cc/ZYg57zvP/tira.webp",
        descripcion: "Kit de 300 LEDs. Ideal para ambientación de techos y muebles."
    },
    {
        nombre: "Módulo Smart Switch Wifi",
        categoria: "Domótica",
        precio: 17000,
        imagen: "https://i.postimg.cc/wjMN7ybs/904336441699da80ecdf9d4-43049716-36c3f002e6215bfd2617731817580192-1024-1024.webp",
        descripcion: "Convertí cualquier tecla común en inteligente. Control por App y voz."
    },
    {
        nombre: "Controladora Smart Music WiFi",
        categoria: "Domótica",
        precio: 18900,
        imagen: "https://i.postimg.cc/kMswS9GH/40900295268eff6b20be5c0-60621010-9205bb3680d9290f7817734096961072-1024-1024.webp",
        descripcion: "Sincronizá tus LEDs con la música. Compatible con Alexa y Google Home."
    },
    {
        nombre: "Control Remoto Smart WiFi+IR Universal",
        categoria: "Domótica",
        precio: 15000,
        imagen: "https://i.postimg.cc/gkBX9ttz/28170115768e6d494be8d01-62979572-057f2f2fa0547965b917734048990276-1024-1024.webp",
        descripcion: "Controlá TV y Aire desde el celu. Incluye sensor de temperatura."
    },
    {
        nombre: "Lámpara Dicroica LED 7W",
        categoria: "Iluminación",
        precio: 3000,
        imagen: "https://i.postimg.cc/QddQ1nVj/79325865268e032b91da5c9-71455258-c29897bc24c4fadfab17734100975129-1024-1024.webp",
        descripcion: "Bajo consumo, alto rendimiento. Reemplazo directo halógena."
    },
    {
        nombre: "Reflector LED 50W Exterior",
        categoria: "Iluminación",
        precio: 14500,
        imagen: "https://i.postimg.cc/Hx9nSdh7/28500389268e00224e551a9-64826147-dfe610496d3f25afa917733700962966-1024-1024.webp",
        descripcion: "Protección IP65. Ideal para patios, fachadas y seguridad."
    },
    {
        nombre: "Panel LED Montar Redondo 24W",
        categoria: "Iluminación",
        precio: 22587,
        imagen: "https://i.postimg.cc/dVdh7bKn/D-NQ-NP-2X-622656-MLA95390274124-102025-F.webp",
        descripcion: "Diseño moderno de aplicar. Disponible en luz fría y cálida."
    },
    {
        nombre: "Cámara Smart WIFI Interior HD 1080P",
        categoria: "Seguridad",
        precio: 40900,
        imagen: "https://i.postimg.cc/4yYKnzmk/181371257468f00476bc6be1-83953344-94405615611040a20317734108510041-1024-1024.webp",
        descripcion: "Visión 360∘, audio bidireccional y alertas al celular en tiempo real."
    },
    {
        nombre: "Cámara DUAL Smart WiFi Exterior",
        categoria: "Seguridad",
        precio: 129000,
        imagen: "https://i.postimg.cc/ZqyvTPvz/183955767668fbff6b9a0f23-29824819-cf846f4a1c6229ba2617734072751852-1024-1024.webp",
        descripcion: "Doble lente para máxima cobertura exterior. Resistente al clima."
    },
    {
        nombre: "Cerradura Biométrica Smart WIFI",
        categoria: "Seguridad",
        precio: 160000,
        imagen: "https://i.postimg.cc/tgrWTR2D/106837583068e0d43a2d8346-51399007-63ea19aa4a020b5ce217734110937818-1024-1024.webp",
        descripcion: "Desbloqueo por huella, clave, tarjeta o App. Seguridad premium."
    },
    {
        nombre: "Sensor de Movimiento 360°",
        categoria: "Seguridad",
        precio: 6200,
        imagen: "https://i.postimg.cc/KYn8zmF7/sensor1.webp",
        descripcion: "Ahorro de energía automático. Gran rango de detección."
    },
    {
        nombre: "Fuente de Alimentación 12V 5A",
        categoria: "Electrónica",
        precio: 7500,
        imagen: "https://i.postimg.cc/YCKkXG1j/FUENTE-PLASTICA-1A-INOLUX.jpg",
        descripcion: "Ideal para tiras LED y cámaras. Estable y segura."
    },
    {
        nombre: "Cable RGB 0.5mm (por metro)",
        categoria: "Electrónica",
        precio: 900,
        imagen: "https://i.postimg.cc/rsPmLvpG/13063975136985ab735fd146-11942737-5b4f6be77e3b5ffb5817734058232555-1024-1024.webp",
        descripcion: "4 hilos identificados por color para facilitar la conexión."
    }
];
