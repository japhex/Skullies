import { useContext } from 'react'

import { AppContext } from 'context/AppContext'
import { logoutOfWeb3Modal, web3Modal, loadWeb3Modal } from 'helpers/Web3Modal'

const Account = ({ setConnected }) => {
  const { getContract } = useContext(AppContext)
  const connected = web3Modal && web3Modal.cachedProvider

  const handleClick = async () => {
    if (connected) {
      await logoutOfWeb3Modal()
      setConnected(false)
    } else {
      const provider = await loadWeb3Modal()
      getContract(provider)
      setConnected(true)
    }
  }

  return (
    <>
      <span
        style={{
          color: '#fff',
          fontSize: '40px',
          marginTop: '15px',
          cursor: 'pointer',
        }}
        onClick={handleClick}
      >
        {connected ? 'Logout' : 'Login to wallet'}
      </span>
    </>
  )
}

export default Account
