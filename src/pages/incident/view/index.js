/* eslint-disable no-unused-vars */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import defaultImg from '../../../assets/images/broadcaster1.png';
import DynamicDashboard from '../../../components/DynamicDashboard/Dashboard';
import { requesterDashboard } from '../../../assets/sidebar';
import profileImg from '../../../assets/icons/icons8-user-30.png';
import Spinner from '../../../components/Spinner';
import { viewAll } from '../../../store/modules/incident/view/actions';
import './view.scss';

class ViewIncidents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      incidents: [],
      error: null,
    };
  }

  async componentDidMount() {
    await this.props.displayRecords();
  }

  render() {
    const { incidents } = this.props;
    return incidents.isLoading ? (
        <Spinner />
    ) : (
            <div className="view_wrapper">
                <div className="view_wrapper_head">
                <h2>All created incidents</h2>
                </div>
                <div className="view_wrapper_body">
                {incidents && incidents.incidents.length > 0 ?
                  incidents.incidents.map((incident, index) => (
                    <div key={incident.id}>
                <a href="/readmore">
                <div className="view_wrapper_body_card">
                <img src={incident.image_url || defaultImg} alt="incident pic" />
                  <h3>{incident.title}</h3>
                  <p><b>Category:</b> {incident.category}</p>
                  <p><b>Written by:</b> {`${incident.user_FirstName} ${incident.user_LastName}`}</p>
                  <small><b>Written on:</b> {`${moment(incident.createdAt).format('L')}`}</small>
                </div>
                </a>
                </div>
                  ))
                  :
                <div className="view_wrapper_body_noincident">
                <h2>No incident found</h2>
              </div>
                    }
                </div>
                <DynamicDashboard
                 properties = {requesterDashboard}
                 profile = {profileImg}
                />
            </div>
    );
  }
}

const mapStateToProps = (state) => ({
  incidents: state.getAll,
});

const mapDispatchToProps = (dispatch) => ({
  displayRecords: () => dispatch(viewAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewIncidents);
