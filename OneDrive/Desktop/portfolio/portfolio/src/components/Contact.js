import React, { useState } from "react";
import "../components/contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("¡Mensaje enviado!"))
      .catch((error) => alert(error));
  }

  return (
    <section  id="contact">
      <div >
        <div >
          <div >
            <div >
              <ul >
                <li>
                  <h2 >
                    DIRECCIÓN
                  </h2>
                  <p >
                    Av. del Valle <br />
                    Villa Ciudad Parque Cordoba Argentina
                  </p>
                </li>
                <li>
                  <h2 >
                    CORREO ELECTRÓNICO
                  </h2>
                  <a
                    href="distribuidoracalamuchita@gmail.com"
                    className="text-indigo-400 leading-relaxed"
                  >
                    distribuidoracalamuchita@gmail.com
                  </a>
                </li>
                <li>
                  <h2 >
                    NÚMERO DE TELÉFONO
                  </h2>
                  <p >+54 3546 525829</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <form
          name="contact"
          
          onSubmit={handleSubmit}
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            ¡Contrátame!
          </h2>
          <p className="leading-relaxed mb-5">
            Deja aqui tus datos para que podamos comunicarnos
          </p>
          <div >
            <label htmlFor="name" >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
             
            />
          </div><br></br>
          <div className="relative mb-4">
            <label htmlFor="email" >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
             
            />
          </div>
<br>
</br>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              
            />
          </div>
          <button
            type="submit"
            className="btn"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
