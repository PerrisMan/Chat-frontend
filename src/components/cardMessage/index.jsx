import ChatOne from "../chatOne";

export default function CardMessage({ name, lastMessage, photo }) {
  return (
    <div className=" w-full flex items-center bg-neutral-950 hover:bg-neutral-900 p-4 cursor-pointer rounded-xl ease-in-out duration-300">
      <figure>
        <img src={photo} alt="" className=" w-8" />
      </figure>
      <div className="pl-4">
        <p className=" text-neutral-300">{name}</p>
        <div className=" flex items-center">
          <ChatOne />
          <p className=" text-neutral-500 text-sm"> : {lastMessage}</p>
        </div>
      </div>
    </div>
  );
}
