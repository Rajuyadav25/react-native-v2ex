/**
 * @format
 */

import 'react-native'
import React from 'react'
import App from '../src/App'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

it('renders correctly', async () => {
  let tree: renderer.ReactTestRenderer | undefined
  await renderer.act(async () => {
    tree = renderer.create(<App />)
  })
  // Unmount inside act so effects started by the render do not outlive the test environment.
  await renderer.act(async () => {
    tree?.unmount()
  })
})
