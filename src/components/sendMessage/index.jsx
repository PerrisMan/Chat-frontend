import { useState } from "react";

export default function SendMessage() {
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8080/chat/send", //Cambair la endpoint
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            remitente: "admin@admin",
            receptor: "perris@perris",
            messege: message,
            hora: new Date().toISOString()
          }),
        }
      );

      if (response.ok) {
        const result = await response.text();
        if (result == "yes") {
          console.log("Mensaje enviado");
          alert("Mensaje enviado");
          setMessage("");
        } else {
          console.error("No se envió el mensaje");
          alert("No se envió el mensaje");
        }
      } else {
        console.error("Error en la solicitud POST");
        alert("El mensaje no se pudo enviar");
      }
    } catch (error) {
      console.error("Error al enviar la solicitud POST:", error);
      alert("El mensaje no se pudo enviar");
    }

  }

  return (
    <div className=" flex w-full items-center">
      <div className=" pr-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 stroke-white hover:stroke-white/50 ease-in-out duration-300 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
      <form className=" w-full flex items-center" onSubmit={handleSubmit}>
        <input
          type="text"
          className=" w-full p-4 rounded-xl bg-neutral-900 text-white"
          placeholder="Escribir mensaje..."
          value={message}
          onChange={handleInputChange}
          required
        />
        <div className=" pl-4">
          <button
            className="rounded-full p-2 bg-blue-500 hover:bg-blue-500/50 ease-in-out duration-300"
            type=" submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
