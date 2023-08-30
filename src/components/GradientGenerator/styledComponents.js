// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //   color: #ffffff;
  //   background-image: linear-gradient(
  //     ${props => props.direction},
  //     ${props => props.left},
  //     ${props => props.right}}
  //   );
`

export const Heading = styled.h1`
  //   color: #ffffff79;
`

export const Paragraph = styled.p`
  //   color: #ffffff79;
`

export const ParagraphWhite = styled(Paragraph)`
  //   color: #ffffff;
`

export const Input = styled.input`
  height: 40px;
`

export const Button = styled.button`
  width: 120px;
  height: 40px;
  color: #1e293b;
  background-color: ${props => (props.outline ? '#ededed' : '#ffffff79')};
`

export const GeneratorButton = styled(Button)`
  background-color: #00c9b7;
`
