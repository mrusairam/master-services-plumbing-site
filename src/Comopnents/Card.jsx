import { useModal } from "../Modal/ModalContext";


const Card = ({ data }) => {
  const { image, icon, title, description, buttonText } = data;
  const { openModal } = useModal();

  return (
    <div className="max-w-xs mx-auto bg-white p-4 text-center space-y-4">
      {/* Use normal <img /> in React */}
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md" />

      <div className="flex justify-center -mt-10">
        <div className="bg-white border border-gray-200 rounded-full p-4 shadow-md">
          <img src={icon} alt="Icon" className="w-8 h-8" />
        </div>
      </div>

      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 text-sm">{description}</p>

      <button 
      onClick={openModal}
      className="cursor-pointer mt-2 px-5 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-medium rounded-md hover:opacity-90 transition">
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
