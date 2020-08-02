import React, { useState } from 'react'
import MultipleSelect from 'react-select';
import TextField from '@material-ui/core/TextField';
import { Grid, Button, FormGroup, Paper ,} from "@material-ui/core"
import {Alert } from "@material-ui/lab"
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

export default function Univertsycomponent({ handleCheckbox, 
                       add, schools, deleteSchool,}) {
  const [universty, set_universty] = useState({})
  const [fields, set_fields] = useState([])
  const [honors, set_honors] = useState([])
  const [awards, set_awards] = useState([])
  const [courses, set_courses] = useState([])
  const [field, set_field] = useState("")
  const [errors, set_error] = useState("")
  const [honor, set_honor] = useState("")
  const [award, set_award] = useState("")
  const [course, set_course] = useState("")
  const [enabled, set_enabled] = useState(true)
  const [enabled_field, set_enabled_field] = useState(true)
  const [enabled_honor, set_enabled_honor] = useState(true)
  const [enabled_award, set_enabled_award] = useState(true)
  const [enabled_course, set_enabled_course] = useState(true)
  const handleChange = (e) => {
    set_universty({ ...universty, [e.target.name]: e.target.value })

  }
  const handleField = (e) => {
    set_field(e.target.value)
  }
  const handleHonor = (e) => {
    set_honor(e.target.value)
  }
  const handleAward = (e) => {
    set_award(e.target.value)
  }
  const handleCourse = (e) => {
    set_course(e.target.value)
  }
  const addSchool = (e) => {
    e.preventDefault();
let error=false

if(!universty.degree_status){
error=true
set_error("degree of status can not be empty")

}

if(!universty.u_to){
  error=true
  set_error("u_to can not be empty")
  
  }
  if(fields<1){
    error=true
    set_error("you have to enter at least 1 field of study")
    
    }

    if(!error){
      let universty_object={
        ...universty,
        uni_id:schools.length+1,
        field_of_study:fields,
        honors: honors,
        coursework: courses,
        award: awards,
      }
          add(universty_object)
          set_universty({})
          set_courses([])
          set_honors([])
          set_awards([])
          set_fields([])
          set_enabled(false)
             set_error("")
    }


  }
  const addField = (e) => {
    e.preventDefault();
set_enabled_field(false)
let field_array=fields
field_array.push(field)
    set_fields(field_array)

  }
  const addcourse = (e) => {
    e.preventDefault();
let course_array=courses
course_array.push(course)
    set_courses(course_array)
    set_enabled_course(false)

  }
  const addaward = (e) => {
    e.preventDefault();
set_enabled_award(false)
let award_array=awards
award_array.push(award)
    set_awards(award_array)

  }
  const addhonor = (e) => {
    e.preventDefault();
    let honor_array=honors
    honor_array.push(honor)
        set_honors(honor_array)
    set_enabled_honor(false)
  }


 const deleteCourse = () => {
    let course_array = courses.filter(item => item !== course)


   set_courses(course_array)

  }

const  deleteAward = () => {
    let award_array = awards.filter(item => item !== award)


 set_awards(award_array)

  }

 const deleteField = () => {

    let field_array = fields.filter(item => item !== field)

set_fields(field_array)

  }
 const deleteHonor = () => {
   
    let honor_array = honors.filter(item => item !== honor)

set_honors(honor_array)

  }

  return (
    <div elevation={3}   className="paper-container">
     
      <div>

        {

          schools.map(item => <Grid container className="universty" alignItems="center" justify="space-around">
            <Grid item>
              <h6> universty name : {item.university}</h6>
            </Grid>

            <Grid item>
              <h6>    college : {item.college}  </h6>
            </Grid>
            <Grid item>
              <Button onClick={() => deleteSchool(item)} variant="contained" color="secondary"> delete </Button>
            </Grid>
          </Grid>)
        }
      </div>

{enabled&&
  <div >

<Grid container direction={"row"} xs={12} className="mt-30">
  <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" >
    <FormControl noValidate autoComplete="off" className="fullw">

      <TextField className="fullw" onChange={handleChange} id="outlined-basic" name="university" label="School name" variant="outlined" required />
    </FormControl>
  </Grid>
  <Grid item xs={12} md={5} className="p-12">
    <FormControl variant="outlined" className="rightselect" required>
      <MultipleSelect

        className="multiSelect"
        isMulti={true}
        onChange={(e) => handleCheckbox("university", e)}
        options={options}
      />
    </FormControl>
  </Grid>
</Grid>
<Grid container direction={"row"} xs={12} className="mt-30">
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
<Grid container direction={"row"} xs={12} className="mt-30">
  <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" className="p-12" >
    <form noValidate autoComplete="off" className="fullw">
      <MultipleSelect

        className="multiSelect"
        placeholder="Degree Status"
        onChange={(e) => set_universty({ ...universty, degree_status: e.value })}
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
<Grid container direction={"row"} xs={12} className="mt-30">
  <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" >
    <FormControl autoComplete="off" className="fullw">

      <TextField className="fullw" onChange={handleChange} id="outlined-basic" name="degree" label="Degree" variant="outlined" required />
    </FormControl>
  </Grid>
  <Grid item xs={12} md={5} className="p-12">
    <FormControl variant="outlined" className="rightselect" >
      <MultipleSelect

        className="multiSelect"
        isMulti={true}
        onChange={(e) => handleCheckbox("degree", e)}
        options={options}
      />
    </FormControl>
  </Grid>
</Grid>

<Grid container direction={"row"} xs={12} className="mt-30">
  <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" justify="space-between">
    <Grid item xs={5}   >

      <FormControl autoComplete="off" className="fullw">

        <TextField InputLabelProps={{ shrink: true}} type="date" className="fullw fullborder" onChange={handleChange} id="outlined-basic" name="u_from" label="From" variant="outlined" required />
      </FormControl>
    </Grid>
    <Grid item xs={5}  >
      <FormControl autoComplete="off" className="fullw">

        <TextField InputLabelProps={{ shrink: true}} type="date" className="fullw fullborder" onChange={handleChange} id="outlined-basic" name="u_to" label="To" variant="outlined" required />
      </FormControl>
    </Grid>
  </Grid>
  <Grid item xs={12} md={5} className="p-12">
    <FormControl variant="outlined" className="rightselect" >
      <MultipleSelect

        className="multiSelect"
        isMulti={true}
        onChange={(e) => {
          handleCheckbox("universty_to", e)
          handleCheckbox("u_from", e)
        }}
        options={options}
      />
    </FormControl>
  </Grid>
</Grid>
<Paper elevation={3} className="paper-container">
<h5 className="m-30 color p-12">Study of field</h5>
  <Grid container>
    <div>

      {

        fields.map(item => <Grid container className="universty" alignItems="center" justify="space-around">
          <Grid item>
            <h6> {item}</h6>
          </Grid>

         
          <Grid item>
            <Button onClick={() => deleteField(item)} variant="contained" color="secondary"> delete </Button>
          </Grid>
        </Grid>)
      }
    </div>
  {enabled_field&&
    <Grid container direction={"row"} xs={12} className={`mt-30`}>
    <Grid container xs={12} md={7} className={`p-12 `} alignItems="center" alignContent="center" >
      <FormControl autoComplete="off" className="fullw">

        <TextField className="fullw" onChange={handleField} id="outlined-basic" name="field_of_study" label="field_of_study" variant="outlined" required />
      </FormControl>
    </Grid>
    <Grid item xs={12} md={5} className="p-12">
      <FormControl variant="outlined" className="rightselect" >
        <MultipleSelect

          className="multiSelect"
          isMulti={true}
          onChange={(e) => handleCheckbox("field_of_study", e)}
          options={options}
        />
      </FormControl>
    </Grid>

    
  </Grid>
  
  
  }



    {enabled_field?<Button onClick={addField} className="mb20 bgc ml-25 " variant="contained"   >add</Button>:fields.length<3&&<div onClick={()=>set_enabled_field(true)} className="add-tag">new study of field</div>}


  </Grid>
</Paper>

<Grid container direction={"row"} xs={12} className="mt-30 marginTop30">
  <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" justify="space-between">
    <Grid item xs={5}   >

      <FormControl autoComplete="off" className="fullw">

        <TextField className="fullw fullborder" onChange={handleChange} id="outlined-basic" name="major_gpa" label="major gpa" variant="outlined" required />
      </FormControl>
    </Grid>
    <Grid item xs={5}  >
      <FormControl autoComplete="off" className="fullw">

        <TextField className="fullw fullborder" onChange={handleChange} id="outlined-basic" name="major_outof" label="out of" variant="outlined" required />
      </FormControl>
    </Grid>
  </Grid>
  <Grid item xs={12} md={5} className="p-12">
    <FormControl variant="outlined" className="rightselect" >
      <MultipleSelect

        className="multiSelect"
        isMulti={true}
        onChange={(e) => {
          handleCheckbox("u_to", e)
          handleCheckbox("u_from", e)
        }}
        options={options}
      />
    </FormControl>
  </Grid>
</Grid>
<Grid container direction={"row"} xs={12} className="mt-30">
  <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" justify="space-between">
    <Grid item xs={5}   >

      <FormControl autoComplete="off" className="fullw">

        <TextField className="fullw fullborder" onChange={handleChange} id="outlined-basic" name="cumulative_gpa" label="cumulative Gpa" variant="outlined" required />
      </FormControl>
    </Grid>
    <Grid item xs={5}  >
      <FormControl autoComplete="off" className="fullw">

        <TextField className="fullw fullborder" onChange={handleChange} id="outlined-basic" name="cumulative_outof" label="Out of " variant="outlined" required />
      </FormControl>
    </Grid>
  </Grid>
  <Grid item xs={12} md={5} className="p-12">
    <FormControl variant="outlined" className="rightselect" >
      <MultipleSelect

        className="multiSelect"
        isMulti={true}
        onChange={(e) => {
          handleCheckbox("universty_to", e)
          handleCheckbox("u_from", e)
        }}
        options={options}
      />
    </FormControl>
  </Grid>
</Grid>
<Paper elevation={3} className="paper-container">
<h5 className="m-30 color p-12">Honors</h5>
  <Grid container>
    <div>

      {

        honors.map(item => <Grid container className="universty" alignItems="center" justify="space-around">
          <Grid item>
            <h6> {item}</h6>
          </Grid>

         
          <Grid item>
            <Button onClick={() => deleteHonor(item)} variant="contained" color="secondary"> delete </Button>
          </Grid>
        </Grid>)
      }
    </div>
    {enabled_honor&&
    <Grid container direction={"row"} xs={12} className={`mt-30`}>
    <Grid container xs={12} md={7} className={`p-12 `} alignItems="center" alignContent="center" >
      <FormControl autoComplete="off" className="fullw">

        <TextField className="fullw" onChange={handleHonor} id="outlined-basic" name="honor" label="honor" variant="outlined" required />
      </FormControl>
    </Grid>
    <Grid item xs={12} md={5} className="p-12">
      <FormControl variant="outlined" className="rightselect" >
        <MultipleSelect

          className="multiSelect"
          isMulti={true}
          onChange={(e) => handleCheckbox("honor", e)}
          options={options}
        />
      </FormControl>
    </Grid>

    
  </Grid>
    
    
    }



    {enabled_honor?<Button onClick={addhonor} className="mb20 bgc ml-25 " variant="contained"   >add</Button>:honors.length<5&&<div onClick={()=>set_enabled_honor(true)} className="add-tag">new honor</div>}


  </Grid>
</Paper>
<Paper elevation={3} className="paper-container">
<h5 className="m-30 color p-12">Courses</h5>
  <Grid container>
    <div>

      {

        courses.map(item => <Grid container className="universty" alignItems="center" justify="space-around">
          <Grid item>
            <h6> {item}</h6>
          </Grid>

         
          <Grid item>
            <Button onClick={() => deleteCourse(item)} variant="contained" color="secondary"> delete </Button>
          </Grid>
        </Grid>)
      }
    </div>
{enabled_course&&
    <Grid container direction={"row"} xs={12} className={`mt-30 `}>
    <Grid container xs={12} md={7} className={`p-12 `} alignItems="center" alignContent="center" >
      <FormControl autoComplete="off" className="fullw">

        <TextField className="fullw" onChange={handleCourse} id="outlined-basic" name="course" label="course" variant="outlined" required />
      </FormControl>
    </Grid>
    <Grid item xs={12} md={5} className="p-12">
      <FormControl variant="outlined" className="rightselect" >
        <MultipleSelect

          className="multiSelect"
          isMulti={true}
          onChange={(e) => handleCheckbox("course", e)}
          options={options}
        />
      </FormControl>
    </Grid>

    
  </Grid>



}


    {enabled_course?<Button onClick={addcourse} className="mb20 bgc ml-25 " variant="contained"   >add</Button>:course.length<50&&<div onClick={()=>set_enabled_course(true)} className="add-tag">new course</div>}


  </Grid>
</Paper>
<Paper elevation={3} className="paper-container">
<h5 className="m-30 color p-12">Awards</h5>
  <Grid container>
    <div>

      {

        awards.map(item => <Grid container className="universty" alignItems="center" justify="space-around">
          <Grid item>
            <h6> {item}</h6>
          </Grid>

         
          <Grid item>
            <Button onClick={() => deleteAward(item)} variant="contained" color="secondary"> delete </Button>
          </Grid>
        </Grid>)
      }
    </div>
    {enabled_award&&
    
    <Grid container direction={"row"} xs={12} className={`mt-30 `}>
    <Grid container xs={12} md={7} className={`p-12 `} alignItems="center" alignContent="center" >
      <FormControl autoComplete="off" className="fullw">

        <TextField className="fullw" onChange={handleAward} id="outlined-basic" name="award" label="award" variant="outlined" required />
      </FormControl>
    </Grid>
    <Grid item xs={12} md={5} className="p-12">
      <FormControl variant="outlined" className="rightselect" >
        <MultipleSelect

          className="multiSelect"
          isMulti={true}
          onChange={(e) => handleCheckbox("award", e)}
          options={options}
        />
      </FormControl>
    </Grid>

    
  </Grid>
    }
  



    {enabled_award?<Button onClick={addaward} className="mb20 bgc ml-25 " variant="contained"   >add</Button>:<div onClick={()=>set_enabled_award(true)} className="add-tag">new award</div>}


  </Grid>
</Paper>
</div>



}
{errors&&<Alert className="mb20" severity="error">{errors}</Alert>}
      {enabled? <Button onClick={addSchool} className="fullw bgc" variant="contained"  >add Universty</Button>:schools.length<5&&<div onClick={()=>set_enabled(true)} className="add-tag">new universty</div>}
     
   
    </div>
  )
}
