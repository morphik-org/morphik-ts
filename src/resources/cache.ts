// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Cache extends APIResource {
  /**
   * Create a persistent cache for low-latency completions.
   */
  create(params: CacheCreateParams, options?: RequestOptions): APIPromise<unknown> {
    const { gguf_file, model, name, ...body } = params;
    return this._client.post('/cache/create', { query: { gguf_file, model, name }, body, ...options });
  }

  /**
   * Retrieve information about a specific cache.
   */
  retrieve(name: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/cache/${name}`, options);
  }

  /**
   * Refresh an existing cache with newly available documents.
   */
  update(name: string, options?: RequestOptions): APIPromise<CacheUpdateResponse> {
    return this._client.post(path`/cache/${name}/update`, options);
  }

  /**
   * Manually add documents to an existing cache.
   */
  addDocs(
    name: string,
    params: CacheAddDocsParams,
    options?: RequestOptions,
  ): APIPromise<CacheAddDocsResponse> {
    const { body } = params;
    return this._client.post(path`/cache/${name}/add_docs`, { body: body, ...options });
  }

  /**
   * Generate a completion using a pre-populated cache.
   */
  query(name: string, params: CacheQueryParams, options?: RequestOptions): APIPromise<CompletionResponse> {
    const { query, max_tokens, temperature } = params;
    return this._client.post(path`/cache/${name}/query`, {
      query: { query, max_tokens, temperature },
      ...options,
    });
  }
}

/**
 * Response from completion generation
 */
export interface CompletionResponse {
  /**
   * Structured completion object for schema-based responses
   */
  completion: string | { [key: string]: unknown };

  usage: { [key: string]: number };

  finish_reason?: string | null;

  metadata?: unknown | null;

  sources?: Array<CompletionResponse.Source>;
}

export namespace CompletionResponse {
  /**
   * Source information for a chunk used in completion
   */
  export interface Source {
    chunk_number: number;

    document_id: string;

    score?: number | null;
  }
}

export type CacheCreateResponse = unknown;

export type CacheRetrieveResponse = unknown;

export type CacheUpdateResponse = { [key: string]: boolean };

export type CacheAddDocsResponse = { [key: string]: boolean };

export interface CacheCreateParams {
  /**
   * Query param:
   */
  gguf_file: string;

  /**
   * Query param:
   */
  model: string;

  /**
   * Query param:
   */
  name: string;

  /**
   * Body param:
   */
  docs?: Array<string> | null;

  /**
   * Body param:
   */
  filters?: unknown | null;
}

export interface CacheAddDocsParams {
  body: Array<string>;
}

export interface CacheQueryParams {
  query: string;

  max_tokens?: number | null;

  temperature?: number | null;
}

export declare namespace Cache {
  export {
    type CompletionResponse as CompletionResponse,
    type CacheCreateResponse as CacheCreateResponse,
    type CacheRetrieveResponse as CacheRetrieveResponse,
    type CacheUpdateResponse as CacheUpdateResponse,
    type CacheAddDocsResponse as CacheAddDocsResponse,
    type CacheCreateParams as CacheCreateParams,
    type CacheAddDocsParams as CacheAddDocsParams,
    type CacheQueryParams as CacheQueryParams,
  };
}
