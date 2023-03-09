import { Hearts } from 'react-loader-spinner';

const Loader = ({ margin = '100px 0 0 0' }) => {
  return (
    <Hearts
      height="100"
      width="100%"
      color="#bade9c"
      ariaLabel="hearts-loading"
      wrapperStyle={{ margin: margin }}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
