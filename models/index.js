const User = require('./User');
const Blogpost = require('./Blogpost');
const Comments = require('./Comments')

User.hasMany(Blogpost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Comments, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blogpost.hasMany(Comments, {
  foreignKey: 'blogpost_id',
  onDelete: 'CASCADE'
});

Blogpost.belongsTo(User, {
  foreignKey: 'user_id'
});
Comments.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Blogpost, Comments };
