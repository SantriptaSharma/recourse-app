import { profs } from "$lib/stores";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({params, fetch}) =>
{
    const promise = profs.pullOne(fetch, params.id).catch(err => {throw error(404, err)});

    return promise;
};