import React from 'react'

function StatementOfPurpose() {
    return (
      <>
        <div className="header12">
          <h4>Preview</h4>
          <h6>You will be able to customize the field in the larger stage</h6>
        </div>

        <div className="form12">
          <div className="form123">
            <h4>Name of the Enquiry Form</h4>
            <p>lorem ipsum loream ispusm loream iospsumn</p>
            <p>lorem ipsum loream ispusm loream iospsumn</p>
          </div>
          <div className="text-container">
            <form className="document-collection">
              <label forName="name">
                1. Tell me about a time you were asked to do something you had
                never done before.how did you react?what did you learn?{" "}
              </label>
              <br />

              <input
                className="inputBox"
                type="text"
                name="name"
                placeholder="  Enter a description for the long answers"
              />
              <br />
              <br />

              <label forName="name">2.  Tell me about the last time something significant didn't go according to plain at work.What was your role? what was the outcome?  </label>
              <br />

              <input
                className="inputBox"
                type="text"
                name="name"
                placeholder="  Enter a description for the long answers"
              />
              <br />
              <br />

              <label forName="name">3. What are the three things that are the most important to you in a job? </label>
              <br />

              <input
                className="inputBox"
                type="text"
                name="name"
                placeholder="  Enter a description for the long answers"
              />
            </form>
          </div>
        </div>
      </>
    );
}

export default StatementOfPurpose
