import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPhoneAlt, faArrowsAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook, faTwitter, faPinterest, faYoutube, faDribbble } from '@fortawesome/free-brands-svg-icons';
import './style.css';
export function FooterComponent() {
  return (
    <>
      <div className='footer-wrapper v1'>
        <div className='footer-top-area footer'>
          <div className='container'>
            <div className='row nav-folderized'>
              <div className='col-lg-4 col-md-12'>
                <div className='footer-logo'>
                  <img src='https://res.cloudinary.com/swgb/image/upload/v1574779280/LogoWhite_yyrcyv.png' alt='logo' />
                  <div className='company-desc'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio excepturi nam totam sequi, ipsam consequatur repudiandae libero illum.
                                </p>
                    <ul className='list footer-list mt-20'>
                      <li>
                        <div className='contact-info'>
                          <div className='icon'>
                            {/* <FontAwesomeIcon icon={faMapMarkerAlt} /> */}
                          </div>
                          <div className='text'>13th North Ave, Florida, USA</div>
                        </div>
                      </li>
                      <li>
                        <div className='contact-info'>
                          <div className='icon'>
                            {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                          </div>
                          <div className='text'><a href='#'>info@sarchholm.com</a></div>
                        </div>
                      </li>
                      <li>
                        <div className='contact-info'>
                          <div className='icon'>
                            {/* <FontAwesomeIcon icon={faPhoneAlt} /> */}
                          </div>
                          <div className='text'>+44 078 767 595</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 offset-lg-1 col-md-12'>
                <div className='footer-content nav'>
                  <h2 className='title'>Quick Links</h2>
                  <ul className='list res-list'>
                    <li><a className='link-hov style2' href='#'>About us</a></li>
                    <li><a className='link-hov style2' href='#'>Contact us</a></li>
                    <li><a className='link-hov style2' href='#'>Privacy Policy</a></li>
                    <li><a className='link-hov style2' href='#'>FAQ</a></li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-4 col-md-12'>
                <div className='footer-content'>
                  <h4 className='title'>Subscribe</h4>
                  <div className='value-input-wrap newsletter'>
                    <form action='#'>
                      <input type='text' placeholder='Your mail address ..' />
                      <button type='submit'>Subscribe</button>
                    </form>
                  </div>
                  <div className='footer-social-wrap'>
                    <p>Follow us on </p>
                    <ul className='social-buttons style2'>
                      {/* <li><a href='#'><FontAwesomeIcon icon={faFacebook} /></a></li>
                      <li><a href='#'><FontAwesomeIcon icon={faTwitter} /></a></li>
                      <li><a href='#'><FontAwesomeIcon icon={faPinterest} /></a></li> */}
                      <li><a href='#'>
                        {/* <FontAwesomeIcon icon={faYoutube} /> */}

                      </a></li>
                      <li><a href='#'>
                        {/* <FontAwesomeIcon icon={faDribbble} /> */}
                      </a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom-area'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-md-8 offset-md-2'>
                <p>
                  © RealEstate 2019. All rights reserved. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}