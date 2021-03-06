import React from 'react';
import './themeChangeStyle.scss';
import PropTypes from 'prop-types';

import { connect } from "react-redux";
import { actionChangeTheme } from "../../actions/theme";

import { defaultTheme, winterTheme } from '../../data/themes';

const mapStateToProps = (state) => ({
  theme: state.theme.theme
});

const mapDispatchToProps = (dispatch) => ({
  dispatchOnThemeChange: (theme) => dispatch(actionChangeTheme(theme))
});

class Themes extends React.Component {

  changeTheme = (event) => {
    this.props.dispatchOnThemeChange(event.target.value);
  }

  render() {  
    return (
      <div className = "themes">
        <label> Theme </label>
        <select value={this.props.theme} onChange={this.changeTheme}>
          <option value={defaultTheme}> Default </option>
          <option value={winterTheme}> Winter </option>
        </select>
      </div>
    )
  }
}

Themes.propTypes = {

  dispatchOnThemeChange: PropTypes.func.isRequired,
  theme: PropTypes.string

};

Themes.defaultProps = {

  theme: defaultTheme

};

export default connect(mapStateToProps, mapDispatchToProps)(Themes);
