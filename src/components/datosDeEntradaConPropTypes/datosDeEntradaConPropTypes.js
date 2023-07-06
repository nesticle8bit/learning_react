import React, { Component } from "react";
import PropTypes from "prop-types";

const noop = () => {};

class Profile extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  };

  static defaultProps = {
    name: 'nesticle',
    lastName: '8bit',
    onHello: noop
  };

  render() {
    const { name, lastName, bio, email } = this.props;
    return (
      <main>
        <article>
          <h2>
            {name} {lastName}
          </h2>
          <p>{bio}</p>
          <br />
          <small>{email}</small>
        </article>

        <button type="button" onClick={this.props.onHello}>Saludar</button>
      </main>
    );
  }
}

// Profile.propTypes = {};

export default Profile;
