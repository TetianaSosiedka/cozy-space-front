import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { RegisterSchema } from 'helpers/ValidationShemas';

import Container from 'components/Container/Container';
import Title from 'components/Title/Title';
import TextField from 'components/TextField/TextField.jsx';
import Button from 'components/Button/Button.jsx';

import { WarningMessage, RegisterForm } from './RegisterPage.styled.jsx';

const RegisterPage = () => {
  const onSubmit = /*async*/ (values /*, actions*/) => {
    console.log(values);
    // await new Promise(resolve => setTimeout(resolve, 1000));
    // actions.resetForm();
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      surname: '',
      phone: '',
    },
    validationSchema: RegisterSchema,
    onSubmit,
  });

  return (
    <Container>
      <Title>Реєстрація</Title>
      <WarningMessage>
        Якщо ви вже зареєстровані, перейдіть на{' '}
        <Link to="/login">сторінку авторизації</Link>
      </WarningMessage>
      <RegisterForm onSubmit={handleSubmit} autoComplete="off">
        <TextField
          id="email"
          label="Email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
        <TextField
          id="password"
          label="Пароль"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
        />
        <TextField
          id="confirmPassword"
          label="Підтвердити пароль"
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.confirmPassword && Boolean(errors.confirmPassword)}
          helperText={touched.confirmPassword && errors.confirmPassword}
        />
        <TextField
          id="name"
          label="ім'я"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && Boolean(errors.name)}
          helperText={touched.name && errors.name}
        />
        <TextField
          id="surname"
          label="Прізвище"
          value={values.surname}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.surname && Boolean(errors.surname)}
          helperText={touched.surname && errors.surname}
        />
        <TextField
          id="phone"
          label="Телефон"
          type="tel"
          placeholder="123-45-678"
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
    </Container>
  );
};

export default RegisterPage;
