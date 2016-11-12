import React from 'react'
import {Row, Col} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

const Task = (props) => (
  <div>
    <Row>
      <Col xs={1}>
        <div>
          <p style={{textAlign: 'center', fontWeight: 'bold', paddingTop: '10px'}}>{props.time}
            <br/>
            <span>{props.period}</span>
          </p>
        </div>
      </Col>
      <Col xs={10}>
        <h4 style={{
          textDecoration: props.completed ? 'line-through' : 'none'
        }}>{props.activity_title}</h4>
        <p style={{
          textDecoration: props.completed ? 'line-through' : 'none'
        }}>{props.activity_description}</p>
      </Col>
      <Col xs={1}>
        <Row style={{paddingTop: '10px'}}>
          <Col xs={6}>
            <a href="#" onClick={props.removeTask}>
              <FontAwesome name='times' />
            </a>
          </Col>
          <Col xs={6}>
            <a href="#" onClick={props.toggleCompleteTask}>
              <FontAwesome name='check' />
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
)

export default Task
