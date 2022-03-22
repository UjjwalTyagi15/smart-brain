import React from 'react';
import './App.css';
import Navigation from './Component/Navigation/Navigation';
import Logo from './Component/Logo/Logo';
import ImageLinkFrom from './Component/ImageLinkFrom/ImageLinkFrom';
import Rank from './Component/Rank/Rank';
import clarifai from 'clarifai';
import FaceRecorgnition from './Component/FaceRecorgnition/FaceRecorgnition';
import Signin from './Component/Singin/Signin';
import Register from './Component/Register/Register';



const app = new clarifai.App({ apiKey: 'dbd83ed35798494a8c291658985c8e4b' });



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: '',
      box: {},
      route: 'signin',
      user: {
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: ""
      }
    }
  }

  loaduser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
  }

  onroutechange = (route) => {
    this.setState({ route: route });
  }



  CalculateFaceLocation = (data) => {

    const clarifyimage = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftcol: clarifyimage.left_col * width,
      topRow: clarifyimage.top_row * height,
      rightcol: width - (clarifyimage.right_col * width),
      bottomRow: height - (clarifyimage.bottom_row * height)
    }
  };

  displayfacebox = (box) => {
    this.setState({ box: box });
  }



  oninputchange = (event) => {
    this.setState({ input: event.target.value });
  }

  onbuttonsubmit = () => {
    this.setState({ imageURL: this.state.input });
    app.models.predict(clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => {
        if (response) {
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
              id: this.state.user.id
            })

          })
          .then(response=>response.json())
          .then(count=>{
            this.setState(Object.assign(this.state.user , {entries:count}));
          })
        }
        this.displayfacebox(this.CalculateFaceLocation(response))
      })
      .catch(reject => { console.log(reject); }
      );
  }

  render() {
    if (this.state.route == 'signin') {
      return (
        <div className="App">
          <Navigation route={this.state.route} onroutechange={this.onroutechange} />
          <Logo />
          <Signin loaduser={this.loaduser} onroutechange={this.onroutechange} />
        </div>);
    }
    else if (this.state.route == 'register') {
      return (
        <div className="App">
          <Navigation route={this.state.route} onroutechange={this.onroutechange} />
          <Logo />
          <Register loaduser={this.loaduser} onroutechange={this.onroutechange} />
        </div>);
    }


    else {

      return (
        <div className="App">

          <Navigation route={this.state.route} onroutechange={this.onroutechange} />
          <Logo />
          <Rank user={this.state.user}/>
          <ImageLinkFrom oninputchange={this.oninputchange} onbuttonsubmit={this.onbuttonsubmit} />
          <FaceRecorgnition box={this.state.box} imageURL={this.state.imageURL} />
        </div>
      );
    }
  }
}

export default App;








