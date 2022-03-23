import React from "react";


class Signin extends React.Component{
    constructor(){
      super();
      this.state ={
        signinemail:"",
        signinpassword:""
      }
    }

    onemailchange=(event)=>{
      this.setState({signinemail:event.target.value});

    }
    
    onpasswordchange=(event)=>{
      this.setState({signinpassword:event.target.value});
      
    }

    onsubmitsignin=()=>{
      fetch('https://murmuring-sierra-64215.herokuapp.com/signin',{
        method:'post',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({
          email:this.state.signinemail,
          password:this.state.signinpassword
        })
      }).then(Response=>Response.json())
      .then(data=>{
        if(data.id){
          this.props.loaduser(data);
        this.props.onroutechange('home');}
      })
    }


  
  render(){
     
     return(
    <main className="pa4 black-80 block  ">
    <form className="measure center pa3 br3 shadow-5 ">
      <fieldset id="sign_up" className="ba b--transparent ph0 mh0 ">
        <legend className="f2 fw6 ph0 mh0 underline ">Sign In</legend>
        <div className="mt3 pa3">
          <label className="db fw6 lh-copy f3" htmlFor="email-address">Email</label>
          <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-90" type="email" name="email-address"  id="email-address" onChange={this.onemailchange}/>
        </div>
        <div className="mv3">
          <label className="db fw6 lh-copy f3" htmlFor="password">Password</label>
          <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80" type="password" name="password"  id="password" onChange={this.onpasswordchange}/>
        </div>
       
      </fieldset>
      <div>
        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 pointer dib" type="button" value="Sign in" 
        onClick={this.onsubmitsignin}/>
      </div>
    </form>
  </main>
  

    );
}
}


export default Signin;