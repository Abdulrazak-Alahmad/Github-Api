import React from 'react'
export default function Api1(props) {
    return (
        <div>
            <div className='lastPart'>
                <div className='nameOfDesc'>{props.name.name} :</div>
                <div>{props.name.description}</div>
            </div>
        </div>
    )
}
