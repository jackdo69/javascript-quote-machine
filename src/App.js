import React from 'react';
import './App.css';
import ReactFCCtest from 'react-fcctest';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
class RandomQuote extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: '',
      author: ''
    }
  }

  componentDidMount() {
    this.getQuote()
  }

  getQuote() {
    let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

      axios.get(url)
      .then(res => {
        let data = res.data.quotes
        let quoteNum = Math.floor(Math.random() * data.length)
        let randomQuote = data[quoteNum]

        this.setState({
          quote: randomQuote['quote'],
          author: randomQuote['author']
        })
      })
  }

  getNewQuote = () => {
    this.getQuote()
  }


  render() {
    const { quote, author } = this.state
    return (
      <div id='wrapper'>
      <div id='fcctest'>
        <ReactFCCtest />
      </div>
      <div id='quote-box'>
        <div id='text'>
          <p>"{quote}"</p>
        </div>
        <div id='author'>
          <h5>{author}</h5>
        </div>



        <div id="buttons">
        <a className="twitter-share-button" id='tweet-quote' href={`https://twitter.com/intent/tweet?text=${quote} ${author}`}  title="Post this quote on twitter!">
          Tweet
        </a>
        <button
        id='new-quote'
        onClick={this.getNewQuote}
        type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autoComplete="off">
  New Quote
</button>
        </div>

      </div>
      </div>
    )
  }
}
export default RandomQuote;
