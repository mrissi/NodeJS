import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import IconContainer from './../icon/IconContainer'
import './Home.css'

const Home = ({ books, onClickDelete }) => (
  <section className='Home'>
    <Link to='/books/new' className='floating-button' title='Add new book'>
      <IconContainer icon='plus' />
    </Link>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <tr key={book._id}>
            <td>
              <Link to={`/books/${book._id}`} title='Open book detail'>
                {book.title}
              </Link>
            </td>
            <td>{book.author}</td>
            <td>
              <button onClick={() => onClickDelete(book._id)} className='delete' title='Delete book'>
                <IconContainer icon='trash-2' />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
)

Home.propTypes = {
  books: PropTypes.array.isRequired
}

export default Home
