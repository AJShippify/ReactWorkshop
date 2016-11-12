import React from 'react'
import {Row, Col, Image} from 'react-bootstrap'

const Avatar = () => (
  <div>
    <Row>
      <Col xs={10}></Col>
      <Col xs={2}>
        <Image src="https://cdn-images-1.medium.com/fit/c/64/64/1*fRtEX2s-XtQp_lkk7iACJg.jpeg" thumbnail circle />
      </Col>
    </Row>
  </div>
)

export default Avatar
