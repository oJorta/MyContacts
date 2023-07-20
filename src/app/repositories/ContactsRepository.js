const { v4 } = require('uuid');

// Id's utilizando UUID -> Universal Unique ID (uuidv4)
let contacts = [
  {
    id: v4(),
    name: 'Jorta',
    email: 'jorta@gmail.com',
    phone: '75999999999',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Clara',
    email: 'Clara@gmail.com',
    phone: '73999999999',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve, reject) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve, reject) => {
      const contact = contacts.find((cont) => cont.id === id);

      resolve(contact);
    });
  }

  findByEmail(email) {
    return new Promise((resolve, reject) => {
      const contact = contacts.find((cont) => cont.email === email);
      resolve(contact);
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  create({
    name, email, phone, category_id,
  }) {
    return new Promise((resolve, reject) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };

      contacts.push(newContact);

      resolve(newContact);
    });
  }

  update(id, {
    name, email, phone, category_id,
  }) {
    return new Promise((resolve, reject) => {
      const updatedContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };

      contacts = contacts.map((contact) => {
        if (contact.id === updatedContact.id) {
          return updatedContact;
        }
        return contact;
      });

      resolve(updatedContact);
    });
  }
}
module.exports = new ContactsRepository();
