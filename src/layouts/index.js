import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from '@emotion/styled'
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { push as Menu } from 'react-burger-menu'
import { slide as MenuSlide } from 'react-burger-menu'
import { categoriesStrings } from '../components/Navigation/menu'
import { collectionsStrings } from '../components/Navigation/menu'
import Cart from '../components/Cart'


import ContextProvider from '~/provider/ContextProvider'

import { GlobalStyle } from '~/utils/styles'
import Navigation from '~/components/Navigation'

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 980px;
  padding: 0px 0rem;
`
const Footer = styled.div`
  background-color: rgb(250, 250, 250);
  border-top: 1px solid rgb(240,240,240);
  position: relative;
  width: 100vw;
  left: 50%;
  margin-left: -50vw;
  margin-top: 96px;
  padding: 48px 0px 68px 0px;
`
const MobileFooter = styled.div`
  background-color: rgb(250, 250, 250);
  border-top: 1px solid rgb(240,240,240);
  position: relative;
  width: 100vw;
  left: 50%;
  margin-left: -50vw;
  margin-top: 78px;
  padding: 48px 0px 48px 0px;
`
const FooterContents = styled.div`
  max-width: 980px;
  margin: 0 auto;
  
  display: flex;
  opacity: 0.57;
  position: relative;
  line-height: 34px;
`
const MobileFooterContents = styled.div`
  max-width: 980px;
  margin: 0 auto;
  opacity: 0.57;
  position: relative;
  line-height: 34px;
  padding-left: 19px;
`
const Column = styled.div`
  width: 200px;
  margin: 0px 18px 0px 18px;
  
`
const ColumnTitle = styled.div`
  font-size: 13px;
  font-family: AvenirBold;
  margin: 0px 0px 8px 0px;
  letter-spacing: 1px;
`
const MobileColumnTitle = styled.div`
  font-size: 13px;
  font-family: AvenirBold;
  margin: 0px;
  letter-spacing: 1px;
`
const SocialIcon = styled.div`
  transition: 0.4s all ease;

  &:hover {
    transform: translate(0px, -4px);
  }
`


const Layout = ({ children, location }) => {
  const [ email, setEmail ] = useState("")
  const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false)
  const [ mobileCartOpen, setMobileCartOpen ] = useState(false)
  const [ desktopCartOpen, setDesktopCartOpen ] = useState(false)

  function openMobileMenu() {
    setMobileMenuOpen(true)
  }
  function closeMobileMenu() {
    setMobileMenuOpen(false)
  }
  function openMobileCart() {
    setMobileCartOpen(true)
  }
  function closeMobileCart() {
    setMobileCartOpen(false)
  }
  function openDesktopCart() {
    setDesktopCartOpen(true)
  }
  function closeDesktopCart() {
    setDesktopCartOpen(false)
  }
  function closeMobileMenuFromLink() {
    setTimeout(() => setMobileMenuOpen(false), 50)
  }
  function closeCartFromLink() {
    setMobileCartOpen(false)
    setDesktopCartOpen(false)
  }

  const categoriesForMobileMenu = categoriesStrings.map((item, i) => {
        const slug = item.replace(/\s+/g, '-').toLowerCase()
        const lowercaseName = item.replace(/\s+/g, '').toLowerCase()
        const menuLinkStyle = {marginBottom: 13, opacity: "0.85"}
        
        return (
          <a onClick={closeMobileMenuFromLink}><Link to={`categories/${slug}`}>
            <div  className="menu-item" style={menuLinkStyle}>
              {item}
            </div>
          </Link>
          </a>
          )
        }
      )

  const collectionsForMobileMenu = collectionsStrings.map((item, i) => {
        const slug = item.replace(/\s+/g, '-').toLowerCase()
        const lowercaseName = item.replace(/\s+/g, '').toLowerCase()
        const menuLinkStyle = {marginBottom: 13, opacity: "0.85"}
        
        return (
          <Link to={`categories/${slug}`}>
            <div onClick={closeMobileMenu} className="menu-item" style={menuLinkStyle}>
              {item}
            </div>
          </Link>
          )
        }
      )

  return (
    <ContextProvider>
      <GlobalStyle />
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <div style={{height: "100vh", overflow: !mobileCartOpen && !mobileMenuOpen && !desktopCartOpen ? "auto" : "hidden"}}>

            <Menu styles={styles} isOpen={mobileMenuOpen} onOpen={openMobileMenu} onClose={closeMobileMenu} pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
            <div style={{marginBottom: 13, letterSpacing: 1, fontSize: 14, width: "100%"}}>COLLECTIONS</div>
            <div>{collectionsForMobileMenu}</div>
            <br /><br />
            <div style={{marginBottom: 13, letterSpacing: 1, fontSize: 14, width: "100%"}}>CATEGORIES</div>
            <div>{categoriesForMobileMenu}</div>
          </Menu>

<div className="my-cart">
          <Menu right width={"100vw"} styles={styles} isOpen={mobileCartOpen} onOpen={openMobileCart} onClose={closeMobileCart} pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
            <Cart closeCartFromLink={closeCartFromLink} closeMobileCart={closeMobileCart} mobile={true} />
          </Menu>
          </div>

<div className="my-cart">
          <MenuSlide width={"448px"} right styles={styles} isOpen={desktopCartOpen} onOpen={openDesktopCart} onClose={closeDesktopCart} pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
            <Cart closeCartFromLink={closeCartFromLink} closeDesktopCart={closeDesktopCart} />
          </MenuSlide>
          </div>

  <main id="page-wrap">
            <Navigation openDesktopCart={openDesktopCart} openMobileCart={openMobileCart} openMobileMenu={openMobileMenu} location={location} siteTitle={data.site.siteMetadata.title} />

            <Wrapper>
              {children}
              <footer>


              {
              //   <form action="https://app.convertkit.com/forms/1483772/subscriptions" method="post" data-sv-form="1483772" data-uid="06d47c66aa" data-version="5" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}">
              // <div class="formkit-background">
              // </div>
              // <div>
              // <div class="formkit-header" data-element="header">
              // <h1>Join the Newsletter</h1>
              // </div>
              // <div class="formkit-subheader" data-element="subheader">
              //   Subscribe to get our latest content by email.
              // </div>
              // <ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert">
              // </ul>
              // <div data-element="fields" data-stacked="false" class="seva-fields formkit-fields">
              // <div class="formkit-field">
              // <input class="formkit-input" name="email_address" placeholder="Your email address" required="" type="email">
              // </input>
              // </div>
              // <button data-element="submit" class="formkit-submit formkit-submit">
              // <div class="formkit-spinner">
              // <div>
              // </div>
              // <div>
              // </div>
              // <div>
              // </div>
              // </div>
              // <span>
              // Subscribe
              // </span>
              // </button>
              // </div>
              // <div class="formkit-guarantee" data-element="guarantee">
              // We won't send you spam. Unsubscribe at any time.
              // </div>
              // </div>
              // </form>
}










                <Footer className="desktop-only">
                  <FooterContents>
                    <Column>
                    <ColumnTitle>INFO</ColumnTitle>
                    <Link to="/about">About us</Link>
                    <br/>
                    <Link to="/shipping-and-payment">Shipping & payment</Link>
                    <br/>
                    <Link to="returns-and-refunds">Returns & refunds</Link>
                    </Column>
                    <Column>
                    <ColumnTitle>FOLLOW</ColumnTitle>
                      <div style={{width: 78, display: "flex", justifyContent: "space-between"}}>
                      <a href="https://facebook.com/wearecoverful" target="_blank" rel="noopener noreferrer"><SocialIcon><FontAwesomeIcon style={{fontSize: 19, marginBottom: 1}} icon={faFacebook} /></SocialIcon></a>
                      <a href="https://instagram.com/wearecoverful" target="_blank" rel="noopener noreferrer"><SocialIcon><FontAwesomeIcon style={{fontSize: 21, marginBottom: 0}} icon={faInstagram} /></SocialIcon></a>
                      <a href="https://twitter.com/wearecoverful" target="_blank" rel="noopener noreferrer"><SocialIcon><FontAwesomeIcon style={{fontSize: 19, marginBottom: 0}} icon={faTwitter} /></SocialIcon></a>
                      </div>
                    </Column>
                    <Column>
                    <ColumnTitle>CONTACT</ColumnTitle>
                    hello@coverful.co.uk
                    </Column>

                    <div style={{position: "absolute", right: 0, bottom: 0, color: "rgba(0,0,0,0.41)"}}>© {new Date().getFullYear()} Coverful</div>
                  </FooterContents>
                </Footer>


                <MobileFooter className="mobile-only">
                  <MobileFooterContents>
                    
                    <div style={{marginBottom: 30}}>
                    <MobileColumnTitle>FOLLOW</MobileColumnTitle>

                      <div style={{width: 78, display: "flex", justifyContent: "space-between"}}>
                      <a href="https://facebook.com/wearecoverful" target="_blank" rel="noopener noreferrer"><SocialIcon><FontAwesomeIcon style={{fontSize: 19, marginBottom: 1}} icon={faFacebook} /></SocialIcon></a>
                      <a href="https://instagram.com/wearecoverful" target="_blank" rel="noopener noreferrer"><SocialIcon><FontAwesomeIcon style={{fontSize: 21, marginBottom: 0}} icon={faInstagram} /></SocialIcon></a>
                      <a href="https://twitter.com/wearecoverful" target="_blank" rel="noopener noreferrer"><SocialIcon><FontAwesomeIcon style={{fontSize: 19, marginBottom: 0}} icon={faTwitter} /></SocialIcon></a>
                      </div>
                    </div>
                    <div style={{marginBottom: 30}}>
                    <MobileColumnTitle>INFO</MobileColumnTitle>

                    <Link to="/about">About us</Link>
                    <br/>
                    <Link to="/shipping-and-payment">Shipping & payment</Link>
                    <br/>
                    <Link to="returns-and-refunds">Returns & refunds</Link>
                    </div>
                    <div style={{marginBottom: 30}}>
                    <MobileColumnTitle>CONTACT</MobileColumnTitle>

                    hello@coverful.co.uk
                    </div>

                    <div style={{color: "rgba(0,0,0,0.5)", fontSize: 12}}>© {new Date().getFullYear()} Coverful</div>
                  </MobileFooterContents>
                </MobileFooter>


              </footer>
            </Wrapper>
            </main>
          </div>

        )}
      />
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
