import React from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

const AddButton = (props) => (
  <div>
    <Row>
      <Col xs={10}></Col>
      <Col xs={2}>
        <Button bsStyle="danger" bsSize="large" onClick={props.onClick}>
          <FontAwesome name='plus' />
        </Button>
      </Col>
    </Row>
  </div>
)

export default AddButton