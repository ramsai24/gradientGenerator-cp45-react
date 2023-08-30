// Write your code here
import {Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {direction, isActiveTabUpdate, isActive} = props
  const {displayText, value} = direction
  //   console.log(displayText)

  const tabId = () => {
    isActiveTabUpdate(value)
  }

  return (
    <Button type="button" onClick={tabId} isActive={isActive}>
      {displayText}
    </Button>
  )
}

export default GradientDirectionItem
