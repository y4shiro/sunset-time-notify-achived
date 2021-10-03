import type { NextPage } from 'next';
import Image from 'next/image';

import React from 'react';
import { Box, chakra } from '@chakra-ui/react';

import Header from '../components/Header';
import Footer from 'src/components/Footer';
import MainContent from 'src/components/MainContent';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
};

export default Home;
