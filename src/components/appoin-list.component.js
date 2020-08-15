import React, { Component } from "react";


class appoinList extends Component{
    state = {
        users:[
            {name:'john' , age= 20},
            {name:'peter' , age= 30},
            {name:'john3' , age= 40}
        ]
    }
    render(){
        return(
            <div>
               <ul>
                   {
                       this.state.users.map((user) => {
                           return(
                            // <User age={user.age}> user.name<User/>
<h1>hello</h1>
                           )
                   

                   })
                   }
               </ul>
            </div>
        );
    }

}