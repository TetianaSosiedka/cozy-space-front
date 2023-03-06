import { useFormik } from 'formik';

import Container from 'components/Container/Container';
import Footer from 'components/Footer/Footer';
import Title from 'components/Title/Title';
import icons from 'images/icons.svg';
import Button from 'components/Button/Button';

import { LoginSchema } from 'helpers/ValidationShemas';

import {
  Line,
  LoginGrid,
  LoginWrap,
  ExplainingText,
  LoginForm,
  CssTextField,
} from './LoginPage.styled';

const LoginPage = () => {
  const onSubmit = async (values, actions) => {
    console.log(values);
    await new Promise(resolve => setTimeout(resolve, 1000));
    actions.resetForm();
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
    },
    validationSchema: LoginSchema,
    onSubmit,
  });

  return (
    <>
      <Container>
        <Title>Авторизація</Title>
        <Line />
        <LoginGrid>
          <LoginWrap>
            <svg>
              <use href={icons + '#user-plus'}></use>
            </svg>
            <span>Реєстрація</span>
            <ExplainingText>
              Після реєстрації ви зможете швидше здійснювати замовлення,
              зберігати обрані товари та історії замовлень.
            </ExplainingText>
            <Button type={'button'}>продовжити</Button>
          </LoginWrap>
          <LoginWrap>
            <svg>
              <use href={icons + '#street-view'}></use>
            </svg>
            <span>Увійти до особистого кабінету</span>
            <LoginForm onSubmit={handleSubmit} autoComplete="off">
              <CssTextField
                variant="standard"
                fullWidth
                id="email"
                label="Email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <CssTextField
                variant="standard"
                fullWidth
                id="password"
                label="Password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
              <Button disabled={isSubmitting} type={'submit'}>
                Увійти
              </Button>
            </LoginForm>
          </LoginWrap>
        </LoginGrid>
      </Container>
      <Footer />
    </>
  );
};

export default LoginPage;
