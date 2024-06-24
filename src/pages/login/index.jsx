import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input";

export default function LogIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8080/chat/datos", //Cambair la endpoint
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const result = await response.text();
        if (result == "yes") {
          console.log("Inicio de sesion exitosa");
          alert("Inicio de sesión exitosa");
          navigate("/home");
        } else {
          console.error("Inicio de sesion fallido");
          alert("Credenciales incorrectas");
          setFormData({
            email: "",
            password: "",
          });
        }
      } else {
        console.error("Error en la solicitud POST");
        alert("El mensaje no se pudo enviar");
      }
    } catch (error) {
      console.error("Error al enviar la solicitud POST:", error);
      alert("El mensaje no se pudo enviar");
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const data = [
    {
      placeholder: "Email",
      type: "email",
      id: "email",
      name: "email",
      value: formData.email,
    },
    {
      placeholder: "Contraseña",
      type: "password",
      id: "password",
      name: "password",
      value: formData.password,
    },
  ];
  return (
    <div className=" min-h-svh flex items-center justify-center p-4 sm:p-24 bg-neutral-800">
      <div className=" w-full lg:w-1/2 2xl:w-1/3 rounded-xl px-4 sm:px-24 lg:px-8 py-24 bg-neutral-900 shadow-2xl border-4 border-neutral-950">
        <h1 className=" text-center text-2xl sm:text-3xl text-white font-bold">
          Bienvenido
        </h1>
        <h2 className="text-center text-white/70 py-2 text-sm pb-4">
          Ingresa tus datos para iniciar sesión
        </h2>
        <form onSubmit={handleSubmit}>
          {data.map((items) => (
            <Input
              placeholder={items.placeholder}
              type={items.type}
              id={items.id}
              name={items.name}
              value={items.value}
              onChange={handleInputChange}
              key={items.name}
            />
          ))}
          <button
            type="submit"
            className="w-full bg-blue-500 rounded-2xl p-4 text-white hover:bg-blue-500/50 ease-in-out duration-300"
          >
            Iniciar sesión
          </button>
        </form>
        <div className=" w-full pt-4">
          <div>
            <p className=" text-white font-bold">Chat multimedia</p>
            <p className=" text-white font-bold">Alumnos</p>
            <p className=" text-white">Pérez Marmolejo Rodrigo</p>
            <p className=" text-white">Tapia Delgadillo Diego Alejandro</p>
          </div>
        </div>
      </div>
    </div>
  );
}
