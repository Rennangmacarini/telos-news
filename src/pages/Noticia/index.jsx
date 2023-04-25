import React from "react";
import { MainNoticia } from "../../components/mainNoticia";
import { Carousel } from "../../components/carousel";
import { Comment } from "../../components/comment";


export function Noticia(){
    return(
        <>
        <div style={{background: "white", position: "relative", borderRadius: "18px", paddingBottom: "10rem"}}> 
        <MainNoticia/>
        <Carousel/>
        <Comment/>
        </div>
        </>
    )
}