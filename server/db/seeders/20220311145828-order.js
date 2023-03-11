/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [{
      title: 'Samsung galaxyS9',
      quantity: 1,
      price: 670,
    }, {
      title: 'Mac Air',
      quantity: 1,
      price: 1020,
    }, {
      title: 'Smart Station Alice',
      quantity: 1,
      price: 315,
    }, {
      title: 'Headphones Apple',
      quantity: 3,
      price: 179,
    }, {
      title: 'Smart watch Apple',
      quantity: 2,
      price: 559,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  },
};
