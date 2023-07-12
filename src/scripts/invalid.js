export const renderInvalid = (lostUser) => {
    const container = document.querySelector("section.container");
  
    const invalid = document.createElement("p");
    invalid.id = "invalid-input";
    invalid.innerHTML = `The user <em>${lostUser}</em> was not found :(`;
  
    if (container.childNodes.length <= 3) {
      container.appendChild(invalid);
    }
  };
  
  export const removeInvalid = () => {
    const invalid = document.querySelector("#invalid-input");
    const formContainer = document.querySelector("section.container");
  
    invalid ? formContainer.removeChild(invalid) : null;
  };
  