import React from 'react'
import Nav from './Nav'

const EveryPage = ({children}) => {

    let a = -3; 

    return (
        <div>
            <h2 style={a > 0 ? {color: 'red'} : {color: 'green'} }>Title on everypage</h2>
            <p>some content on everypage</p>
            <hr />
            <Nav />
            {children}
        </div>
    )
}

export default EveryPage
