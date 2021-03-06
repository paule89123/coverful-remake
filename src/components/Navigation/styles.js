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
  top: 0px;
  z-index: 1300;
  -webkit-transform: translateZ(0);
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 0 0rem;
  height: 4.1rem;
  margin: 0 19px;
  width: 100%;
  max-width: 980px;
  top: 0px;
  z-index: 2;
`

export const Logo = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.25rem;
  letter-spacing: 2px;
`

export const MenuLink = styled(Link)`
  text-decoration: none;
  font-size: 15px;
  letter-spacing: 1px;
  padding: 0px 16px;

  @media (max-width: ${breakpoints.s}px) {
    font-size: 1rem;
  }
`

export const CartCounter = styled.div`
  position: absolute;
  top: 14px;
  margin-left: 2px;
  height: 18px;
  line-height: 16px;
  width: 20px;
  text-align: center;
  color: white;
  font-size: 11px;
  z-index: 20;
  letter-spacing: 0px;
`
export const CartCounterMobile = styled.div`
  position: absolute;
  top: 13px;
  margin-left: 2px;
  height: 18px;
  line-height: 16px;
  width: 20px;
  text-align: center;
  color: white;
  font-size: 11px;
  z-index: 20;
  letter-spacing: 0px;
`
