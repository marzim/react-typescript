import React, { ReactNode } from 'react';

interface IEmployeeProps{
    Id?: any,
    Name?: string,
    Location?: string,
    Salary?: any
}

interface IEmployeeState{
    employees: []
}

class EmployeeComponent extends React.Component<IEmployeeProps, IEmployeeState>{
    constructor(props: IEmployeeProps){
      super(props);
      this.state={
        employees: []
      }
    }   

    componentDidMount(){
        fetch('https://localhost:44350/api/Employee').then(res => res.json()).then(
            result => {
                this.setState({employees:result});                
            }
        )     
    }
    render(){
      return (
        <div>
          <h2>Employees Data...</h2>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Location</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody> 
              {
               this.state.employees.map(emp => { 
                   var employee = emp as IEmployeeProps;
                   console.log(employee.Name);
                   <tr><td>{employee.Name}</td></tr>
               }, 
               
              )}
            </tbody>
          </table>
        </div>
        );   
    }      
  }

  export default EmployeeComponent;
