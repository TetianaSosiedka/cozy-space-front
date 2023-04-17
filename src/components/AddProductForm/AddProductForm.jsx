import { useFormik } from 'formik';
import { FormLabel, FormControl, FormGroup } from '@mui/material';

import MenuItem from '@mui/material/MenuItem';

import TextField from 'components/TextField/TextField';
import CheckboxField from 'components/CheckboxField/CheckboxField';
import Button from 'components/Button/Button.jsx';
import PrevievImage from 'components/PreviewImage';
import { brands, categories, markers } from 'constants/index';
import { AddProductSchema } from 'helpers/ValidationShemas';

import { AddForm, UploadButton, Preview } from './AddProductForm.styled';
import { useRef } from 'react';

const AddProductForm = () => {
  const fileRef = useRef(null);

  const onSubmit = async values => {
    console.log(values);
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      coverImg: null,
      galerry: [],
      title: '',
      name: '',
      price: '',
      volume: '',
      brand: '',
      categorie: '',
      markers: [],
      new: false,
      available: false,
      shortDescription: '',
      fullDescription: '',
    },
    validationSchema: AddProductSchema,
    onSubmit,
  });

  return (
    <AddForm onSubmit={handleSubmit} autoComplete="off">
      <Preview>
        {values.coverImg && <PrevievImage file={values.coverImg} />}
      </Preview>

      <UploadButton variant="contained" component="label">
        Обрати обкладинку
        <input
          id="coverImg"
          ref={fileRef}
          hidden
          accept="image/*"
          type="file"
          onChange={e => {
            setFieldValue('coverImg', e.target.files[0]);
          }}
          onClick={() => {
            fileRef.current.click();
          }}
        />
      </UploadButton>

      <UploadButton variant="contained" component="label">
        Завантажити галерею
        <input
          id="galerry"
          hidden
          accept="image/*"
          multiple
          type="file"
          onChange={e => {
            setFieldValue('galerry', e.target.files);
          }}
        />
      </UploadButton>
      <TextField
        id="title"
        label="Заголовок"
        type="text"
        value={values.title}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.title && Boolean(errors.title)}
        helperText={touched.title && errors.title}
      ></TextField>
      <TextField
        id="name"
        label="Назва"
        type="text"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.name && Boolean(errors.name)}
        helperText={touched.name && errors.name}
      ></TextField>
      <TextField
        id="shortDescription"
        label="Стислий опис"
        type="text"
        multiline
        rows={3}
        value={values.shortDescription}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.shortDescription && Boolean(errors.shortDescription)}
        helperText={touched.shortDescription && errors.shortDescription}
      ></TextField>
      <TextField
        id="fullDescription"
        label="Повний опис"
        type="text"
        multiline
        rows={5}
        value={values.fullDescription}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.fullDescription && Boolean(errors.fullDescription)}
        helperText={touched.fullDescription && errors.fullDescription}
      ></TextField>
      <TextField
        id="price"
        label="Ціна"
        type="number"
        value={values.price}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.price && Boolean(errors.price)}
        helperText={touched.price && errors.price}
      ></TextField>
      <TextField
        id="volume"
        label="Об'єм"
        type="number"
        value={values.volume}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.volume && Boolean(errors.volume)}
        helperText={touched.volume && errors.volume}
      ></TextField>
      <TextField
        id="brand"
        select
        label="Бренд"
        name="brand"
        value={values.brand}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.brand && Boolean(errors.brand)}
        helperText={touched.brand && errors.brand}
      >
        {brands.map(brand => (
          <MenuItem key={brand} value={brand}>
            {brand}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="categorie"
        select
        label="Категорія"
        name="categorie"
        value={values.categorie}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.categorie && Boolean(errors.categorie)}
        helperText={touched.categorie && errors.categorie}
      >
        {categories.map(({ key, subcategory }) => {
          if (key !== 'brands' && key !== 'tone' && key !== 'novelty') {
            return subcategory.map(item => (
              <MenuItem key={Object.keys(item)[0]} value={Object.keys(item)[0]}>
                {Object.values(item)[0]}
              </MenuItem>
            ));
          }
          return key;
        })}
      </TextField>

      <CheckboxField
        name="new"
        label="Новинка"
        value={true}
        onChange={handleChange}
      />
      <CheckboxField
        name="available"
        label="В наявності"
        value={true}
        onChange={handleChange}
      />

      <FormControl component="fieldset">
        <FormLabel component="legend">Маркери</FormLabel>
        <FormGroup>
          {markers.map(marker => (
            <CheckboxField
              name="markers"
              key={marker.value}
              value={marker.value}
              label={marker.label}
              onChange={handleChange}
            />
          ))}
        </FormGroup>
      </FormControl>
      <Button disabled={isSubmitting} type={'submit'}>
        Додати
      </Button>
    </AddForm>
  );
};

export default AddProductForm;
