/// <reference path="./../../typings/typings.d.ts" />

import * as joi from "joi";
import * as Boom from "boom";
import {IReply, Response} from "hapi";
import {Users} from "../../modules/database";
import {Server, Request, User, DeliverSettings} from "gearworks";

export const Routes = {
    AppConfig: "/api/v1/config",
}

export const Validation = {
    UpdateAppConfig: joi.object().keys({
        label: joi.string().label("Label"),
        format: joi.string().only("mm/dd/yyyy", "dd/mm/yyyy").label("Format"),
        addPickerToCheckout: joi.bool(),
        allowChangeFromCheckout: joi.bool(),
        isSaving: joi.bool().optional(),
    })
}

export function registerRoutes(server: Server)
{
    server.route({
        method: "GET",
        path: Routes.AppConfig,
        handler: {
            async: (request, reply) => getAppConfig(server, request, reply)
        }
    });

    server.route({
        method: "PUT",
        path: Routes.AppConfig,
        handler: {
            async: (request, reply) => updateAppConfig(server, request, reply)
        },
    })
}

export async function getAppConfig(server: Server, request: Request, reply: IReply)
{

}

export async function updateAppConfig(server: Server, request: Request, reply: IReply)
{
    const validation = joi.validate<DeliverSettings>(request.payload, Validation.UpdateAppConfig)

    if (validation.error)
    {
        return reply(Boom.wrap(validation.error));
    }

    const payload = validation.value;
    let user: User;

    try 
    {
        user = await Users.get<User>(request.auth.credentials.userId);
    }
    catch (e)
    {
        console.error("Failed to retrieve user from database.", e);

        return reply(Boom.wrap(e));
    }

    user.appConfig = payload;

    const update = await Users.put(user);

    if (!update.ok)
    {   
        console.error("Failed to update user's app config.", update);

        return reply(Boom.expectationFailed("Failed to update user's app config."));
    }

    return reply.continue() as any;
}