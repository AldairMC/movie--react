import React, { Component } from 'react'
import './Filter.css'

export default class Filter extends Component {

    selectedElYear = evt => {
        let filter = evt.target.id
        this.props.filterYear(filter)
    }

    selectedElGender = evt => {
        let filter = evt.target.id
        this.props.filterGender(filter)
    }

    render() {
        let dataGen = this.props.gender
        let dataYea = this.props.year
        return (
            <div className="container">
                <div className="container_filter">
                    <span className="filter_year">
                        Year
                        <ul className="container_year">
                            {
                                Object.keys(dataYea).map(i => (
                                    <li 
                                        key={i}
                                        onClick={evt => this.selectedElYear(evt)}
                                        id={dataYea[i].id}>
                                    {dataYea[i].name}
                                    </li>
                                ))
                            }
                        </ul>
                    </span>
                    <span className="filter_gender">
                        Gender
                        <ul className="container_gender">
                            {
                                Object.keys(dataGen).map(i => (
                                    <li 
                                        key={i}
                                        onClick={evt => this.selectedElGender(evt)}
                                        id={dataGen[i].id}>
                                    {dataGen[i].name}
                                    </li>
                                ))
                            }
                        </ul>
                    </span>
                </div>
            </div>
        )
    }
}
