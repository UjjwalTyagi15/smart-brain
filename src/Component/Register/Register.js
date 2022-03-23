import React from "react";

class Register extends React.Component{
    
  constructor(){
    super();
    this.state={
      email:'',
      password:'',
      name:''
    }
  };
  
  onemailchange=(event)=>{
    this.setState({email:event.target.value});

  };
  onnamechange=(event)=>{
    this.setState({name:event.target.value});

  };
  
  onpasswordchange=(event)=>{
    this.setState({password:event.target.value});

  };


  onregister=()=>{
    if(this.state.name.length!==0&& this.state.email.length && this.state.password.length){

      fetch('https://murmuring-sierra-64215.herokuapp.com/register',{
        method:'post',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({
          name:this.state.name,
          email:this.state.email,
          password:this.state.password
        })
      }).then(Response=>Response.json())
      .then(user=>{
        if(user){
          this.props.loaduser(user);  
          this.props.onroutechange('home');}
        })
      }
    }
      
  
  render(){
  return (
        <main className="pa4 black-80 block ">
        <form className="measure center pa3 br3 shadow-5 ">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0 ">
            <legend className="f2 fw6 ph0 mh0 underline ">Register</legend>
            <div className="mt3 pa3">
              <label className="db fw6 lh-copy f6" htmlFor="Name">Name</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"
              onChange={this.onnamechange}/>
            </div>
            <div className="mt3 pa3">
              <label className="db fw6 lh-copy f6" htmlFor="Name">Email</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"
              onChange={this.onemailchange}/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"
              onChange={this.onpasswordchange}/>
            </div>
           
          </fieldset>
          <div className="">
            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Register" 
            onClick={this.onregister}/>
          </div>
          <div className="lh-copy mt3">
  
          </div>
        </form>
      </main>
      
    );
  }
}

export default Register;