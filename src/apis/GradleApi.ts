export type RunGradleResponse = {
    response: string;
    errors: Record<string, string>;
}

export type RunGradleProps = {
    javaVersion?: string;
    flags?: Record<string, string>;
    cwd?: string;
    task: string;
}

export interface GradleApi {
    runGradle(props: RunGradleProps): Promise<RunGradleResponse>;
}