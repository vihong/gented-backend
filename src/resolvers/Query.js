const { forwardTo } = require('prisma-binding');

const Query = {
	user     : forwardTo('db'),
	users    : forwardTo('db'),
	item     : forwardTo('db'),
	items    : forwardTo('db'),
	product  : forwardTo('db'),
	products : forwardTo('db')
};

module.exports = Query;
