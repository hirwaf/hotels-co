"use client";

import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import useFavorite from "@/hooks/use-favorite";

type Props = {
  listingId: string;
};

function HeartButton({ listingId }: Props) {
  const { hasFavorite, toggleFavorite } = useFavorite({
    listingId,
  });

  return (
    <div
      onClick={toggleFavorite}
      className=" relative hover:opacity-80 transition cursor-pointer"
    >
      <AiOutlineHeart
        size={28}
        className="fill-white absolute -top-[2px] -right-[2px]"
      />
      <AiFillHeart
        size={24}
        className={hasFavorite ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </div>
  );
}

export default HeartButton;
