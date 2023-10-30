/**
 * skenario testing
 *
 * - SubmitButton component
 *  - should render button
 *  - should call onSubmitComment when button is clicked
 */

import '@testing-library/jest-dom/vitest'
import React from 'react'
import { it, expect, describe, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SubmitButton from '../SubmitButton'

describe('SubmitButton component', () => {
  it('should render button', async () => {
    render(<SubmitButton onSubmitComment={() => {}} />)
    expect(screen.getByTestId('submit-comment')).toBeInTheDocument()
  })

  it('should call onSubmitComment when button is clicked', async () => {
    const onSubmitComment = vi.fn()
    render(<SubmitButton onSubmitComment={onSubmitComment} />)
    await userEvent.click(screen.getByTestId('submit-comment'))
    expect(onSubmitComment).toHaveBeenCalled()
  })
})
