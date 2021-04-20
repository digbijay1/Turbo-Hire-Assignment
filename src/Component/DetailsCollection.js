import React from "react";
function DetailsCollection() {
  return (
    <div>
      <h3 className="preview">Preview</h3>
      <p className="preview">
        you will be able to customize the fields in the later stage
      </p>

      <div className="form">
        <div className="divColor">
          <h5 className="digu">Name of the Enquiry Form</h5>
          <p className="digu">lorem isajdahdgiuagdinibi</p>
          <p className="digu">ldaosdihohoiduahdiuahdiu</p>
        </div>

        <div className="form1">
          <form>
            <label forName="name">1.First Name*</label>
            <br />
            <input
              className="inputBox"
              type="text"
              name="name"
              placeholder="Enter a valid salary in numbers  e.g 50,000/-"
            />
          </form>
          <form>
            <label forName="name">2.Email*</label>
            <br />
            <input
              className="inputBox"
              type="text"
              name="name"
              placeholder="Example-userid@gmail.com"
            />
          </form>
          <form>
            <label forName="name">3.Date Of Birth</label>
            <br />
            <input
              className="inputBox"
              type="date"
              name="name"
              placeholder="Enter a valid salary in numbers  e.g 50,000/-"
            />
          </form>
          <form>
            <label forName="name">.First Name*</label>
            <br />
            <input
              className="inputBox"
              type="text"
              name="name"
              placeholder="Enter a valid salary in numbers  e.g 50,000/-"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default DetailsCollection;
