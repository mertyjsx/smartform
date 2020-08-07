import React from 'react'

export default function IconButton({icon:Component,onClick}) {
    return (
        <div onClick={onClick}>
            <Component></Component>
        </div>
    )
}
