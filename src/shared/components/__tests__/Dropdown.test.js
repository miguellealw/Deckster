import React from 'react'
import { render, cleanup } from 'utils/test-utils'
import Dropdown from '../Dropdown'

afterEach(cleanup)

test('label is rendered correctly', () => {
  const { getByText } = render(
    <Dropdown label="dropdown label">
      <Dropdown.Item>test item 1</Dropdown.Item>
      <Dropdown.Item>test item 2</Dropdown.Item>
      <Dropdown.Item>test item 3</Dropdown.Item>
    </Dropdown>,
  )
  const dropdownLabel = getByText('dropdown label')

  expect(dropdownLabel).toHaveTextContent('dropdown label')
})

test('label is linked to respective "select" tag', () => {
  const { getByLabelText } = render(
    <Dropdown label="dropdown label">
      <Dropdown.Item>test item 1</Dropdown.Item>
      <Dropdown.Item>test item 2</Dropdown.Item>
      <Dropdown.Item>test item 3</Dropdown.Item>
    </Dropdown>,
  )

  const selectElement = getByLabelText('dropdown label')

  expect(selectElement).toBeInTheDocument()
  expect(selectElement).toHaveAttribute('name', 'dropdown label')
  expect(selectElement).toHaveAttribute('id', 'dropdown-label-select')
})

xtest('dropdown items are toggled when dropdown is clicked', () => {})
