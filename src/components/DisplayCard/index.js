import './index.css'

const DisplayCard = props => {
  const {heading, description, changeHeading, changeDescription} = props

  const onChangeHeading = event => {
    changeHeading(event.target.value)
  }

  const onChangeDescription = event => {
    changeDescription(event.target.value)
  }

  return (
    <div className="display-card">
      <input
        type="text"
        className="heading-text"
        onChange={onChangeHeading}
        placeholder={heading}
        value={heading}
      />
      <input
        className="description-text"
        type="text"
        onChange={onChangeDescription}
        value={description}
      />
    </div>
  )
}
export default DisplayCard
