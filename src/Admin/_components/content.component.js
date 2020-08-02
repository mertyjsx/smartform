import React,{useState} from 'react'
import {Grid,Paper} from "@material-ui/core"
import axios from "axios"
import {getToken} from "../_services/user.service"
export default function Contentcomponent({isContent,url,id}) {
const [title,set_title]=useState("")
const [content,set_content]=useState("")
   const [loading,set_loading]=useState(false)


const handleSubmit=()=>{
    const apiUrl = global.config.apiBaseURL.url;
    set_loading(true)

  fetch(apiUrl + "user/edit_static_content", {
        method: "POST",
        headers: {
          "Authorization": "Bearer "+getToken(),
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: {id:id,page:"Homepage",title:title,content:content},
      }).then(
    response=>{

        console.log(response) 
        set_loading(false)
    }

).catch(e=>{

    console.log(e)
    set_loading(false)
})
   
}

    return (
        <Paper elevation={3} className="margintop-90">
        <Grid container direction="row" justify="center" className="container" spacing={3}>
       <Grid item xs={6}>

<img src={url} className="imageEx"></img>
       </Grid>
       <Grid  xs={6} className="paddingtop-30" >
   <form method="post" onSubmit={handleSubmit} >
                  <div className="form-group" >
                    <input
                      type="text"
                     value={title}
                      placeholder="title"
                      className="form-control"
                      onChange={(e)=>set_title(e.target.value)}
                      required
                      autoFocus
                    />
                  </div>
                 {isContent&&
                  <div className="form-group">
                  <input
                    type="text"
                   value={content}
                    placeholder="content"
                    className="form-control"
                    onChange={(e)=>set_content(e.target.value)}
                    required
                    autoFocus
                  />
                 
               
                  </div>  }
                  <button className="btn btn-purpal w-100" disabled={loading}>
                    {loading ? "Changing..." : "Change content"}
                  </button>
                  
                </form>


       </Grid>
        </Grid>
        </Paper>
    )
}
