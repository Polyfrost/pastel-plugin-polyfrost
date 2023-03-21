import { createApiFactory, createPlugin, createRoutableExtension, errorApiRef } from '@flowr/core-plugin-api';
import { rootRouteRef } from './routes';
import { gradleApiRef, GradleClient } from './apis';

export const polyfrostPlugin = createPlugin({
    id: 'polyfrost',
    apis: [
        createApiFactory({
            api: gradleApiRef,
            deps: {
                errorApi: errorApiRef,
            },
            factory: deps => new GradleClient(deps),
        }),
    ],
    routes: {
        root: rootRouteRef,
    },
});