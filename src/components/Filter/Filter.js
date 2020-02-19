import React, { Component } from 'react'
import './Filter.css'

export default class Filter extends Component {

    year = () => {
        let i = 1960
        let content = `<li value="${i}">${i}</li>`
        return document.getElementsByClassName('container_year').append(content)
    }

    render() {
        return (
            <div className="container">
                <div className="container_filter">
                    <span className="filter_year">
                        Year
                        <ul className="container_year">

                        </ul>
                    </span>
                    <span className="filter_gender">
                        Gender
                        <ul className="container_gender">

                        </ul>
                    </span>
                </div>
            </div>
        )
    }
}
