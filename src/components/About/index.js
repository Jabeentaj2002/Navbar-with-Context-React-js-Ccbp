// Write your code here
// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const txtTheme = isDarkTheme
        ? 'dark-theme-about-heading'
        : 'light-theme-about-heading'

      const aboutBgColor = isDarkTheme ? 'about-dark-bg-color' : ''

      return (
        <div className="about-navbar-container">
          <Navbar />
          <div className={`about-container ${aboutBgColor}`}>
            <img src={aboutImg} className="light-theme-about" alt="about" />
            <h1 className={txtTheme}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
