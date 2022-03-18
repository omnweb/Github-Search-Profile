import React from 'react'
import { ResetCss } from '../../globals/resetCss'

import * as S from './style'
const Content = ({children}) => {
  return (
    <S.Content > 
      <ResetCss/>   
        {children}
    </S.Content>
  )
}

export default  Content
