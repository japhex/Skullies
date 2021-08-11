import Head from 'next/head'

import Main from 'components/layout/main'
import MintCount from 'components/mint/mint-count'
import {
  MintContainer,
  Mint,
  Conditions,
  Description,
} from 'components/mint/mint.styled'
import { web3Modal } from 'helpers/Web3Modal'

export default function Home() {
  return (
    <Main>
      <Head>
        <title>Skullies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {web3Modal && web3Modal.cachedProvider ? (
        <MintContainer>
          <Mint>MINT</Mint>
          <MintCount />
          <Conditions>
            0.1 = each <br />
            <strong style={{ color: 'red' }}>3 skully limit</strong>
          </Conditions>
          <Description>Skullies will be released in batches of 33</Description>
        </MintContainer>
      ) : (
        <>Please connect your wallet</>
      )}
    </Main>
  )
}
