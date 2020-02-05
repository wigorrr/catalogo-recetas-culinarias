import React from "react";
import Article from "./Article";
import { getArticles } from "../services/articles";

class ArticlesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      isFetch: true
    };
  }

  async componentDidMount() {
    const responseJson = await getArticles();

    this.setState({ articles: responseJson.articles, isFetch: false });
  }

  render() {
    const { isFetch } = this.state;
    const articleSub7 = this.state.articles.filter(
      article => article.subtype === "7"
    );

    if (isFetch) {
      return "Loading";
    }
    return articleSub7.map(article => (
      // <Article {...article}></Article> // se le pasan las props del objeto article, al componente article

      <Article
        name={article.headlines.basic}
        imgUrl={article.promo_items.basic.url}
        key={article._id}
        subtype={article.subtype}
        date={article.display_date}
      ></Article>
    ));
  }
}

export default ArticlesContainer;
