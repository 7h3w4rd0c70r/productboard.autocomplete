
import React from 'react'
import {
    Select,
    AutoComplete,
} from 'antd'
import cx from 'classnames'

export default function InputDumb() {
    return (
        <div className={cx('autocomplete', 'input')}>
            <label>Search term</label>
            <AutoComplete
                style={{
                    width: '100%',
                }}
                placeholder='Start typing...'
                value={this.state.searchTerm}
                onSearch={this.changeSearchTerm}
                onSelect={this.changeSearchTerm}
                dataSource={this.state.options}
                allowClear
            />
        </div>
    )
}
