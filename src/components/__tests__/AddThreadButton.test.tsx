/**
 * skenario testing
 *
 * - AddThreadButton component
 *  - should render button
 *  - should call AddNewThread when button is clicked
 */

import '@testing-library/jest-dom/vitest'
import React from 'react'
import { it, expect, describe, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddThreadButton from '../AddThreadButton'

describe('AddThreadButton component', () => {
  it('should render button', async () => {
    render(<AddThreadButton AddNewThread={() => {}} />)
    expect(screen.getByTestId('add-new-thread')).toBeInTheDocument()
  })

  it('should call AddNewThread when button is clicked', async () => {
    const AddNewThread = vi.fn()
    render(<AddThreadButton AddNewThread={AddNewThread} />)
    await userEvent.click(screen.getByTestId('add-new-thread'))
    expect(AddNewThread).toHaveBeenCalled()
  })
})
