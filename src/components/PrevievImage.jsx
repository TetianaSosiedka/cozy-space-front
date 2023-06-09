import { useState } from 'react';

const PrevievImage = ({ file }) => {
  const [preview, setPreview] = useState(null);

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreview(reader.result);
  };

  return <img src={preview} alt="preview" width="200px" />;
};

export default PrevievImage;
