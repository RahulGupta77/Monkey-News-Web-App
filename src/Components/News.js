import React, { Component } from "react";
import NewsItems from "./NewsItems";
import PropTypes from "prop-types";
import "../App.css";
import Spinner from "./Spinner.js";
import sampleNewsImg from "../assets/Sample_news.jpeg";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  toUpperCase = (string) => {
    return string.slice(0, 1).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };

    let title = this.props.category;
    document.title = `Monkey News - ${this.toUpperCase(title)}`;
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  componentDidMount() {
    this.updateNews();
  }

  handleNextClick = () => {
    // did refactoring of code to updateNews
    this.setState(
      (prevState) => ({
        page: prevState.page + 1,
      }),
      () => {
        this.updateNews();
      }
    );
  };

  handlePrevClick = () => {
    // did refactoring of code to updateNews
    this.setState(
      (prevState) => ({
        page: prevState.page - 1,
      }),
      () => {
        this.updateNews();
      }
    );
  };

  render() {
    return (
      <div className="news-container">
        <div className="container">
          <h2 className="text-center">
            Monkey News - Top {this.toUpperCase(this.props.category)} Headlines
          </h2>
          {this.state.loading && <Spinner />}
          <div className="row my-4 justify-content-center">
            {" "}
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 mb-4"
                    key={element.url}
                  >
                    {" "}
                    <NewsItems
                      title={element.title ? element.title.slice(0, 30) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 60)
                          : ""
                      }
                      imageUrl={
                        !element.urlToImage ? sampleNewsImg : element.urlToImage
                      }
                      newsUrl={element.url}
                      source={element.source.name}
                      date={element.publishedAt}
                      author={element.author}
                      category={this.props.category}
                    />
                  </div>
                );
              })}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-danger mx-2 col-4 col-sm-3 col-md-2 col-lg-1"
              onClick={this.handlePrevClick}
              disabled={this.state.page <= 1}
            >
              &larr; Prev
            </button>
            <button
              type="button"
              className="btn btn-danger mx-2 col-4 col-sm-3 col-md-2 col-lg-1"
              onClick={this.handleNextClick}
              disabled={
                this.state.page >=
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
