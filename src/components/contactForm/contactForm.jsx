import { Formik, Field, Form ,ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { Label, Btn, Title } from './contactForm.styled';


const formSchema = Yup.object().shape({
  name: Yup.string().required('This field is required!'),
  number: Yup.number().min(5, 'Too Short!')
    .required('This field is required!'),
})
export const ContactForm =({addContact}) =>{ 
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={formSchema}  
 
    onSubmit={(values, actions) => {
      addContact(values)
      actions.resetForm();        
      }} 
    >
      <Form>
      <Label htmlFor="name"><Title>Name</Title>
          <Field name="name" placeholder="name" />
          <ErrorMessage name="name" component="div" />
      </Label>
      <Label htmlFor="number"><Title>Number</Title>
          <Field type="tel" name="number" placeholder="tel" />
          <ErrorMessage name="number" component="div" />
      </Label>
    <Btn  type="submit">Add contact</Btn>
      </Form>
    </Formik>)
};
    




