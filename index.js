import * as controllers from './src/controllers.js';

document.getElementById('addContactBtn').addEventListener('click', controllers.addContact);
document.getElementById('showAgendaBtn').addEventListener('click', controllers.showAgenda);
document.getElementById('removeContactBtn').addEventListener('click', controllers.removeContact);
