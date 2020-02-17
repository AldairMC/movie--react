import React, { Component } from 'react'
// import './Modal.css'

export default class Modal extends Component {
    render() {
        let { link } = this.props.link

        return (
            alert('Click')
            // < React.Fragment >
            // <div className="">
            //     <div className="">
            //         <span className="">&times;</span>
            //         <iframe width="420" height="315"
            //             src={`https://www.youtube.com/embed/${link}`}>
            //         </iframe>
            //     </div>
            // </div>
            // </React.Fragment >
        )
    }
}
