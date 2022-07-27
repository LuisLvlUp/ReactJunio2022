import React, { useContext } from 'react'
import { ThemeContext } from '../../shared/theme';

export const Home = () => {

  const themeDark = useContext(ThemeContext);

  return (
    <div style={ themeDark && {color: themeDark}}>
        Home
    </div>
  )
}
