import { axiosInstance } from 'api/axios';
import { sleep } from 'utils/sleep';

import { TEST_ROUTES, ExampleResponse } from './example.routes';

export const testFetchData = async (data = 1): Promise<ExampleResponse> => {
    try {
        const response = await axiosInstance.get<ExampleResponse>(TEST_ROUTES.testFetch(), { data });

        return response.data;
    } catch (error) {
        // ? we have no backend in example so just return same data on error
        await sleep(1000);

        return { data };
    }
};
