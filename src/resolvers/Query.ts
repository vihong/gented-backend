import { forwardTo } from 'prisma-binding';

const Query = {
	user: forwardTo('db'),
	users: forwardTo('db'),
	item: forwardTo('db'),
	items: forwardTo('db'),
	product: forwardTo('db'),
	products: forwardTo('db')
};

export default Query;
