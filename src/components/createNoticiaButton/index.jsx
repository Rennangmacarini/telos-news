import React from "react";
import { Login } from "@mui/icons-material";
import { SegundaryButton } from "../segundaryButton";

export default function CreateNoticiaButton(){
  return(
    <SegundaryButton
    text="Entrar"
     icon = {<Login/>}
    />
  )
}