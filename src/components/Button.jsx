const Button = ({ children, href, onClick, type = "button" }) => {
  if (href) {
    return (
      <a href={href} className="btn" target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button type={type} className="btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;