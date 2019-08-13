import React from "react";
import "./App.css";
import SearchForm from "./SearchForm";
import Result from "./Result";
import Saved from "./Saved";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: [],
      results: [],
      query: "",
      category: "",
      fetchingData: false
    };
  }

  updateQuery = e => {
    this.setState({
      query: e.target.value
    });
  };

  updateCategory = e => {
    this.setState({
      category: e.target.value
    });
  };

  toggleSave = e => {
    // initialize placeholder array
    let stateArray = [...this.state.saved];

    // identify result to save / unsave
    let id = e.target.parentElement.id.toString();
    let result = this.state.results.find(result => result.id.toString() === id);
    let index = stateArray.map(result => result.id.toString()).indexOf(id);

    // remove result from array if it exists, otherwise add to this.state.saved
    if (index !== -1) {
      stateArray.splice(index, 1);
      this.setState({
        saved: stateArray
      });
    } else {
      this.setState({
        saved: [result, ...this.state.saved]
      });
    }
  };

  getPictures = e => {
    e.preventDefault();

    // configure vars for request
    const API_KEY = process.env.REACT_APP_API_KEY;
    let string = this.state.query.trim(" ").replace(/\s/g, "+");
    let url = `https://pixabay.com/api/?key=${API_KEY}&q=${string}&category=${
      this.state.category
    }
    `;

    // request data
    fetch(url)
      .then(res => res.json())
      .then(resj => {
        this.setState({
          results: resj.hits
        });
      });
  };

  searchTagName = e => {
    // configure vars for request
    const API_KEY = process.env.REACT_APP_API_KEY;
    let string = e.target.innerHTML.trim(" ").replace(/\s/g, "+");
    let url = `https://pixabay.com/api/?key=${API_KEY}&q=${string}`;

    // request data
    fetch(url)
      .then(res => res.json())
      .then(resj => this.setState({ results: resj.hits }));
  };

  render() {
    // generate list of results to render - listens for state changes
    let resultList = this.state.results.map(result => {
      return (
        <Result
          key={result.id}
          id={result.id}
          imgSrc={result.webformatURL}
          likes={result.likes}
          favorites={result.favorites}
          tags={result.tags}
          user={result.user}
          saved={this.state.saved.map(result => result.id).indexOf(result.id)}
          clickListener={e => this.toggleSave(e)}
          tagClickListener={e => this.searchTagName(e)}
        />
      );
    });

    return (
      <div className="App">
        <main id="searchArea">
          <SearchForm
            handleQueryChange={e => this.updateQuery(e)}
            handleCategoryChange={e => this.updateCategory(e)}
            handleSubmit={e => this.getPictures(e)}
          />
          <div id="resultArea">{resultList}</div>
        </main>
        <Saved saved={this.state.saved} />
      </div>
    );
  }
}

export default App;
