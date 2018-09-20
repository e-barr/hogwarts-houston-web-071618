import React, { Component } from 'react'

class Filter extends Component {
  constructor() {
    super()

    this.state = {
      isGreased: false,
      sortBy: 'none'
    }
  }

  render() {
    return (
      <div style={{marginBottom: 20}}>
        Greased: <input type="checkbox" onClick={this.props.handleGreaseClick}/>

        <span>    </span>

        <select onChange={this.props.handleSortChange}>
          <option value="name">name</option>
          <option value="weight">weight</option>
        </select>
      </div>
    )
  }
}

export default Filter
