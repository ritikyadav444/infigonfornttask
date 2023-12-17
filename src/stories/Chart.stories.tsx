import Chart from '../components/Charts/Charts';

export default {
  title:'Components/Chart',
  component: Chart,
  tags: ["autodocs"],

};


const sampleData = [65, 59, 80, 81, 56, 55, 40];
const sampleLabels = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6', 'Label 7'];

export const Default = () => <Chart data={sampleData} labels={sampleLabels} />;
