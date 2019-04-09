import { Link } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';
import { FadeTransition } from 'lib/components/transitions';

import Graph from './common/Graph'
import ToolBar from './common/ToolBar'

export default class MetricsGraph extends React.Component {

  constructor(props){
  	super(props);
    this.state = {
      resolution: 1100,
    }
  }

  componentDidMount() {
    this.props.loadMetricsDataOnce(this.props.instanceId);
  }

  render(){
    return (
      <div>
        <ToolBar
          resolution={this.state.resolution}
          step={this.props.metrics.step}
          sliderValue={this.props.metrics.sliderValue}
          handleSliderValueChange={this.props.handleSliderValueChange}
          isFetching={this.props.metrics.isFetching}
        />
        <Graph
          name="Memory Usage"
          data={this.props.metrics.data}
          yScale={[0,100]}
          enableArea={true}
          resolution={this.state.resolution}
          legendUnit="%"
        />
      </div>
    )
  }
}
