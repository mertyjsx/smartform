import React, { useState ,useEffect} from 'react'
import MultipleSelect from 'react-select';
import TextField from '@material-ui/core/TextField';
import OldComponent from "./Old.component.inner.js/oldComponent"
import { Grid, Button, FormGroup, Paper } from "@material-ui/core"
import Delete  from "../../../assets/icons/delete"
import FormControl from '@material-ui/core/FormControl';
import {Alert } from "@material-ui/lab"
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
                       editIt,old, deleteIt,pub,resume,pri,}) {
  const [data, set_data] = useState({})
const [enabled, set_enabled] = useState(false)
 

  const handleChange = (e) => {
    set_data({ ...data, [e.target.name]: e.target.value })

  }
 
  const changeData = (e) => {
    e.preventDefault();
    
          
              editIt(data)
              set_enabled(false)
             

        

  }
  const editGained=(obj)=>{
    let Array=data.skill_gained
   let datas=data

   let index =Array.findIndex(item=>item===obj)
 Array[index]=obj
datas.skill_gained=Array
  set_data(datas)
  

}
const  deleteGained = (skill) => {
    let skill_array = data.skill_gained&&data.skill_gained.filter(item => item !== skill)
let Array=data
Array.skill_gained=skill_array
 set_data(Array)

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
    set_data(old)
 
  
      
      }, [old])
      

console.log(enabled)
 
    return (
        <div className="oldContainer">
        <div className="edit-buttons">
    
    <div className="add-tag " onClick={()=>set_enabled(true)}>edit</div>
    <Delete width="25px" height="25px" className="delete" onClick={()=>deleteIt(old)}></Delete>
    </div>
               
  <div>
         
    
          
            
            
            
          <Grid container direction="column" className="m-20">
          <Grid container direction={"row"} xs={12}  className="mt-30">
            <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" >
              <form  autoComplete="off" className="fullw">

                <TextField disabled={!enabled}  value={data["project_name"]} className="fullw" onChange={handleChange} id="outlined-basic" name="project_name" label="Project name " variant="outlined" required />
              </form>
            </Grid>
            <Grid item xs={12} md={5} className="p-12">
              <FormControl variant="outlined" className="rightselect" >
                <MultipleSelect
isDisabled={!enabled}
defaultValue={calculate("project_name")}
                  className="multiSelect"
                  isMulti={true}
                  onChange={(e) => handleCheckbox("project_name", e)}
                  options={options}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid container direction={"row"} xs={12}  className="mt-30">
            <Grid container xs={12} md={7} className="p-12"  alignItems="center" alignContent="center" >
              <form  autoComplete="off" className="fullw">

                <TextField disabled={!enabled}  value={data["dt_from"]} className="fullw" onChange={handleChange} id="outlined-basic" name="project_desc" label="Project description " variant="outlined" required />
              </form>
            </Grid>
            <Grid item xs={12} md={5} className="p-12">
              <FormControl variant="outlined" className="rightselect" >
                <MultipleSelect
isDisabled={!enabled}
defaultValue={calculate("dt_from")}
                  className="multiSelect"
                  isMulti={true}
                  onChange={(e) => handleCheckbox("project_desc", e)}
                  options={options}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid container direction={"row"} xs={12} className="mt-30">
                <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" justify="space-between">
                  <Grid item xs={5}   >
        
                    <FormControl autoComplete="off" className="fullw">
        
                      <TextField disabled={!enabled}  value={data["dt_from"]} InputLabelProps={{ shrink: true}} type="date" className="fullw fullborder" onChange={handleChange} id="outlined-basic" name="dt_from" label="From" variant="outlined" required />
                    </FormControl>
                  </Grid>
                  <Grid item xs={5}  >
                    <FormControl autoComplete="off" className="fullw">
        
                      <TextField disabled={!enabled}  value={data["dt_to"]} InputLabelProps={{ shrink: true}} type="date" className="fullw fullborder" onChange={handleChange} id="outlined-basic" name="dt_to" label="To" variant="outlined" required />
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={5} className="p-12">
                  <FormControl variant="outlined" className="rightselect" >
                    <MultipleSelect
        isDisabled={!enabled}
        defaultValue={calculate("dt_to")}
                      className="multiSelect"
                      isMulti={true}
                      onChange={(e) => {
                        handleCheckbox("dt_from", e)
                        handleCheckbox("dt_to", e)
                      }}
                      options={options}
                    />
                  </FormControl>
                </Grid>
              </Grid>

              <Paper elevation={3} className="paper-container margintop30">
    <h5 className="m-30 color p-12">Skill gained</h5>
    {data.skill_gained&&data.skill_gained.map(item=><OldComponent isFreeze={enabled} old={item} del={deleteGained} edit={editGained} name="skill_gained" label="Skill gained" handleCheckbox={handleCheckbox} pub={pub} pri={pri} resume={resume}></OldComponent>)}
    
    </Paper>
                    </Grid>
                    </div>
        
        
      
                      {enabled&&<Button onClick={changeData} className="mb20 bgc ml-25 " variant="contained"   >edit</Button>}
                    
                   
                        
                
     
        </div>
      );
}
