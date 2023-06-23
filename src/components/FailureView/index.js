import './index.css'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetryButton = () => {
    onRetry()
  }

  return (
    <div className="failure-view-container">
      <img
        className="failure-view-image"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <h1 className="failure-view-heading">Oops! Something Went Wrong</h1>
      <p className="failure-view-text">
        We cannot seem to find the page you are looking for.
      </p>
      <button
        className="retry-button"
        type="button"
        onClick={onClickRetryButton}
      >
        Retry
      </button>
    </div>
  )
}

export default FailureView
