import * as React from 'react'
import { Link } from 'gatsby'

const NotFoundPage = () => {
  return (
    <main>
      <h1>Page not found</h1>
      <p>Don't get too frustrated.</p>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
