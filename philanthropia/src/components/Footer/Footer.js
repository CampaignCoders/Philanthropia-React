import React from 'react';
import './Footer.css';

/*
class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <span className="text-muted">Philanthropa &#169; {new Date().getFullYear()}</span>
        </div>
      </footer>
    );
  }
}
*/
const Footer = props => (
    <div className="footer">
        <span className="text-muted">Philanthropa &#169; {new Date().getFullYear()}</span>
    </div>
);

export default Footer;
