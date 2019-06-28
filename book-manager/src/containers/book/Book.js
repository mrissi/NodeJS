import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import IconContainer from './../icon/IconContainer'
import './Book.css'

const Book = ({
  title,
  author,
  category,
  numberOfPages,
  publicationYear,
  onChangeField,
  onSubmit
}) => (
  <section className='Book'>
    <div>
      <Link to='/' className='button back' title='Back to books list'>
        <IconContainer icon='arrow-left' />
      </Link>
    </div>
    <form onSubmit={onSubmit}>
      <div className='full'>
        <label>Title<br />
          <input type='text' name='title' value={title} onChange={onChangeField} autoFocus />
        </label>
      </div>
      <div>
        <label>Author<br />
          <input type='text' name='author' value={author} onChange={onChangeField} />
        </label>
      </div>
      <div>
        <label>Category<br />
          <select name='category' value={category} onChange={onChangeField}>
            <option value=''>--</option>
            <option>Biografia</option>
            <option>Ficção</option>
            <option>Romance</option>
            <option>Tecnologia</option>
          </select>
        </label>
      </div>
      <div>
        <label>Number of pages<br />
          <input type='number' name='numberOfPages' min="0" value={numberOfPages} onChange={onChangeField} />
        </label>
      </div>
      <div>
        <label>Publication year<br />
          <input type='number' name='publicationYear' min="1900" max="2050" value={publicationYear} onChange={onChangeField} />
        </label>
      </div>
      <div className='full right'>
        <button type='submit'>Save</button>
      </div>
    </form>
  </section>
)

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  numberOfPages: PropTypes.string.isRequired,
  publicationYear: PropTypes.string.isRequired,
  onChangeField: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default Book
