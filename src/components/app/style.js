import styled from 'styled-components'

export const Btn = styled.button(({theme}) => ({
    background: `${theme.bg}`,
    borderRadius: '3px',
    border: `2px solid ${theme.color}`,
    color: `${theme.color}`,
    margin: '0 1em',
    padding: '0.25em 1em',
  }));

export const Header = styled.header((props)=>({
  background: `${props.bg}`,
  borderBottom: `2px solid ${props.color}`,
  color: `${props.color}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '200px'
}));