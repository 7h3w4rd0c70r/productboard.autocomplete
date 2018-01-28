
import React from 'react'
import {
    Checkbox,
    Col,
    Form,
    Row,
} from 'antd'
import cx from 'classnames'

import InputSmart from '../smart/input'

const FormItem = Form.Item

export default function LayoutDumb() {
    return (
        <div className={cx('layout')}>
            <Row gutter={20}>
                <Col span={10} offset={7}>
                    <p className={cx('description', 'header')}>
                        Autocomplete Example
                    </p>
                    <p className={cx('description')}>
                        This autocomplete example uses <strong>Google API</strong> to guess what you are trying to type in.
                    </p>
                    <p className={cx('description')}>
                        The input it self is in two variations - raw html input with dataoptions without any special styling and second variation is using select styled with AntD component <a href='https://ant.design/components/auto-complete/' target='_blank'>AutoComplete</a> for a nice user interface.
                    </p>
                </Col>
            </Row>
            <Row gutter={20}>
                <Col span={8} offset={8}>
                    <FormItem>
                        <Checkbox
                            checked={this.state.usePureHtml}
                            onChange={this.changeUsePureHtml}
                        >
                            Use pure html
                        </Checkbox>
                    </FormItem>
                </Col>
            </Row>
            <Row gutter={20}>
                <Col span={8} offset={8}>
                    <InputSmart
                        pureHtml={this.state.usePureHtml}
                    />
                </Col>
            </Row>
        </div>
    )
}
