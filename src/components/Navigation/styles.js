import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints } from '../../utils/styles'

export const Wrapper = styled.div`
  height: 4.1rem;
  width: 100%;
  background: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-shadow: 0px 4px 4px -4px rgba(0,0,0,0.2);
  position: sticky;
  top: 0px;
  z-index: 2;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 0 0rem;
  height: 4.1rem;
  margin: 0 auto;
  width: 100%;
  max-width: 980px;
  position: sticky;
  top: 0px;
  z-index: 2;
`

export const Logo = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.25rem;
  letter-spacing: 2px;
  font-weight: bold;
  padding-right: 32px;
  margin-left: -2px;

  @media (max-width: ${breakpoints.s}px){
    font-size: 1rem
  }
`

export const MenuLink = styled(Link)`
  text-decoration: none;
  font-size: 15px;
  letter-spacing: 1px;
  font-weight: bold;
  padding: 0px 16px;

  @media (max-width: ${breakpoints.s}px){
    font-size: 1rem
  }
`

export const CartCounter = styled.div`
  position: absolute;
  margin-top: 4px;
  margin-left: 2px;
  text-align: center;
  color: white;
  font-size: 13px;
  z-index: 20;
`

    
     
        
          
            
              