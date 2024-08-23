/**
 * Make any changes you need to make to the database here
 */

const { User } = require("./../utils/db");

async function up() {
  // Write migration here
  await User.create({
    username: "administrator",
    name: "Karta Daya",
    password: "passwords",
  });
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
async function down() {
  // Write migration here
  User.collection.drop();
}

module.exports = { up, down };
