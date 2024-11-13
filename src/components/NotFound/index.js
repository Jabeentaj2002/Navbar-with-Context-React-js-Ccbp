// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundBgColor = isDarkTheme ? 'dark-bg-color' : ''

      const heading = isDarkTheme ? 'not-found-heading' : ''

      return (
        <div>
          <Navbar />
          <div className={`not-found-container ${notFoundBgColor}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-img"
            />
            <h1 className={heading}>Lost Your Way</h1>
            <p className={heading}>We cannot seem to find the page</p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
