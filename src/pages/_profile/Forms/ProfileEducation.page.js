import React from "react";
import { profileEducationData} from "../../_services/education.service";
import {getEducation} from "../../_services/getDatas"
import { Grid } from "@material-ui/core"
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Multi from "../../_components/MultipleSelect"
import Select from '@material-ui/core/Select';
import { CircularProgress } from "@material-ui/core"
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import MultipleSelect from 'react-select';
import TextField from '@material-ui/core/TextField';
import Univertsy from "./Univertsy.component"
import Axios from "axios";

const options = [
  { value: 'public', label: 'Public' },
  { value: 'private', label: 'Private' },
  { value: 'resume', label: 'Resume' },
];
const phoneTypes = [
  { value: 'mobile', label: 'Mobile' },
  { value: 'work', label: 'Work' },
  { value: 'home', label: 'Home' }
]

class ProfilePersonalPage extends React.Component {
  constructor(props) {
    super(props);

    









    this.state = {
      loading: false,
      high_school_enabled: false,
     
   
      university: [],
      
     
      public: [],
      private: [],
      resume: [],
      error: "",
    };
    this.handleChange = this.handleChange.bind(this);

    this.handleChangePrivate = this.handleChangePrivate.bind(this);
    this.handleChangeResume = this.handleChangeResume.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true })
    getEducation().then(r => {
let educationData=r.data.data.Education
      
      this.setState({...this.state, loading: false,...educationData.high_school,university:educationData.university,high_school_enabled:educationData.high_school?true:false })

    }


    ).catch(e => console.log(e))


  }

  handleChange(e) {
    const { name, value } = e.target;
    console.log(name)
    this.setState({ [name]: value });
  }

  handleEdit = (obj) => {
    let uni_Array = this.state.university
    console.log(obj)
    let index = uni_Array.findIndex(item => item.uni_id === obj.uni_id)
    uni_Array[index] = obj


    console.log(uni_Array)
    this.setState({ university: uni_Array })


  }
  handleCheckbox = (name, e) => {
    let array = e ? e : []

    let isPublic = array.find(item => item.value === "public")
    let isPrivate = array.find(item => item.value === "private")
    let isResume = array.find(item => item.value === "resume")


    if (isPublic) {

      let publicVar = this.state.public;
      // code block
      let existed_item = this.state.public.find(
        (item) => item === name
      );


      if (!existed_item) {
        publicVar.push(name)
        this.setState({ public: publicVar });
      }


    } else {

      let filtered_array = this.state.public.filter(
        (item) => item !== name
      );

      this.setState({ public: filtered_array })

    }

    if (isPrivate) {

      let privateVar = this.state.private;
      // code block
      let existed_item2 = this.state.private.find(
        (item) => item === name
      );


      if (!existed_item2) {
        privateVar.push(name)
        this.setState({ private: privateVar });
      }


    } else {

      let filtered_array2 = this.state.private.filter(
        (item) => item !== name
      );

      this.setState({ private: filtered_array2 })

    }

    if (isResume) {
      let resumeVar = this.state.resume;
      // code block
      let existed_item3 = this.state.resume.find(
        (item) => item === name
      );


      if (!existed_item3) {
        resumeVar.push(name)
        this.setState({ resume: resumeVar });
      }


    } else {

      let filtered_array3 = this.state.resume.filter(
        (item) => item !== name
      );

      this.setState({ resume: filtered_array3 })

    }

  }

  handleChangePrivate(e) {
    const { name, value } = e.target;

    // this.setState({ [name]: value });
  }

  handleChangeResume(e) {
    const { name, value } = e.target;

    // this.setState({ [name]: value });
  }

  addSchoolToArray = (school) => {

    let school_array = this.state.university

    school_array.push(school)
    this.setState({ university: school_array })

  }



  delete = (school) => {
    let school_array = this.state.university.filter(item => item.uni_id !== school)


    this.setState({ university: school_array })

  }

  // USING METHOD TO SUMBIT FORM DETAILS TO SERVER
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });
console.log(this.state)
    profileEducationData(this.state).then(
      (response) => {
        console.log(response)
        if (response.success) {
          this.props.profileThis.setState({ activeMenu: "Experience" });
        } else {
          this.setState({ loading: false });
        }
      },
      (error) => this.setState({ error, loading: false })
    );
  }

  render() {
    console.log(this.state)
    const { loading, error } = this.state;
    if(!loading)
    return (
      <div className="pro-right-in">
        <form method="post" onSubmit={this.handleSubmit}>
          <Grid container direction="column" justify="center">
            <h5 className="m-30">High School </h5>

            {
              !this.state.high_school_enabled ? (<h3 className="add-tag" onClick={() => this.setState({ high_school_enabled: true })}>Add High School</h3>) : (
                [

                  <Grid container direction={"row"} xs={12} className="mt-30">
                    <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" >
                      <FormControl autoComplete="off" className="fullw">

                        <TextField defaultValue={this.state["school_name"]} className="fullw" onChange={this.handleChange} id="outlined-basic" name="school_name" label="School name" variant="outlined" required />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={5} className="p-12">
                      <FormControl variant="outlined" className="rightselect" >
                        <MultipleSelect

                          className="multiSelect"
                          isMulti={true}
                          onChange={(e) => this.handleCheckbox("school_name", e)}
                          options={options}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>,
                  <Grid container direction={"row"} xs={12} className="mt-30">
                    <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" >
                      <form noValidate autoComplete="off" className="fullw">

                        <TextField defaultValue={this.state["city"]} className="fullw" onChange={this.handleChange} id="outlined-basic" name="city" label="City" variant="outlined" required />
                      </form>
                    </Grid>
                    <Grid item xs={12} md={5} className="p-12">
                      <FormControl variant="outlined" className="rightselect" >
                        <MultipleSelect

                          className="multiSelect"
                          isMulti={true}
                          onChange={(e) => this.handleCheckbox("city", e)}
                          options={options}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>,
                  <Grid container direction={"row"} xs={12} className="mt-30">
                    <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center"  >
                      <form noValidate autoComplete="off" className="fullw">

                        <TextField defaultValue={this.state["state"]} className="fullw" onChange={this.handleChange} id="outlined-basic" name="state" label="State" variant="outlined" required />
                      </form>
                    </Grid>
                    <Grid item xs={12} md={5} className="p-12">
                      <FormControl variant="outlined" className="rightselect" >
                        <MultipleSelect

                          className="multiSelect"
                          isMulti={true}
                          onChange={(e) => this.handleCheckbox("state", e)}
                          options={options}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>,
                  <Grid container direction={"row"} xs={12} className="mt-30">
                    <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" >
                      <form noValidate autoComplete="off" className="fullw">

                        <TextField defaultValue={this.state["country"]} className="fullw" onChange={this.handleChange} id="outlined-basic" name="country" label="Country" variant="outlined" required />
                      </form>
                    </Grid>
                    <Grid item xs={12} md={5} className="p-12 ">
                      <FormControl variant="outlined" className="rightselect" >
                        <MultipleSelect

                          className="multiSelect"
                          isMulti={true}
                          onChange={(e) => this.handleCheckbox("country", e)}
                          options={options}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>,
                  <Grid container direction={"row"} xs={12} className="mt-30">
                    <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" justify="space-between">
                      <Grid item xs={5}   >

                        <FormControl autoComplete="off" className="fullw">

                          <TextField defaultValue={this.state["dt_from"]} InputLabelProps={{ shrink: true }} type="date" className="fullw fullborder" onChange={this.handleChange} id="outlined-basic" name="dt_from" label="From" variant="outlined" required />
                        </FormControl>
                      </Grid>
                      <Grid item xs={5}  >
                        <FormControl autoComplete="off" className="fullw">

                          <TextField defaultValue={this.state["dt_to"]} InputLabelProps={{ shrink: true }} type="date" className="fullw fullborder" onChange={this.handleChange} id="outlined-basic" name="dt_to" label="To" variant="outlined" required />
                        </FormControl>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} md={5} className="p-12">
                      <FormControl variant="outlined" className="rightselect" >
                        <MultipleSelect

                          className="multiSelect"
                          isMulti={true}
                          onChange={(e) => {
                            this.handleCheckbox("dt_from", e)
                            this.handleCheckbox("dt_to", e)
                          }}
                          options={options}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>

                ]
              )


            }
            <h5 className="m-30">University</h5>
            <Univertsy
              pub={this.state.public}
              pri={this.state.private}
              resume={this.state.resume}
              handleCheckbox={this.handleCheckbox} deleteSchool={this.delete} schools={this.state.university} add={this.addSchoolToArray} changeIt={this.handleEdit}></Univertsy>
          </Grid>
          <div className="form-input-flex d-flex center">
            <div className="left-input-se">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "35%" }}
                  aria-valuenow="25"
                  aria-valuemin="3"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="form-input-flex d-flex center">
            <div className="left-input-se d-flex mt-4">
              {/* <button className="btn btn-purpal">Back</button> */}
              {this.state.university.length > 0 &&
                <button className="btn btn-green ml-auto" disabled={loading}>
                  {loading ? "Next....." : "Next"}
                </button>

              }

            </div>
          </div>


        </form>
      </div>
    );
    else return(<CircularProgress  className="progressloading" />)
  }
}

export default ProfilePersonalPage;
