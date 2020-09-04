/* eslint-disable no-extra-boolean-cast */
/* eslint-disable operator-linebreak */
/* eslint-disable no-lone-blocks */
/* eslint-disable object-curly-newline */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import jwtDecode from 'jwt-decode';
import AuthService from '../../../utils/AuthService';
import { findOne } from '../../../store/modules/incident/specific/actions';
import { editIncident } from '../../../store/modules/incident/update/actions';
import { deleteIncident } from '../../../store/modules/incident/delete/actions';
import { acceptIncident, rejectIncident } from '../../../store/modules/incident/accept and reject/actions';
import defaultImg from '../../../assets/images/broadcaster1.png';
import Spinner from '../../../components/Spinner';
import DynamicDashboard from '../../../components/DynamicDashboard/Dashboard';
import { requesterDashboard, adminDashboard } from '../../../assets/sidebar';
import profileImg from '../../../assets/icons/icons8-user-30.png';
import Button from '../../../components/Button';
import Popup from '../../../components/Popup';
import './specific.scss';

class ViewSpecific extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      incident: '',
      error: null,
      showPopup: false,
      message: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    await this.props.viewOne();
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  async handleSubmit() {
    const { title, image, category, body } = this.state;
    const { updateIncident } = this.props;
    const dataToUpdate = { title, category, body, image };

    const formData = new FormData();

    Object.entries(dataToUpdate).forEach(([key, value]) => {
      formData.append(key, value);
    });
    await updateIncident(formData);
  }

  async deleteRecord() {
    await this.props.destroyIncident();
  }

  async accept() {
    await this.props.incidentAcception();
  }

  async reject() {
    await this.props.incidentRejection();
  }

  render() {
    const token = AuthService.getToken();
    const { role } = !!token ? jwtDecode(token) : { role: '' };
    const board = role === 'requester' ? requesterDashboard :
      adminDashboard;
    const { incident } = this.props;
    return incident.isLoading ? (
            <Spinner />
    ) : (
            <div className="specific_wrapper">
              {this.state.showPopup ?
              <Popup {...this.props}
              updateIncident={this.handleSubmit}
              /> :
                null
              }
                <div className="specific_wrapper_card">
                    <div className="specific_wrapper_card_part1">
                        <img src={incident.incident.image_url || defaultImg} alt="incident-pic" />
                    </div>
                    <div className="specific_wrapper_card_part2">
                    <div className="specific_wrapper_card_part2_head">
                    <h2>{incident.incident.title}</h2>
                    </div>
                    <div className="specific_wrapper_card_part2_body">
                    <p>{incident.incident.body}</p>
                    <p><b>Category:</b> {incident.incident.category}</p>
                    <p><b>Status:</b> {incident.incident.status}</p>
                    <p><b>Written by:</b> {`${incident.incident.user_FirstName} ${incident.incident.user_LastName}`}</p>
                    <small><b>Written on:</b> {`${moment(incident.createdAt).format('L')}`}</small>
                    </div>
                    <div className="specific_wrapper_card_part2_footer">
                      { role === 'requester' ?
                    <div className="specific_wrapper_card_part2_footer_edit-btn">
                      <Button
                      value="Edit"
                      className="btn"
                      onClick={this.togglePopup.bind(this)}
                      />
                    </div>
                        : <div className="specific_wrapper_card_part2_footer_accept-btn">
                      <Button
                      value="Accept"
                      className="btn"
                      onClick={this.accept.bind(this)}
                      />
                    </div>
                       }
                    { role === 'requester' ?
                    <div className="specific_wrapper_card_part2_footer_delete-btn">
                      <Button
                      value="Delete"
                      className="btn"
                      onClick={this.deleteRecord.bind(this)}
                      />
                    </div>
                      : <div className="specific_wrapper_card_part2_footer_reject-btn">
                     <Button
                     value="Reject"
                     className="btn"
                     onClick={this.reject.bind(this)}
                     />
                   </div>
                       }
                    </div>
                    </div>
                </div>
                <DynamicDashboard
                 properties = {board}
                 profile = {profileImg}
                />
            </div>
    );
  }
}

const mapStateToProps = (state) => ({
  incident: state.specificIncident,
});

const mapDispatchToProps = (dispatch) => ({
  viewOne: () => dispatch(findOne()),
  updateIncident: (data) => dispatch(editIncident(data)),
  destroyIncident: () => dispatch(deleteIncident()),
  incidentAcception: () => dispatch(acceptIncident()),
  incidentRejection: () => dispatch(rejectIncident()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewSpecific);
