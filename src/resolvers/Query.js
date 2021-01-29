const { forwardTo } = require('prisma-binding');

const Query = {
	users : forwardTo('db'),
	items : forwardTo('db'),
	item  : forwardTo('db')
};

module.exports = Query;
