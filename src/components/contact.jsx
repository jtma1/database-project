import React, { Component } from "react";

class ContactPage extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={window.location.origin + "/profile/jarod_profile.jpg"} />
          <p>Jarod Sample Text</p>
        </div>
        <div>
          <img src={window.location.origin + "/profile/yuta_profile.jpg"} />
          <p>Yuta Sample Text</p>
        </div>
        <div>
          <img src={window.location.origin + "/profile/adeel_profile.jpg"} />
          <p>Adeel Sample Text</p>
        </div>
      </div>
    );
  }
}

export default ContactPage;
