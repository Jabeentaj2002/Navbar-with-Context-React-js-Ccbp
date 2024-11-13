// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {toggleTheme, isDarkTheme} = value

      const onChangeTheme = () => {
        toggleTheme()
      }

      const navBgColor = isDarkTheme ? 'dark-theme' : ''

      const themeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const linkTxt = isDarkTheme ? 'dark-link-item' : 'link-text'

      return (
        <div className={`navbar-container ${navBgColor}`}>
          <Link to="/" className="link-item">
            <img
              src={websiteLogo}
              className="light-theme-logo"
              alt="website logo"
            />
          </Link>
          <ul className="link-container">
            <li>
              <Link to="/" className="link-item">
                <p className={linkTxt}>Home</p>
              </Link>
            </li>

            <li>
              <Link to="/about" className="link-item">
                <p className={linkTxt}>About</p>
              </Link>
            </li>
          </ul>

          <button
            type="button"
            className="theme-button"
            onClick={onChangeTheme}
            data-testid="theme"
          >
            <img src={themeImg} className="theme-btn" alt="theme" />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
