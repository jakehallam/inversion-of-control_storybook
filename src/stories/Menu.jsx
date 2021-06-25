import styled from 'styled-components'

const MenuWrapper = styled.div`
  background-color: ${props => props.backgroundColor};
  border-left: ${props => props.borderLeft};
  color: ${props => props.color};
  height: auto;
  font-family: sans-serif;
  font-size: 18px;
  font-weight: bold;
  padding: 8px 0 8px 16px;
  text-transform: uppercase;
`

export const Menu = ({ backgroundColor, borderLeft, color }) => {
  return (
    <MenuWrapper 
      backgroundColor={backgroundColor}
      borderLeft={borderLeft}
      color={color}>
      <p>Menu Item 1</p>
    </MenuWrapper>
  )
}