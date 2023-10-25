"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/header";
import useCountries from "@/hooks/use-countries";
import HeartButton from "@/components/heart.button";

type Props = {
  title: string;
  locationValue: string;
  imageSrc: string;
  id: string;
};

function HeadListing({
  title,
  locationValue,
  imageSrc,
  id,
}: Props) {
  const { getByValue } = useCountries();
  const location = getByValue(locationValue);

  return (
    <>
      <Header
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="w-full h-[60vh] overflow-hidden rounded-xl relative"
      >
        <Image
          src={imageSrc}
          alt="image"
          fill
          className="object-cover w-full"
        />
        <div className="absolute top-5 right-5">
          <HeartButton listingId={id} />
        </div>
      </motion.div>
    </>
  );
}

export default HeadListing;
