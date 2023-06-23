import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'

import './index.css'

import FailureView from '../FailureView'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'PROGRESS',
}

class CourseItemDetails extends Component {
  state = {courseData: {}, apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const url = `https://apis.ccbp.in/te/courses/${id}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = {
        id: data.course_details.id,
        name: data.course_details.name,
        imageUrl: data.course_details.image_url,
        description: data.course_details.description,
      }
      this.setState({
        courseData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderCourseDetailsSuccessView = () => {
    const {courseData} = this.state
    return (
      <div className="course-details-main-container">
        <div className="course-details-container">
          <img
            className="image"
            src={courseData.imageUrl}
            alt={courseData.name}
          />
          <div className="course-details-text-container">
            <h1 className="course-details-heading">{courseData.name}</h1>
            <p className="description">{courseData.description}</p>
          </div>
        </div>
      </div>
    )
  }

  onRetry = () => {
    this.getData()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderLoaderView = () => (
    <div className="loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderCourseItemDetailsView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderCourseDetailsSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="app-container">
          {this.renderCourseItemDetailsView()}
        </div>
      </>
    )
  }
}

export default CourseItemDetails
