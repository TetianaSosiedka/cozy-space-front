import { brands } from './brands';

export const categories = [
  {
    key: 'face',
    title: 'Догляд за обличчям',
    subcategory: [
      { 'makeup-removal': 'Зняття макіяжу' },
      { 'skin-cleansing': 'Очищення шкіри' },
      { peeling: 'Пілінг' },
      { toning: 'Тонізація' },
      {
        'enhanced-care':
          'Посилений догляд ( сиворотки, ампули , есенції , емульсії )',
      },
      { 'face-cream': 'Крем для обличчя ' },
      { 'eye-cream': 'Крем навколо очей' },
      { 'neck-care': 'Догляд за зоною декольте' },
      { mask: 'Маска ( нічні або тканинні доглядові )' },
      { 'sun-protection': 'Cонцезахист' },
      { 'lip-care': 'Догляд для губ' },
    ],
  },
  {
    key: 'hair',
    title: 'Волосся',
    subcategory: [
      { shampoo: 'Шампунь' },
      { 'scalp-scrub': 'Скраб для шкіри голови' },
      { mask: 'Маска' },
      { balm: 'Бальзам' },
      { 'essences-emulsions-vitamins': 'Есенції , емульсії , вітаміни' },
      { 'thermal-protection': 'Термозахист' },
    ],
  },
  {
    key: 'body',
    title: 'Тіло',
    subcategory: [
      { 'shower-gel': 'Гель для душу ' },
      { 'body-scrub': 'Скраб для тіла' },
      { 'anti-cellulite': 'Антицелюлітні засоби' },
      { 'lotions-oils-care-cream': 'Лосьйони, масла, крем догляд' },
      { 'sun-protection': 'Сонцезахист' },
    ],
  },
  { key: 'tone', title: 'Підбір тональних засобів' },
  {
    key: 'brands',
    title: 'Бренди',
    subcategory: brands,
  },
  { key: 'novelty', title: 'Новинки' },
];
