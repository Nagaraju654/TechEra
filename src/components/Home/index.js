import {Component} from 'react'
import Header from '../Header'

import {
  MainContainer,
  CourseContainer,
  Heading,
  CourseListContainer,
  CourseListItem,
  CourseLogo,
  CourseText,
} from './styledComponents'

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
    const {apiStatus} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const apiUrl = 'https://apis.ccbp.in/te/courses'
    const response = await fetch(apiUrl)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.courses.map(eachCourse => ({
        id: eachCourse.id,
        name: eachCourse.name,
        logoUrl: eachCourse.logo_url,
      }))
      this.setState({
        courseList: updatedData,
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
            <CourseListItem>
              <CourseLogo src={eachCourse.imageUrl} />
              <CourseText>{eachCourse.name}</CourseText>
            </CourseListItem>
          ))}
        </CourseListContainer>
      </CourseContainer>
    )
  }

  render() {
    return (
      <>
        <Header />
        <MainContainer>{this.renderSuccessView()}</MainContainer>
      </>
    )
  }
}

export default Home
