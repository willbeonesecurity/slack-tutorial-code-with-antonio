import { mutation, query } from "./_generated/server";
import { auth } from "./auth";

import { v } from "convex/values";

export const create = mutation({
    args: {
        name: v.string(),
    },
    handler: async (ctx, args) => {
        const userId = await auth.getUserId(ctx);

        if (!userId) {
            throw new Error("Unauthorized");
        }

            // create proper method later
        const joinCode = "123456";

        const workspaceId = await ctx.db.insert("workspaces", {
            name: args.name,
            joinCode,
            userId,
        });


        return workspaceId;
    }
});

export const get = query({
    args: {},
    handler: async (ctx) => {
       return await ctx.db.query("workspaces").collect(); 
    },
})