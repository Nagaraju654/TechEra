import {
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewText,
  RetryButton,
} from './styledComponents'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetryButton = () => {
    onRetry()
  }

  return (
    <FailureViewContainer>
      <FailureViewImage
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <FailureViewHeading>Oops! Something Went Wrong</FailureViewHeading>
      <FailureViewText>
        We cannot seem to find the page you are looking for.
      </FailureViewText>
      <RetryButton type="button" onClick={onClickRetryButton}>
        Retry
      </RetryButton>
    </FailureViewContainer>
  )
}

export default FailureView
