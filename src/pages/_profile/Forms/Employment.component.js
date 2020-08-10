import React, { useState } from 'react'
import MultipleSelect from 'react-select';
import TextField from '@material-ui/core/TextField';
import { Grid, Button, FormGroup, Paper } from "@material-ui/core"
import FormControl from '@material-ui/core/FormControl';
import OldComponent from "./Old.component.inner.js/oldComponent"
import OldEmployment from "./Old.employment"
import {Alert } from "@material-ui/lab"
import Auto from "../../_components/Autocomplete"
const options2 = [
  { value: ' graduated', label: ' graduated' },
  { value: 'incomplete', label: 'incomplete' },
  { value: 'on_hold', label: 'on hold' },
  { value: 'enrolled', label: 'enrolled' },
  { value: 'attending', label: 'attending' },
];
const options = [
  { value: 'public', label: 'Public' },
  { value: 'private', label: 'Private' },
  { value: 'resume', label: 'Resume' },
];

export default function Employmentcomponent({ handleCheckbox, 
                       add, employments, deleteEmployment,editIt,pub,pri,resume}) {
  const [employment, set_employment] = useState({})
  const [skills, set_skills] = useState([])
  const [details, set_details] = useState([])
  const [errors, set_error] = useState("")
  const [detail, set_detail] = useState("")
  const [skill, set_skill] = useState("")
  
  const [enabled, set_enabled] = useState(employments.length<1)
  const [enabled_skill, set_enabled_skill] = useState(true)
  const [enabled_detail, set_enabled_detail] = useState(true)

  const handleChange = (e) => {

    console.log(e.target.value)
    set_employment({ ...employment, [e.target.name]: e.target.value })

  }
  
const AutoChange=(e)=>{

set_employment({...employment,job_title:e})
}



  const handleDetail = (e) => {
    set_detail(e.target.value)
  }
  const handleSkill = (e) => {
    set_skill(e.target.value)
  }
  
  const addEmployment = (e) => {
    e.preventDefault();
    let error=false
    if(!employment.employer_name){
      error=true
      set_error("employer_name can not be empty")
      
      }
      
      if(!employment.job_title){
        error=true
        set_error("job_title can not be empty")
        
        }

        if(!error){
          let employment_object={
            ...employment,
            skill_gained:skills,
            id:Math.floor(Math.random() * Math.floor(21000)),
            job_details: details,
            
          }
              add(employment_object)
              set_enabled(false)
              set_error("")
           

        }

  }
  const addSkill = (e) => {
    e.preventDefault();
set_enabled_skill(false)
let skill_Array=skills
skill_Array.push(skill)
    set_skills(skill_Array)

  }
  const addDetail = (e) => {
    e.preventDefault();
let detail_array=details
detail_array.push(detail)
    set_details(detail_array)
    set_enabled_detail(false)

  }
 console.log(employment)

 const deleteDetail = (detail) => {
    let detail_array = details.filter(item => item!== detail)


   set_details(detail_array)

  }

const  deleteSkill = (skill) => {
    let skill_array = skills.filter(item => item !== skill)


 set_skills(skill_array)

  }
 
  const editDetails=(obj)=>{
    let Array=details
   
    let index =Array.findIndex(item=>item===obj)
 Array[index]=obj

  set_details(Array)
  

}






const editSkills=(obj)=>{
    let Array=skills
   
    let index =Array.findIndex(item=>item===obj)
 Array[index]=obj

  set_skills(Array)
  

}
console.log(details)
 
  return (
    <div elevation={3}   className="paper-container">
     
     <div>

{

  employments&&employments.map(item => <OldEmployment enabled_props={enabled} pri={pri} pub={pub} resume={resume} old={item} editIt={editIt}  handleCheckbox={handleCheckbox} deleteEmployment={deleteEmployment}
  
  
  
  
  ></OldEmployment>)
}
</div>
{enabled&&

<div >

<Grid container direction={"row"} xs={12} className="mt-30">
        <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" >
          <FormControl noValidate autoComplete="off" className="fullw">

            <TextField className="fullw" onChange={handleChange} id="outlined-basic" name="employer_name" label="Employer name" variant="outlined" required />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={5} className="p-12">
          <FormControl variant="outlined" className="rightselect" required>
            <MultipleSelect

              className="multiSelect"
              isMulti={true}
              onChange={(e) => handleCheckbox("employer_name", e)}
              options={options}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid container direction={"row"} xs={12} className="mt-30">
        <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" >
          <FormControl autoComplete="off" className="fullw">

          <Auto  className="fullw" onChange={AutoChange} id="outlined-basic" name="job_title" label="Job title" variant="outlined" required></Auto>
           
 </FormControl>
        </Grid>
        <Grid item xs={12} md={5} className="p-12">
          <FormControl variant="outlined" className="rightselect" >
            <MultipleSelect

              className="multiSelect"
              isMulti={true}
              onChange={(e) => handleCheckbox("job_title", e)}
              options={options}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid container direction={"row"} xs={12} className="mt-30">
        <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" >
          <FormControl noValidate autoComplete="off" className="fullw">

            <TextField className="fullw" onChange={handleChange} id="outlined-basic" name="job_level" label="Job level " variant="outlined" required />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={5} className="p-12">
          <FormControl variant="outlined" className="rightselect" required>
            <MultipleSelect

              className="multiSelect"
              isMulti={true}
              onChange={(e) => handleCheckbox("job_level", e)}
              options={options}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid container direction={"row"} xs={12} className="mt-30">
        <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" >
          <FormControl autoComplete="off" className="fullw">

            <TextField className="fullw" onChange={handleChange} id="outlined-basic" name=" company_organization" label=" Company organization" variant="outlined" required />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={5} className="p-12">
          <FormControl variant="outlined" className="rightselect" >
            <MultipleSelect

              className="multiSelect"
              isMulti={true}
              onChange={(e) => handleCheckbox(" company_organization", e)}
              options={options}
            />
          </FormControl>
        </Grid>
      </Grid>
     
      <Grid container direction={"row"} xs={12} className="mt-30">
        <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" >
          <FormControl autoComplete="off" className="fullw">

            <TextField className="fullw" onChange={handleChange} id="outlined-basic" name="team_name" label="Team name" variant="outlined" required />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={5} className="p-12">
          <FormControl variant="outlined" className="rightselect" >
            <MultipleSelect

              className="multiSelect"
              isMulti={true}
              onChange={(e) => handleCheckbox("team_name", e)}
              options={options}
            />
          </FormControl>
        </Grid>
      </Grid>
     
      <Grid container direction={"row"} xs={12} className="mt-30">
                  <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" justify="space-between">
                    <Grid item xs={5}   >
          
                      <FormControl autoComplete="off" className="fullw">
          
                        <TextField InputLabelProps={{ shrink: true}} type="date" className="fullw fullborder" onChange={handleChange} id="outlined-basic" name="employment_from" label="From" variant="outlined" required />
                      </FormControl>
                    </Grid>
                    <Grid item xs={5}  >
                      <FormControl autoComplete="off" className="fullw">
          
                        <TextField InputLabelProps={{ shrink: true}} type="date" className="fullw fullborder" onChange={handleChange} id="outlined-basic" name="employment_to" label="To" variant="outlined" required />
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={5} className="p-12">
                    <FormControl variant="outlined" className="rightselect" >
                      <MultipleSelect
          
                        className="multiSelect"
                        isMulti={true}
                        onChange={(e) => {
                          handleCheckbox("employment_from", e)
                          handleCheckbox("employment_to", e)
                        }}
                        options={options}
                      />
                    </FormControl>
                  </Grid>
                </Grid>

     
      <Paper elevation={3} className="paper-container">
      <h5 className="m-30 color p-12">Job details</h5>
      {details&&details.map(item=><OldComponent isFreeze={enabled} old={item} del={deleteDetail} edit={editDetails} name="job_detail" label="job detail" handleCheckbox={handleCheckbox} pub={pub} pri={pri} resume={resume}></OldComponent>)}
        
        <Grid container>
         
         {enabled_detail&&
          <Grid container direction={"row"} xs={12} className={`mt-30`}>
          <Grid container xs={12} md={7} className={`p-12 `} alignItems="center" alignContent="center" >
            <FormControl autoComplete="off" className="fullw">

              <TextField className="fullw" onChange={handleDetail} id="outlined-basic" name="job_detail" label="job_detail" variant="outlined" required />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={5} className="p-12">
            <FormControl variant="outlined" className="rightselect" >
              <MultipleSelect

                className="multiSelect"
                isMulti={true}
                onChange={(e) => handleCheckbox("job_detail", e)}
                options={options}
              />
            </FormControl>
          </Grid>

          
        </Grid>

         
         }


          {enabled_detail?<Button onClick={addDetail} className="mb20 bgc ml-25 " variant="contained"   >add</Button>:details.length<3&&<div onClick={()=>set_enabled_detail(true)} className="add-tag">new detail</div>}


        </Grid>
      </Paper>
      <Paper elevation={3} className="paper-container">
      <h5 className="m-30 color p-12">Skills</h5>
      {skills&&skills.map(item=><OldComponent isFreeze={enabled} old={item} del={deleteSkill} edit={editSkills} name="skill_gained" label="skill gained" handleCheckbox={handleCheckbox} pub={pub} pri={pri} resume={resume}></OldComponent>)}
     
        <Grid container>
       
         {enabled_skill&&
          <Grid container direction={"row"} xs={12} className={`mt-30 `}>
          <Grid container xs={12} md={7} className={`p-12 `} alignItems="center" alignContent="center" >
            <FormControl autoComplete="off" className="fullw">

              <TextField className="fullw" onChange={handleSkill} id="outlined-basic" name="skill_gained " label="skill_gained" variant="outlined" required />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={5} className="p-12">
            <FormControl variant="outlined" className="rightselect" >
              <MultipleSelect

                className="multiSelect"
                isMulti={true}
                onChange={(e) => handleCheckbox("skill_gained", e)}
                options={options}
              />
            </FormControl>
          </Grid>

          
        </Grid>

         
         }


          {enabled_skill?<Button onClick={addSkill} className="mb20 bgc ml-25 " variant="contained"   >add</Button>:skills.length<5&&<div onClick={()=>set_enabled_skill(true)} className="add-tag">new skill</div>}


        </Grid>
      </Paper>
    

      </div>



}
      {errors&&<Alert className="mb20" severity="error">{errors}</Alert>}
      {enabled? <Button onClick={addEmployment} className="fullw bgc" variant="contained"  >add Employment</Button>:<div onClick={()=>set_enabled(true)} className="add-tag">new Employment</div>}
     
   
    </div>
  )
}
