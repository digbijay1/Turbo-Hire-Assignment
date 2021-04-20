import React from 'react'

function InterviewAvailibility() {
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
              <label forName="name">1.Email*</label>
              <br />

              <input
                className="inputBox"
                type="text"
                name="name"
                placeholder="  Enter a description for the long answers"
              />
              <br />
              <br />

              <label forName="name">2. Location </label>
              <br />

              <input
                className="inputBox"
                type="text"
                name="name"
                placeholder="  Enter a description for the long answers"
              />
              <br />
              <br />

              <label forName="name">3. Interview Date </label>
              <br />

              <input
                className="inputBox191"
                type="date"
                name="name"
                placeholder="  Enter a description for the long answers"
              />
              <br />
              <br />
              <label forName="name">4. Interview Time </label>
              <br />

              <input
                className="inputBox191"
                type="time"
                name="name"
                placeholder="  12:00:00"
              />
              <br />
              <br />

              <div>
                <label forName="name">5. Time Zone </label>

                <select name="cars" id="cars">
                  <option value="volvo">
                    search or Select a time zone from below
                  </option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
<br/>

              <div>
                <label forName="name">6.Interview Medium </label>

                <select name="cars" id="cars">
                  <option value="volvo">
                    search or Select a medium of interview from below
                  </option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </>
    );
    
}

export default InterviewAvailibility
