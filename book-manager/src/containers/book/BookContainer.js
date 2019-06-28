import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Book from './Book'
const { fetch } = window

class BookContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      _id: '',
      title: '',
      author: '',
      category: '',
      numberOfPages: '',
      publicationYear: '',
      success: false
    }

    this.handleChangeField = this.handleChangeField.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    const { bookId } = this.props.match.params

    if (bookId) {
      this.loadBook(bookId)
    }
  }

  async loadBook (bookId) {
    const res = await fetch(`http://localhost:8080/books/${bookId}`)
    const book = await res.json()

    const {
      _id,
      title,
      author,
      category,
      numberOfPages,
      publicationYear } = book

    this.setState(() => ({
      _id,
      title,
      author,
      category,
      numberOfPages: numberOfPages.toString(),
      publicationYear: publicationYear.toString()
    }))
  }

  handleChangeField (e) {
    const { target: { name, value } } = e
    this.setState(() => ({ [name]: value }))
  }

  async handleSubmit (e) {
    e.preventDefault()

    const {
      _id,
      title,
      author,
      category,
      numberOfPages,
      publicationYear } = this.state

    const book = {
      title, author, category, numberOfPages, publicationYear
    }

    let res = { ok: false }

    if (_id) {
      res = await fetch(`http://localhost:8080/books/${_id}`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'put',
        body: JSON.stringify(book)
      })
    } else {
      res = await fetch('http://localhost:8080/books', {
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        body: JSON.stringify(book)
      })
    }

    if (res.ok) {
      this.setState(() => ({ success: true }))
    }
  }

  render () {
    return this.state.success
      ? <Redirect to='/' />
      : (
        <Book title={this.state.title}
          author={this.state.author}
          category={this.state.category}
          numberOfPages={this.state.numberOfPages}
          publicationYear={this.state.publicationYear}
          onChangeField={this.handleChangeField}
          onSubmit={this.handleSubmit} />
    )
  }
}

export default BookContainer
