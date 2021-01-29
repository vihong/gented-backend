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
		// console.log(item);
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
	}
};
module.exports = Mutations;
