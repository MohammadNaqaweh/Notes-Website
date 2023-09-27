import React from 'react';
import { Header, Sidebar } from '../containers/index.js';

const Home = () => {
  return (
    <div>
      <Header isHome={true} pageTitle={"Keep"}/>
      <Sidebar />
    </div>
  )
}

export default Home
