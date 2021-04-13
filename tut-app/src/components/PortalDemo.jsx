import React from "react";
import ReactDOM from "react-dom";

//Functional Component 
function PortalsDemo() {
   

    return ReactDOM.createPortal(
        <div>This is Portals Demo
            <button>
                Click Me
            </button>
        </div>
    , 
    document.getElementById('portal-root')
    );

}

export default PortalsDemo;

