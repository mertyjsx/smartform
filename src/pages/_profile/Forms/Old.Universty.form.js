import React, { useState, useEffect } from 'react'
import OldComponent from "./Old.component.inner.js/oldComponent"
import MultipleSelect from 'react-select';
import TextField from '@material-ui/core/TextField';
import Delete from "../../../assets/icons/delete"
import { Grid, Button, FormGroup, Paper, } from "@material-ui/core"
import { Alert } from "@material-ui/lab"
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

export default function OldUniverstyform({ old, changeIt, handleCheckbox, pub, pri, resume, deleteSchool, enabled_props }) {


  const [universty, set_universty] = useState(old)





  const submit = () => {

    changeIt(universty)

  }


  const [fields, set_fields] = useState([])
  const [honors, set_honors] = useState([])
  const [awards, set_awards] = useState([])
  const [courses, set_courses] = useState([])
  const [field, set_field] = useState("")
  const [errors, set_error] = useState("")
  const [honor, set_honor] = useState("")
  const [award, set_award] = useState("")
  const [course, set_course] = useState("")
  const [enabled, set_enabled] = useState(false)
  const [enabled_field, set_enabled_field] = useState(true)
  const [enabled_honor, set_enabled_honor] = useState(true)
  const [enabled_award, set_enabled_award] = useState(true)
  const [enabled_course, set_enabled_course] = useState(true)


  useEffect(() => {
    console.log(universty)
    console.log(old)
    set_universty(old)
    set_fields(old.field_of_study)
    set_honors(old.honors)
    set_courses(old.coursework)
    set_awards(old.award)

    set_enabled(enabled_props)

  }, [old])




  const deleteCourse = (course) => {
    let course_array = courses.filter(item => item !== course)


    set_courses(course_array)

  }

  const deleteAward = (award) => {
    let award_array = awards.filter(item => item !== award)


    set_awards(award_array)

  }

  const deleteField = (field) => {

    let field_array = fields.filter(item => item !== field)

    set_fields(field_array)

  }
  const deleteHonor = (honor) => {

    let honor_array = honors.filter(item => item !== honor)

    set_honors(honor_array)

  }


  const handleChange = (e) => {
    set_universty({ ...universty, [e.target.name]: e.target.value })
    console.log(universty)
  }

  const changeSchool = (e) => {
    e.preventDefault();
    let error = false

    if (!universty.degree_status) {
      error = true
      set_error("degree of status can not be empty")

    }

    if (!universty.u_to) {
      error = true
      set_error("u_to can not be empty")

    }
    if (fields < 1) {
      error = true
      set_error("you have to enter at least 1 field of study")

    }

    if (!error) {
      let universty_object = {
        ...universty,
        uni_id: old.uni_id,
        field_of_study: fields,
        honors: honors,
        coursework: courses,
        award: awards,
      }


      set_enabled(false)
      set_error("")


      changeIt(universty_object)
    }


  }


  const editField = (obj) => {
    let Array = fields

    let index = Array.findIndex(item => item === obj)
    Array[index] = obj

    set_fields(Array)


  }


  const editCourse = (obj) => {
    let Array = courses

    let index = Array.findIndex(item => item === obj)
    Array[index] = obj

    set_courses(Array)


  }
  const editHonor = (obj) => {
    let Array = honors

    let index = Array.findIndex(item => item === obj)
    Array[index] = obj

    set_honors(Array)


  }
  const editAward = (obj) => {
    let Array = awards

    let index = Array.findIndex(item => item === obj)
    Array[index] = obj

    set_awards(Array)


  }


  console.log(resume)

  const calculate = (name) => {
    let Arr = []
    console.log(name)

    let isResume = resume && resume.includes(name)
    let isPublic = pub && pub.includes(name)
    let isPrivate = pri && pri.includes(name)


    if (isResume) {
      Arr.push({ value: 'resume', label: 'Resume' })
    }
    if (isPublic) {
      Arr.push({ value: 'public', label: 'Public' })
    }
    if (isPrivate) {
      Arr.push({ value: 'private', label: 'Private' })
    }
    console.log(Arr)
    return Arr
  }












  console.log(enabled)
  return (

    <div className="oldContainer">
      <div className="edit-buttons">

        <div className="add-tag " onClick={() => set_enabled(true)}>edit</div>
        <Delete width="25px" height="25px" className="delete" onClick={() => deleteSchool(old.uni_id)}></Delete>
      </div>
      <Grid container direction={"row"} xs={12} className="mt-30">
        <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" >
          <FormControl noValidate autoComplete="off" className="fullw">

            <TextField disabled={!enabled} value={universty["university"]} className="fullw" onChange={handleChange} id="outlined-basic" name="university" label="School name" variant="outlined" required />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={5} className="p-12">
          <FormControl variant="outlined" className="rightselect" required>
            <MultipleSelect
              isDisabled={!enabled}
              defaultValue={calculate("university")}
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

            <TextField disabled={!enabled} disabled={!enabled} className="fullw" value={universty["college"]} onChange={handleChange} id="outlined-basic" name="college" label="College" variant="outlined" required />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={5} className="p-12">
          <FormControl variant="outlined" className="rightselect" >
            <MultipleSelect
              isDisabled={true}
              defaultValue={calculate("college")}
              className="multiSelect"
              isDisabled={!enabled}
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
              isDisabled={!enabled}
              placeholder="Degree Status"
              onChange={(e) => set_universty({ ...universty, degree_status: e.value })}
              options={options2}
            />
          </form>
        </Grid>
        <Grid item xs={12} md={5} className="p-12" className="p-12">
          <FormControl variant="outlined" className="rightselect" >
            <MultipleSelect
              defaultValue={calculate("degree_status")}
              className="multiSelect"
              isDisabled={!enabled}
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

            <TextField disabled={!enabled} value={universty["degree"]} className="fullw" onChange={handleChange} id="outlined-basic" name="degree" label="Degree" variant="outlined" required />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={5} className="p-12">
          <FormControl variant="outlined" className="rightselect" >
            <MultipleSelect
              defaultValue={calculate("degree")}
              className="multiSelect"
              isDisabled={!enabled}
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

              <TextField disabled={!enabled} value={universty["u_from"]} InputLabelProps={{ shrink: true }} type="date" className="fullw fullborder" onChange={handleChange} id="outlined-basic" name="u_from" label="From" variant="outlined" required />
            </FormControl>
          </Grid>
          <Grid item xs={5}  >
            <FormControl autoComplete="off" className="fullw">

              <TextField disabled={!enabled} value={universty["u_to"]} InputLabelProps={{ shrink: true }} type="date" className="fullw fullborder" onChange={handleChange} id="outlined-basic" name="u_to" label="To" variant="outlined" required />
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={12} md={5} className="p-12">
          <FormControl variant="outlined" className="rightselect" >
            <MultipleSelect
              defaultValue={calculate("u_to")}
              className="multiSelect"
              isDisabled={!enabled}
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
      <Paper elevation={3} className="paper-container">
        <h5 className="m-30 color p-12">Study of field</h5>
        {fields && fields.map(item => <OldComponent isFreeze={enabled} old={item} del={deleteField} edit={editField} name="field_of_study" label="field of study" handleCheckbox={handleCheckbox} pub={pub} pri={pri} resume={resume}></OldComponent>)}
      </Paper>

      <Grid container direction={"row"} xs={12} className="mt-30 marginTop30">
        <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" justify="space-between">
          <Grid item xs={5}   >

            <FormControl autoComplete="off" className="fullw">

              <TextField disabled={!enabled} value={universty["major_gpa"]} className="fullw fullborder" onChange={handleChange} id="outlined-basic" name="major_gpa" label="major gpa" variant="outlined" required />
            </FormControl>
          </Grid>
          <Grid item xs={5}  >
            <FormControl autoComplete="off" className="fullw">

              <TextField disabled={!enabled} value={universty["major_outof"]} className="fullw fullborder" onChange={handleChange} id="outlined-basic" name="major_outof" label="out of" variant="outlined" required />
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={12} md={5} className="p-12">
          <FormControl variant="outlined" className="rightselect" >
            <MultipleSelect
              defaultValue={calculate("u_to")}
              className="multiSelect"
              isDisabled={!enabled}
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

              <TextField disabled={!enabled} value={universty["cumulative_gpa"]} className="fullw fullborder" onChange={handleChange} id="outlined-basic" name="cumulative_gpa" label="cumulative Gpa" variant="outlined" required />
            </FormControl>
          </Grid>
          <Grid item xs={5}  >
            <FormControl autoComplete="off" className="fullw">

              <TextField disabled={!enabled} value={universty["cumulative_outof"]} className="fullw fullborder" onChange={handleChange} id="outlined-basic" name="cumulative_outof" label="Out of " variant="outlined" required />
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={12} md={5} className="p-12">
          <FormControl variant="outlined" className="rightselect" >
            <MultipleSelect
              defaultValue={calculate("cumulative_outof")}
              className="multiSelect"
              isDisabled={!enabled}
              isMulti={true}
              onChange={(e) => {
                handleCheckbox("cumulative_outof", e)
                handleCheckbox("cumulative_gpa", e)
              }}
              options={options}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Paper elevation={3} className="paper-container">
        <h5 className="m-30 color p-12">Honors</h5>

        {honors && honors.map(item => <OldComponent isFreeze={enabled} old={item} del={deleteHonor} edit={editHonor} label="honor" name="honor" handleCheckbox={handleCheckbox} pub={pub} pri={pri} resume={resume}></OldComponent>)}

      </Paper>
      <Paper elevation={3} className="paper-container">
        <h5 className="m-30 color p-12">Courses</h5>
        {courses && courses.map(item => <OldComponent isFreeze={enabled} old={item} del={deleteCourse} label="course" edit={editCourse} name="course" handleCheckbox={handleCheckbox} pub={pub} pri={pri} resume={resume}></OldComponent>)}
      </Paper>
      <Paper elevation={3} className="paper-container">
        <h5 className="m-30 color p-12">Awards</h5>
        {awards && awards.map(item => <OldComponent isFreeze={enabled} old={item} del={deleteAward} label="award" edit={editAward} name="award" handleCheckbox={handleCheckbox} pub={pub} pri={pri} resume={resume}></OldComponent>)}
      </Paper>
      {enabled && <Button onClick={changeSchool} className="mb20 bgc ml-25 " variant="contained"   >Edit</Button>}
    </div>
  )
}
