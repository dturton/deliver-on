/// <reference path="./../typings/index.d.ts" />

import {registerRoutes as tagRoutes} from "./tag/tag-routes";
import {registerRoutes as authRoutes} from "./auth/auth-routes";
import {registerRoutes as homeRoutes} from "./home/home-routes"; 
import {registerRoutes as setupRoutes} from "./setup/setup-routes";
import {registerRoutes as apiv1Routes} from "./api-v1/api-v1-routes";
import {registerRoutes as assetRoutes} from "./assets/assets-routes";
import {registerRoutes as accountRoutes} from "./account/account-routes";
import {registerRoutes as connectRoutes} from "./connect/connect-routes";
import {registerRoutes as webhookRoutes} from "./webhooks/webhook-routes";

export const RoutesToRegister = [
    authRoutes,
    homeRoutes,
    assetRoutes,
    setupRoutes,
    connectRoutes,
    webhookRoutes,
    accountRoutes,
    apiv1Routes,
    tagRoutes,
];