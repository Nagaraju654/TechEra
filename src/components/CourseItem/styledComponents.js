import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const LinkItem = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const CourseListItem = styled.li`
  list-style-type: none;
  width: 230px;
  padding-bottom: 40px;
`
export const CourseLogo = styled.img`
  height: 60px;
  width: 60px;
`
export const CourseText = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: #1e293b;
  font-family: 'Roboto';
  padding-left: 16px;
`
