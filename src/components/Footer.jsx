import React from 'react'

const Footer = () => {
    return (
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">About</h5>
                <p className="grey-text text-lighten-4">This is an e-commerce website for selling gym equipment online.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Connect</h5>
                <ul>
                  <div className="social-links">
                    <a href="https://github.com/Aman2221"><i className="fab fa-github"></i></a>
                    <a href="https://twitter.com/Aman23398618"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100012875318770"><i className="fab fa-facebook-square"></i></a>
                    <a href="https://www.instagram.com/aman_singhhhhhh/"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/aman-singh-6a81281b3/"><i className="fab fa-linkedin-in"></i></a>
                </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2021 All rights reserved
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
    )
}

export default Footer
