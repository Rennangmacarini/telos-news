import React from "react";
import "./styles.css"

export function SegundaryButton({icon, text}){
  return(
    <button className="segundaryButton">
      {icon}
      {text}
     </button>
  )
}