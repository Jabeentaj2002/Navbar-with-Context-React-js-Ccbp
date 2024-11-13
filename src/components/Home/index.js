// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const homeTxt = isDarkTheme ? 'dark-theme-heading' : 'light-theme-heading'

      const homeBgColor = isDarkTheme ? 'home-dark-bg-color' : ''

      return (
        <div className="home-navbar-container">
          <Navbar />
          <div className={`home-container ${homeBgColor}`}>
            <img src={homeImg} className="light-theme-home" alt="home" />
            <h1 className={homeTxt}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
