import "./RunSubmitForm.scss";
import { useState} from 'react';
import { submitRun } from '../../services/apiService';


function RunSubmitForm(){
  const [formInputs, setFormInputs] = useState({});

  function handleChange(event){
    const name = event.target.name;
    const value = event.target.value;
    setFormInputs(values => ({...values, [name]:value}))
  }

  function handleSubmit(event){
    //event.preventDefault();
    alert("Run submitted");
    submitRun(formInputs);
  }

    return(
      <>
        <form className="entry-form" onSubmit={handleSubmit}>
          <ul>
            <li>
              <label htmlFor="name">Runner: </label><input onChange={handleChange} name="runner" id="runner" type="text" value = {formInputs.runner || ""} placeholder="username" required/>
            </li>
            <li>
              <label htmlFor="hours">Hours: </label><input onChange={handleChange} name="hours" id="name" type="number" min = "0" value = {formInputs.hours || ""} placeholder="hh" required/>
            </li>
            <li>
              <label htmlFor="minutes">Minutes: </label><input onChange={handleChange} name="minutes" id="name" type="number" min = "0" max = "59" value = {formInputs.minutes || ""} placeholder="mm" required/>
            </li>
            <li>
              <label htmlFor="seconds">Seconds: </label><input onChange={handleChange} name="seconds" id="name" type="number" min = "0" max = "59" value = {formInputs.seconds || ""} placeholder="ss" required/>          
            </li>
            <li><input type="submit"/></li>              
          </ul>
        </form>
      </>
    )
  }

export default RunSubmitForm;