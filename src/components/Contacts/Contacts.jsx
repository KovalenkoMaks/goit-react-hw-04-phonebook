import PropTypes from 'prop-types';
import { ContactEl, ContactsList } from './Contacts.styled';
export function Contacts({ contacts, filter, deleteContact }) {
  return (
    <>
      <h2>Contacts</h2>
      <ContactsList>
        {contacts.map(e => {
          if (!e.name.toLowerCase().includes(filter)) {
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
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
