import React, {Component} from 'react';
import Courselist from './Component/CourseList';
import CourseForm from './Component/CourseForm';
class App extends Component {
  state ={
    Courses:[
      {name: "HTML"},
      {name: "Css"},
      {name: "jQuery"}
    ],
    current: ''
  }
  updatecourse=(e)=>{
    this.setState({
      current:e.target.value
    })
  }
  addcourse=(e)=>{
    e.preventDefault();
    let current= this.state.current;
    let courses = this.state.Courses;
    courses.push({name: current})
    this.setState({
      courses,
      current:''
    })
  }
  deletecourse=(index)=>{
    let courses = this.state.Courses;
    courses.splice(index,1);
    this.setState({
      courses
    })
  }
  Editcourse=(index, newvalue)=>{
      let courses = this.state.Courses;
      let course = courses[index]
      course["name"] =newvalue;
      this.setState({
        courses
      })
  }
  render(){
    const {Courses} = this.state;
    const courselist = Courses.map((course, index) =>{
      return <Courselist details={course} key={index} index={index} 
                    deletecourse={this.deletecourse} Editcourse={this.Editcourse}/>
    })
    return (
      <section className="App">
        <h2>Add Course</h2>
        <CourseForm 
          updatecourse={this.updatecourse}
          addcourse={this.addcourse} 
          current={this.state.current} />
        <ul>
          {this.state.Courses.length > 0 ? courselist : <p>No Courses To Show!! Please Add New Course.</p>}
        </ul>
      </section>
    );
  }
}
export default App;