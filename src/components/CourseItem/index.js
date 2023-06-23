import {Link} from 'react-router-dom'
import './index.css'

const CourseItem = props => {
  const {courseDetails} = props
  const {id, name, logoUrl} = courseDetails

  return (
    <li className="course-list-item">
      <Link to={`/course/${id}`} className="link">
        <img className="course-logo" src={logoUrl} alt={name} />
        <p className="course-text">{name}</p>
      </Link>
    </li>
  )
}

export default CourseItem
