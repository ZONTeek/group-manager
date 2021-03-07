import React from 'react';
import './App.css';
import GroupList from './GroupList';
import API from "./utils/API";

class GroupListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
      ],
      date: null,
      fetched: false,
      studentsToSend: []
    };
    this.handleCheckboxInput = this.handleCheckboxInput.bind(this);
    this.handleButtonInput = this.handleButtonInput.bind(this);
  }

  componentDidMount() {
    if (!this.state.fetched) {
      API.get('/students')
        .then(response => {
          this.setState({
            students: response.data[0].AllStudents,
            fetched: true
          })
        })
    }
  }

  handleCheckboxInput(event) {
    const target = event.target;
    const name = target.value;
    if (this.state.studentsToSend.some(student => student === name)) {
      this.setState({
        studentsToSend: this.state.studentsToSend.filter(student => (student !== name))
      })
    } else {
      const addedStudent = [...this.state.studentsToSend, name]
      this.setState({
        studentsToSend: addedStudent
      });
    }
  }
  async handleButtonInput() {
    const date = new Date();
    const day = {
      students: this.state.studentsToSend,
      date: `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    }
    let res = await API.post('/', day);
    console.log(res.data);
  }
  render() {
    return <div>
      {
        this.state.fetched ?
          <div className="GroupListContainer">
            <GroupList
              props={this.state}
              handleCheckboxInput={this.handleCheckboxInput}
              handleButtonInput={this.handleButtonInput}
            />
          </div> : <div />
      }
    </div>
  }
};

export default GroupListContainer;