import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ClassList extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    console.log(this.props)
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then(res => {
      console.log(222, res)
      this.setState({
        students: res.data
      })
    })
  }

  render() {
    const students = this.state.students.map((student, i) => {
      return (
        <Link key={i} to={`/student/${student.id}`}>
          <h3>{student.first_name} {student.last_name} </h3>
        </Link>
      )
    })

    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {students}
        <button onClick={()=>this.props.history.goBack()}> Back to Home </button>

      </div>
    )
  }
}