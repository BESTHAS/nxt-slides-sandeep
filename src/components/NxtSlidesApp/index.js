import {Component} from 'react'
import SlidesCard from '../SlidesCard'
import DisplayCard from '../DisplayCard'

import './index.css'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

class NxtSlidesApp extends Component {
  state = {
    isActive: initialSlidesList[0].id,
    heading: initialSlidesList[0].heading,
    description: initialSlidesList[0].description,
  }

  onClickSlides = id => {
    const activeSlide = initialSlidesList.filter(each => each.id === id)

    this.setState({
      isActive: activeSlide[0],
      heading: activeSlide[0].heading,
      description: initialSlidesList[0].description,
    })
  }

  changeHeading = value => {
    const {isActive} = this.state
    isActive.heading = value
    this.setState({heading: value})
  }

  changeDescription = value => {
    const {isActive} = this.state
    isActive.description = value
    this.setState({description: value})
  }

  render() {
    const {isActive, heading, description} = this.state
    console.log(isActive)
    return (
      <div data-testid="slide" className="nxt-slides-container">
        <nav className="nav-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png"
            alt="nxt slides logo"
            className="nxt-logo"
          />
          <h1 className="logo-title">Nxt Slides</h1>
        </nav>
        <button type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
            alt="new plus icon"
          />
          <p>new</p>
        </button>
        <div className="next-slides-and-display-card">
          <ol className="slides-list-card">
            {initialSlidesList.map(each => (
              <SlidesCard
                key={each.id}
                slideCardDetails={each}
                onClickSlides={this.onClickSlides}
              />
            ))}
          </ol>
          <div>
            <DisplayCard
              heading={heading}
              description={description}
              changeHeading={this.changeHeading}
              changeDescription={this.changeDescription}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default NxtSlidesApp
