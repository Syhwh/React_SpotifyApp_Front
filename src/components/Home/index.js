import React from 'react';
import Albums from '../Albums';
import { SearchSection } from './SearchSection';
// import { Footer } from '../Footer';
import './homeStyle.scss'
export function Home() {
  return (
    <div data-test='component-home' >
      <SearchSection />
      <Albums />
      {/* <Footer /> */}
    </div>
  )
}