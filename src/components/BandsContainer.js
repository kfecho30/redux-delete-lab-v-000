import React, { Component } from 'react'
import BandInput from './BandInput';
import Bands from './Bands';

import { connect } from 'react-redux'

class BandsContainer extends Component {
  renderBands = () => {
    return this.props.bands.map(band => <Band deleteBand={this.props.delete} key={band.id} band={band} />)
  }
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: bandText => dispatch({type: 'DELETE_BAND', payload: bandText})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
