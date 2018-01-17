
import 'antd/dist/antd.less'
import './assets/less/main.less'

import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import {
    LocaleProvider,
} from 'antd'
import enGB from 'antd/lib/locale-provider/en_GB'
import Helmet from 'react-helmet'

import LayoutSmart from './smart/layout'

ReactDOM.render(
    <Router>
        <div>
            <Helmet>
                <title>Autocomplate input</title>
            </Helmet>
            <LocaleProvider locale={enGB}>
                <LayoutSmart />
            </LocaleProvider>
        </div>
    </Router>,
    document.getElementById('app')
)
