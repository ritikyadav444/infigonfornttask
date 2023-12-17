import Image from '../components/Image/Image';

export default {
  title: 'Components/Image',
  component: Image,
  tags: ["autodocs"],

};

export const Default = () => (
  <Image src="https://th.bing.com/th?id=OIP.IwQSXcnxKULqFS52FmNMKwHaH7&w=241&h=258&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="A cute kitten" width={400} height={300} />
);

export const CustomDimensions = () => (
  <Image src="https://th.bing.com/th?id=OIP.IwQSXcnxKULqFS52FmNMKwHaH7&w=241&h=258&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="Another cute kitten" width={500} height={400} />
);
