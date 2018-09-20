import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigPen from './PigPen'
import Filter from './Filter'

class App extends Component {
  constructor() {
    super()

    this.state = {
      isGreased: false,
      sortBy: "none"
    }
  }

  handleGreaseClick = () => {
    console.log('handleGreaseClick was entered!')
    return this.setState({
      ...this.state,
      isGreased: true
    })
  }

  handleSortChange = event => {
    console.log('handleSortChange was entered!')
    this.setState({
      ...this.state,
      sortBy: event.target.value
    })
  }

  correctHogList = () => {
    if (this.state.sortBy === 'none') {
      return hogs
    } else if (this.state.sortBy === 'name') {
      return (hogs.sort(function(a, b){
        if(a.name < b.name) return -1
        if(a.name > b.name) return 1
        return 0
      }))
    } else if (this.state.sortBy === 'weight') {
      return hogs.sort((hogOne, hogTwo) => hogTwo.weight - hogOne.weight)
    }
  }

  render() {
    return (
      <div className="App">
          < Nav />

          <Filter allHogs={hogs} filteredPigs={event => console.log(event)} handleSortChange={this.handleSortChange} handleGreaseClick={this.handleGreaseClick}/>
          <PigPen allHogs={this.correctHogList()} isGreased={this.state.isGreased} />

      </div>
    )
  }
}

export default App;
