import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import CourseItem from '../CourseItem'

import {
  MainContainer,
  CourseContainer,
  Heading,
  CourseListContainer,
  LoaderContainer,
} from './styledComponents'
import FailureView from '../FailureView'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'PROGRESS',
}

class Home extends Component {
  state = {courseList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getCourseData()
  }

  getCourseData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const apiUrl = 'https://apis.ccbp.in/te/courses'
    const response = await fetch(apiUrl)
    if (response.ok) {
      const data = await response.json()
      const formattedData = data.courses.map(eachCourse => ({
        id: eachCourse.id,
        name: eachCourse.name,
        logoUrl: eachCourse.logo_url,
      }))
      this.setState({
        courseList: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {courseList} = this.state
    return (
      <CourseContainer>
        <Heading>Courses</Heading>
        <CourseListContainer>
          {courseList.map(eachCourse => (
            <CourseItem key={eachCourse.id} courseDetails={eachCourse} />
          ))}
        </CourseListContainer>
      </CourseContainer>
    )
  }

  onRetry = () => {
    this.getCourseData()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderLoaderView = () => (
    <LoaderContainer>
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderCourseView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
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
        <MainContainer>{this.renderCourseView()}</MainContainer>
      </>
    )
  }
}

export default Home
