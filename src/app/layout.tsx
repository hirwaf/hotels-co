import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import '../styles/globals.css'
import MotionDiv from "@/components/motion-div";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";
import Provider from '@/utils/provider';

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Hotels & Co',
  description: 'Hotels & Co',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" data-theme="light">
      <body className={inter.className}>
      <MotionDiv>
        <Navbar/>
      </MotionDiv>
      <div className={'pb-20 pt-28'}>{children}</div>
      <Footer/>
      </body>
      </html>
  )
}
