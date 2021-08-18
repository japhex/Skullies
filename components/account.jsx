import { useContext } from 'react'

import { AccountLink } from 'components/styled/account.styled'
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
    <AccountLink onClick={handleClick}>
      {connected ? 'Logout' : 'Login to wallet'}
    </AccountLink>
  )
}

export default Account
