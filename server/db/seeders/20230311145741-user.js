/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Anna',
      phone: 89655432132,
      order_id: 1,
    }, {
      name: 'Petr',
      phone: 89886543212,
      order_id: 2,
    }, {
      name: 'Anton',
      phone: 89186549087,
      order_id: 3,
    }, {
      name: 'Maria',
      phone: 89199908786,
      order_id: 4,
    }, {
      name: 'Misha',
      phone: 89896123456,
      order_id: 5,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};