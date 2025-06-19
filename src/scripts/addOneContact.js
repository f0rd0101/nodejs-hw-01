import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const prevContacts = await readContacts();
    const newContact = createFakeContact();
    const addContacts = [...prevContacts, newContact];
    await writeContacts(addContacts);
  } catch (error) {
    console.error(error);
  }
};

addOneContact();
