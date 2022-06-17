import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import FormNFT from '../components/FormNFT';

import { TransactionContext } from '../contexts/TransactionContext';

const Landing = ({ value }) => {
  const { connectWallet, currentAccount } = useContext(TransactionContext);
  return (
    <div className='dashboard bg-info w-75 mx-auto mt-5 p-5 rounded'>
      <h1 className='text-white'>Welcome to Crypto Milies</h1>
      <p>Let's get your first NFT for FREE</p>
      <h2 className='text-success'>
        All you need is providing your ETH wallet
      </h2>
      <div sm={3} md={6}>
        <img src={'/logo.jpeg'} alt='logo' className='w-25' />
      </div>

      <div>The stored value is: {value}</div>
      {!currentAccount ? (
        <Button variant='primary' className='mt-5' onClick={connectWallet}>
          Connect Wallet
        </Button>
      ) : (
        <div>
          <p className='text-success'>Account is: {currentAccount}</p>
          <FormNFT />
        </div>
      )}
    </div>
  );
};

export default Landing;
