import React, {Component, PropTypes} from 'react';
import {toggle} from 'redux/modules/experiment';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Experiment as ExperimentComponent } from 'components';

@connect(
  (state) => ({liked: state.experiment.liked}),
  dispatch => bindActionCreators({toggle}, dispatch)
)
export default class Experiment extends Component {
  static propTypes = {
    liked: PropTypes.bool,
    toggle: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="container">
        <ExperimentComponent/>
      </div>
    );
  }
}
