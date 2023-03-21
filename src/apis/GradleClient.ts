import { GradleApi, RunGradleProps, RunGradleResponse } from './GradleApi';
import { ErrorApi } from '@flowr/core-plugin-api';
import { child_process } from 'child_process';

export class GradleClient implements GradleApi {
    private errorApi: ErrorApi;

    constructor(deps: { errorApi: ErrorApi }) {
        this.errorApi = deps.errorApi;
    }

    async runGradle(props: RunGradleProps): Promise<RunGradleResponse> {
        const proc = await child_process('./gradlew', [props.task, props.cwd]);
        if (!proc.stderr) return { response: proc.stdout, errors: null };
        return { response: proc.stdout, errors: proc.stderr };
    }
}