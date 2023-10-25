"use client";

import React from "react";
import Container from "@/components/container";
import Logo from "@/components/logo";
import Categories from "@/components/categories";
import Search from "@/components/search";
import GiaMenu from "@/components/gia-menu";

type Props = {}
function Navbar({}: Props) {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <GiaMenu />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
}

export default Navbar;