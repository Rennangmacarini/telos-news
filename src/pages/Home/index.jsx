import React from "react";
import CardHome from "../../components/CardHome";
import CardsHome from "../../components/CardsHome";
import './styles.css';
import SectionCardPrimary from "../../components/SectionCardprimary";
import SectionCardSegundary from "../../components/SectionCardSegundary";
import FooterCardprimary from "../../components/footerCardprimary";
import FooterCardsegundary from "../../components/footerCardsegundary";
import FooterCardtertiary from "../../components/footerCardtertiary";
import cardTertiary from '../../components/footerCardtertiary/Rectangle-228.png'
import cardSegundary from '../../components/footerCardsegundary/Rectangle-229.png'
import cardPrimary from '../../components/footerCardprimary/Rectangle-227.png'


export function Home() {
  const noticia = [ {
    id: 1,
    title:" Mercado de trabalho",
    image: "../../components/footerCardprimary/Rectangle-227.png",
    description:"Como se comportar em uma entrevista online"
  }]

  return (
    <>
      <div className="global">
        <div className="container">
          <CardHome /> 
          <div className="content">
            <CardsHome
              text="Por que trabalhar com propósito ?"
            />
            <CardsHome
              text="3 Tendência sobre o futuro do trabalho"
            />
          </div>
        </div>
        <div className="sectionCardprimary">
          <SectionCardPrimary
            text="Negócios"
            button="ler agora"
          />
        </div>

        <div className="sectionCardsegundary">
          <SectionCardSegundary
            button="ler agora"
          />
        </div>

        <div className="footerCard">
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