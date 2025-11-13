// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Morphik from 'morphik';

const client = new Morphik({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource retrieve', () => {
  // Prism tests are disabled
  test.skip('createDocs: only required params', async () => {
    const responsePromise = client.retrieve.createDocs({ query: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createDocs: required and optional params', async () => {
    const response = await client.retrieve.createDocs({
      query: 'x',
      end_user_id: 'end_user_id',
      filters: {},
      folder_name: 'string',
      graph_name: 'graph_name',
      hop_depth: 1,
      include_paths: true,
      k: 1,
      min_score: 0,
      output_format: 'base64',
      padding: 0,
      use_colpali: true,
      use_reranking: true,
    });
  });
});
