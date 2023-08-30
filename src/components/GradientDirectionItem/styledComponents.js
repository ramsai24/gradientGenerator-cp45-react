// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid green;
  width: ${props => props.width};
`

export const Button = styled.button`
  width: 120px;
  height: 40px;
  color: #1e293b;
  margin: 16px;
  background-color: ${props => (props.isActive ? '#ffffff' : 'transparent')};
`
