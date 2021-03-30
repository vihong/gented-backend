const Mutations = {
	async createItem(parent: any, args: any, ctx: any, info: any) {
		const item = await ctx.db.mutation.createItem(
			{
				data: {
					...args
				}
			},
			info
		);
		return item;
	},
	updateItem(parent: any, args: any, ctx: any, info: any) {
		const updates = { ...args };
		delete updates.id;
		return ctx.db.mutation.updateItem(
			{
				data: updates,
				where: {
					id: args.id
				}
			},
			info
		);
	},
	async deleteItem(parent: any, args: any, ctx: any, info: any) {
		const where = { id: args.id };
		const item = await ctx.db.query.item({ where }, `{id title}`); // 1. find the item
		return ctx.db.mutation.deleteItem({ where }, info); // delete it
	},
	async createUser(parent: any, args: any, ctx: any, info: any) {
		const user = await ctx.db.mutation.createUser({
			data: {
				...args
			},
			info
		});
		return user;
	},
	async createProduct(parent: any, args: any, ctx: any, info: any) {
		const newProduct = await ctx.db.mutation.createProduct({
			data: {
				...args
			},
			info
		});
		return newProduct;
	},
	updateProduct(parent: any, args: any, ctx: any, info: any) {
		const updates = { ...args };
		delete updates.id;
		return ctx.db.mutation.updateProduct(
			{
				data: updates,
				where: {
					id: args.id
				}
			},
			info
		);
	},
	async deleteProduct(parent: any, args: any, ctx: any, info: any) {
		const where = { id: args.id };
		const product = await ctx.db.query.product({ where }, `{id title}`); // 1. find the item
		return ctx.db.mutation.deleteProduct({ where }, info); // delete it
	}
};

export default Mutations;
