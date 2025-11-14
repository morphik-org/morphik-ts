// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Morphik from 'morphik';

const client = new Morphik({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cloud', () => {
  // Prism tests are disabled
  test.skip('deleteApp: only required params', async () => {
    const responsePromise = client.cloud.deleteApp({ app_name: 'app_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deleteApp: required and optional params', async () => {
    const response = await client.cloud.deleteApp({ app_name: 'app_name' });
  });

  // Prism tests are disabled
  test.skip('generateUri: only required params', async () => {
    const responsePromise = client.cloud.generateUri({ app_id: 'app_id', name: 'name', user_id: 'user_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('generateUri: required and optional params', async () => {
    const response = await client.cloud.generateUri({
      app_id: 'app_id',
      name: 'name',
      user_id: 'user_id',
      created_by_user_id: 'created_by_user_id',
      expiry_days: 0,
      org_id: 'org_id',
      'X-Morphik-Admin-Secret': 'X-Morphik-Admin-Secret',
    });
  });

  // Prism tests are disabled
  test.skip('listApps', async () => {
    const responsePromise = client.cloud.listApps();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listApps: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cloud.listApps(
        {
          limit: 1,
          offset: 0,
          org_id: 'org_id',
          user_id: 'user_id',
          'X-Morphik-Admin-Secret': 'X-Morphik-Admin-Secret',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Morphik.NotFoundError);
  });
});
