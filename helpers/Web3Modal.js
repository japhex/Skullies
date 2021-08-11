import { Web3Provider } from '@ethersproject/providers'
import WalletConnectProvider from '@walletconnect/web3-provider'
import Web3Modal from 'web3modal'

import { INFURA_ID } from './constants'

export const web3Modal = process.browser
  ? new Web3Modal({
      cacheProvider: true,
      providerOptions: {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            infuraId: INFURA_ID,
          },
        },
      },
    })
  : null

export const logoutOfWeb3Modal = async () => {
  return web3Modal.clearCachedProvider()
}

export const loadWeb3Modal = async () => {
  const provider = await web3Modal.connect()
  return new Web3Provider(provider)
}
