import { useState } from "react";
import './inputSearch.css';

function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = [  "Source",   "Pune","Shrirampur","Mumbai","Satara","Nashik","Solapur","Kolhapur" 
];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <span className="fa fa-caret-down" style={{marginLeft:"20px"}}></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
