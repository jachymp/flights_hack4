function SearchBar(props) {



  return (
      <div>
          <label>{props.name}</label>
          <select onChange={(e) => props.setValue(e.target.value)}>
                {props.type.map((item, index) => (
                    <option key={index} value={item.code}>{item.name}</option>
                ))}
          </select>          
      </div>
  );
}
export default SearchBar;