import Search from  "./components/search/search"
import "./style.css"

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (
    <div className="container">
        {/* this handleOnSearchChange is to get the input from search bar then pass it to onSearchChange */}
      <Search onSearchChange={handleOnSearchChange} />

    </div>
  );
}

export default App;
