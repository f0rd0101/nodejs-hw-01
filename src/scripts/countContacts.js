import { readContacts } from '../utils/readContacts.js';

const countContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log(contacts.length);  
  } catch (error) {
    console.error(error);
  }
};

await countContacts();
