
import React, { Component } from 'react'

import App from '../core/app'

import LayoutDumb from '../dumb/layout'

export default class LayoutSmart extends Component {
    render = LayoutDumb.bind(this)

    state = {
        usePureHtml: App.getUsePureHtml(),
    }

    componentDidMount() {
        App.listen(this.onAppChange)
    }
    
    componentWillUnmount() {
        App.unlisten(this.onAppChange)
    }

    onAppChange = () => {
        this.setState({
            usePureHtml: App.getUsePureHtml(),
        })
    }

    changeUsePureHtml = (e) =>
        App.setPureHtml(e.target.checked)
}
