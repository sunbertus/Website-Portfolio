const Button = ({ name, onClick, containerClass }) => {
  return (
    <button 
      className={`btn ${containerClass}`} 
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
