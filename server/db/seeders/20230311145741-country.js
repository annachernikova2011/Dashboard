/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Countries', [{
      name: 'Russia',
      sale_id: 1,
    }, {
      name: 'Turkey',
      sale_id: 2,
    }, {
      name: 'China',
      sale_id: 3,
    }, {
      name: 'Spain',
      sale_id: 4,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Countries', null, {});
  },
};