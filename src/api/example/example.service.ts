import type { ExampleApi } from './example.routes';
import { testFetchData } from './testFetchData';

class ExampleService implements ExampleApi {
    testFetch = (data = 1) => testFetchData(data);
}

export const exampleService = new ExampleService();
