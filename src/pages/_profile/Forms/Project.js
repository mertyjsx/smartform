import React from "react";
import {projectData} from "../../_services/other.services";
import { Grid ,Paper} from "@material-ui/core"
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
      project:[],
      skill:"",
      project_name:"",
      project_desc:"",
      dt_from:"",
      dt_to:"",
      skill_gained:[],
      public: [],
      private: [],
      resume: [],
     
     
     
     enabled_skill:true,
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


 addSkill = (e) => {
    e.preventDefault();
this.setState({enabled_skill:false})
let skill_Array=this.state.skill_gained
skill_Array.push(this.state.skill)
   this.setState({skill_gained:skill_Array})

  }

  addProjectToArray = () => {

    let s_array = this.state.project
  
    s_array.push(
        {
            project_name:this.state.project_name,
      project_desc:this.state.project_desc,
      dt_from:this.state.dt_to,
      dt_to:this.state.dt_to,
      skill_gained:this.state.skill_gained,
        }
    )
    this.setState({project: s_array })
  
  }
  
    deleteSkill = () => {
    let skill_array = this.state.skill_gained.filter(item => item !== this.state.skill)


 this.setState({skill_gained:skill_array})

  }
  
  delete = (s) => {
    let s_array = this.state.project.filter(item => item !==s)
  
  
    this.setState({ project: s_array })
  
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

    projectData(this.state).then(
      (response) => {
        if (response.success) {
          this.props.profileThis.setState({ activeMenu: "Interests" });
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

        <div>

{

  this.state.project.map(item => <Grid container className="universty" alignItems="center" justify="space-around">
    <Grid item>
      <h6> project name: {item.project_name}</h6>
    </Grid>

    
    <Grid item>
      <Button onClick={() => this.delete(item)} variant="contained" color="secondary"> delete </Button>
    </Grid>
  </Grid>)
}
</div>
          
        <div className={`${!this.state.enabled&&"unvisible"}`}>
          
          
          
          <Grid container direction="column">
            <h5 className="m-30">Skills </h5>           
             <Grid container direction={"row"} xs={12}  className="mt-30">
              <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" >
                <form  autoComplete="off" className="fullw">

                  <TextField className="fullw" onChange={this.handleChange} id="outlined-basic" name="project_name" label="Project name " variant="outlined" required />
                </form>
              </Grid>
              <Grid item xs={12} md={5} className="p-12">
                <FormControl variant="outlined" className="rightselect" >
                  <MultipleSelect

                    className="multiSelect"
                    isMulti={true}
                    onChange={(e) => this.handleCheckbox("project_name", e)}
                    options={options}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container direction={"row"} xs={12}  className="mt-30">
              <Grid container xs={12} md={7} className="p-12"  alignItems="center" alignContent="center" >
                <form  autoComplete="off" className="fullw">

                  <TextField className="fullw" onChange={this.handleChange} id="outlined-basic" name="project_desc" label="Project description " variant="outlined" required />
                </form>
              </Grid>
              <Grid item xs={12} md={5} className="p-12">
                <FormControl variant="outlined" className="rightselect" >
                  <MultipleSelect

                    className="multiSelect"
                    isMulti={true}
                    onChange={(e) => this.handleCheckbox("project_desc", e)}
                    options={options}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container direction={"row"} xs={12} className="mt-30">
                  <Grid container xs={12} md={7} className="p-12" alignItems="center" alignContent="center" justify="space-between">
                    <Grid item xs={5}   >
          
                      <FormControl autoComplete="off" className="fullw">
          
                        <TextField className="fullw fullborder" onChange={this.handleChange} id="outlined-basic" name="dt_from" label="From" variant="outlined" required />
                      </FormControl>
                    </Grid>
                    <Grid item xs={5}  >
                      <FormControl autoComplete="off" className="fullw">
          
                        <TextField className="fullw fullborder" onChange={this.handleChange} id="outlined-basic" name="dt_to" label="To" variant="outlined" required />
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

      <Paper elevation={3} className="paper-container margintop30">
      <h5 className="m-30 color p-12">Skill gained</h5>
        <Grid container>
          <div>

            {

              this.state.skill_gained.map(item => <Grid container className="universty" alignItems="center" justify="space-around">
                <Grid item>
                  <h6> {item}</h6>
                </Grid>

               
                <Grid item>
                  <Button onClick={() => this.deleteSkill(item)} variant="contained" color="secondary"> delete </Button>
                </Grid>
              </Grid>)
            }
          </div>
          <Grid container direction={"row"} xs={12} className={`mt-30 ${!this.state.enabled_skill&&"unvisible"}`}>
            <Grid container xs={12} md={7} className={`p-12 `} alignItems="center" alignContent="center" >
              <FormControl autoComplete="off" className="fullw">

                <TextField className="fullw" onChange={this.handleChange} id="outlined-basic" name="skill" label="skill" variant="outlined" required />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={5} className="p-12">
              <FormControl variant="outlined" className="rightselect" >
                <MultipleSelect

                  className="multiSelect"
                  isMulti={true}
                  onChange={(e) => this.handleCheckbox("skill_gained", e)}
                  options={options}
                />
              </FormControl>
            </Grid>

            
          </Grid>



          {this.state.enabled_skill?<Button onClick={this.addSkill} className="mb20 bgc ml-25 " variant="contained"   >add gained skill</Button>:<div onClick={()=>this.setState({enabled_skill:true})} className="add-tag">new gained skills</div>}


        </Grid>
      </Paper>
   
                    </Grid>
                    </div>
                    <div className="fullw marginbottom50 margintop30">
                    {this.state.enabled?<Button onClick={this.addProjectToArray} className="bgc  fullw" variant="contained"   >add Project</Button>:<div onClick={()=>this.setState({enabled:false})} className="add-tag">new projects</div>}
                    </div>
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
                      <button onClick={this.handleSubmit} className="btn btn-green ml-auto" disabled={loading}>
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
