import Photo from "../../assets/Upstream-8.svg";
import CardMessage from "../cardMessage";
import ChatAllSvg from "../chatAllSvg";
import Photo2 from "../../assets/Upstream-4.svg";
import "./index.css";

const MENSAJES = Array.from({ length: 1 }, () => ({
  photo: Photo2,
  name: "Amaury Vasquez",
  lastMessage: "Hola, ¿Cómo estas?",
}));
export default function Bar() {
  return (
    <div className=" border border-black w-96 h-auto p-8">
      <div className=" w-full flex justify-between items-center">
        <figure>
          <img src={Photo} alt="" className="w-8" />
        </figure>
        <div className=" flex items-center">
          <ChatAllSvg />
          <p className=" text-xl font-bold text-white pl-4">Todos</p>
        </div>
      </div>
      <p className=" text-xl text-neutral-300 pt-8 pb-2">Mensajes</p>
      <input
        type="text"
        className=" w-full p-2 rounded-xl bg-neutral-900"
        placeholder=" Buscar"
      />
      <div className=" pt-4 h-4/5 overflow-y-auto">
        {MENSAJES.map((items) => (
          <CardMessage
            photo={items.photo}
            name={items.name}
            lastMessage={items.lastMessage}
            key={items.name}
          />
        ))}
      </div>
    </div>
  );
}
