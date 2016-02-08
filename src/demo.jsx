import * as React from 'react'
import * as ReactChart from 'react-chartjs';

export default class Demo extends React.Component {
  static displayName = 'Demo';

  render() {
    const Bar = ReactChart.Bar;
    const chartData = {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      datasets: [
        {
          label: "My First dataset",
          fillColor: "rgba(151,187,205,0.5)",
          strokeColor: "rgba(220,220,220,0.8)",
          highlightFill: "rgba(220,220,220,0.75)",
          highlightStroke: "rgba(220,220,220,1)",
          data: [8.00, 11.00, 8.15, 9.30, 8.00]
        }
      ]
    };


    const chartOptions = {
    };

    return (<div>
      <h1>Demo is nice</h1>
      <Bar data={chartData} options={chartOptions} width="600" height="600"/>
    </div>);
  }
}
