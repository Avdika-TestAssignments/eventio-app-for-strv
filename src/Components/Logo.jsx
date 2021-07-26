import React from 'react';

import { Image } from '../Styles/LogoStyled';

const Logo = () => {

  const logoPath = isLogged ? 'logo-black' : 'logo-white'

  return (
    <div>
      <Image src={`../Images/${logoPath}.png`} alt="logo" />
    </div>
  )
}

export default Logo;
