import { useState } from "react";
export default function MyMessage({ id, message}) {
  const [options, setOptions] = useState();
  const [messageOptions, setMessageOptions] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedMessage, setEditedMessage] = useState(message);

  const showOptionsLeave = () => {
    setOptions(false);
  };
  const showOptionsEnter = () => {
    setOptions(true);
  };
  const showOptionsMessage = () => {
    setMessageOptions(!messageOptions);
  };
  const handleDelete = () => {
    handleDeleteMessage(id);
    setMessageOptions(false);
  };
  const handleEdit = () => {
    setIsEditing(true);
    setMessageOptions(false);
  };
  const handleSaveEdit = () => {
    handleEditMessage(id, editedMessage);
    setIsEditing(false);
  };

  const handleDeleteMessage = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/chat/delete/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Mensaje Eliminado");
        setMessages(message.filter((msg) => msg.id !== id));

        console.log("Mensaje eliminado");
      } else {
        console.error("Error al eliminar el mensaje");
      }
    } catch (error) {
      console.error("Error en la solicitud DELETE:", error);
    }
  };

  const handleEditMessage = async (id, newMessage) => {
    try {
      const response = await fetch(`http://localhost:8080/chat/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messege: newMessage,
          hora: new Date().toISOString(),
        }),
      });
      if (response.ok) {
        
        alert("Mensaje actualizado")
        console.log("Mensaje actualizado");
      } else {
        console.error("Error al actualizar el mensaje");
      }
    } catch (error) {
      console.error("Error en la solicitud PUT:", error);
    }
  };

  console.log(options);

  return (
    <div className=" w-full flex justify-end py-1">
      <div>
        <div
          className={
            messageOptions
              ? "w-42 bg-neutral-800 p-1 h-auto rounded-2xl"
              : "hidden"
          }
        >
          <ul className=" text-white">
            <li
              className=" p-2 hover:bg-neutral-900 ease-in-out duration-300 cursor-pointer rounded-2xl"
              onClick={handleDelete}
            >
              Eliminar mensaje
            </li>
            <li
              className=" p-2 hover:bg-neutral-900 ease-in-out duration-300 cursor-pointer rounded-2xl"
              onClick={handleEdit}
            >
              Editar mensaje
            </li>
          </ul>
        </div>
        <div
          className=" bg-blue-500 text-xl p-4 rounded-2xl relative"
          onMouseLeave={showOptionsLeave}
          onMouseEnter={showOptionsEnter}
        >
          {isEditing ? (
            <div className="flex items-center">
              <input
                type="text"
                value={editedMessage}
                onChange={(event) => setEditedMessage(event.target.value)}
                className=" w-full p-2 rounded-xl bg-neutral-900 text-white"
              />
              <button
                className="ml-2 rounded-full p-2 bg-green-500 hover:bg-green-500/50 ease-in-out duration-300"
                onClick={handleSaveEdit}
              >
                Confirmar
              </button>
            </div>
          ) : (
            <p className=" text-white">{message}</p>
          )}
          <div
            className={
              options
                ? "bg-blue-600 absolute top-0 right-0 h-full flex items-center rounded-r-2xl px-2 cursor-pointer"
                : "hidden"
            }
            onClick={showOptionsMessage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
