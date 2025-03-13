import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../../styles/pages/contacto.css';

function Contacto () {
 
    return (
        <div>


        <section class="contacto-directo">
        <div class="contenedor">
          <h1>CONTÁCTENOS</h1>
          <ul>
              <li>
                  <a href="../../index.html">Inicio</a>
                  <a href="contacto.html">Contátenos</a>
              </li>
          </ul>
        </div>
     </section>



   
        
      <section class="formulario-contacto">
    <div class="contenedor">

        <div class="contacto-formulario">
          <h3>Enviar mensaje</h3>
            <form action="#" method="post">
                <div class="campo">
                  <label for="nombre">Su nombre:</label>
                  <input type="text" id="nombre" name="nombre" required/>
                </div>
                <div class="campo">
                    <label for="nombre">Su Correo</label>
                    <input type="email" id="nombre" name="E-mail" required/>
                  </div>
        
                <div class="campo">
                  <label for="asunto">Asunto:</label>
                  <input type="text" id="asunto" name="asunto" required/>
                </div>
        
                <div class="campo">
                  <label for="mensaje">Mensaje:</label>
                  <textarea id="mensaje" name="mensaje" rows="5" required></textarea>
                </div>
        
                <button type="submit">Enviar Mensaje</button>
              </form>
        
        </div>



        <div class="contacto-formulario">

            <h3>Contatenos</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora porro earum omnis nam sequi recusandae autem eveniet vel hic illum eos consequuntur veritatis quasi explicabo architecto totam iste asperiores voluptate sed, nesciunt corrupti nulla accusamus optio voluptatibus. Nostrum, laudantium atque?</p>
            <div class="iconos">
              <i class="fa-solid fa-map-location"></i>
              <p>Cll 8 No. 7-20 B. Alfonso Lòpez , Cimitarra, Colombia</p>
            </div>
            <div class="iconos">
              <i class="fa-solid fa-phone-volume"></i>
              <p>+57 3232904936</p>
            </div>
            <div class="iconos">
              <i class="fa-solid fa-envelope"></i>
              <p>info@zonaanimal.com</p>
            </div>
            <div class="iconos">
              <i class="fa-solid fa-calendar-days"></i>
              <p>Lunes a Sábado 8:00AM - 12:00M - 2:00PM 6:00PM</p>
            </div>
        </div>
    </div>
   </section>
    

      <section class="mapa">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1667.3350563058402!2d-73.95246826915371!3d6.314405780292123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e42259a63e7c407%3A0x115b804de5624350!2sVeterinaria%20Zona%20Animal!5e0!3m2!1ses!2sco!4v1740446188181!5m2!1ses!2sco no-referrer-when-downgrade"></iframe>
</section>

      </div>
    );
}


export default Contacto;