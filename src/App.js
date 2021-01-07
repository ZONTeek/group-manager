import React, { Component } from 'react';
import './App.css';
import Table from './GroupList';
import API from "./utils/API";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      students: [{
        studentName: "Иванов",
        appearance: true
      }],
      date: null,
      lessonName: null
    };
  }

  render() {
    return (
      <div className="App">
        <Table props={this.state} />
      </div>
    );
  }


  async componentDidMount() {
    let userData = await API.get('/', {
      params: {
        results: 1,
        inc: 'students'
      }
    }
    );
    userData = userData.data[0];
    const students = userData.students;
    const lessonName = userData.lessonName;
    const date = userData.date;
    this.setState({
      ...this.state, ...{
        isLoading: false,
        students,
        lessonName,
        date,
      }
    });
  }
}
export default App;