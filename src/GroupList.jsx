import React from "react"
import BootstrapTable from 'react-bootstrap-table-next';
import '../node_modules/react-bootstrap-table-next/dist/react-bootstrap-table-next.min.js';


const columns = [{
  dataField: 'studentId',
  text: 'ID'
}, {
  dataField: 'studentName',
  text: 'ФИО студента'
}, {
  dataField: 'appearance',
  text: 'Присутствие'
}];


function Table(props) {
  let students = props.props.students;
  return (
    <BootstrapTable keyField='studentId' data={students} columns={columns} />
  )
};

export default Table;