import React from "react";
import AppItem from "./AppItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apps: [],
      sort: "",
      genres: "",
      error: "",
    };
  }

  handleSortChange = (e) => {
    this.setState({ sort: e.target.value });
  };
  handleGenresChange = (e) => {
    this.setState({ genres: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const baseUrl = "http://localhost:8000/apps";

    let param = "";
    if (this.state.sort) {
      param = `sort=${this.state.sort}`;
    }

    if (this.state.genres) {
      param = `genres=${this.state.genres}`;
    }

    const url = `${baseUrl}?${param}`;
    console.log(url);
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) =>
        this.setState({
          apps: data,
          error: null,
        })
      )
      .catch(() =>
        this.setState({
          error: "Sorry. The results could not be displayed.",
        })
      );
  };
  render() {
    const { apps } = this.state;
    const results = apps
      ? apps.map((item, i) => (
          <AppItem
            app={item.App}
            category={item.Category}
            rating={item.Rating}
            reviews={item.Reviews}
            size={item.Size}
            installs={item.Installs}
            type={item.Type}
            price={item.Price}
            contentRating={item["Content Rating"]}
            genres={item.Genres}
            lastUpdated={item["Last Updated"]}
            currentVersion={item["Current Ver"]}
            androidVersion={item["Android Ver"]}
            key={i}
          />
        ))
      : null;
    return (
      <div className="app">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="genres">Enter a genre:</label>
          <input
            type="text"
            name="genres"
            value={this.state.genres}
            onChange={this.handleGenresChange}
          />

          <label htmlFor="sort">Sort by:</label>
          <input
            type="text"
            name="sort"
            value={this.state.sort}
            onChange={this.handleSortChange}
          />

          <button type="submit">Search now!</button>
        </form>
        <div>{results}</div>
      </div>
    );
  }
}

export default App;
