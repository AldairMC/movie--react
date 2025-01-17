import React, { Component } from 'react'
import '../Movies/Movies.css'

//components 
import Serie from '../Serie/Serie'

export default class Series extends Component {

    favorite = (data) => {
        this.props.localSerie(data)
    }

    render() {
        let data = this.props.series
        return (
            <div className="grid">
                {
                    Object.keys(data).map(key => (
                        <Serie
                            key={key}
                            series={data[key]}
                            favorite={this.favorite}
                        />
                    ))
                }
            </div>
        )
    }
}
