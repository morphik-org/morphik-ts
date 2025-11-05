// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Morphik from 'morphik';

const client = new Morphik({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource documents', () => {
  // Prism tests are disabled
  test.skip('add: only required params', async () => {
    const responsePromise = client.folders.documents.add('document_id', {
      folder_id_or_name: 'folder_id_or_name',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('add: required and optional params', async () => {
    const response = await client.folders.documents.add('document_id', {
      folder_id_or_name: 'folder_id_or_name',
    });
  });

  // Prism tests are disabled
  test.skip('remove: only required params', async () => {
    const responsePromise = client.folders.documents.remove('document_id', {
      folder_id_or_name: 'folder_id_or_name',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('remove: required and optional params', async () => {
    const response = await client.folders.documents.remove('document_id', {
      folder_id_or_name: 'folder_id_or_name',
    });
  });
});
