import React from 'react'
import { MdAttachment } from "react-icons/md";
import "./DocumentCollection.css"
function DocumentCollection() {
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
            <label forName="name">1. 10th Marksheet* </label>
            <br />
            <span class="clearBtn">
              <MdAttachment />
            </span>
            <input
              className="inputBox"
              type="text"
              name="name"
              placeholder="         Attach File up to 5 kb"
            />

            <label forName="name">2. 12th Marksheet* </label>
            <br />
            <span class="clearBtn">
              <MdAttachment />
            </span>
            <input
              className="inputBox"
              type="text"
              name="name"
              placeholder="         Attach File up to 5 kb"
            />

            <label forName="name">3. Graduation Marksheet* </label>
            <br />
            <span class="clearBtn">
              <MdAttachment />
            </span>
            <input
              className="inputBox"
              type="text"
              name="name"
              placeholder="         Attach File up to 5 kb"
            />

            <label forName="name">4.Post Graduation Marksheet* </label>
            <br />
            <span class="clearBtn">
              <MdAttachment />
            </span>
            <input
              className="inputBox"
              type="text"
              name="name"
              placeholder="         Attach File up to 5 kb"
            />

            <label forName="name">5. Offer Letters* </label>
            <br />
            <span class="clearBtn">
              <MdAttachment />
            </span>
            <input
              className="inputBox"
              type="text"
              name="name"
              placeholder="         Attach File up to 5 kb"
            />

            <label forName="name">6. Salary Slips* </label>
            <br />
            <span class="clearBtn">
              <MdAttachment />
            </span>
            <input
              className="inputBox"
              type="text"
              name="name"
              placeholder="         Attach File up to 5 kb"
            />

            <label forName="name">7. Bank Statement </label>
            <br />
            <span class="clearBtn">
              <MdAttachment />
            </span>
            <input
              className="inputBox"
              type="text"
              name="name"
              placeholder="         Attach File up to 5 kb"
            />

            <label forName="name">8. 10th Marksheet* </label>
            <br />
            <span class="clearBtn">
              <MdAttachment />
            </span>
            <input
              className="inputBox"
              type="text"
              name="name"
              placeholder="         Attach File up to 5 kb"
            />

            <label forName="name">1. 10th Marksheet* </label>
            <br />
            <span class="clearBtn">
              <MdAttachment />
            </span>
            <input
              className="inputBox"
              type="text"
              name="name"
              placeholder="         Attach File up to 5 kb"
            />

          </form>
        </div>
      </div>
    </>
  );
}

export default DocumentCollection
