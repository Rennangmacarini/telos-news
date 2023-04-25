import React from "react";
import CardHome from "../CardHome";
import CardsHome from "../CardsHome";
import CardsHomes from "../CardsHomes";

import styles from './styles.module.css'

import SectionCardPrimary from "../SectionCardprimary";
import SectionCardSegundary from "../SectionCardSegundary";
import FooterCardprimary from "../footerCardprimary";
import FooterCardsegundary from "../footerCardsegundary";
import FooterCardtertiary from "../footerCardtertiary";
import cardTertiary from './Rectangle-228.png'
import cardSegundary from './Rectangle-229.png'
import cardPrimary from './Rectangle-227.png'

export default function RouteHome() {
  const noticia = [ {
    id: 1,
    title:" Mercado de trabalho",
    image: "../../components/footerCardprimary/Rectangle-227.png",
    description:"Como se comportar em uma entrevista online"
  }]

  return (
    <>
      <div className={styles.global}>
        <div className={styles.container}>
          <CardHome /> 
          <div className={styles.content}>
            <CardsHome
              text="Por que trabalhar com propósito ?"
            />
            <CardsHomes
              text="3 Tendência sobre o futuro do trabalho"
            />
          </div>
        </div>
        <div className={styles.sectionCardprimary}>
          <SectionCardPrimary
            text="Negócios"
            button="ler agora"
          />
        </div>

        <div className={styles.sectionCardsegundary}>
          <SectionCardSegundary
            button="ler agora"
          />
        </div>

        <div className={styles.footerCard}>
          <div> 
        {noticia.map((noticias) => {
          return ( 
          <FooterCardprimary
          key={noticias.id}
          title={noticias.title}
          image={cardPrimary}
          description={noticias.description}
           />
           );
          })}
          </div>
          <FooterCardsegundary
          title = " Mercado de Trabalho"
          image={cardSegundary}
          description= "Como se destacar nas entrevista online"
          />

          <FooterCardtertiary
          title = " Mercado de Trabalho"
          image = {cardTertiary}
          description = " Comunicação para venda: como ajustar seu discurso para o momento"
          />

        </div>
      </div>
    </>
  )
}