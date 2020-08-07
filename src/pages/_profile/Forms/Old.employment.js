import React, { useState ,useEffect} from 'react'
import MultipleSelect from 'react-select';
import TextField from '@material-ui/core/TextField';
import OldComponent from "./Old.component.inner.js/oldComponent"
import { Grid, Button, FormGroup, Paper } from "@material-ui/core"
import Delete  from "../../../assets/icons/delete"
import FormControl from '@material-ui/core/FormControl';
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
                       editIt,old, deleteEmployment,pub,resume,pri,enabled_props}) {
  const [employment, set_employment] = useState(old)
  const [skills, set_skills] = useState([])
  const [details, set_details] = useState([])
  const [errors, set_error] = useState("")
  const [detail, set_detail] = useState("")
  const [skill, set_skill] = useState("")
  
  const [enabled, set_enabled] = useState(true)
  const [enabled_skill, set_enabled_skill] = useState(true)
  const [enabled_detail, set_enabled_detail] = useState(true)

  const handleChange = (e) => {
    set_employment({ ...employment, [e.target.name]: e.target.value })

  }
 
  const changeEmployment = (e) => {
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
           
            job_details: details,
            
          }
              editIt(employment_object)
              set_enabled(false)
             

        }

  }


  
 
  const calculate=(name)=>{
    let Arr=[]

    let isResume=resume&&resume.includes(name)
    let isPublic=pub&&pub.includes(name)
    let isPrivate=pri&&pri.includes(name)

    if(isResume){
        Arr.push({ value: 'resume', label: 'Resume' })
    }
    if(isPublic){
        Arr.push({ value: 'public', label: 'Public' })
    }
    if(isPrivate){
        Arr.push({ value: 'private', label: 'Private' })
    }
    return Arr
}







  useEffect(() => {
      console.log(old)
    
    set_employment(old)
      set_details(old.job_details)
    set_skills(old.skill_gained)
    set_enabled(enabled_props)
      
      }, [old])
      


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
    
    
    const AutoChange=(e)=>{

      set_employment({...employment,job_title:e})
      }
      
    
    
    
    const editSkills=(obj)=>{
        let Array=skills
       
        let index =Array.findIndex(item=>item===obj)
     Array[index]=obj
    
      set_skills(Array)
      
    
    }
 console.log(employment)
 
  return (
    <div className="oldContainer">
    <div className="edit-buttons">

<div className="add-tag " onClick={()=>set_enabled(true)}>edit</div>
<Delete width="25px" height="25px" className="delete" onClick={()=>deleteEmployment(old.id)}></Delete>
</div>
     
     


<div >

<Grid container direction={"row"} xs={12} className="mt-30">
        <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" >
          <FormControl noValidate autoComplete="off" className="fullw">

            <TextField disabled={!enabled}  defaultValue={employment["employer_name"]}className="fullw" onChange={handleChange} id="outlined-basic" name="employer_name" label="Employer name" variant="outlined" required />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={5} className="p-12">
          <FormControl variant="outlined" className="rightselect" required>
            <MultipleSelect
              isDisabled={!enabled}
defaultValue={calculate("employer_name")}

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
<Auto disabled={!enabled}  defaultValue={employment["job_title"]} className="fullw" onChange={AutoChange} id="outlined-basic" name="job_title" label="Job title" variant="outlined" required></Auto>
           
          </FormControl>
        </Grid>
        <Grid item xs={12} md={5} className="p-12">
          <FormControl variant="outlined" className="rightselect" >
            <MultipleSelect
              isDisabled={!enabled}
defaultValue={calculate("job_title")}

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

            <TextField disabled={!enabled}  defaultValue={employment["job_level"]} className="fullw" onChange={handleChange} id="outlined-basic" name="job_level" label="Job level " variant="outlined" required />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={5} className="p-12">
          <FormControl variant="outlined" className="rightselect" required>
            <MultipleSelect
              isDisabled={!enabled}
defaultValue={calculate("job_level")}

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

            <TextField  disabled={!enabled}  defaultValue={employment["company_organization"]}  className="fullw" onChange={handleChange} id="outlined-basic" name=" company_organization" label=" Company organization" variant="outlined" required />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={5} className="p-12">
          <FormControl variant="outlined" className="rightselect" >
            <MultipleSelect
              isDisabled={!enabled}
defaultValue={calculate("company_organization")}

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
          <FormControl  autoComplete="off" className="fullw">

            <TextField disabled={!enabled}  defaultValue={employment["team_name"]} className="fullw" onChange={handleChange} id="outlined-basic" name="team_name" label="Team name" variant="outlined" required />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={5} className="p-12">
          <FormControl variant="outlined" className="rightselect" >
            <MultipleSelect
              isDisabled={!enabled}
defaultValue={calculate("team_name")}

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
          
                        <TextField disabled={!enabled}  defaultValue={employment["employment_from"]} InputLabelProps={{ shrink: true}} type="date" className="fullw fullborder" onChange={handleChange} id="outlined-basic" name="employment_from" label="From" variant="outlined" required />
                      </FormControl>
                    </Grid>
                    <Grid item xs={5}  >
                      <FormControl autoComplete="off" className="fullw">
          
                        <TextField disabled={!enabled}  defaultValue={employment["employment_to"]} InputLabelProps={{ shrink: true}} type="date" className="fullw fullborder" onChange={handleChange} id="outlined-basic" name="employment_to" label="To" variant="outlined" required />
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={5} className="p-12">
                    <FormControl variant="outlined" className="rightselect" >
                      <MultipleSelect
                        isDisabled={!enabled}
defaultValue={calculate("team_name")}
          
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

      </Paper>
      <Paper elevation={3} className="paper-container">
      <h5 className="m-30 color p-12">Skills</h5>
      {skills&&skills.map(item=><OldComponent isFreeze={enabled} old={item} del={deleteSkill} edit={editSkills} name="skill_gained" label="skill gained" handleCheckbox={handleCheckbox} pub={pub} pri={pri} resume={resume}></OldComponent>)}

      </Paper>
    

      </div>




{enabled&&<Button onClick={changeEmployment} className="mb20 bgc ml-25 " variant="contained"   >Edit</Button>}
     
   
    </div>
  )
}
