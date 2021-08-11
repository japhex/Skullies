import { useEffect, useState } from 'react'

import Head from 'next/head'

import Account from 'components/account'
import Main from 'components/layout/main'
import MintCount from 'components/mint/mint-count'
import {
  MintContainer,
  Mint,
  Conditions,
  Description,
} from 'components/mint/mint.styled'

const Home = () => {
  const [connected, setConnected] = useState(false)

  return (
    <Main>
      <Head>
        <title>Skullies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Account setConnected={setConnected} />
      {connected && (
        <MintContainer>
          <Mint>MINT</Mint>
          <MintCount />
          <Conditions>
            0.1 = each <br />
            <strong style={{ color: 'red' }}>3 skully limit</strong>
          </Conditions>
          <Description>Skullies will be released in batches of 33</Description>
        </MintContainer>
      )}
    </Main>
  )
}

export default Home
