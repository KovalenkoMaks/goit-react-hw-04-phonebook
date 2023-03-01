import PropTypes from 'prop-types';
import { ContactEl, ContactsList } from './Contacts.styled';
export function Contacts({ state, deleteContact }) {
  return (
    <>
      <h2>Contacts</h2>
      <ContactsList>
        {state.contacts.map(e => {
          if (!e.name.toLowerCase().includes(state.filter)) {
            return null;
          }

          return (
            <ContactEl key={e.id}>
              <p>
                {e.name}: {e.number}
              </p>
              <button
                type="button"
                onClick={() => {
                  deleteContact(e.id);
                }}
              >
                Delete
              </button>
            </ContactEl>
          );
        })}
      </ContactsList>
    </>
  );
}
Contacts.propTypes = {
  state: PropTypes.shape({
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
  }),
};
