import React from 'react'
import PropTypes from 'prop-types'
import 'styled-components/macro'
import slugify from 'slugify'

/*
  Component Usage

  <Dropdown label="First Name">
    <Dropdown.Item value="Alphabetical">Alphabetical (A-Z)</Dropdown.Item>
    <Dropdown.Item value="Recently Created">Recently Created</Dropdown.Item>
    <Dropdown.Item value="Recently Studied">Recently Studied</Dropdown.Item>
  </Dropdown>
*/

// TODO: Add proptypes to component
const Dropdown = props => {
  const labelSlug = slugify(props.label.toLowerCase())
  const forAndId = `${labelSlug}-select`

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        marginRight: '1.3em',
      }}
    >
      {/* Label */}
      <label
        htmlFor={forAndId}
        css={{
          fontSize: '0.8rem',
          fontWeight: 'bold',
          marginBottom: '0.7em',
          textTransform: 'uppercase',
          letterSpacing: '0.2rem',
        }}
      >
        {props.label}
      </label>

      {/* Select Dropdown */}
      <select
        name={props.label}
        id={forAndId}
        css={{
          width: '10em',
          border: 'none',
          padding: '0.5em',
          fontWeight: 'bold',
        }}
      >
        {props.children}
      </select>
    </div>
  )
}

Dropdown.Item = props => <option {...props}>{props.children}</option>

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
}

export default Dropdown
