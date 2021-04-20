import React from "react";
function DetailsCollection() {
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
            <label forName="name">1.Name*</label>
            <br />

            <input
              className="inputBox"
              type="text"
              name="name"
              placeholder="  Enter the name"
            />
            <br />
            <br />

            <label forName="name">2. Email* </label>
            <br />

            <input
              className="inputBox"
              type="text"
              name="name"
              placeholder="  Example:-userid@gmail.com"
            />
            <br />
            <br />

            <label forName="name">3. Date Of Birth </label>
            <br />

            <input
              className="inputBox191"
              type="date"
              name="name"
              placeholder="  "
            />
            <br />
            <br />
            <label forName="name">4. Contact no </label>
            <br />

            <input
              className="inputBox"
              type="text"
              name="name"
              placeholder=" Enter your 10 digit contact No "
            />
            <br />
            <br />

           
          </form>
        </div>
      </div>
    </>
  );
}

export default DetailsCollection;
