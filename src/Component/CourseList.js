import React, {Component, Fragment} from 'react';
class Courselist extends Component {
  state={
    isEdit: false
  }
  //render course items
  rendercourse=()=>{
    return(
      <li>
          <span> {this.props.details.name}</span>
          <button onClick={()=>{this.toggle()}}>Edit Courses</button>
          <button onClick={()=>{this.props.deletecourse(this.props.index)}}>Delete Course</button>
      </li>
    )
  }
  //toggle state
  toggle =()=>{
    let {isEdit}=this.state;
    this.setState({
      isEdit: !isEdit
    })
  }
  //Updatecourseitem after edit
  Updatecourseitem=(e)=>{
    e.preventDefault();
    this.props.Editcourse(this.props.index, this.input.value);
    this.toggle();
  }
  //Edit Form
  Editform=()=>{
    return(
      <form onSubmit={this.Updatecourseitem}>
        <input type="text" ref={(v)=>{this.input=v}} defaultValue={this.props.details.name} />
        <button>Update Course</button>
      </form>
    )
  }
  render(){
    let {isEdit}= this.state;
    return (
      <Fragment>
          {isEdit ? this.Editform(): this.rendercourse()}
      </Fragment>
    );
  }
}
export default Courselist;