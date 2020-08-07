import React from "react";
import {skillData } from "../../_services/other.services";
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
import Old from "./Old.skill"
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
      skills:[],
     
      public: [],
      private: [],
      resume: [],
      skill:"",
      skill_desc:"",
      level:"",
      experience_year:"",
      error: "",
      enabled:true,
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




  addSToArray = () => {

    let s_array = this.state.skills
  
    s_array.push(
        {
            skill:this.state.skill,
            skill_desc:this.state.skill_desc,
            level:this.state.level,
            experience_year:this.state.experience_year,
            id:Math.floor(Math.random() * Math.floor(21000))
        }
    )
    this.setState({skills: s_array,enabled:false })
  
  }
  
  
  
  delete = (c) => {
    console.log(c)
    let c_array = this.state.skill.filter(item => item.id !==c.id)
  
  
    this.setState({ skill: c_array })
  
  }
  handleEdit=(obj)=>{
    let uni_Array=this.state.skill
    console.log(obj)
    let index =uni_Array.findIndex(item=>item.id===obj.id)
  uni_Array[index]=obj
  
  
  console.log(uni_Array)
  this.setState({skill:uni_Array})
  
  
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

    skillData(this.state).then(
      (response) => {
        if (response.success) {
          this.props.profileThis.setState({ activeMenu: "Project" });
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

        
        {

this.state.skills&&this.state.skills.map(item => <Old pri={this.state.private} pub={this.state.public} resume={this.state.resume} old={item} editIt={this.handleEdit} enabled_props={this.state.enabled}  handleCheckbox={this.handleCheckbox} deleteIt={this.delete}




></Old>)
}
          
      {this.state.enabled&&
      
      <div >
          
      
          
      <Grid container direction="column">
        <h5 className="m-30">Skills </h5>           
         <Grid container direction={"row"} xs={12} spacing={3} className="mt-30">
          <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" >
            <form  autoComplete="off" className="fullw">

              <TextField className="fullw" onChange={this.handleChange} id="outlined-basic" name="skill" label="skill " variant="outlined" required />
            </form>
          </Grid>
          <Grid item xs={12} md={5} className="p-12">
            <FormControl variant="outlined" className="rightselect" >
              <MultipleSelect

                className="multiSelect"
                isMulti={true}
                onChange={(e) => this.handleCheckbox("skill", e)}
                options={options}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container direction={"row"} xs={12} spacing={3} className="mt-30">
          <Grid container xs={12} md={7} className="p-12"  alignItems="center" alignContent="center" >
            <form  autoComplete="off" className="fullw">

              <TextField className="fullw" onChange={this.handleChange} id="outlined-basic" name="skill_desc" label="Skill description " variant="outlined" required />
            </form>
          </Grid>
          <Grid item xs={12} md={5} className="p-12">
            <FormControl variant="outlined" className="rightselect" >
              <MultipleSelect

                className="multiSelect"
                isMulti={true}
                onChange={(e) => this.handleCheckbox("skill_desc", e)}
                options={options}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container direction={"row"} xs={12} spacing={3} className="mt-30">
          <Grid container xs={12} md={7} className="p-12"  alignItems="center" alignContent="center" >
            <form  autoComplete="off" className="fullw">

              <TextField className="fullw" onChange={this.handleChange} id="outlined-basic" name="level" label="level " variant="outlined" required />
            </form>
          </Grid>
          <Grid item xs={12} md={5} className="p-12">
            <FormControl variant="outlined" className="rightselect" >
              <MultipleSelect

                className="multiSelect"
                isMulti={true}
                onChange={(e) => this.handleCheckbox("level", e)}
                options={options}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container direction={"row"} xs={12} spacing={3} className="mt-30">
          <Grid container xs={12} md={7} className="p-12"  alignItems="center" alignContent="center" >
            <form  autoComplete="off" className="fullw">

              <TextField className="fullw" onChange={this.handleChange} id="outlined-basic" name="experience_year" label="Experience year " variant="outlined" required />
            </form>
          </Grid>
          <Grid item xs={12} md={5} className="p-12">
            <FormControl variant="outlined" className="rightselect" >
              <MultipleSelect

                className="multiSelect"
                isMulti={true}
                onChange={(e) => this.handleCheckbox("experience_year", e)}
                options={options}
              />
            </FormControl>
          </Grid>
        </Grid>
                </Grid>
                </div>
      
      
      }
                    {this.state.enabled?<Button onClick={this.addSToArray} className="mb20 bgc ml-25 " variant="contained"   >add skill</Button>:this.state.skills.length<10&&<div onClick={()=>this.setState({enabled:true})} className="add-tag">new skills</div>}
                  <div className="form-input-flex d-flex center">
                    <div className="left-input-se">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "75%" }}
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
                      <button  className="btn btn-green ml-auto" disabled={loading}>
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
