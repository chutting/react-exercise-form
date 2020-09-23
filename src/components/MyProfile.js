import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {


  state = {
    name: "",
    gender: "male",
    description: "",
    haveReadConduct: false
  }

  handleChange = (field, event) => {
    this.setState({
      [field]: event.target.value
    })
  }

  handleChecked = (event) => {
    this.setState({
      haveReadConduct: event.target.checked
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  }
  render() {
    return <div className = "profile">
      <h1>My Profile</h1>
      <form className="profile-form">
        <section className="profile-item">
          <label htmlFor = "name">Name</label>
          <input className="name" type="text" placeholder="Your name"
                 value={this.state.name}
                 onChange = {(event) => this.handleChange("name", event)}/>
        </section>

        <section className="profile-item" id="gender-select">
          <label htmlFor = "gender">Gender</label>
          <select className="gender" onChange={(event) => this.handleChange("gender", event)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </section>

        <section className="profile-item">
          <label htmlFor = "description">Description</label>
          <textarea name="description" cols="40" rows="5"
                    placeholder="Description about yourself"
                    onChange={ event => this.handleChange("description", event)}></textarea>
        </section>

        <section className="profile-item" id="conduct">
          <input className="conduct-checkbox"
                 type="checkbox"
                 value="conduct-check"
                 onChange={event => this.handleChecked(event)}/>
          <label htmlFor = "conduct-checkbox" id="conduct-label">I have read the terms of conduct</label>
        </section>

        <input type="submit" className="submit"
               onClick={(event) => this.handleSubmit(event)}
               disabled={!this.state.name || !this.state.description || !this.state.haveReadConduct}
               value="Submit"/>
      </form>
    </div>
  }
}

export default MyProfile;