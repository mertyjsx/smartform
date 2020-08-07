import React,{useState,useEffect} from 'react'

import MultipleSelect from 'react-select';
import TextField from '@material-ui/core/TextField';
import Delete  from "../../../../assets/icons/delete"
import { Grid, Button, FormGroup, Paper ,} from "@material-ui/core"
import {Alert } from "@material-ui/lab"
import FormControl from '@material-ui/core/FormControl';


  const options = [
    { value: 'public', label: 'Public' },
    { value: 'private', label: 'Private' },
    { value: 'resume', label: 'Resume' },
  ];
  
export default function OldComponent({old,edit,handleCheckbox,del,name,pub,pri,resume,label,isFreeze}) {

    const [enabled, set_enabled] = useState(false)
    const [data,set_data]=useState(old)
    const calculate=(name)=>{
      let Arr=[]
  console.log(resume)
  console.log(pri)
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
console.log(Arr)
      return Arr
  
  
  }
  

    const submit=()=>{

        edit(data)
        set_enabled(false)
        }
        
   
useEffect(() => {
 set_data(old)
   
    }, [old])
    




const handleChange = (e) => {
set_data({...data,value:e.target.value})
}


let val=calculate(name)

console.log(isFreeze)
    return (
       
<div className="oldContainer">
  {isFreeze&&
    <div className="edit-buttons">

    <div className="add-tag " onClick={()=>set_enabled(true)}>edit</div>
    <Delete width="25px" height="25px" className="delete" onClick={()=>del(old)}></Delete>
    </div>
    
  
  }
  


  <Grid container>
 
 
    <Grid container direction={"row"} xs={12} className={`mt-30`}>
    <Grid container xs={12} md={7} className={`p-12 `} alignItems="center" alignContent="center" >
      <FormControl autoComplete="off" className="fullw">

        <TextField disabled={!enabled} defaultValue={old} className="fullw" onChange={handleChange} id="outlined-basic" name={name} label={label} variant="outlined" required />
      </FormControl>
    </Grid>
    <Grid item xs={12} md={5} className="p-12">
      <FormControl variant="outlined" className="rightselect" >
        <MultipleSelect
        defaultValue={val}

          className="multiSelect"
          isDisabled={!enabled}
          isMulti={true}
          onChange={(e) => handleCheckbox(name, e)}
          options={options}
        />
      </FormControl>
    </Grid>

    
  </Grid>
  
  
  



    {enabled&&<Button onClick={submit} className="mb20 bgc ml-25 " variant="contained"   >edit</Button>}


  </Grid>


</div>
    )
}
