import { type Dispatch, type SetStateAction, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
// import Swiper from 'swiper';

const SwipeCards = () => {
  const [cards, setCards] = useState<Card[]>(cardData);

  return (
    <div
      className="grid h-[500px] w-full place-items-center bg-gray-800 relative"
      // style={{
      //   backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none'  stroke-width='2' stroke='%23d4d4d4'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
      // }}
    >
      {cards.map((card) => {
        return (
          <Card key={card.id} cards={cards} setCards={setCards} {...card} />
        );
      })}
    </div>
  );
};

const Card = ({
  id,
  url,
  setCards,
  cards,
}: {
  id: number;
  url: string;
  setCards: Dispatch<SetStateAction<Card[]>>;
  cards: Card[];
}) => {
  const x = useMotionValue(0);

  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const isFront = id === cards[cards.length - 1].id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;

    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = () => {
    console.log('drag end', x.get());
    if (Math.abs(x.get()) > 100) {
      setCards((pv) => pv.filter((v) => v.id !== id));
    }
  };

  return (
    <motion.img
      src={url}
      alt="Placeholder alt"
      className="h-96 w-72 origin-bottom rounded-lg bg-white object-cover hover:cursor-grab active:cursor-grabbing"
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
        transition: "0.125s transform",
        boxShadow: isFront
          ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
          : undefined,
      }}
      animate={{
        scale: isFront ? 1 : 0.98,
      }}
      drag={isFront ? "x" : false}
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      onDragEnd={handleDragEnd}
    />
  );
};

export default SwipeCards;

type Card = {
  id: number;
  url: string;
};

const cardData: Card[] = [
  {
    id: 1,
    url: "https://res.cloudinary.com/dhxi75eld/image/upload/v1767891884/14_gxzfln.png",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/dhxi75eld/image/upload/v1767891883/7_kxpgqq.png",
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/dhxi75eld/image/upload/v1767891884/12_svzzkf.png",
  },
  {
    id: 4,
    url: "https://res.cloudinary.com/dhxi75eld/image/upload/v1767891883/9_sd5ekn.png",
  },
  {
    id: 5,
    url: "https://res.cloudinary.com/dhxi75eld/image/upload/v1767891883/6_c0otcx.png",
  },
  {
    id: 6,
    url: "https://res.cloudinary.com/dhxi75eld/image/upload/v1767891882/5_hdxcev.png",
  },
  {
    id: 7,
    url: "https://res.cloudinary.com/dhxi75eld/image/upload/v1767891882/4_uzregh.png",
  },
  {
    id: 8,
    url: "https://res.cloudinary.com/dhxi75eld/image/upload/v1767891882/10_ojirdr.png",
  },
];