import React from "react";
import { personalProfileData } from "../../_services/profile.service";
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
import Autocomplete from '@material-ui/lab/Autocomplete';
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
      first_name: "",
      middle_name: "",
      last_name: "",
      preferred_name:"",
      email: "",
      address: "",
      zip_code: "",
      city: "",
      state: "",
      country: "",
      phone_number: "",
      phone_type: "mobile",
      public: [],
      private: [],
      resume: [],
      error: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangePublic = this.handleChangePublic.bind(this);
    this.handleChangePrivate = this.handleChangePrivate.bind(this);
    this.handleChangeResume = this.handleChangeResume.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }








  handleChangePublic(name, which) {

  }


  handleCheckbox = (name, e) => {
    let array = e ? e : []
    console.log(array)
    let isPublic = array.find(item => item.value === "public")
    let isPrivate = array.find(item => item.value === "private")
    let isResume = array.find(item => item.value === "resume")
    console.log(isPublic)

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











    array.map((which) => {





    })


    // this.setState({ [name]: value });
  }

  handleChangePrivate(e) {
    const { name, value } = e.target;
    console.log("Private -- ", name, " == ", value);
    // this.setState({ [name]: value });
  }

  handleChangeResume(e) {
    const { name, value } = e.target;
    console.log("Resume -- ", name, " == ", value);
    // this.setState({ [name]: value });
  }

  // USING METHOD TO SUMBIT FORM DETAILS TO SERVER
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });

    personalProfileData(this.state).then(
      (response) => {
        if (response.success) {
          this.props.profileThis.setState({ activeMenu: "Education" });
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
    return (
      <div className="pro-right-in">
        <form method="post" onSubmit={this.handleSubmit}>
          
          
          
          
          
          <Grid container direction="column" className="m-20">
            <h5 className="m-30">Name </h5>           
             <Grid container direction={"row"} xs={12} spacing={3} className="mt-30">
              <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" >
                <FormControl  autoComplete="off" className="fullw">

                  <TextField className="fullw" onChange={this.handleChange} id="outlined-basic" name="first_name" label="First name" variant="outlined" required />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={5} className="p-12">
                <FormControl variant="outlined" className="rightselect" >
                  <MultipleSelect

                    className="multiSelect"
                    isMulti={true}
                    onChange={(e) => this.handleCheckbox("first_name", e)}
                    options={options}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container direction={"row"} xs={12} spacing={3} className="mt-30">
              <Grid container xs={12} md={7} className="p-12"  alignItems="center" alignContent="center" >
                <FormControl  autoComplete="off" className="fullw">

                  <TextField className="fullw" onChange={this.handleChange} id="outlined-basic" name="middle_name" label="Middle name" variant="outlined" required />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={5} className="p-12">
                <FormControl variant="outlined" className="rightselect" >
                  <MultipleSelect

                    className="multiSelect"
                    isMulti={true}
                    onChange={(e) => this.handleCheckbox("middle_name", e)}
                    options={options}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container direction={"row"} xs={12} spacing={3} className="mt-30">
              <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" className="p-12" >
                <FormControl  autoComplete="off" className="fullw">

                  <TextField className="fullw" onChange={this.handleChange} id="outlined-basic" name="last_name" label="last_name" variant="outlined" required />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={5} className="p-12" className="p-12">
                <FormControl variant="outlined" className="rightselect" >
                  <MultipleSelect

                    className="multiSelect"
                    isMulti={true}
                    onChange={(e) => this.handleCheckbox("last_name", e)}
                    options={options}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container direction={"row"} xs={12} spacing={3} className="mt-30">
              <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" >
                <FormControl  autoComplete="off" className="fullw">

                  <TextField className="fullw" onChange={this.handleChange} id="outlined-basic" name="preferred_name" label="preferred_name" variant="outlined" required />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={5} className="p-12">
                <FormControl variant="outlined" className="rightselect" >
                  <MultipleSelect

                    className="multiSelect"
                    isMulti={true}
                    onChange={(e) => this.handleCheckbox("preferred_name", e)}
                    options={options}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <h5 className="m-30">Phone Number</h5> 
            <Grid container direction={"row"} xs={12} spacing={3} className="mt-30" >
              <Grid container xs={12} md={7} alignItems="center" alignContent="center" direction="row" className="p-12">
                <Grid item xs={7}>
                  <FormControl  className="fullw">

                    <TextField className="fullw" type="tel" onChange={this.handleChange} id="outlined-basic" name="phone_number" label="phone_number" variant="outlined" required />
                  </FormControl>
                </Grid>
                <Grid item xs={5}>
                  <MultipleSelect

                    className="multiSelect"
                    placeholder="mobile"
                    onChange={(e) => this.setState({ phone_type: e })}
                    options={phoneTypes}
                  />

                </Grid>
              </Grid>

              <Grid container xs={12} md={5}  className="p-12">

                <FormControl variant="outlined" className="rightselect" >

                  <MultipleSelect

                    className="multiSelect"
                    isMulti={true}
                    onChange={(e) => this.handleCheckbox("phone_number", e)}
                    options={options}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <h5 className="m-30">Adress information</h5> 
            <Grid container direction={"row"} xs={12} spacing={3} className="mt-30">
              <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" >
                <FormControl  autoComplete="off" className="fullw">

                  <TextField className="fullw" onChange={this.handleChange} id="outlined-basic" name="address" label="address" variant="outlined" required />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={5} className="p-12">
                <FormControl variant="outlined" className="rightselect" >
                  <MultipleSelect

                    className="multiSelect"
                    isMulti={true}
                    onChange={(e) => this.handleCheckbox("address", e)}
                    options={options}
                  />
                </FormControl>
              </Grid>
              </Grid>
              <Grid container direction={"row"} xs={12} spacing={3} className="mt-30">
                <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" >
                  <FormControl  autoComplete="off" className="fullw">

                    <TextField className="fullw" onChange={this.handleChange} id="outlined-basic" name="zip_code" label="zip_code" variant="outlined" required />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={5} className="p-12">
                  <FormControl variant="outlined" className="rightselect" >
                    <MultipleSelect

                      className="multiSelect"
                      isMulti={true}
                      onChange={(e) => this.handleCheckbox("zip_code", e)}
                      options={options}
                    />
                  </FormControl>
                </Grid>
                </Grid>
                <Grid container direction={"row"} xs={12} spacing={3} className="mt-30">
                  <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" >
                    <FormControl  autoComplete="off" className="fullw">

                      <TextField className="fullw" onChange={this.handleChange} id="outlined-basic" name="city" label="city" variant="outlined" required />
                    </FormControl>
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
                  </Grid>
                  <Grid container direction={"row"} xs={12} spacing={3} className="mt-30">
                    <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" >
                      <FormControl  autoComplete="off" className="fullw">

                        <TextField className="fullw" onChange={this.handleChange} id="outlined-basic" name="state" label="state" variant="outlined" required />
                      </FormControl>
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
                    </Grid>
                    <Grid container direction={"row"} xs={12} spacing={3} className="mt-30">
                      <Grid container xs={12} md={7} alignItems="center" alignContent="center"  className="p-12" >
                        <FormControl  autoComplete="off" className="fullw">

                          <TextField className="fullw" onChange={this.handleChange} id="outlined-basic" name="country" label="country" variant="outlined" required />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={5}  className="p-12">
                        <FormControl variant="outlined" className="rightselect" >
                          <MultipleSelect

                            className="multiSelect"
                            isMulti={true}
                            onChange={(e) => this.handleCheckbox("country", e)}
                            options={options}
                          />
                        </FormControl>
                      </Grid>

                    </Grid>
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
                      <button tpye="submit" className="btn btn-green ml-auto" disabled={loading}>
                        {loading ? "Next....." : "Next"}
                      </button>
                    </div>
                  </div>
                      
                    
        </form>
      </div>
    );
  }
}

export default ProfilePersonalPage;
