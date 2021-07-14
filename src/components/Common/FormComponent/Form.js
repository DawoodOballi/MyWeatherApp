import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  return (
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Add City</label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter city"
        />
        <small id="cityHelp" class="form-text text-muted">
          Simply search for your desired city to check for its weather.
        </small>
      </div>
    </form>
  );
};

export default Form;
