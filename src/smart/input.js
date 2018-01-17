
import React, { Component } from 'react'

import Search from '../core/search'

import InputDumb from '../dumb/input'
import PureHtmlInputDumb from '../dumb/input/pureHtml'

export default class InputSmart extends Component {
    render = InputDumb.bind(this)

    state = {
        searchTerm: Search.getSearchTerm(),
        options: Search.getOptions(),
    }

    constructor(props) {
        super(props)

        if (props.pureHtml === true) {
            this.render = PureHtmlInputDumb.bind(this)
        }
    }

    componentDidMount() {
        Search.listen(this.onSearchTermChange, this.onOptionsChange)
    }
    
    componentWillUnmount() {
        Search.unlisten(this.onSearchTermChange, this.onOptionsChange)
    }

    componentWillReceiveProps(props) {
        if (this.props.pureHtml !== props.pureHtml) {
            if (props.pureHtml === true) {
                this.render = PureHtmlInputDumb.bind(this)
            } else {
                this.render = InputDumb.bind(this)
            }

            this.forceUpdate()
        }
    }

    onSearchTermChange = () => {
        this.setState({
            searchTerm: Search.getSearchTerm(),
        })
    }

    onOptionsChange = () => {
        this.setState({
            options: Search.getOptions(),
        })
    }

    changeSearchTerm = (value) =>
        Search.setSearchTerm(value)
}
