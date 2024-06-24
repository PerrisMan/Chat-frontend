import { useEffect, useState } from "react";
import Bar from "../../components/bar";
import Message from "../../components/message";
import MyMessage from "../../components/myMessage";
import SendMessage from "../../components/sendMessage";

export default function Home() {
  const [message, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/chat/message")
      .then(response => response.json())
      .then(data => setMessages(data))
      .catch(error => console.error("Error en la obtención de datos", error))
  }, [])


  return (
    <div className=" h-screen bg-neutral-950 w-full flex">
      <Bar />
      <div className=" w-full h-full p-4 flex items-end">
        <div className=" w-full">
          <div className=" w-full py-8">
            {message.map((msg) =>
              msg.remitente === "admin@admin" ? (
                <MyMessage id={msg.id} message={msg.messege} />
              ) : (
                <Message message={msg.messege} />
              )
            )}
            
          </div>
          <SendMessage />
        </div>
      </div>
    </div>
  );
}
