// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as IngestAPI from './ingest';
import * as ChunksAPI from './retrieve/chunks';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Batch extends APIResource {
  /**
   * Retrieve specific chunks by their document ID and chunk number in a single batch
   * operation.
   */
  retrieveChunks(
    params: BatchRetrieveChunksParams,
    options?: RequestOptions,
  ): APIPromise<BatchRetrieveChunksResponse> {
    const { body } = params;
    return this._client.post('/batch/chunks', { body: body, ...options });
  }

  /**
   * Retrieve multiple documents by their IDs in a single batch operation.
   */
  retrieveDocuments(
    params: BatchRetrieveDocumentsParams,
    options?: RequestOptions,
  ): APIPromise<BatchRetrieveDocumentsResponse> {
    const { body } = params;
    return this._client.post('/batch/documents', { body: body, ...options });
  }
}

export type BatchRetrieveChunksResponse = Array<ChunksAPI.ChunkResult>;

export type BatchRetrieveDocumentsResponse = Array<IngestAPI.Document>;

export interface BatchRetrieveChunksParams {
  body: unknown;
}

export interface BatchRetrieveDocumentsParams {
  body: unknown;
}

export declare namespace Batch {
  export {
    type BatchRetrieveChunksResponse as BatchRetrieveChunksResponse,
    type BatchRetrieveDocumentsResponse as BatchRetrieveDocumentsResponse,
    type BatchRetrieveChunksParams as BatchRetrieveChunksParams,
    type BatchRetrieveDocumentsParams as BatchRetrieveDocumentsParams,
  };
}
