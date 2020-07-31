import React, {useState} from 'react'
import MultipleSelect from 'react-select';
import TextField from '@material-ui/core/TextField';
import { Grid ,Button,FormGroup} from "@material-ui/core"
import FormControl from '@material-ui/core/FormControl';
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
 
export default function Univertsycomponent({handleCheckbox,add,schools,deleteSchool}) {
   const [universty,set_universty]=useState({})
const [enabled,set_enabled]=useState(true)

   const handleChange=(e)=>{
       set_universty({...universty,[e.target.name]:e.target.value})

   }
  
  
   const addSchool=(e)=>{
    e.preventDefault();
add(universty)
set_enabled(false)
   }
   console.log(schools)
   
    return (
        <div>
            <div>

                {
                   
                    schools.map(item=><Grid container className="universty" alignItems="center" justify="space-around">
                        <Grid item>
                        <h6> universty name : {item.universty_name}</h6>
                        </Grid>
                        
                        <Grid item>
                        <h6>    college : {item.college}  </h6>
                        </Grid>
                        <Grid item>
                        <Button  onClick={()=>deleteSchool(item)} variant="contained" color="secondary"> delete </Button> 
                        </Grid>
                        </Grid>)
                }
            </div>

          
            <FormGroup variant="outlined" className="rightselect" required >
                  <Grid container direction={"row"} xs={12} spacing={3} className="mt-30">
                    <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" >
                      <FormControl noValidate autoComplete="off" className="fullw">

                        <TextField className="fullw" onChange={handleChange} id="outlined-basic" name="universty_name" label="School name" variant="outlined" required />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={5} className="p-12">
                      <FormControl variant="outlined" className="rightselect" required>
                        <MultipleSelect

                          className="multiSelect"
                          isMulti={true}
                          onChange={(e) => handleCheckbox("universty_name", e)}
                          options={options}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Grid container direction={"row"} xs={12} spacing={3} className="mt-30">
                    <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" >
                      <FormControl autoComplete="off" className="fullw">

                        <TextField className="fullw" onChange={handleChange} id="outlined-basic" name="college" label="College" variant="outlined" required />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={5} className="p-12">
                      <FormControl variant="outlined" className="rightselect" >
                        <MultipleSelect

                          className="multiSelect"
                          isMulti={true}
                          onChange={(e) => handleCheckbox("college", e)}
                          options={options}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Grid container direction={"row"} xs={12} spacing={3} className="mt-30">
                    <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" className="p-12" >
                      <form noValidate autoComplete="off" className="fullw">
                      <MultipleSelect

className="multiSelect"
placeholder="Degree Status"
onChange={(e) => set_universty({...universty,degree_status:e})}
options={options2}
/>
                      </form>
                    </Grid>
                    <Grid item xs={12} md={5} className="p-12" className="p-12">
                      <FormControl variant="outlined" className="rightselect" >
                        <MultipleSelect

                          className="multiSelect"
                          isMulti={true}
                          onChange={(e) => handleCheckbox("degree_status", e)}
                          options={options}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
              

                  </FormGroup>
                  <Button  onClick={addSchool}   className="mb20" variant="contained" color="secondary" >add</Button>
            </div>
    )
}
