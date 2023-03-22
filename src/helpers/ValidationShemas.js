import * as yup from 'yup';

const passwordRules = /^.*(?=.{6,})((?=.*\d){1})((?=.*[a-z]){1}).*$/;

const number = /^[0123456789]*$/;

export const LoginSchema = yup.object({
  email: yup
    .string('Введіть адресу електронної пошти')
    .email('Введіть валідну адресу електронної пошти')
    .required("Поле обов'язкове для заповнення"),
  password: yup
    .string('Введіть пароль')
    .min(6, 'Пароль має бути мінімум 6 символів')
    .matches(passwordRules, 'Пароль має містити букви і числа')
    .required("Поле обов'язкове для заповнення"),
});

export const RegisterSchema = yup.object({
  email: yup
    .string('Введіть адресу електронної пошти')
    .email('Введіть валідну адресу електронної пошти')
    .required("Поле обов'язкове для заповнення"),

  password: yup
    .string('Введіть пароль')
    .min(6, 'Пароль має бути мінімум 6 символів')
    .matches(passwordRules, 'Пароль має містити букви і числа')
    .required("Поле обов'язкове для заповнення"),

  confirmPassword: yup
    .string('Повторіть пароль')
    .oneOf([yup.ref('password'), null], 'пароль має співпадати')
    .required("Поле обов'язкове для заповнення"),

  name: yup
    .string("Введіть ім'я")
    .min(2, "Ім'я має містити мінімум 2 символа")
    .required("Поле обов'язкове для заповнення"),

  surname: yup
    .string('Введіть прізвище')
    .required("Поле обов'язкове для заповнення"),

  phone: yup
    .string('Введіть номер телефона')
    .min(17, 'Телефон має містити 10 цифр')
    .required("Поле обов'язкове для заповнення"),

  country: yup.string(),

  region: yup.string(),

  city: yup
    .string('Введіть назву міста')
    .min(2, 'Назва міста має містити мінімум 2 символа'),

  index: yup
    .string('Введіть індекс')
    .length(5, 'Індекс має складатися з 5 цифр')
    .matches(number, 'Індекс не може містити щось, крім цифр'),

  post: yup
    .string('Введіть номер відділення Нової пошти')
    .matches(
      number,
      'Номер відділення Нової пошти не може містити щось, крім цифр'
    ),
});
