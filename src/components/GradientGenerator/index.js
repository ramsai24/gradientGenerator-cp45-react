import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  MainContainer,
  Container,
  Heading,
  Paragraph,
  // ParagraphWhite,
  Input,
  UnorderedList,
  Label,
  //   Button,
  GeneratorButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeTabId: gradientDirectionsList[0].value,

    left: '#8ae323',
    right: '#014f7b',
    leftEl: '#8ae323',
    rightEl: '#014f7b',
    activeBtn: gradientDirectionsList[0].value,
  }

  onGenerate = () => {
    const {activeBtn, leftEl, rightEl} = this.state

    this.setState({activeTabId: activeBtn, left: leftEl, right: rightEl})
  }

  leftColorChange = event => this.setState({leftEl: event.target.value})

  rightColorChange = event => this.setState({rightEl: event.target.value})

  isActiveTabUpdate = value => this.setState({activeBtn: value})

  render() {
    const {activeTabId, activeBtn, left, right, leftEl, rightEl} = this.state
    console.log(left, right)
    return (
      <MainContainer
        data-testid="gradientGenerator"
        activeTab={{activeTabId, left, right}}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Paragraph>Choose Direction</Paragraph>
        <UnorderedList>
          {gradientDirectionsList.map(each => (
            <li key={each.directionId}>
              <GradientDirectionItem
                direction={each}
                isActiveTabUpdate={this.isActiveTabUpdate}
                isActive={activeBtn === each.value}
              />
            </li>
          ))}
        </UnorderedList>
        <Paragraph>Pick the Colors</Paragraph>
        <Container width="30%">
          <Label htmlFor="left">{left}</Label>
          <Input
            id="left"
            type="color"
            value={leftEl}
            onChange={this.leftColorChange}
          />
          <Label htmlFor="right">{right}</Label>
          <Input
            id="right"
            type="color"
            value={rightEl}
            onChange={this.rightColorChange}
          />
        </Container>
        <GeneratorButton type="button" onClick={this.onGenerate}>
          Generate
        </GeneratorButton>
      </MainContainer>
    )
  }
}

export default GradientGenerator
