// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  //   color: #ffffff;
  //   background-image: linear-gradient(
  //     ${props => props.direction},
  //     ${props => props.left},
  //     ${props => props.right}}
  //   );$
  background-image: ${props => {
    const {activeTab} = props
    console.log(activeTab)
    const {activeTabId, left, right} = activeTab
    console.log(activeTabId, left, right)

    switch (activeTabId) {
      case 'top':
        return `linear-gradient(to top,${left},${right});`

      case 'bottom':
        return `linear-gradient(to bottom,${left},${right});`

      case 'right':
        return `linear-gradient(to right,${left},${right});`

      case 'left':
        return `linear-gradient(to left,${left},${right});`

      default:
        return null
    }
  }};
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid green;
  width: ${props => props.width};
`

export const Heading = styled.h1`
  //   color: #ffffff79;
`

export const Paragraph = styled.p`
  //   color: #ffffff79;
`

export const UnorderedList = styled.ul`
  color: black;
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
  background-color: ${props => (props.outline ? 'transparent' : '#ffffff79')};
`

export const Label = styled.p``

export const GeneratorButton = styled(Button)`
  background-color: #00c9b7;
`
