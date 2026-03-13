const productos = [
    {
        nombre: "Cinta LED Neón Flex por metro",
        categoria: "Iluminación",
        precio: "3500",
        imagen: "https://i.postimg.cc/7YMDWPXb/manguera-led-neon-fucsia-01-copia-8d911060a3b556341717539973845420-1024-1024.webp", 
        descripcion: "Ideal para decoración y carteles. Varios colores disponibles."
    },
    {
        nombre: "Módulo Smart Switch Wifi",
        categoria: "Domótica",
        precio: "17000",
        imagen: "https://i.postimg.cc/wjMN7ybs/904336441699da80ecdf9d4-43049716-36c3f002e6215bfd2617731817580192-1024-1024.webp"
    },
    {
        nombre: "Lámpara Dicroica LED 7W",
        categoria: "Iluminación",
        precio: "3000",
        imagen: "https://i.postimg.cc/QddQ1nVj/79325865268e032b91da5c9-71455258-c29897bc24c4fadfab17734100975129-1024-1024.webp"
    },
{
        nombre: "Reflector LED 50W Exterior",
        categoria: "Iluminación",
        precio: "14500",
        imagen: "https://i.postimg.cc/Hx9nSdh7/28500389268e00224e551a9-64826147-dfe610496d3f25afa917733700962966-1024-1024.webp"
    },
    {
        nombre: "Sensor de Movimiento 360°",
        categoria: "Domótica",
        precio: "6200",
        imagen: "https://i.postimg.cc/KYn8zmF7/sensor1.webp"
    },
    {
        nombre: "Lámpara Inteligente RGB + CCT",
        categoria: "Domótica",
        precio: "8900",
        imagen: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=500",
        descripcion: "Millones de colores y tonos de blanco. Controlá la intensidad desde tu celular."
    },
    {
        nombre: "Panel LED Embutir 18W",
        categoria: "Iluminación",
        precio: "4800",
        imagen: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500",
        descripcion: "Diseño ultra delgado para cielorraso. Luz blanca fría para ambientes modernos."
    },
    {
        nombre: "Timbre Inteligente con Cámara",
        categoria: "Domótica",
        precio: "32000",
        imagen: "https://i.postimg.cc/sg5Rsvf5/191651422368d1e570614699-81010179-4b1c9c7720e1c9008017734073846934-1024-1024.webp"
    },
    {
        nombre: "Fuente de Alimentación 12V 5A",
        categoria: "Accesorios",
        precio: "7500",
        imagen: "https://i.postimg.cc/YCKkXG1j/FUENTE-PLASTICA-1A-INOLUX.jpg"
    },
{
        nombre: "Tira led RGB 5050 12v interior 5mts",
        categoria: "Iluminación",
        descripcion: "La tira LED SMD 5050 Interior RGB 50W 300 LEDs x 5m 12V de la marca Demasled es la opción perfecta para iluminar y decorar cualquier espacio. Con una potencia de 50W por metro, esta tira LED ofrece una iluminación brillante y de calidad. Además, cuenta con 60 LEDs por metro, lo que garantiza una distribución uniforme de la luz.",
        precio: 18000,
        imagen: "https://i.postimg.cc/ZYg57zvP/tira.webp"
    },
{
        nombre: "Cable RGB 0.5mm (venta por metro)",
        categoria: "Electronica",
        descripcion: "Especialmente diseñado para extender cualquier sistema de iluminación LED RGB. Se compone de 4 cables diferenciados por color para facilitar la conexión de calibre 24 AWG (0,511mm | 0.020 pulgadas",
        precio: 900,
        imagen: "https://i.postimg.cc/rsPmLvpG/13063975136985ab735fd146-11942737-5b4f6be77e3b5ffb5817734058232555-1024-1024.webp"
    },
{
        nombre: "Empalme Y para tiras led RGB",
        categoria: "Electronica",
        descripcion: "El Y-Splitter se usa para hacer divisiones, por lo que si bien estos no van a acentuar cosas como las tiras blancas frías o cálidas, todavía hay muchas opciones de aplicación para las tiras RGB divididas",
        precio: 1574,
        imagen: "https://i.postimg.cc/ydTjnT8f/207954502568ccb33154fc21-63957086-9d674c9e8edc45890917734056120536-1024-1024.webp"
    },
{
        nombre: "NOMBRE DEL PRODUCTO",
        categoria: "CATEGORÍA (ej. Domótica, Iluminación, Fuentes)",
        descripcion: "Una descripción cortita para enganchar al cliente.",
        precio: 1500,
        imagen: "https://URL-DE-TU-FOTO.jpg"
    },
{
        nombre: "Control Remoto RF Universal",
        categoria: "Domotica",
        descripcion: "Práctico para manejar tus dispositivos sin cables ni complicaciones. Gracias a su diseño compacto, podés llevarlo en el llavero y encender o apagar luces, chimeneas y otros equipos con solo presionar un botón. Funciona con radiofrecuencia de 433MHz, con un rango de hasta 25m en interiores y 80m en exteriores, ideal para casas, cabañas de madera o espacios donde no es posible pasar cableado.",
        precio: 8000,
        imagen: "https://i.postimg.cc/g2vMth4Z/17987257666981108d00fc03-88757691-9e68a057801b730e7417734069399171-1024-1024.webp"
    },
{
        nombre: " Control Remoto Smart WiFi+IR Universal ",
        categoria: "Domótica",
        descripcion: "Este dispositivo es la solución definitiva para centralizar el control de todos tus equipos que usan infrarrojo (IR), como televisores, aires acondicionados y equipos de música. No solo te permite controlarlos desde tu celular a través de la app Smart Life o TUYA , sino que también suma un Sensor de Temperatura y Humedad (TyH), permitiéndote automatizar el ambiente de tu casa. Hacé de tu hogar, un hogar inteligente y seguro, controlando todo con tu voz o desde cualquier lugar.",
        precio: 15000,
        imagen: "https://i.postimg.cc/gkBX9ttz/28170115768e6d494be8d01-62979572-057f2f2fa0547965b917734048990276-1024-1024.webp"
    },
{
        nombre: "Sensor Smart WiFi Magnetico",
        categoria: "Domótica",
        descripcion: "Eficaz sistema de monitoreo, con un diseño mini y elegante que podés colocar en puertas o ventanas. Se conecta a tu red Wi-Fi 2.4GHz y envía una notificación automática a tu smartphone cada vez que se produce una apertura o cierre. Olvidate de costosos sistemas de alarma; con este sensor y la app Smart Life, vas a mantenerte informado en todo momento, sabiendo quién entra o sale de tu casa.",
        precio: 15150,
        imagen: "https://i.postimg.cc/sDZyXnDG/23732661169affa917a55b7-50518846-a7af8e257a5b11b04a17734068674640-1024-1024.webp"
    },
{
        nombre: "Detector Smart Wifi de Inundaciones",
        categoria: "Domótica",
        descripcion: " te permite detectar fugas o desbordamientos de agua para evitar daños y costosas reparaciones. No ocupa espacio en tu casa y se conecta a la red Wi-Fi 2.4GHz, enviándote una notificación inmediata a tu celular a través de la app Smart Life cada vez que se detecta un problema.",
        precio: 15000,
        imagen: "https://i.postimg.cc/tR6pRSg9/50190824068ee9dea2e7f10-13265654-cdc4b3b51e756fc09817734068300257-1024-1024.webp"
    },
{
        nombre: "Controladora Smart Music WiFi ",
        categoria: "Domótica",
        descripcion: "Este módulo de 12 V te permite sincronizar los colores al ritmo de la música gracias a su micrófono integrado, y controlarlo todo por voz (Alexa/Google Home) o desde la App Smart Life. Soporta hasta 48 W de potencia y ofrece control remoto IR para máxima comodidad.",
        precio: 18900,
        imagen: "https://i.postimg.cc/kMswS9GH/40900295268eff6b20be5c0-60621010-9205bb3680d9290f7817734096961072-1024-1024.webp"
    },
{
        nombre: "Cámara Smart WIFI de Interior HD 1080P, IP33",
        categoria: "Domótica",
        descripcion: "Graba en Full HD 1080P (1920x1080), ofrece un ángulo de visión de 360∘ y es compatible con la App Smart Life para alertas de movimiento/sonido. Incluye audio bidireccional para comunicarte y visión nocturna automática, ideal para interiores.",
        precio: 40900,
        imagen: "https://i.postimg.cc/4yYKnzmk/181371257468f00476bc6be1-83953344-94405615611040a20317734108510041-1024-1024.webp"
    },
{
        nombre: "Cerradura Biométrica Smart WIFI de Vidrio Templado con Cámara",
        categoria: "Domótica",
        descripcion: "La cerradura inteligente combina funcionalidad avanzada, seguridad y un diseño moderno para puertas de vidrio templado, madera o UPVC. Este dispositivo incorpora múltiples métodos de desbloqueo y opciones de gestión inteligente para satisfacer las necesidades de hogares, oficinas y hoteles.",
        precio: 160000,
        imagen: "https://i.postimg.cc/tgrWTR2D/106837583068e0d43a2d8346-51399007-63ea19aa4a020b5ce217734110937818-1024-1024.webp"
    },
{
        nombre: "Detector de Humo",
        categoria: "Domótica",
        descripcion: "Protege tu hogar con el Sensor de Humo Fotoeléctrico WiFi Inteligente de Demasled. Este sensor detecta en tiempo real la presencia de humo y te alerta inmediatamente de posibles peligros de incendio. Cuando se detecta humo, el LED rojo del sensor se ilumina y emite una alarma sonora, avisándote a ti y a tu familia con suficiente antelación.",
        precio: 23735,
        imagen: "https://i.postimg.cc/cJcTcNTn/52710790168e733860d78f8-30030184-5ce18bd39f30a2219117734155613137-1024-1024.webp"
    },
{
        nombre: "Cámara DUAL Smart WiFi",
        categoria: "Domótica",
        descripcion: " Diseñada para ofrecerte seguridad y tranquilidad en cualquier condición climática. Con su tecnología avanzada, voltaje de trabajo de 12V y diseño robusto, esta cámara es la elección ideal para monitorear áreas exteriores, brindándote imágenes claras y funciones inteligentes que te permiten estar siempre al tanto de lo que sucede en tu entorno. ",
        precio: 129000,
        imagen: "https://i.postimg.cc/ZqyvTPvz/183955767668fbff6b9a0f23-29824819-cf846f4a1c6229ba2617734072751852-1024-1024.webp"
    },
{
        nombre: "Timbre de Puerta Smart con Cámara",
        categoria: "Domótica",
        descripcion: "Timbre con cámara de video inalámbrica admite WiFi de 2,4G, trabaja con la App Smart Life, tiene alta resolución de 480P, que le presenta imágenes y videos más claros y más detalles. Cuenta con audio bidireccional, con micrófono incorporado, que le permite hablar y ver a sus visitantes en cualquier momento y en cualquier lugar.",
        precio: 42000,
        imagen: "https://i.postimg.cc/sg5Rsvf5/191651422368d1e570614699-81010179-4b1c9c7720e1c9008017734073846934-1024-1024.webp"
    },
{
        nombre: "NOMBRE DEL PRODUCTO",
        categoria: "CATEGORÍA (ej. Domótica, Iluminación, Fuentes)",
        descripcion: "Una descripción cortita para enganchar al cliente.",
        precio: 15000,
        imagen: "https://URL-DE-TU-FOTO.jpg"
    },
{
        nombre: "NOMBRE DEL PRODUCTO",
        categoria: "CATEGORÍA (ej. Domótica, Iluminación, Fuentes)",
        descripcion: "Una descripción cortita para enganchar al cliente.",
        precio: 15000,
        imagen: "https://URL-DE-TU-FOTO.jpg"
    },
{
        nombre: "NOMBRE DEL PRODUCTO",
        categoria: "CATEGORÍA (ej. Domótica, Iluminación, Fuentes)",
        descripcion: "Una descripción cortita para enganchar al cliente.",
        precio: 15000,
        imagen: "https://URL-DE-TU-FOTO.jpg"
    },
{
        nombre: "NOMBRE DEL PRODUCTO",
        categoria: "CATEGORÍA (ej. Domótica, Iluminación, Fuentes)",
        descripcion: "Una descripción cortita para enganchar al cliente.",
        precio: 15000,
        imagen: "https://URL-DE-TU-FOTO.jpg"
    },
{
        nombre: "NOMBRE DEL PRODUCTO",
        categoria: "CATEGORÍA (ej. Domótica, Iluminación, Fuentes)",
        descripcion: "Una descripción cortita para enganchar al cliente.",
        precio: 15000,
        imagen: "https://URL-DE-TU-FOTO.jpg"
    },
{
        nombre: "NOMBRE DEL PRODUCTO",
        categoria: "CATEGORÍA (ej. Domótica, Iluminación, Fuentes)",
        descripcion: "Una descripción cortita para enganchar al cliente.",
        precio: 15000,
        imagen: "https://URL-DE-TU-FOTO.jpg"
    },
{
        nombre: "NOMBRE DEL PRODUCTO",
        categoria: "CATEGORÍA (ej. Domótica, Iluminación, Fuentes)",
        descripcion: "Una descripción cortita para enganchar al cliente.",
        precio: 15000,
        imagen: "https://URL-DE-TU-FOTO.jpg"
    },
{
        nombre: "NOMBRE DEL PRODUCTO",
        categoria: "CATEGORÍA (ej. Domótica, Iluminación, Fuentes)",
        descripcion: "Una descripción cortita para enganchar al cliente.",
        precio: 15000,
        imagen: "https://URL-DE-TU-FOTO.jpg"
    },
{
        nombre: "NOMBRE DEL PRODUCTO",
        categoria: "CATEGORÍA (ej. Domótica, Iluminación, Fuentes)",
        descripcion: "Una descripción cortita para enganchar al cliente.",
        precio: 15000,
        imagen: "https://URL-DE-TU-FOTO.jpg"
    },
{
        nombre: "NOMBRE DEL PRODUCTO",
        categoria: "CATEGORÍA (ej. Domótica, Iluminación, Fuentes)",
        descripcion: "Una descripción cortita para enganchar al cliente.",
        precio: 15000,
        imagen: "https://URL-DE-TU-FOTO.jpg"
    },
{
        nombre: "NOMBRE DEL PRODUCTO",
        categoria: "CATEGORÍA (ej. Domótica, Iluminación, Fuentes)",
        descripcion: "Una descripción cortita para enganchar al cliente.",
        precio: 15000,
        imagen: "https://URL-DE-TU-FOTO.jpg"
    },
{
        nombre: "NOMBRE DEL PRODUCTO",
        categoria: "CATEGORÍA (ej. Domótica, Iluminación, Fuentes)",
        descripcion: "Una descripción cortita para enganchar al cliente.",
        precio: 15000,
        imagen: "https://URL-DE-TU-FOTO.jpg"
    },
{
        nombre: "NOMBRE DEL PRODUCTO",
        categoria: "CATEGORÍA (ej. Domótica, Iluminación, Fuentes)",
        descripcion: "Una descripción cortita para enganchar al cliente.",
        precio: 15000,
        imagen: "https://URL-DE-TU-FOTO.jpg"
    }
];
