import React, { Component } from 'react'
// import './Modal.css'

export default class Modal extends Component {
    render() {
        let { link } = this.props.link
        return (
            link
            // <React.Fragment>
            //     <div id="myModal" class="modal">
            //         <div class="modal-content">
            //             <span class="close">&times;</span>
            //             <iframe width="420" height="315"
            //                 src={`https://www.youtube.com/watch?v=${link}`}>
            //             </iframe>
            //         </div>
            //     </div>
            // </React.Fragment>
        )
    }
}
