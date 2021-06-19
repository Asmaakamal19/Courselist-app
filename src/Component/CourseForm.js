import React from 'react';
const CourseForm = (props) =>{
    return(
        <form onSubmit={props.addcourse}>
            <input type="text" onChange={props.updatecourse} value={props.current} required/>
            <button type="submit">Add Course</button>
        </form>
    )
}
export default CourseForm