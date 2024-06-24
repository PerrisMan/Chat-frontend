export default function Message({ message }) {
  return (
    <div className=" w-full flex justify-start py-1">
      <div>
        <div className=" bg-neutral-800 text-xl p-4 rounded-2xl">
          <p className=" text-white">{message}</p>
        </div>
      </div>
    </div>
  );
}
