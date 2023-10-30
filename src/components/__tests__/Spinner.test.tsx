/**
 * skenario testing
 *
 * - Spinner component
 *  - should render spinner
 */

import '@testing-library/jest-dom'
import React from 'react'
import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import Spinner from '../Spinner'

describe('Spinner Component', () => {
  it('renders the spinner component', async () => {
    render(<Spinner />)
    const spinnerElement = screen.getByTestId('spinner')
    expect(spinnerElement).toBeInTheDocument()
  })
})
