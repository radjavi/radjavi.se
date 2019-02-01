import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { active } = this.props;

    return(
      <div className="smallBody">
        <footer className="footer">
          <p>Copyright © {new Date().getFullYear()} Iman Radjavi </p>
          <div style={{fontSize: "18px"}}>
            <i class="far fa-envelope"></i>
            <i class="fab fa-linkedin-in"></i>
            <i class="fab fa-github"></i>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
