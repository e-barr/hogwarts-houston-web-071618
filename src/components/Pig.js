import React, { Component } from 'react'

class Pig extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // console.log(this.props.pigInfo)
    return (
      <div className="ui eight wide column">
        <div className="ui move reveal">
          <h2>{this.props.pigInfo.name}</h2>
          <div className="visible content">
            <img src={this.props.img} alt={this.props.pigInfo.name}/>
          </div>
          <div className="hidden content">
            <ul>
              <li>Specialty: {this.props.pigInfo.specialty}</li>
              <li>Greased: {this.props.pigInfo.greased ? "true" : "false"}</li>
              <li>Weight: {this.props.pigInfo.weight}</li>
              <li>Heighest Medal Achieved: {this.props.pigInfo['highest medal achieved']}</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Pig
