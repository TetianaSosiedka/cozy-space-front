import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLoginMutation } from '../../redux/Auth/authApi';

import { useFormik } from 'formik';
import Container from 'components/Container/Container';
import Footer from 'components/Footer/Footer';
import Title from 'components/Title/Title';
import icons from 'images/icons.svg';
import TextField from 'components/TextField/TextField';
import Button from 'components/Button/Button';
import Link from 'components/Button/ButtonLink';
import Loader from 'components/Loader/Loader';

import { LoginSchema } from 'helpers/ValidationShemas';

import {
  LoginGrid,
  LoginWrap,
  ExplainingText,
  LoginForm,
  LoadingContainer,
  ErrorMesage,
} from './LoginPage.styled';

const LoginPage = () => {
  const [login, { isError, isLoading, isSuccess }] = useLoginMutation();
  const navigate = useNavigate();
  const { subscription } = useSelector(state => state.auth.user);

  useEffect(() => {
    if (isSuccess) {
      subscription === 'admin'
        ? navigate('/admin', { replace: true })
        : navigate('/mycabinet', { replace: true });
    }
  }, [isSuccess, navigate, subscription]);

  const onSubmit = async values => {
    await login(values);
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
            <Link link={'/register'}>продовжити</Link>
          </LoginWrap>
          <LoginWrap>
            <svg>
              <use href={icons + '#street-view'}></use>
            </svg>
            <span>Увійти до особистого кабінету</span>
            <LoginForm onSubmit={handleSubmit} autoComplete="off">
              {isError && (
                <ErrorMesage>
                  Невірно вказані поле E-Mail і/або пароль!
                </ErrorMesage>
              )}
              {isLoading && (
                <LoadingContainer>
                  <Loader margin={'0'} />
                </LoadingContainer>
              )}

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
