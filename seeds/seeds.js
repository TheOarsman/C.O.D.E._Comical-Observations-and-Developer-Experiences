const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");

const userData = require("./userData.json");
const postData = require("./projectData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(
    userData.map((user) => ({
      ...user,
      imageUrl: `/images/${user.imageUrl}`,
    })),
    {
      individualHooks: true,
      returning: true,
    }
  );

  process.exit(0);
};

seedDatabase();
