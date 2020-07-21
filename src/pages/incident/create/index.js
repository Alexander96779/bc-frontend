/* eslint-disable object-curly-newline */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import InputField from '../../../components/InputField';
import Button from '../../../components/Button';
import DynamicDashboard from '../../../components/DynamicDashboard/Dashboard';
import { requesterDashboard } from '../../../assets/sidebar';
import profileImg from '../../../assets/icons/icons8-user-30.png';
import { createIncident } from '../../../store/modules/incident/create/actions';
import './create.scss';

class CreateIncident extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.checkTitle = this.checkTitle.bind(this);
    this.checkBody = this.checkBody.bind(this);
    this.resetInput = this.resetInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImg = this.handleImg.bind(this);
    this.state = {
      title: '',
      image: null,
      category: '',
      body: '',
      isLoading: false,
      error: '',
      titleError: '',
      bodyError: '',
      isTitleValid: false,
      isBodyValid: false,
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  handleImg(event) {
    const image = event.target.files[0];
    if (!image.name.match(/\.(jpg|jpeg|png)$/)) {
      swal({
        title: 'Error',
        text: 'Please select valid image.',
        icon: 'error',
        buttons: 'Close',
      });
      return;
    }
    this.setState((prevState) => ({
      ...prevState,
      image }));
  }

  checkTitle(e) {
    const validTitleRegex = /^[a-zA-Z]{5,}/;
    if (!validTitleRegex.test(e.target.value)) {
      this.setState({
        titleError: 'Should be alphabetic and atleast 5 characters',
        isTitleValid: false,
      });
    } else {
      this.setState({
        titleError: '',
        isTitleValid: true,
      });
    }
  }

  checkBody(e) {
    const validBodyRegex = /^[a-zA-Z]{10,}/;
    if (!validBodyRegex.test(e.target.value)) {
      this.setState({
        bodyError: 'Should be alphabetic and atleast 10 characters long',
        isBodyValid: false,
      });
    } else {
      this.setState({
        bodyError: '',
        isBodyValid: true,
      });
    }
  }

  resetInput(e) {
    if (e.target.id === 'title') {
      this.setState({ titleError: '', isTitleValid: false });
    }
    if (e.target.id === 'body') {
      this.setState({ bodyError: '', isBodyValid: false });
    }
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { title, image, category, body } = this.state;
    const { saveIncident } = this.props;
    const dataToUpdate = { title, category, body, image };

    const formData = new FormData();

    Object.entries(dataToUpdate).forEach(([key, value]) => {
      formData.append(key, value);
    });
    await saveIncident(formData);
  }

  render() {
    const { title, category, body, titleError, bodyError } = this.state;
    return (
<div className="create_wrapper">
    <div className="create_wrapper_card">
        <div className="create_wrapper_card_header">
          <h2>Fill this form to report an incident</h2>
        </div>
        <div className="create_wrapper_card_body">
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="title">
                        <span>INCIDENT TITLE</span>
                          <div className="error">{titleError}</div>
                        <InputField
                        type="text"
                        name="title"
                        id="title"
                        required
                        placeholder="Title"
                        value={title}
                        onChange={this.handleChange}
                        onKeyUp={this.checkTitle}
                        onFocus={this.resetInput}
                        />
                    </label>
                </div>
                <div className="create_wrapper_card_body_attachment">
                    <label htmlFor="image">
                        <span>ATTACH IMAGE</span>
                        <input
                        type="file"
                        className="file"
                        name="image"
                        id="image"
                        onChange={this.handleImg}
                        />
                    </label>
                </div>
                <div className="form_content__inputField">
            <label htmlFor="category">
              <span className="form_content__inputField___label">CATEGORY</span>
              <div className="form_content__inputField__select">
                <select
                  className="form_content__inputField___input"
                  name="category"
                  defaultValue={category}
                  onChange={this.handleChange}
                >
                  <option value="" disabled className="placeholder">
                    Choose category
                  </option>
                  <option value="Red flag">Red flag</option>
                  <option value="Intervention">Intervention</option>
                </select>
              </div>
            </label>
          </div>
            <div className="create_wrapper_card_body_textarea">
                <label htmlFor="body">
                    <span>BODY</span><br></br>
                    <div className="error">{bodyError}</div>
                    <textarea
                    cols="45"
                    rows="5"
                    className="textarea"
                    name="body"
                    id="body"
                    value={body}
                    placeholder="Incident content goes here"
                    required
                    onChange={this.handleChange}
                    onKeyUp={this.checkBody}
                    onFocus={this.resetInput}
                    />
                </label>
            </div>
                <Button className="btn" type="submit" value="Create incident"/>
            </form>
        </div>
    </div>
    <DynamicDashboard
    properties = {requesterDashboard}
    profile = {profileImg}
    />
</div>
    );
  }
}

const mapSTateToProps = (state) => ({
  incident: state.incidentCreate,
});

const mapDispatchToProps = (dispatch) => ({
  saveIncident: (data) => dispatch(createIncident(data)),
});
export default connect(mapSTateToProps, mapDispatchToProps)(CreateIncident);
