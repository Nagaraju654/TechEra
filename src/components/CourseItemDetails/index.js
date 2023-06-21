import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'

import {
  MainContainer,
  CourseDetailsMainContainer,
  CourseDetailsContainer,
  CourseDetailsImage,
  CourseDetailsTextContainer,
  CourseDetailsHeading,
  CourseDetailsText,
  LoaderContainer,
} from './styledComponents'
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
    console.log(this.props)
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
    const {name, imageUrl, description} = courseData
    return (
      <CourseDetailsMainContainer>
        <CourseDetailsContainer>
          <CourseDetailsImage src={imageUrl} alt={name} />
          <CourseDetailsTextContainer>
            <CourseDetailsHeading>{name}</CourseDetailsHeading>
            <CourseDetailsText>{description}</CourseDetailsText>
          </CourseDetailsTextContainer>
        </CourseDetailsContainer>
      </CourseDetailsMainContainer>
    )
  }

  onRetry = () => {
    this.getData()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderLoaderView = () => (
    <LoaderContainer>
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
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
        <MainContainer>{this.renderCourseItemDetailsView()}</MainContainer>
      </>
    )
  }
}

export default CourseItemDetails
