import React from 'react'
import { useParams } from 'react-router-dom';

export default function About() {

  const { message } = useParams();

  return (
    <div>
      <p>User ID: {message}</p>
    </div>
  )
}
