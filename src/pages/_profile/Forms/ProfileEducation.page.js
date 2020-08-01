import React from "react";
import { profileEducationData } from "../../_services/education.service";
import { Grid } from "@material-ui/core"
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Multi from "../../_components/MultipleSelect"
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import MultipleSelect from 'react-select';
import TextField from '@material-ui/core/TextField';
import Univertsy from "./Univertsy.component"

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
      high_school_name: "",
      high_school_from: "",
      high_school_to: "",
      high_school_address: "",
      high_school_state: "",
      high_school_city: "",
      state: "",
      high_school_country: "",
      universty: [],
      universty_name: "",
      college: "",
      degree_status: "",
      degree: "",
      universty_from: "",
      universty_to: "",
      field_of_study: [],
      honors: [],
      course_work: [],
      awards: [],
      gpa: 0,
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

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
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

    let school_array = this.state.universty

    school_array.push(school)
    this.setState({ universty: school_array })

  }



  delete = (school) => {
    let school_array = this.state.universty.filter(item => item !== school)


    this.setState({ universty: school_array })

  }
  
  // USING METHOD TO SUMBIT FORM DETAILS TO SERVER
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });

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
 
    const { loading, error } = this.state;
    return (
      <div className="pro-right-in">
        <form method="post" onSubmit={this.handleSubmit}>
          <Grid container direction="column" justify="center">
            <h5 className="m-30">High School </h5>

            {
              !this.state.high_school_enabled ? (<h3 className="add-tag" onClick={() => this.setState({ high_school_enabled: true })}>Add High School</h3>) : (
                [

                  <Grid container direction={"row"} xs={12}  className="mt-30">
                    <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" >
                      <FormControl  autoComplete="off" className="fullw">

                        <TextField className="fullw" onChange={this.handleChange} id="outlined-basic" name="high_school_name" label="School name" variant="outlined" required />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={5} className="p-12">
                      <FormControl variant="outlined" className="rightselect" >
                        <MultipleSelect

                          className="multiSelect"
                          isMulti={true}
                          onChange={(e) => this.handleCheckbox("high_school_name", e)}
                          options={options}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>,
                  <Grid container direction={"row"} xs={12}  className="mt-30">
                    <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" >
                      <form noValidate autoComplete="off" className="fullw">

                        <TextField className="fullw" onChange={this.handleChange} id="outlined-basic" name="high_school_city" label="City" variant="outlined" required />
                      </form>
                    </Grid>
                    <Grid item xs={12} md={5} className="p-12">
                      <FormControl variant="outlined" className="rightselect" >
                        <MultipleSelect

                          className="multiSelect"
                          isMulti={true}
                          onChange={(e) => this.handleCheckbox("high_school_city", e)}
                          options={options}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>,
                  <Grid container direction={"row"} xs={12}  className="mt-30">
                    <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center"  >
                      <form noValidate autoComplete="off" className="fullw">

                        <TextField className="fullw" onChange={this.handleChange} id="outlined-basic" name="high_school_state" label="State" variant="outlined" required />
                      </form>
                    </Grid>
                    <Grid item xs={12} md={5} className="p-12">
                      <FormControl variant="outlined" className="rightselect" >
                        <MultipleSelect

                          className="multiSelect"
                          isMulti={true}
                          onChange={(e) => this.handleCheckbox("high_school_state", e)}
                          options={options}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>,
                  <Grid container direction={"row"} xs={12}  className="mt-30">
                    <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" >
                      <form noValidate autoComplete="off" className="fullw">

                        <TextField className="fullw" onChange={this.handleChange} id="outlined-basic" name="high_school_country" label="Country" variant="outlined" required />
                      </form>
                    </Grid>
                    <Grid item xs={12} md={5} className="p-12 ">
                      <FormControl variant="outlined" className="rightselect" >
                        <MultipleSelect

                          className="multiSelect"
                          isMulti={true}
                          onChange={(e) => this.handleCheckbox("high_school_country", e)}
                          options={options}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>,
                  <Grid container direction={"row"} xs={12} className="mt-30">
                  <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" justify="space-between">
                    <Grid item xs={5}   >
          
                      <FormControl autoComplete="off" className="fullw">
          
                        <TextField className="fullw fullborder" onChange={this.handleChange} id="outlined-basic" name="high_school_from" label="From" variant="outlined" required />
                      </FormControl>
                    </Grid>
                    <Grid item xs={5}  >
                      <FormControl autoComplete="off" className="fullw">
          
                        <TextField className="fullw fullborder" onChange={this.handleChange} id="outlined-basic" name="high_school_to" label="To" variant="outlined" required />
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={5} className="p-12">
                    <FormControl variant="outlined" className="rightselect" >
                      <MultipleSelect
          
                        className="multiSelect"
                        isMulti={true}
                        onChange={(e) => {
                          this.handleCheckbox("high_school_from", e)
                          this.handleCheckbox("high_school_to", e)
                        }}
                        options={options}
                      />
                    </FormControl>
                  </Grid>
                </Grid>

                ]
              )


            }
            <h5 className="m-30">Universty</h5>
            <Univertsy 
          
            handleCheckbox={this.handleCheckbox} deleteSchool={this.delete} schools={this.state.universty} add={this.addSchoolToArray}></Univertsy>
          </Grid>
          <div className="form-input-flex d-flex center">
            <div className="left-input-se">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
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
              {this.state.universty.length>0&&
               <button  className="btn btn-green ml-auto" disabled={loading}>
               {loading ? "Next....." : "Next"}
             </button>
              
              }
             
            </div>
          </div>


        </form>
      </div>
    );
  }
}

export default ProfilePersonalPage;
