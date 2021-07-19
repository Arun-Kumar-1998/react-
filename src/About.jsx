import React from 'react'

const About = (props) => {
    const {data} = props
    return (
        <>
            <h1> my name is arun</h1>
            <h4>{data.name}</h4>
            <h4>{data.age}</h4>
        </>
    )
}

export default About
