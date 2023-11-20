

const PurpleButton = ({ text, onClick }) => {
  return (
    <button
      className="bg-purple-800 hover:bg-purple-700 text-white py-2 px-4 rounded focus:outline-none"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default PurpleButton;
