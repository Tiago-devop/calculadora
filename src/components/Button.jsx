import React from 'react'
import './Button.css'

export default props => {
    let classes = 'button ' /* espaço p/ as classes n ficarem juntas! */
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return (
        <button
            onClick={e => props.click && props.click(props.label)}
            className={classes}
        >
            {props.label}
        </button>

    )
}