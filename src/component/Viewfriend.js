import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Viewfriend = () => {
  var [friendlist,setFriend]=useState([])
  var [loadStatus,setLoadstatus]=useState(true)

    axios.get("https://dummyapifriends.herokuapp.com/view").then(
        (response)=>{
        console.log(response.data)
        setFriend(response.data)
        setLoadstatus(false)
        }
    )
  return (
    <div>
        <Navbar/>
        <div>
        <Navbar/>
        <div className="container">
        <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        {loadstatus ?<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div> :<table class="table table-primary table-striped">         
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">name:</th>
              <th scope="col">friendname</th>
              <th scope="col">friendsnikename</th>
              <th scope="col">describe</th>
              
            </tr>
          </thead>
          <tbody>
                
                    {courselist.map((value,key)=>{
        return <tr>
              <th scope="row">1</th>
              <td>{value.name}</td>
              <td>{value.friendname}</td>
              <td>{value.friendsnickname}</td>
              <td>{value.describe}</td>
              
            </tr>
           
                    })}
        
                      </tbody>
        </table>
        }
        </div>
        </div>
        </div>
        </div>

    </div>
  )
}

export default Viewfriend