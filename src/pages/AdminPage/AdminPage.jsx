import Container from 'components/Container/Container';
import Title from 'components/Title/Title';
import AddProductForm from 'components/AddProductForm/AddProductForm';

import { FormContainer } from './AdminPage.styled';

const AdminPage = () => {
  return (
    <Container>
      <Title>Додати товар</Title>
      <FormContainer>
        <AddProductForm />
      </FormContainer>
    </Container>
  );
};

export default AdminPage;
