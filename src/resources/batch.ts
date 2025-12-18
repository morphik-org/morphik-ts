// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as DocumentsAPI from './documents';
import * as ChunksAPI from './retrieve/chunks';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Batch extends APIResource {
  /**
   * Retrieve specific chunks by their document ID and chunk number in a single batch
   * operation.
   */
  retrieveChunks(
    body: BatchRetrieveChunksParams,
    options?: RequestOptions,
  ): APIPromise<BatchRetrieveChunksResponse> {
    return this._client.post('/batch/chunks', { body, ...options });
  }

  /**
   * Retrieve multiple documents by their IDs in a single batch operation.
   */
  retrieveDocuments(
    body: BatchRetrieveDocumentsParams,
    options?: RequestOptions,
  ): APIPromise<BatchRetrieveDocumentsResponse> {
    return this._client.post('/batch/documents', { body, ...options });
  }
}

export type BatchRetrieveChunksResponse = Array<ChunksAPI.ChunkResult>;

export type BatchRetrieveDocumentsResponse = Array<DocumentsAPI.Document>;

export interface BatchRetrieveChunksParams {
  /**
   * Optional end-user scope for the operation
   */
  end_user_id?: string | null;

  /**
   * Optional folder scope. Accepts a folder PATH (e.g., '/Company/Reports') or list
   * of paths.
   */
  folder_name?: string | Array<string> | null;

  /**
   * Output format for image chunks in retrieval results.
   */
  output_format?: 'base64' | 'url' | 'text' | null;

  /**
   * List of chunk sources to retrieve
   */
  sources?: Array<BatchRetrieveChunksParams.Source>;

  /**
   * Whether to use ColPali embeddings for retrieval
   */
  use_colpali?: boolean | null;
}

export namespace BatchRetrieveChunksParams {
  /**
   * Source information for a chunk used in completion
   */
  export interface Source {
    chunk_number: number;

    document_id: string;

    score?: number | null;
  }
}

export interface BatchRetrieveDocumentsParams {
  /**
   * List of document IDs to retrieve
   */
  document_ids?: Array<string>;

  /**
   * Optional end-user scope for the operation
   */
  end_user_id?: string | null;

  /**
   * Optional folder scope. Accepts a folder PATH (e.g., '/Company/Reports') or list
   * of paths.
   */
  folder_name?: string | Array<string> | null;
}

export declare namespace Batch {
  export {
    type BatchRetrieveChunksResponse as BatchRetrieveChunksResponse,
    type BatchRetrieveDocumentsResponse as BatchRetrieveDocumentsResponse,
    type BatchRetrieveChunksParams as BatchRetrieveChunksParams,
    type BatchRetrieveDocumentsParams as BatchRetrieveDocumentsParams,
  };
}
