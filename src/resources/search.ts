// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as IngestAPI from './ingest';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Search extends APIResource {
  /**
   * Search documents by filename using full-text search.
   *
   * Args: request: SearchDocumentsRequest containing: - query: Search query for
   * document names/filenames - limit: Number of documents to return (1-100) -
   * filters: Optional metadata filters for documents - folder_name: Optional folder
   * to scope search - end_user_id: Optional end-user ID to scope search auth:
   * Authentication context
   *
   * `request.filters` accepts the same operator set as `/retrieve/chunks`, including
   * `$regex` (with optional `i` flag) and `$contains` for substring matches.
   *
   * Returns: List[Document]: List of matching documents ordered by relevance
   */
  documents(body: SearchDocumentsParams, options?: RequestOptions): APIPromise<SearchDocumentsResponse> {
    return this._client.post('/search/documents', { body, ...options });
  }
}

export type SearchDocumentsResponse = Array<IngestAPI.Document>;

export interface SearchDocumentsParams {
  /**
   * Search query for document names/filenames
   */
  query: string;

  /**
   * Optional end-user scope for the search
   */
  end_user_id?: string | null;

  /**
   * Optional metadata filters for documents
   */
  filters?: unknown | null;

  /**
   * Optional folder scope for the search. Accepts a single folder name or a list of
   * folder names.
   */
  folder_name?: string | Array<string> | null;

  /**
   * Number of documents to return
   */
  limit?: number;
}

export declare namespace Search {
  export {
    type SearchDocumentsResponse as SearchDocumentsResponse,
    type SearchDocumentsParams as SearchDocumentsParams,
  };
}
