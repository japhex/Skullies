import React, { createContext, useEffect, useState } from 'react'

import { Contract } from '@ethersproject/contracts'
import { formatEther } from '@ethersproject/units'

import { ABI, TARGET_ADDRESS, NETWORK } from 'helpers/constants'
import { loadWeb3Modal } from 'helpers/Web3Modal'

export const AppContext = createContext({})

export const AppProvider = ({ children }) => {
  const [contextProps, setContextProps] = useState({})

  const getContract = async () => {
    const web3provider = await loadWeb3Modal()
    const network = await web3provider.getNetwork()
    const signer = await web3provider.getSigner()
    const address = (await signer.getAddress()).toLowerCase()
    const balance = parseFloat(
      formatEther((await signer.getBalance()).toString())
    )

    if (network.chainId !== NETWORK?.chainId) {
      setContextProps({
        wrongNetwork: true,
        network,
      })
      return
    }

    const pixelsContract = new Contract(TARGET_ADDRESS, ABI, signer)

    setContextProps({
      wrongNetwork: false,
      address,
      pixelsContract,
      network,
      balance,
    })
  }

  useEffect(() => {
    getContract()
  }, [])

  return (
    <AppContext.Provider value={contextProps}>{children}</AppContext.Provider>
  )
}
