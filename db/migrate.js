// subject to replace with actual migrations rather than just sync

const db = require('./models/index')

db.sequelize.sync();