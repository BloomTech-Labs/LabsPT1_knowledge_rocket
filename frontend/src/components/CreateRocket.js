import React from 'react';

class CreateRocket extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      twoDays: {
        text: '',
        question: '',
        answer1: '',
        answer2: '',
        answer3: '',
        answer4: ''
      },
      twoWeeks: {
        text: '',
        question: '',
        answer1: '',
        answer2: '',
        answer3: '',
        answer4: ''
      },
      twoMonths: {
        text: '',
        question: '',
        answer1: '',
        answer2: '',
        answer3: '',
        answer4: ''
      }
    }
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
              Answer 1
              <textarea/>
              <input type="radio" />{' '}
            </div>
            <div>
              Answer 2
              <textarea/>
              <input type="radio" />{' '}
            </div>
            <div>
              Answer 3
              <textarea/>
              <input type="radio" />{' '}
            </div>
            <div>
              Answer 4
              <textarea/>
              <input type="radio" />{' '}
            </div>
          </label>
        </form>
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
              Answer 1
              <textarea/>
              <input type="radio" />{' '}
            </div>
            <div>
              Answer 2
              <textarea/>
              <input type="radio" />{' '}
            </div>
            <div>
              Answer 3
              <textarea/>
              <input type="radio" />{' '}
            </div>
            <div>
              Answer 4
              <textarea/>
              <input type="radio" />{' '}
            </div>
          </label>
        </form>
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
              Answer 1
              <textarea/>
              <input type="radio" />{' '}
            </div>
            <div>
              Answer 2
              <textarea/>
              <input type="radio" />{' '}
            </div>
            <div>
              Answer 3
              <textarea/>
              <input type="radio" />{' '}
            </div>
            <div>
              Answer 4
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