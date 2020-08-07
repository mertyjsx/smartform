import React from "react";
import { EmploymentData} from "../../_services/employment.service";
import { Grid ,Radio,FormControlLabel,FormLabel,RadioGroup} from "@material-ui/core"
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
import Employment from "./Employment.component"
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
     enable:false,
     employment:[],
    
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


enableChange=(e)=>{
this.setState({enable:e.target.value})
}


addEmploymentToArray = (employment) => {

  let employment_array = this.state.employment

  employment_array.push(employment)
  this.setState({ employment: employment_array })

}

handleEdit=(obj)=>{
  let uni_Array=this.state.employment
  console.log(obj)
  let index =uni_Array.findIndex(item=>item.id===obj.id)
uni_Array[index]=obj


console.log(uni_Array)
this.setState({employment:uni_Array})


}

delete = (id) => {
  let employment_Array = this.state.employment.filter(item => item.id !==id)


  this.setState({ employment: employment_Array })

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
justSkip=()=>{
  this.props.profileThis.setState({ activeMenu: "Certifications" });
}
  // USING METHOD TO SUMBIT FORM DETAILS TO SERVER
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });

    EmploymentData(this.state).then(
      (response) => {
        if (response.success) {
          this.props.profileThis.setState({ activeMenu: "Certifications" });
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
          
       
      <FormControl component="fieldset" className="fullw mt-30 m-20" >
      <h5 component="experience" className="experience-text m-30">Do you have any work experience?</h5>
      <RadioGroup aria-label="experience" className="rowflex"  name="experience" value={this.state.enable}  onChange={this.enableChange}>
      
        <FormControlLabel className="radiowidth" value={"yes"} control={<Radio />} label="Yes" />
        <FormControlLabel  className="radiowidth" value={"no"} control={<Radio />} label="No" />
       
      </RadioGroup>
    </FormControl>
            
          
          
        {this.state.enable==="yes"&&
        (
<Employment handleCheckbox={this.handleCheckbox} pub={this.state.public} pri={this.state.private} resume={this.state.resume} add={this.addEmploymentToArray} editIt={this.handleEdit} deleteEmployment={this.delete} employments={this.state.employment}></Employment>

        )
        
        
        
        }
                  <div className="form-input-flex d-flex center">
                    <div className="left-input-se">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "55%" }}
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
                    
                    {this.state.enable==="yes"?(
                  
                  this.state.employment.length>0&&(

                  
                    <button  className="btn btn-green ml-auto" disabled={loading}>
                    {loading ? "Next....." : "Next"}
                  </button>
                   
                   
                
                
                )
                  
                  )
                  :
                   
                    <button className="btn btn-green ml-auto" type="button" onClick={this.justSkip}>
                   Next
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
