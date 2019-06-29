import React, { Component } from 'react'
import Home from './Home'
const { fetch, confirm, alert } = window

class HomeContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      books: []
    }

    this.handleClickDelete = this.handleClickDelete.bind(this)
  }

  componentDidMount () {
    this.loadBooks()
  }

  async loadBooks () {
    const res = await fetch('https://book-api-target.herokuapp.com/books')
    const books = await res.json()

    this.setState(() => ({
      books
    }))
  }

  async handleClickDelete (bookId) {
    const confirmation = confirm('Do you confirm?')

    if (confirmation) {
      const res = await fetch(`https://book-api-target.herokuapp.com/books/${bookId}`, { method: 'delete' })
      if (res.ok) {
        this.loadBooks()
      } else {
        alert('Something went wrong')
      }
    }
  }

  render () {
    return (
      <Home books={this.state.books} onClickDelete={this.handleClickDelete} />
    )
  }
}

export default HomeContainer
