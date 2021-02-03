const Mutations = {
	async createItem(parent, args, ctx, info) {
		const item = await ctx.db.mutation.createItem(
			{
				data : {
					...args
				}
			},
			info
		);
		return item;
	},
	updateItem(parent, args, ctx, info) {
		const updates = { ...args };
		delete updates.id;
		return ctx.db.mutation.updateItem(
			{
				data  : updates,
				where : {
					id : args.id
				}
			},
			info
		);
	},
	async deleteItem(parent, args, ctx, info) {
		const where = { id: args.id };
		const item = await ctx.db.query.item({ where }, `{id title}`); // 1. find the item
		return ctx.db.mutation.deleteItem({ where }, info); // delete it
	},
	async createUser(parent, args, ctx, info) {
		const user = await ctx.db.mutation.createUser({
			data : {
				...args
			},
			info
		});
		return user;
	},
	async createProduct(parent, args, ctx, info) {
		const newProduct = await ctx.db.mutation.createProduct({
			data : {
				...args
			},
			info
		});
		return newProduct;
	},
	updateProduct(parent, args, ctx, info) {
		const updates = { ...args };
		delete updates.id;
		return ctx.db.mutation.updateProduct(
			{
				data  : updates,
				where : {
					id : args.id
				}
			},
			info
		);
	},
	async deleteProduct(parent, args, ctx, info) {
		const where = { id: args.id };
		const product = await ctx.db.query.product({ where }, `{id title}`); // 1. find the item
		return ctx.db.mutation.deleteProduct({ where }, info); // delete it
	}
};
module.exports = Mutations;
