import React ,{useState}from 'react'
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function MultipleSelect({}) {
const [select,set]=useState([])

const handle=(val)=>{
    set(val)
}
console.log(select)
    return (
                  
      <Autocomplete
      className="fullw"
      multiple
      id="checkboxes-tags-demo"
      options={[{title:"Public Profile",value:"public"},{title:"Private Profile",value:"private"},{title:"Resume Profile",value:"resume"}]}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      onChange={(e,val)=> console.log(val)}
  
      
      renderOption={(option, { selected }) => {
        console.log(selected)
        
        return(
        <React.Fragment>
          <Checkbox

            style={{ marginRight: 8 }}
            checked={selected}
            
          />
          {option.title}
        </React.Fragment>
      )}}
      
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label="Checkboxes" placeholder="Select Public,Private" />
      )}
    />
    )
}
