import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureViewHeading = styled.h1`
  font-size: 40px;
  font-weight: 600;
  font-family: 'Roboto';
  color: #475569;
  line-height: 0.1;
  padding-top: 14px;
`
export const FailureViewImage = styled.img`
  width: 30%;
`
export const FailureViewText = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #64748b;
  font-family: 'Roboto';
  line-height: 0.5;
`
export const RetryButton = styled.button`
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  font-family: 'Roboto';
  background-color: #4656a1;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  padding-left: 26px;
  padding-right: 26px;
  padding-top: 10px;
  padding-bottom: 10px;
`
