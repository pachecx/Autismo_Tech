import React, { useState } from "react";
import './style.css'; // Estilos para o componente
import alvo from '../../assets/Vector.svg';

interface DropdownProps {
  content: string | React.ReactNode;
  dropdownItems: (string | React.ReactNode)[];
}

const Dropdown: React.FC<DropdownProps> = ({ content, dropdownItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <img src={alvo} alt="icon" className="dropdown-image" />
        <span className="dropdown-content">{content}</span>
        <span className={`dropdown-arrow ${isOpen ? "open" : ""}`}></span>
      </div>
      <div className={`dropdown-items ${isOpen ? "open" : ""}`}>
        {dropdownItems.map((item, index) => (
          <div key={index} className="dropdown-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
