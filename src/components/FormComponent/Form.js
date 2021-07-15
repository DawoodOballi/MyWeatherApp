import React from "react";
import { connect } from "react-redux";
import { addCity } from "./../../redux/actions/cityAction";


class Form extends React.Component {
  state = {
    city: '',
  };

  handleChange = (event) => {
    const city = event.target.value;
    this.setState({ city });
    console.log({ city });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addCity(this.state.city);
    this.setState({city: ''});
  };

  render() {

    const {city} = this.state;
    return (
      <React.Fragment>
        <form id="addCity" onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label>Add City</label>
            <input
              class="form-control"
              type="text"
              name="addCity"
              value={city}
              onChange={this.handleChange}
              placeholder="Add city"
            />
            <small id="cityHelp" class="form-text text-muted">
              Simply search for your desired city to check for its weather.
            </small>
          </div>
        </form>
      </React.Fragment>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    addCity: cityName => dispatch(addCity(cityName))
  };
}
export default connect(null, mapDispatchToProps)(Form);
