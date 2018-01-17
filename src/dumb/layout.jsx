
import React from 'react'
import {
    Checkbox,
    Col,
    Form,
    Row,
} from 'antd'

import InputSmart from '../smart/input'

const FormItem = Form.Item

export default function LayoutDumb() {
    return (
        <div>
            <br/><br/><br/><br/>
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
