/* eslint-disable camelcase */
/* eslint-disable object-curly-newline */
/* eslint-disable no-extra-boolean-cast */
import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import { connect } from 'react-redux';
import moment from 'moment';
import './styles/getProfile.scss';
import AuthService from '../../utils/AuthService';
import DynamiDashboard from '../../components/DynamicDashboard/Dashboard';
import profileImg from '../../assets/icons/icons8-user-30.png';
import { requesterDashboard, adminDashboard } from '../../assets/sidebar';
import { getProfile } from '../../store/modules/Profile/actions';
import Spinner from '../../components/Spinner';

class GetProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { },
      isLoading: false,
      error: null
    };
  }

  async componentDidMount() {
    await this.props.displayProfile();
  }

  render() {
    const token = AuthService.getToken();
    const { role } = !!token ? jwtDecode(token) : { role: '' };
    const board = role === 'requester' ? requesterDashboard
      : adminDashboard;
    const { user } = this.props;
    return user.isLoading ? (
      <Spinner />
    ) : (
            <div className="profile_wrapper">
                <div className="profile_wrapper_coverimage"></div>
                <div className="profile_wrapper_feed">
                    <div className="profile_wrapper_feed_part1">
                        <div className="profile_wrapper_feed_part1_img">
                            <img src={user.user.image_url || profileImg} alt="Profile pic"/>
                            <h5>Activity feed</h5>
                        </div>
                        <div className="profile_wrapper_feed_part1_names">
                            <h2>{`${user.user.firstName} ${user.user.lastName}`}</h2>
                            <p>@{user.user.user_name}</p>
                        </div>
                    </div>
                    <div className="profile_wrapper_feed_part2">
                        <a href="/editProfile" className="edit_btn">Edit profile</a>
                    </div>
                </div>
                <div className="profile_wrapper_card">
                    <div className="profile_wrapper_card_part1">
                        <h4>Intro</h4>
                          <p>
                          { user.user.gender ? `Gender: ${user.user.gender}`
                            : <span className="icon">nn</span>}Gender
                          </p>
                        <p>
                          { user.user.dob ? `Birthday: ${moment(user.user.dob).format('L')}`
                            : <span className="icon">nn</span>}Birthday
                          </p>
                        <p>
                          { user.user.address ? `Address: ${user.user.address}`
                            : <span className="icon">nn</span>}Address
                        </p>
                    </div>
                    <div className="profile_wrapper_card_part2">
                        <h4>Fill out your profile</h4>
                        <p>Add photos and info to your profile so people can find you easily and get to know you better!</p>
                    </div>
                </div>
                <DynamiDashboard
                properties={board}
                profile={profileImg}
                />
            </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userProfile,
});

const mapDispatchToProps = (dispatch) => ({
  displayProfile: () => dispatch(getProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GetProfile);
