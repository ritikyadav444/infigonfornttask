import Table from '../components/Table/Table';

export default {
  title: 'Components/Table',
  component: Table,
  tags: ["autodocs"],

};

const sampleData = [
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Doe', age: 30 },
  { id: 3, name: 'Bob Smith', age: 22 },
];

export const Default = () => <Table data={sampleData} />;
