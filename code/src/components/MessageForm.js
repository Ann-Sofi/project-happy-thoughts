import React from 'react';

const MessageForm =({onFormSubmit, newMessage, newMessageChange}) => {

  return (
    <section className="form-container">
      <form onSubmit={ onFormSubmit}
        className="form-box">
        <label htmlFor="newMessage">What are you happy about today?</label>
        <textarea
          className="new-message"
          rows="4"
          cols="50"
          placeholder="Enter thought here.."
          id="newMessage"
          type="text"
          value={newMessage}
          onChange={newMessageChange}
        />
        <button className="button" type="submit"><span role="img" aria-label="heart">
          {"❤️"}
        </span> Send happy thought!<span role="img" aria-label="heart">
          {"❤️"}
        </span></button>
      </form>
    </section>

  )
}

export default MessageForm;