import Map from '../components/Map/Map';

export default {
  title: 'Components/Map',
  component: Map,
  tags: ["autodocs"],

};

const defaultCenter = [51.505, -0.09];
const sampleMarkers = [
  { position: [51.505, -0.09], content: 'Marker 1' },
  { position: [51.515, -0.1], content: 'Marker 2' },
  { position: [51.495, -0.1], content: 'Marker 3' },
];

export const Default = () => <Map  markers={sampleMarkers} zoom={111} />;
