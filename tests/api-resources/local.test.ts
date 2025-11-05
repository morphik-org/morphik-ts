// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Morphik from 'morphik';

const client = new Morphik({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource local', () => {
  // Prism tests are disabled
  test.skip('generateUri: only required params', async () => {
    const responsePromise = client.local.generateUri({ password_token: 'password_token' });
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
    const response = await client.local.generateUri({
      password_token: 'password_token',
      expiry_days: 0,
      name: 'name',
      server_mode: true,
    });
  });
});
