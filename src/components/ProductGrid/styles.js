import styled from '@emotion/styled'

import { breakpoints } from '../../utils/styles'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 40px;
  margin-left: -42px;
  width: calc(100% + 80px);

  @media (max-width: ${breakpoints.l}px) {
    width: 100%;
    margin-left: 0px;
  }

  @media (max-width: ${breakpoints.s}px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    box-sizing: border-box;
    grid-column-gap: 12px;
    padding: 19px;
    margin-left: 0px;
  }
`

export const Product = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`

export const Title = styled.span`
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  font-family: 'Avenir';
`

export const PriceTag = styled.span`
  font-weight: 300;
  font-size: 14px;
  opacity: 0.6;
  text-align: center;
  margin-top: 9px;
`
