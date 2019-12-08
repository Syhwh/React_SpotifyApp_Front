import React from 'react';
import { Albums } from '../Albums';
import { Search } from '../Search';
import { Footer } from '../Footer';
import { BannerData } from '../BannerComponent';
export function Home() {
  return (
    <>
      <Search />

      <Albums />
      <Footer />
    </>
  )
}