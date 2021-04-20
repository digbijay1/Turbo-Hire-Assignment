import React from "react";
import StatementOfPurpose from "./StatementOfPurpose";

import DocumentCollection from "./DocumentCollection";
import DetailsCollection from "./DetailsCollection";
import InterviewAvailibility from "./InterviewAvailibility";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <Router>
      <div>
        <h1>hlow</h1>
      </div>

      <div className="row">
        <div className="col-6">
          <div className="NewForm">
            <div className="smallBox"></div>
            <div className="alignmentOf">
              <h6>New Form0</h6>
              <p>lorem ipsum sdaidhiuabdiubaidbasibd</p>
            </div>
          </div>

          <h6 className="explore">Explore the following Templates:</h6>

          <NavLink exact activeClassName="active" to="/">
            <div className="NewForm">
              <div className="smallBox"></div>
              <div className="alignmentOf">
                <h6>Details Collection</h6>
                <p>lorem ipsum sdaidhiuabdiubaidbasibd</p>
              </div>
            </div>
          </NavLink>
          <NavLink activeClassName="active" to="/documentCollection">
            <div className="NewForm">
              <div className="smallBox"></div>
              <div className="alignmentOf">
                <h6>Document Collection</h6>
                <p>lorem ipsum sdaidhiuabdiubaidbasibd</p>
              </div>
            </div>
          </NavLink>
          <NavLink activeClassName="active" to="/statementOfPurpose">
            <div className="NewForm">
              <div className="smallBox"></div>
              <div className="alignmentOf">
                <h6>Statement Of Purpose</h6>
                <p>lorem ipsum sdaidhiuabdiubaidbasibd</p>
              </div>
            </div>
          </NavLink>
          <NavLink activeClassName="active" to="/interviewAvailibility">
            <div className="NewForm">
              <div className="smallBox"></div>
              <div className="alignmentOf">
                <h6>Interview Availibility</h6>
                <p>lorem ipsum sdaidhiuabdiubaidbasibd</p>
              </div>
            </div>
          </NavLink>
        </div>

        <div class="col-6" id="digbijay">
          <Switch>
            <Route path="/" exact component={DetailsCollection} />

            <Route path="/statementOfPurpose" component={StatementOfPurpose} />
            <Route path="/documentCollection" component={DocumentCollection} />
            <Route
              path="/interviewAvailibility"
              component={InterviewAvailibility}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Nav;
