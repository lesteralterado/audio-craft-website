import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <div className="bg-neutral-800">
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div> */}
      <HorizontalScrollCarousel />
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div> */}
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section id="horizontal-scroll" ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-3xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "https://res.cloudinary.com/dhxi75eld/image/upload/v1767891884/14_gxzfln.png",
    title: "Debut",
    id: 1,
  },
  {
    url: "https://res.cloudinary.com/dhxi75eld/image/upload/v1767891883/7_kxpgqq.png",
    title: "Christmas Party",
    id: 2,
  },
  {
    url: "https://res.cloudinary.com/dhxi75eld/image/upload/v1767891883/8_atkwq5.png",
    title: "Disco",
    id: 3,
  },
  {
    url: "https://res.cloudinary.com/dhxi75eld/image/upload/v1767891883/6_c0otcx.png",
    title: "Birthday",
    id: 4,
  },
  {
    url: "https://res.cloudinary.com/dhxi75eld/image/upload/v1767891882/5_hdxcev.png",
    title: "Christmas Party",
    id: 5,
  },
  {
    url: "https://res.cloudinary.com/dhxi75eld/image/upload/v1767891882/4_uzregh.png",
    title: "Wedding",
    id: 6,
  },
  {
    url: "https://res.cloudinary.com/dhxi75eld/image/upload/v1767891881/3_rba9ra.png",
    title: "Disco",
    id: 7,
  },
  {
    url: "https://res.cloudinary.com/dhxi75eld/image/upload/v1767891882/10_ojirdr.png",
    title: "Disco",
    id: 8,
  },
  {
    url: "https://res.cloudinary.com/dhxi75eld/image/upload/v1767891884/12_svzzkf.png",
    title: "Beach Party",
    id: 9,
  },
  {
    url: "https://res.cloudinary.com/dhxi75eld/image/upload/v1767891883/11_ybh7b6.png",
    title: "Beach Party",
    id: 10,
  }
];