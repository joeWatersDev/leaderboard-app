import "./RunSubmitForm.scss";
import { useState, useEffect } from 'react';


function RunSubmitForm(){
  const [formInputs, setFormInputs] = useState({});

  function handleChange(event){
    const name = event.target.name;
    const value = event.target.value;
    setFormInputs(values => ({...values, [name]:value}))
  }

  function handleSubmit(event){
    //event.preventDefault();
    console.log(formInputs);
    alert(formInputs);
  }

    return(
      <>
        <form className="entry-form" onSubmit={handleSubmit}>
          <ul>
            <li>
              <label>Name: <input onChange={handleChange} name="name" type="text" value = {formInputs.name || ""} placeholder="Name" /></label>
            </li>
            <li>
              <label>Hours: <input onChange={handleChange} name="hours" type="number" value = {formInputs.hours || ""} placeholder="0" /></label>
            </li>
            <li>
              <label>Minutes: <input onChange={handleChange} name="minutes" type="number" value = {formInputs.minutes || ""} placeholder="0"/></label>
            </li>
            <li>
              <label>Seconds: <input onChange={handleChange} name="seconds" type="number" value = {formInputs.seconds || ""} placeholder="0"/></label>              
            </li>
            <li><input type="submit"/></li>              
          </ul>
        </form>
      </>
    )
  }

export default RunSubmitForm;