import React from "react";
import "./SearchForm.css";

class SearchForm extends React.Component {
  render() {
    let categories = [
      "fashion",
      "nature",
      "backgrounds",
      "science",
      "education",
      "people",
      "feelings",
      "religion",
      "health",
      "places",
      "animals",
      "industry",
      "food",
      "computer",
      "sports",
      "transportation",
      "travel",
      "buildings",
      "business",
      "music"
    ];

    let options = categories.map(category => (
      <option value={category} key={`${category}Option`}>
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </option>
    ));

    return (
      <form className="searchForm" onSubmit={this.props.handleSubmit}>
        <div>
          <input
            id="queryInput"
            type="text"
            name="query"
            placeholder="Keyword..."
            onChange={this.props.handleQueryChange}
          />
        </div>
        <div>
          <select
            id="categoryInput"
            name="category"
            onChange={this.props.handleCategoryChange}
          >
            <option value="">Category...</option>
            {options}
          </select>
        </div>

        <input type="submit" />
      </form>
    );
  }
}

export default SearchForm;
