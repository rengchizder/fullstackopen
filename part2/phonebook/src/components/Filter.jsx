const Filter = ({newSearch, handleNewSearch}) => {
    return (
      <>filter shown with <input value={newSearch} onChange={handleNewSearch}/></>
    )
  }

export default Filter