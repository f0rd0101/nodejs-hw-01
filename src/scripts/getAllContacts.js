import { readContacts } from '../utils/readContacts.js';

const getAllContacts = async () => {
  try {
    const data = await readContacts();
    console.log(data); 
  } catch (error) {
  
  }
};

await getAllContacts();
