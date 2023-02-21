import Search from  "./components/search/search"
import "./style.css"

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (
    <div className="container">
        {/* this handleOnSearchChange is to get the input from search bar then pass it to onSearchChange
            5. from the onSearchChange coming into search.js is passing the value to handleOnSearchChange then console.log to check result */}
      <Search onSearchChange={handleOnSearchChange} />

    </div>
  );
}

export default App;
