import { createApiRef } from '@flowr/core-plugin-api';
import { GradleApi } from './GradleApi';

export const gradleApiRef = createApiRef<GradleApi>({
    id: 'plugin.gradle.service'
});