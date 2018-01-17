
import jSignal from 'jsignal'

const _onChange = new jSignal()

let _usePureHtml = false

class App {
    listen(onChange = null) {
        if (typeof onChange === 'function') {
            _onChange.listen(onChange)
        }
    }

    unlisten(onChange = null) {
        if (typeof onChange === 'function') {
            _onChange.unlisten(onChange)
        }
    }

    getUsePureHtml() {
        return _usePureHtml
    }

    setPureHtml(value) {
        _usePureHtml = !!value
        _onChange.dispatch()
    }
}

export default new App()
