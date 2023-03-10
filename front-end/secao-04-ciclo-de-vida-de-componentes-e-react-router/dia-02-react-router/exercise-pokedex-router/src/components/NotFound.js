import React from 'react';
import '../styles/notFound.css';

class NotFound extends React.Component {
  render() {
    return (
      <div className="not-found">
        <h2>
          Page request not found
          <span role="img" aria-label="Crying emoji">😭</span>
        </h2>
        <img
          className="not-found-image"
          src="https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif"
          alt="Pikachu chorando porque a pasta não funcionou"
        />
      </div>
    );
  }
}

export default NotFound;
