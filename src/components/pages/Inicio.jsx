
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/Inicio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Inicio() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: '/slider/1.jpg',
            title: 'Cuidamos a tus mascotas con amor',
            text: 'Ofrecemos servicios veterinarios de alta calidad para tu compañero fiel.',
            buttonText: 'Agendar cita',
            buttonLink: '/agendar-citas',
        },
        {
            image: '/slider/2.jpg',
            title: 'Productos de calidad para tu mascota',
            text: 'Encuentra concentrados, purgas y más en nuestra tienda.',
            buttonText: 'Ver productos',
            buttonLink: '/productos',
        },
        {
            image: '/slider/3.jpg',
            title: 'Noticias y consejos útiles',
            text: 'Mantente informado sobre el cuidado de tus animales con nuestras novedades.',
            buttonText: 'Leer más',
            buttonLink: '/noticias',
        },
        {
            image: '/slider/4.jpg',
            title: 'Contáctanos hoy mismo',
            text: 'Estamos aquí para ayudarte en Cimitarra, Santander.',
            buttonText: 'Contactar',
            buttonLink: '/contacto',
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="inicio">
            <div className="slider">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`slide-image ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    ></div>
                ))}
                <div className="contenedor slide-content">
                    <h2>{slides[currentSlide].title}</h2>
                    <p>{slides[currentSlide].text}</p>
                    <Link to={slides[currentSlide].buttonLink} className="inicio-btn">
                        {slides[currentSlide].buttonText}
                    </Link>
                </div>
                <button className="slider-arrow prev" onClick={prevSlide}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button className="slider-arrow next" onClick={nextSlide}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>

            <section className="contactar">
                <h1>Contactanos</h1>
                <div className='contenedor'>
                    <div className='elemento-contactos'> 
                        <i className='fa-brands fa-wpforms'></i>
                        <p>Agenda tú Cita</p>
                        <button>Agendar</button>
                    </div>
                    <div className='elemento-contactos'> 
                        <i className='fa-solid fa-cat'></i>
                        <p>¿Quienes Somos?</p>
                        <button>Conocenos</button>
                    </div>
                    <div className='elemento-contactos'> 
                        <i className='fa-brands fa-whatsapp'></i>
                        <p>Contacto Directo</p>
                        <a href="https://wa.me/573232904936" target="_blank" rel="noopener noreferrer">
                            <button>Contactar</button>
                        </a>
                    </div>

                </div>
            </section> 

            <h1>Nuestros Servicios</h1>
            <section className="servicios">
                
                <div className='contenedor'>
                    <div className='elemento-servicios'>
                        <img src = '/servicios/1.jpg' alt='Consulta Veterinaria'/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui molestiae enim eius magnam, autem placeat!</p>
                        <a href="#">
                             <button>Contactar</button>
                        </a>
                   </div>
                   <div className='elemento-servicios'>
                        <img src = '/servicios/2.jpg' alt='Consulta Veterinaria'/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui molestiae enim eius magnam, autem placeat!</p>
                        <a href="#">
                             <button>Contactar</button>
                        </a>
                   </div>
                   <div className='elemento-servicios'>
                        <img src = '/servicios/3.jpg' alt='Consulta Veterinaria'/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui molestiae enim eius magnam, autem placeat!</p>
                        <a href="#">
                             <button>Contactar</button>
                        </a>
                   </div>
                   <div className='elemento-servicios'>
                        <img src = '/servicios/4.jpg' alt='Consulta Veterinaria'/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui molestiae enim eius magnam, autem placeat!</p>
                        <a href="#">
                             <button>Contactar</button>
                        </a>
                   </div>
                   <div className='elemento-servicios'>
                        <img src = '/servicios/5.jpg' alt='Consulta Veterinaria'/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui molestiae enim eius magnam, autem placeat!</p>
                        <a href="#">
                             <button>Contactar</button>
                        </a>
                   </div>
                   <div className='elemento-servicios'>
                        <img src = '/servicios/6.jpg' alt='Consulta Veterinaria'/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui molestiae enim eius magnam, autem placeat!</p>
                        <a href="#">
                             <button>Contactar</button>
                        </a>
                   </div>
                   <div className='elemento-servicios'>
                        <img src = '/servicios/7.jpg' alt='Consulta Veterinaria'/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui molestiae enim eius magnam, autem placeat!</p>
                        <a href="#">
                             <button>Contactar</button>
                        </a>
                   </div>
                   <div className='elemento-servicios'>
                        <img src = '/servicios/8.jpg' alt='Consulta Veterinaria'/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui molestiae enim eius magnam, autem placeat!</p>
                        <a href="#">
                             <button>Contactar</button>
                        </a>
                   </div>
                </div>

            </section>




            <h1>Oferta de la Semana</h1>

            <section className='imagen-fondo'>
                <div className='contenedor-perro'>
                    <div className='texto'>
                        <h2>Baño y Peluqueria</h2>
                        <p>Aprovecha nuestra gran oferta de la semana y conciente a tu mascota.</p>
                        <a href="#">
                             <button>Saber mas</button>
                        </a>
                    </div>
                </div>
            </section>



            <h1>¿Porque Elegirnos?</h1>

            <section className='porque-elegirnos'>
                <div className="contenedor">
                    <div className="razones">
                        <div className="razon">
                            <i className='fa-solid fa-gift'></i>
                            <h3>Cuidado profesional y humano</h3>
                            <p> Atención experta con amor por cada mascota</p>
                        </div>
                        <div className="razon-centro">
                            <i className='fa-solid fa-gift'></i>
                            <h3>Atención con calidez</h3>
                            <p>Trato amable para dueños y mascotas</p>
                        </div>
                        <div className="razon">
                            <i className='fa-solid fa-gift'></i>
                            <h3>Cuidado integral siempre</h3>
                            <p>Servicios completos para la salud de tu mascota</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        
    );
}

export default Inicio;