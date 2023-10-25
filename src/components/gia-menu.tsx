"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MenuItem from "@/components/menu-item";

type Props = {};

function GiaMenu({}: Props) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer text-gray-600"
          onClick={() => {}}
        >
          Airbnb your Home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition text-gray-600"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Image
              className="rounded-full"
              height="30"
              width="30"
              alt="Avatar"
              src="/assets/avatar.png"
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer text-gray-600">
            <MenuItem onClick={() => {}} label="Login" />
            <MenuItem onClick={() => {}} label="Sign up" />
          </div>
        </div>
      )}
    </div>
  );
}

export default GiaMenu;
