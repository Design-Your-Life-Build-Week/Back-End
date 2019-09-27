import React from 'react'

export default function Display(props)  {

    console.log('props', props)
    return (
        <div>
            <p>{props.category}</p>
            
            
        </div>
    )
}