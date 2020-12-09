import React from 'react'
import styled from 'styled-components'

const LabelContainer = styled.div`
  font-size: 0.8em;
  flex: ${props => (props.flex ? props.flex : '1')};
  // background: tomato;

  display: flex;
  justify-content: ${props => (props.direction ? 'flex-start' : 'flex-end')};
  margin-bottom: ${props => (props.direction ? '.5em' : 'none')};

  width: 100%;
  label {
    font-weight: bold;
    margin-right: 1em;
  }
  ${({ theme }) => theme.media.phoneOnly`width: 100%;`}
`

export default ({ children, ...props }) => (
  <LabelContainer {...props}>
    <label {...props}>{children}</label>
  </LabelContainer>
)
