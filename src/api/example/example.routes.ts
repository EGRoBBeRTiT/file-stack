import { APIRoutes } from 'types/Routes.types';

export interface ExampleResponse {
    data: number;
}

export interface ExampleApi {
    testFetch: (data?: number) => Promise<ExampleResponse>;
}

const TEST_PREFIX = 'test' as const;

export const TEST_ROUTES: APIRoutes<ExampleApi> = {
    testFetch: () => `${TEST_PREFIX}`,
};
