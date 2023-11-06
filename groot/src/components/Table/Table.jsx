import React from 'react'
import { useParams } from 'react-router-dom';
import './TableStyle.css'
export default function Table() {
  const { message } = useParams();

  return (
    <div>
        <div className="textEditArea">
            <textarea name="" id="" cols="30" rows="10"/>
        </div>
    </div>
  )
}
