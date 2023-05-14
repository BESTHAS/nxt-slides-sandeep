import './index.css'

const SlidesCard = props => {
  const {slideCardDetails, onClickSlides} = props
  const {id, heading, description} = slideCardDetails

  const onSlidesCard = () => {
    onClickSlides(id)
  }

  return (
    <div data-testid="slide" className="slide-card">
      <li className="slide-lists" onClick={onSlidesCard}>
        <h1 className="heading">{heading}</h1>
        <p className="descriptions">{description}</p>
      </li>
    </div>
  )
}

export default SlidesCard
