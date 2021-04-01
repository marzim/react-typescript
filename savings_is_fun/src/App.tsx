import { ReactComponent } from '*.svg';
import React, { Component, ReactElement, ReactNode } from 'react';
import './App.css';
import EmployeeComponent from './employeeComponent'

function Heading2({ children } : { children: ReactNode; }){
  return (
    <h1>{children}</h1>
  )
}

function Heading3({ title } : { title: string; }){
  return (
    <h1>{title}</h1>
  )
}
// defaultProps
const defaultContainerProps = {
  heading: <strong>Yo Heading</strong>,
}
type ContainerProps = { children: ReactNode } & typeof defaultContainerProps
function Container({ 
  heading, 
  children,
 } : ContainerProps): ReactElement{
  return (
    <div>
      <h1>{heading}</h1>
      {children}
    </div>
  )
}
Container.defaultProps = defaultContainerProps;
interface EmployeeProps{
  Name?: string,
  Position?: string,
  Age?: Number,
  Salary?: Number
}
class App extends Component {

 

  async postData() {
    try{
      let employee:EmployeeProps = { Name:'foo345', Position:'god', Age:100, Salary:329339 };
      await fetch('https://localhost:44350/api/DBEmployees/', {
        method: 'POST',        
        headers: {
          'Accept': '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          'content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(employee)
      });
       
    } catch(e) {
      console.log('Exception: ' + e);
    }    
  }

  async deleteData() {
    try{
      await fetch('https://localhost:44350/api/DBEmployees/', {
        method: 'DELETE',        
        headers: {
          'Accept': '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          'content-type': 'application/json; charset=UTF-8'
        },        
      });
       
    } catch(e) {
      console.log('Exception: ' + e);
    }    
  }

  render(){
    return (
      <div>
        <Heading3 title='shit happens' ></Heading3>
        <button onClick={ () => this.postData() }>Click me to post a data</button><br></br>
        <input type='text' value={this.state.value} onChange={this.handleChange} />
        <button onClick={ () => this.deleteData() }>Click me to delete a data </button>
      </div>
    );
  }
  
}

export default App;
