import {Component} from 'react'

import {
  Container,
  Heading,
  //   Paragraph,
  //   ParagraphWhite,
  //   Input,
  //   Button,
  //   GeneratorButton,
} from './styledComponents'

// const gradientDirectionsList = [
//   {directionId: 'TOP', value: 'top', displayText: 'Top'},
//   {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
//   {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
//   {directionId: 'LEFT', value: 'left', displayText: 'Left'},
// ]
// Write your code here

class GradientGenerator extends Component {
  state: {top: '', bottom: '', left: '', right: ''}

  render() {
    return (
      <Container>
        <Heading>Generate a CSS Color Gradient</Heading>
      </Container>
    )
  }
}

export default GradientGenerator
