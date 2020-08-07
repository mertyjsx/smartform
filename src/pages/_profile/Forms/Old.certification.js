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
                       editIt,old, deleteIt,pub,resume,pri,enabled_props}) {
  const [data, set_data] = useState({})
const [enabled, set_enabled] = useState(true)
 

  const handleChange = (e) => {
    set_data({ ...data, [e.target.name]: e.target.value })

  }
 
  const changeData = (e) => {
    e.preventDefault();
    
          
              editIt(data)
              set_enabled(false)
             

        

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
 set_enabled(enabled_props)
  
      
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
                   
             <Grid container direction={"row"} xs={12} spacing={3} className="mt-30">
              <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" >
                <form  autoComplete="off" className="fullw">
  
                  <TextField disabled={!enabled}  value={data["certificate_name"]} className="fullw" onChange={handleChange} id="outlined-basic" name="certificate_name" label="Certificate name" variant="outlined" required />
                </form>
              </Grid>
              <Grid item xs={12} md={5} className="p-12">
                <FormControl variant="outlined" className="rightselect" >
                <MultipleSelect
isDisabled={!enabled}
defaultValue={calculate("certificate_name")}
                  className="multiSelect"
                  isMulti={true}
                  onChange={(e) => handleCheckbox("certificate_name", e)}
                  options={options}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid container direction={"row"} xs={12} spacing={3} className="mt-30">
            <Grid container xs={12} md={7} className="p-12"  alignItems="center" alignContent="center" >
              <form  autoComplete="off" className="fullw">

                <TextField disabled={!enabled}  value={data["date_issue"]} className="fullw" onChange={handleChange} id="outlined-basic" name="date_issue" label="Date issue " variant="outlined" required />
              </form>
            </Grid>
            <Grid item xs={12} md={5} className="p-12">
              <FormControl variant="outlined" className="rightselect" >
                <MultipleSelect
   isDisabled={!enabled}
defaultValue={calculate("date_issue")}
                  className="multiSelect"
                  isMulti={true}
                  onChange={(e) => handleCheckbox("date_issue", e)}
                  options={options}
                />
                </FormControl>
              </Grid>
            </Grid>
   
                    </Grid>
                    </div>
        
        
      
                      {enabled&&<Button onClick={changeData} className="mb20 bgc ml-25 " variant="contained"   >edit</Button>}
                    
                   
                        
                
     
        </div>
      );
}
