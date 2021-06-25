import styled from 'styled-components'

const MenuWrapper = styled.div`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  height: auto;
  font-family: sans-serif;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;

  .dropdown-item {
    border-top: 1px solid #CCC;
    border-left: ${props => props.borderLeft};
    margin-block-start: 0;
    margin-block-end: 0;
    padding: 1em 0 1em 16px;
  }
`

export const Menu = ({ backgroundColor, borderLeft, color }) => {
  const MENU_CONFIG = {
    menuItems: [
      { title: 'MENU ITEM 1' },
      { title: 'MENU ITEM 2' },
      { title: 'MENU ITEM 3' },
    ]
  }

  return (
    <MenuWrapper 
      backgroundColor={backgroundColor}
      borderLeft={borderLeft}
      color={color}>

      {MENU_CONFIG.menuItems.map((item) => {
        return(
          <p className="dropdown-item">{item.title}</p>
        )
      })}

    </MenuWrapper>
  )
}