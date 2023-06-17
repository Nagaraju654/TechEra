import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  width: 100vw;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
`
export const CourseContainer = styled.div`
  padding: 0px;
`

export const Heading = styled.h1`
  font-size: 30px;
  font-weight: 500;
  color: #1e293b;
  font-family: 'Roboto';
`
export const CourseListContainer = styled.ul`
  margin: 0px;
  padding: 0px;
`
export const CourseListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 140px;
`
export const CourseLogo = styled.img`
  height: 120px;
  width: 100px;
`
export const CourseText = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: #1e293b;
  font-family: 'Roboto';
  padding-left: 14px;
`
