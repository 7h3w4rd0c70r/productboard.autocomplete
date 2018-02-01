
import React from 'react'
import cx from 'classnames'

export default function InputDumb() {
    return (
        <div className={cx('autocomplete', 'input')}>
            <label htmlFor='searchTerm'>Search term</label>
            <input
                id='searchTerm'
                list='searchOptions'
                placeholder='Start typing...'
                value={this.state.searchTerm}
                onChange={e => this.changeSearchTerm(e.target.value)}
                autoFocus
            />
            <datalist id='searchOptions'>
                {this.state.options.map(option =>
                    <option key={Math.random().toString(36).substring(2, 6)}>{option}</option>
                )}
            </datalist>
        </div>
    )
}
