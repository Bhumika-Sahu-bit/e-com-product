import PropTypes from 'prop-types'

const SearchBar = ({ onSearch }) => {
  return (
    <div className="mb-6">
        <input 
        type="text"
        placeholder="Search products..."
        onChange={ (e) => onSearch(e.target.value)}
        className="w-full p-2 border rounded"
        />
    </div>
  )
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired
}

export default SearchBar