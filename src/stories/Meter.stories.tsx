import Meter from '../components/Meter/Meter';

export default {
  title: 'Components/Meter',
  component: Meter,
  tags: ["autodocs"],

};

export const Default = () => <Meter value={50} min={0} max={100} />;
export const Custom = () => <Meter value={250} min={9} max={509} />;
