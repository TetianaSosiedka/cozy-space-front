import { useState } from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import { RegisterSchema } from 'helpers/ValidationShemas';
import { useRegisterMutation } from 'redux/Auth/authApi';
import { cleaningObject } from 'helpers/cleaningObject.js';

import Container from 'components/Container/Container';
import Footer from 'components/Footer/Footer';
import Title from 'components/Title/Title';
import TextField from 'components/TextField/TextField.jsx';
import { countries } from 'constants/countries.js';
import { regions } from 'constants/regions.js';
import Button from 'components/Button/Button.jsx';

import {
  WarningMessage,
  FormsContainer,
  RegisterForm,
} from './RegisterPage.styled.jsx';

const RegisterPage = () => {
  const [
    register /*,
    {
      isError, isLoading, isSuccess
    },*/,
    res,
  ] = useRegisterMutation();
  const [finishFirstForm, setFinishFirstForm] = useState(false);

  const firstRegisterForm =
    document.getElementsByClassName('firstRegisterForm')[0];
  const lastRegisterForm =
    document.getElementsByClassName('lastRegisterForm')[0];

  const toggleForm = () => {
    setFinishFirstForm(!finishFirstForm);

    if (!finishFirstForm) {
      firstRegisterForm.classList.add('visually-hidden');
      lastRegisterForm.classList.remove('visually-hidden');

      return;
    }

    firstRegisterForm.classList.remove('visually-hidden');
    lastRegisterForm.classList.add('visually-hidden');
  };

  const onSubmit = async ({ confirmPassword, ...restValues }) => {
    if (finishFirstForm === true) {
      restValues.phone = restValues['phone'].replace('-', '').replace(' ', '');
      const submitValues = cleaningObject(restValues);

      await register(submitValues);
      console.log(res);
      return;
    }

    toggleForm();
  };

  const handleReturn = () => {
    toggleForm();
  };

  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    isSubmitting,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      surname: '',
      phone: '',
      country: '',
      region: '',
      city: '',
      index: '',
      post: '',
    },
    validationSchema: RegisterSchema,
    onSubmit,
  });

  return (
    <>
      <Container>
        <Title>Реєстрація</Title>
        <WarningMessage>
          Якщо ви вже зареєстровані, перейдіть на{' '}
          <Link to="/login">сторінку авторизації</Link>
        </WarningMessage>
        <FormsContainer>
          <RegisterForm
            className="firstRegisterForm"
            onSubmit={handleSubmit}
            autoComplete="on"
          >
            <TextField
              id="email"
              label="Email"
              type="email"
              value={values.email.trim()}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
            <TextField
              id="password"
              label="Пароль"
              type="password"
              value={values.password.trim()}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />
            <TextField
              id="confirmPassword"
              label="Підтвердити пароль"
              type="password"
              value={values.confirmPassword.trim()}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.confirmPassword && Boolean(errors.confirmPassword)}
              helperText={touched.confirmPassword && errors.confirmPassword}
            />
            <TextField
              id="name"
              label="ім'я"
              value={values.name.trim()}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
            <TextField
              id="surname"
              label="Прізвище"
              value={values.surname.trim()}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.surname && Boolean(errors.surname)}
              helperText={touched.surname && errors.surname}
            />
            <TextField
              id="phone"
              label="Телефон"
              type="tel"
              name="phone"
              placeholder="+38 (000) 000-0000"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.phone && Boolean(errors.phone)}
              helperText={touched.phone && errors.phone}
            />

            <Button disabled={isSubmitting} type={'submit'}>
              продовжити
            </Button>
          </RegisterForm>

          <RegisterForm
            className="lastRegisterForm visually-hidden"
            onSubmit={handleSubmit}
            autoComplete="on"
          >
            <TextField
              id="outlined-select-currency"
              select
              label="Країна"
              name="country"
              value={values.country}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.country && Boolean(errors.country)}
              helperText={touched.country && errors.country}
            >
              {countries.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="outlined-select-currency"
              select
              label="Область"
              name="region"
              value={values.region}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.region && Boolean(errors.region)}
              helperText={touched.region && errors.region}
            >
              {regions.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="city"
              label="Місто"
              value={values.city.trim()}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.city && Boolean(errors.city)}
              helperText={touched.city && errors.city}
            />

            <TextField
              id="index"
              label="Індекс"
              value={values.index.trim()}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.index && Boolean(errors.index)}
              helperText={touched.index && errors.index}
            />

            <TextField
              id="post"
              label="Відділення Нової пошти"
              value={values.post.trim()}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.post && Boolean(errors.post)}
              helperText={touched.post && errors.post}
            />

            <Button disabled={isSubmitting} type={'submit'}>
              Зареєструватися
            </Button>
            <Button type={'button'} onClick={handleReturn}>
              Повернутися
            </Button>
          </RegisterForm>
        </FormsContainer>
      </Container>
      <Footer />
    </>
  );
};

export default RegisterPage;
