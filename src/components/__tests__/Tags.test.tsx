/**
 * skenario testing
 *
 * - Tags component
 *  - should render tags
 *  - should render tags with text
 *
 */

import '@testing-library/jest-dom/vitest'
import React from 'react'
import { it, expect, describe, vi, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Tags from '../Tags'

describe('Tags component', () => {
  it('should render tags', async () => {
    render(<Tags tags={'test'} />)
    expect(screen.getByTestId('tags')).toBeInTheDocument()
  })

  it('should render tags with text', async () => {
    render(<Tags tags={'test'} />)
    expect(screen.getByTestId('tags')).toHaveTextContent(/^#test$/)
  })
})
