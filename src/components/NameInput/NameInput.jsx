import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';
import swal from 'sweetalert';

import { FormEl } from './NameInput.styled';

const initialValues = {
  name: '',
  number: '',
};

export function NameInput({ addstate, state }) {
  const handleSubmit = (values, { resetForm }) => {
    let check = state.contacts.find(e => e.name === values.name);

    if (check === undefined) {
      resetForm();

      addstate(values);
    } else {
      swal(`"${values.name}" is alredy in contacts`, '', 'warning');
    }
  };
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <FormEl>
          <label htmlFor="name">
            Name
            <Field
              type="text"
              name="name"
              placeholder="Name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor="number">
            Number
            <Field
              type="tel"
              name="number"
              placeholder="Number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button type="submit">Add contact</button>
        </FormEl>
      </Formik>
    </>
  );
}

NameInput.propTypes = {
  state: PropTypes.shape({
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
  }),
};
