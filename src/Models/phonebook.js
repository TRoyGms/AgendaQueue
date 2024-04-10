import { ContactNode } from './contacts.js';

class PhoneBook {
    constructor() {
        this.head = null;
    }

    addContact(name, number) {
        const contactNode = new ContactNode(name, number);
        if (!this.head) {
            this.head = contactNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = contactNode;
        }
        return contactNode;
    }

    getAllContacts() {
        const contacts = [];
        let current = this.head;
        while (current) {
            contacts.push(current.contact);
            current = current.next;
        }
        return contacts;
    }

    removeContactByNumber(number) {
        if (!this.head) {
            return;
        }
        if (this.head.contact.number === number) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        let prev = null;
        while (current && current.contact.number !== number) {
            prev = current;
            current = current.next;
        }
        if (current) {
            prev.next = current.next;
        }
    }
}

export { PhoneBook };
