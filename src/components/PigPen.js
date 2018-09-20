import React, { Component } from 'react'
import Pig from './Pig.js'
import Mudblood from '../hog-imgs/mudblood.jpg'
import Porkchop from '../hog-imgs/porkchop.jpg'
import Cherub from '../hog-imgs/cherub.jpg'
import Piggy_smalls from '../hog-imgs/piggy_smalls.jpg'
import Trouble from '../hog-imgs/trouble.jpg'
import Sobriety from '../hog-imgs/sobriety.jpg'
import Rainbowdash from '../hog-imgs/rainbowdash.jpg'
import TruffleShuffle from '../hog-imgs/truffleshuffle.jpg'
import Bay_of_Pigs from '../hog-imgs/bay_of_pigs.jpg'
import The_Prosciutto_Concern from '../hog-imgs/the_prosciutto_concern.jpg'
import Galaxy_Note from '../hog-imgs/galaxy_note.jpg'
import Leggo_My_Eggo from '../hog-imgs/leggo_my_eggo.jpg'
import Augustus_Gloop from '../hog-imgs/augustus_gloop.jpg'

class PigPen extends Component {
  constructor(props) {
    super(props)
  }

  mappedImages = {
    'Mudblood': Mudblood,
    'Porkchop': Porkchop,
    'Cherub': Cherub,
    'Piggy_smalls': Piggy_smalls,
    'Trouble': Trouble,
    'Sobriety': Sobriety,
    'Rainbowdash': Rainbowdash,
    'TruffleShuffle': TruffleShuffle,
    'Bay_of_Pigs': Bay_of_Pigs,
    'The_Prosciutto_Concern': The_Prosciutto_Concern,
    'Galaxy_Note': Galaxy_Note,
    'Leggo_My_Eggo': Leggo_My_Eggo,
    'Augustus_Gloop': Augustus_Gloop
  }

  imageLink(name) {
    return name.split(' ').join('_')
  }

  createCards = () => {
    const pigs = this.props.allHogs
    const that = this
    return pigs.map((pig, idx) => {
      return <Pig pigInfo={pig} key={idx} img={this.mappedImages[that.imageLink(pig.name)]}/>
    })
  }

  render() {
    return (
      <div className="ui grid container">{this.createCards()}</div>
    )
  }
}

export default PigPen
