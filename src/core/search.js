
import jSignal from 'jsignal'
import axios from 'axios'
import _ from 'lodash'

const _onSearchTermChange = new jSignal()
const _onOptionsChange = new jSignal()

let _searchTerm = ''
let _options = [ ]

class Search {
    listen(onSearchTermChange = null, onOptionsChange = null) {
        if (typeof onSearchTermChange === 'function') {
            _onSearchTermChange.listen(onSearchTermChange)
        }

        if (typeof onOptionsChange === 'function') {
            _onOptionsChange.listen(onOptionsChange)
        }
    }

    unlisten(onSearchTermChange = null, onOptionsChange = null) {
        if (typeof onSearchTermChange === 'function') {
            _onSearchTermChange.unlisten(onSearchTermChange)
        }

        if (typeof onOptionsChange === 'function') {
            _onOptionsChange.unlisten(onOptionsChange)
        }
    }

    fetchOptions() {
        return axios
            .get('http://googlesuggest.cz/complete/search', {
                params: {
                    client: 'firefox',
                    q: _searchTerm,
                }
            })
            .then(response => {
                let body = [_searchTerm, [ ]]
                if (typeof response.data === 'object') {
                    body = _.cloneDeep(response.data)
                } else {
                    body = JSON.parse(response.data)
                }
                if (body[1] instanceof Array) {
                    _options = _.cloneDeep(body[1])
                }
                _onOptionsChange.dispatch()
            })
            .catch(ex => {
                console.error(ex)
            })
    }

    getSearchTerm() {
        return _searchTerm
    }

    getOptions() {
        return _options
    }

    setSearchTerm(value) {
        _searchTerm = value
        _onSearchTermChange.dispatch()
        if (/^\s*$/.test(value)) {
            _options = [ ]
            _onOptionsChange.dispatch()
        } else {
            this.fetchOptions()
        }
    }
}

export default new Search()
