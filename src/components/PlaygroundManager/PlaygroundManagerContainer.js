import React from 'react'
import { connect } from 'react-redux'
import PlaygroundManager from './PlaygroundManager'

const PlaygroundManagerContainer = () => {
    return (
        <PlaygroundManager />
    )
}

const mapStateToProps = state => ({
    state,
})

export default connect(mapStateToProps)(PlaygroundManagerContainer)
