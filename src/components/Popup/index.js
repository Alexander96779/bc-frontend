/* eslint-disable object-curly-newline */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputField from '../InputField';
import Button from '../Button';
import './popup.scss';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incident: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      incident: {
        ...prevState.user,
        [name]: value,
      },
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const { updateIncident } = this.props;
    const { incident } = this.state;
    console.log(incident);
    updateIncident(incident);
  }

  render() {
    const { incident } = this.props;
    const {
      title,
      category,
      body
    } = incident.incident;
    return (
        <div className="popup_container">
          <div className="popup_container_card">
        <div className="popup_container_head">
          <h2>Update incident</h2>
        </div>
        <div className="popup_container_form">
            <form onSubmit={this.handleSubmit}>
            <div>
                    <label htmlFor="title">
                        <span>INCIDENT TITLE</span>
                        <InputField
                        type="text"
                        name="title"
                        id="title"
                        required
                        placeholder="Title"
                        value={title}
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
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
                    <textarea
                    cols="45"
                    rows="5"
                    className="textarea"
                    name="body"
                    id="body"
                    placeholder="Incident content goes here"
                    required
                    defaultValue={body}
                    onChange={this.handleChange}
                    />
                </label>
            </div>
            <div className="popup_container_form_buttons">
                <div>
                <Button
                type="submit"
                value="Update"
                className="btn"
                />
                </div>
                <div>
                <Button
                type="submit"
                value="Cancel"
                className="btn"
                />
                </div>
            </div>
            </form>
        </div>
        </div>
    </div>
    );
  }
}

Popup.propTypes = {
  incident: PropTypes.objectOf(PropTypes.any),
  updateIncident: PropTypes.func.isRequired

};

Popup.defaultProps = { incident: {}, };

export default Popup;
