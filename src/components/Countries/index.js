import './index.css'

const Countries = props => {
  const {countryDetails, handleVisitClick} = props
  const {id, isVisited, name} = countryDetails

  const onClickVist = () => {
    handleVisitClick(id)
    // console.log(name)
  }

  const visitedStyling = isVisited ? 'visited-styling' : null
  const buttonTextContent = isVisited ? 'Visited' : 'Visit'

  return (
    <li className="list-item" key={id}>
      <p className="country-name">{name}</p>
      <button
        onClick={onClickVist}
        type="button"
        className={`${visitedStyling} visit-styling`}
      >
        {buttonTextContent}
      </button>
    </li>
  )
}

export default Countries
