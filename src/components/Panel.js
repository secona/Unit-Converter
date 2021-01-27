import React from "react";

function Panel({activePanel, index, children}) {
  return (
    <div hidden={activePanel !== index}>
      {children}
    </div>
  )
}

export default Panel;