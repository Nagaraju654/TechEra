import {
  LinkItem,
  CourseListItem,
  CourseLogo,
  CourseText,
} from './styledComponents'

const CourseItem = props => {
  const {courseDetails} = props
  const {id, name, logoUrl} = courseDetails

  return (
    <CourseListItem>
      <LinkItem to={`/course/${id}`}>
        <CourseLogo src={logoUrl} alt={name} />
        <CourseText>{name}</CourseText>
      </LinkItem>
    </CourseListItem>
  )
}

export default CourseItem
