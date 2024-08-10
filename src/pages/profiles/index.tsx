import { Box, Button } from '@mui/material';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Header } from '../../components/header';
import { TextFieldForm } from '../../components/texfieldForm';
import { AppForm } from '../../components/formik';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  contact: '',
  address1: '',
  address2: '',
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const controlSchema = yup.object().shape({
  firstName: yup.string().required('required'),
  lastName: yup.string().required('required'),
  email: yup.string().email('Invalid email passed').required('required'),
  contact: yup
    .string()
    .matches(phoneRegExp, 'Invalid phone number passed')
    .required('required'),
  address1: yup.string().min(10, 'Invalid address').required('required'),
  address2: yup.string().min(10, 'Invalid address').required('required'),
});

export const Profiles = () => {
  const isNoMobile = useMediaQuery('(min-width:600px)');

  const handleFormSubmit: any = (values: object, actions: any) => {
    console.log(values);

    actions.resetForm();
  };

  return (
    <Box m={2}>
      <Header title="create user" subTitle="Create a New User Profile" />

      <AppForm
        initialValues={initialValues}
        validationSchema={controlSchema}
        onSubmit={handleFormSubmit}
      >
        <Box>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              '& > div': { gridColumn: isNoMobile ? undefined : 'span 4' },
            }}
          >
            <TextFieldForm
              name="firstName"
              label="First Name"
              sx={{ gridColumn: 'span 2' }}
            />
            <TextFieldForm
              name="lastName"
              label="Last Name"
              sx={{ gridColumn: 'span 2' }}
            />
            <TextFieldForm
              name="email"
              label="Email"
              type="email"
              sx={{ gridColumn: 'span 4' }}
            />
            <TextFieldForm
              name="contact"
              label="Contact Number"
              sx={{ gridColumn: 'span 4' }}
            />
            <TextFieldForm
              name="address1"
              label="Address 1"
              sx={{ gridColumn: 'span 4' }}
            />
            <TextFieldForm
              name="address2"
              label="Address é"
              sx={{ gridColumn: 'span 4' }}
            />
          </Box>
          <Box display="flex" mt={4}>
            <Button type="submit" color="secondary" variant="contained">
              Create new User
            </Button>
          </Box>
        </Box>
      </AppForm>
    </Box>
  );
};
