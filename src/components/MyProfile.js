import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
  render() {
    return <div className = "profile">
      <h1>My Profile</h1>
      <form className="profile-form">
        <section className="profile-item">
          <label htmlFor = "name">Name</label>
          <input className="name" type="text" placeholder="Your name"/>
        </section>

        <section className="profile-item" id="gender-select">
          <label htmlFor = "gender">Gender</label>
          <select className="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </section>

        <section className="profile-item">
          <label htmlFor = "description">Description</label>
          <textarea name="description" cols="40" rows="5" placeholder="Description about yourself"></textarea>
        </section>

        <section className="profile-item" id="conduct">
          <input className="conduct-checkbox" type="checkbox" value="conduct-check"/>
          <label htmlFor = "conduct-checkbox" id="conduct-label">I have read the terms of conduct</label>
        </section>

        <button type="submit" className="submit">Submit</button>
      </form>
    </div>
  }
}

export default MyProfile;