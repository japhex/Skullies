import { useState } from 'react'

import { MintAmount, MintIcon } from './mint.styled'

export default function MintCount() {
  const [count, setCount] = useState(0)

  const handleClick = increase => {
    if (increase && count < 3) {
      setCount(count + 1)
    }
    if (!increase && count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <>
      <MintIcon minus onClick={() => handleClick(false)}>
        <img src="images/icon_minus.png" />
      </MintIcon>
      <MintAmount>{count}</MintAmount>
      <MintIcon onClick={() => handleClick(true)}>
        <img src="images/icon_plus.png" />
      </MintIcon>
    </>
  )
}
