import { Hearts } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Hearts
      height="100"
      width="100%"
      color="#bade9c"
      ariaLabel="hearts-loading"
      wrapperStyle={{ marginTop: '100px' }}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
