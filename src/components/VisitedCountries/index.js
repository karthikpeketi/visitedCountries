import './index.css'

const VisitedCountries = props => {
  const {handleRemoveClick, visitedCountryDetails} = props
  const {imageUrl, id, name} = visitedCountryDetails

  const onClickRemove = () => {
    handleRemoveClick(id)
  }

  return (
    <li className="each-visited-country-container" key={id}>
      <img src={imageUrl} alt="thumbnail" className="each-country-thumbnail" />
      <div className="each-country-functionalities">
        <p className="each-country-name">{name}</p>
        <button onClick={onClickRemove} type="button" className="remove-button">
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
