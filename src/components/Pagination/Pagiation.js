import React, { Component } from 'react';
import './Pagination.css'

class Pagiation extends Component {
    
    NUMBER = 1
    incPage = () => {
        if(this.NUMBER === 500){
            this.NUMBER = 500
        }else{
            this.NUMBER += 1
        }
        this.props.getIncPage(this.NUMBER)
    }

    decPage = () => {
        if(this.NUMBER === 1){
            this.NUMBER = 1
        }else{
            this.NUMBER -= 1
        }
        this.props.getDecPage(this.NUMBER)
    }

    render() {
        return (
            <div className="btn_container">
                <span className="btn_prev">
                    <button
                        id="decPage" 
                        onClick={this.decPage}>Previous
                    </button>
                    </span>
                <span className="btn_next">
                    <button 
                        id="incPage"
                        onClick={this.incPage}>Next
                    </button>
                </span>
            </div>
        );
    }
}

export default Pagiation;