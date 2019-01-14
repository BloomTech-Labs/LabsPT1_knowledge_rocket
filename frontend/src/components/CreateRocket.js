import React from 'react';

class CreateRocket extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

        <form>
          <label>
            Name
            <input />
          </label>
          <label>
            Two Days - Review Text
            <textarea />
          </label>
          <label>
            Two Days - Question
            <textarea />
          </label>
          <label>
            <div>
              Question 1
              <textarea/>
              <input type="radio" />{' '}
            </div>
            <div>
              Question 2
              <textarea/>
              <input type="radio" />{' '}
            </div>
            <div>
              Question 3
              <textarea/>
              <input type="radio" />{' '}
            </div>
            <div>
              Question 4
              <textarea/>
              <input type="radio" />{' '}
            </div>
          </label>
        </form>
      </div>
    )
  }
}


export default CreateRocket;