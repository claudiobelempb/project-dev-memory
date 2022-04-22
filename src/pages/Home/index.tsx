import React, { useEffect, useState } from 'react';
import { Header } from 'components/Header';
import { CardMemory } from 'components/CardMemory';
import { MemoryCard } from 'types/MemoryType';
import { CardInfo } from 'components/CardInfo';

import ImgRestart from 'assets/images/svgs/restart.svg';
import { Button } from 'components/Button';
import { CardData } from 'data/CardData';

import { FormatTimer } from 'helpers/formatTimer';

function HomePage() {
  const [play, setPlay] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(0);
  const [move, setMove] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [cards, setCards] = useState<MemoryCard[]>([]);

  useEffect(() => {
    handleAndResetGrid();
  }, []);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      if (play) {
        setTimer(timer + 1);
      }
    }, 1000);
    return () => clearInterval(timeInterval);
  }, [play, timer]);

  useEffect(() => {
    if (count === 2) {
      const opened = cards.filter(card => card.show === true);
      if (opened.length === 2) {
        if (opened[0].card === opened[1].card) {
          const carTemp = [...cards];
          for (const i in carTemp) {
            if (carTemp[i].show) {
              carTemp[i].permanent = true;
              carTemp[i].show = false;
            }
            setCards(carTemp);
            setCount(0);
          }
        } else {
          setTimeout(() => {
            const carTemp = [...cards];
            for (const i in carTemp) {
              carTemp[i].show = false;
            }
            setCards(carTemp);
            setCount(0);
          }, 1000);
        }

        setMove(move => move + 1);
      }
    }
  }, [count, cards]);

  useEffect(() => {
    if (move > 0 && cards.every(card => card.permanent === true)) {
      setPlay(false);
    }
  }, [move, cards]);

  const handleAndResetGrid = () => {
    /*passo 1 - reset o jogo limpando o jogo */
    setTimer(0);
    setMove(0);
    setCount(0);

    /*passo 2 - criar o card*/

    /**2.1 - criar um card vazio */
    /* prettier-ignore */
    const cardTemp: MemoryCard[] = [];

    for (let i = 0; i < CardData.length * 2; i++) {
      cardTemp.push({
        card: null,
        show: false,
        permanent: false,
      });
    }

    /**2.2 - preencher o card */
    for (let w = 0; w < 2; w++) {
      for (let y = 0; y < CardData.length; y++) {
        /**gera um posição aleatooria */
        let pos = -1;
        while (pos < 0 || cardTemp[pos].card !== null) {
          pos = Math.floor(Math.random() * (CardData.length * 2));
        }
        cardTemp[pos].card = y;
      }
    }
    /**2.3 - jogar no state */
    setCards(cardTemp);

    /*passo 3 - começar o jogo */
    setPlay(true);
  };

  const handleCardClick = (index: number) => {
    if (play && index !== null && count < 2) {
      const cardTemp = [...cards];

      if (!cardTemp[index].permanent && !cardTemp[index].show) {
        cardTemp[index].show = true;
        setCount(count + 1);
      }

      setCards(cardTemp);
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row py-4">
          <div className="col-sm-12 col-md-4 d-flex flex-column justify-content-center align-items-center align-items-md-start p-3">
            <CardInfo label="Tempo" value={FormatTimer(timer)} />
            <CardInfo label="Movimentos" value={move} />
            <Button
              label="Reiniciar"
              icon={ImgRestart}
              onCLick={handleAndResetGrid}
            />
          </div>
          <div className="col-sm-12 col-md-8 d-flex justify-content-center align-items-center">
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2 g-lg-2 d-flex justify-content-center align-items-center">
              {cards.map((card, index) => (
                <div key={index} className="col rounded-3">
                  <CardMemory
                    card={card}
                    onClick={() => handleCardClick(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
