// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ChunksAPI from './chunks';
import {
  ChunkCreateGroupedParams,
  ChunkCreateGroupedResponse,
  ChunkCreateParams,
  ChunkCreateResponse,
  ChunkResult,
  Chunks,
  RetrieveRequest,
} from './chunks';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Retrieve extends APIResource {
  chunks: ChunksAPI.Chunks = new ChunksAPI.Chunks(this._client);

  /**
   * Retrieve relevant documents.
   *
   * `request.filters` supports equality checks (including scalar-to-array matches)
   * and the same operator set as `/retrieve/chunks`: logical composition via `$and`,
   * `$or`, `$nor`, `$not`, plus field predicates `$eq`, `$ne`, `$gt`, `$gte`, `$lt`,
   * `$lte`, `$in`, `$nin`, `$exists`, `$type`, `$regex`, and `$contains`. Use the
   * same JSON structure as `/retrieve/chunks` when expressing complex logic.
   * Comparison operators require metadata typed as `number`, `decimal`, `datetime`,
   * or `date`.
   */
  createDocs(
    body: RetrieveCreateDocsParams,
    options?: RequestOptions,
  ): APIPromise<RetrieveCreateDocsResponse> {
    return this._client.post('/retrieve/docs', { body, ...options });
  }
}

export type RetrieveCreateDocsResponse = Array<RetrieveCreateDocsResponse.RetrieveCreateDocsResponseItem>;

export namespace RetrieveCreateDocsResponse {
  /**
   * Query result at document level
   */
  export interface RetrieveCreateDocsResponseItem {
    additional_metadata: unknown;

    /**
     * Represents either a URL or content string
     */
    content: RetrieveCreateDocsResponseItem.Content;

    document_id: string;

    metadata: unknown;

    score: number;
  }

  export namespace RetrieveCreateDocsResponseItem {
    /**
     * Represents either a URL or content string
     */
    export interface Content {
      type: 'url' | 'string';

      value: string;

      /**
       * Filename when type is url
       */
      filename?: string | null;
    }
  }
}

export interface RetrieveCreateDocsParams {
  /**
   * Natural-language query used to retrieve relevant chunks or documents.
   */
  query: string;

  /**
   * Optional end-user scope for the operation
   */
  end_user_id?: string | null;

  /**
   * Metadata filters supporting logical operators ($and/$or/$not/$nor) and field
   * predicates ($eq/$ne/$gt/$gte/$lt/$lte/$in/$nin/$exists/$type/$regex/$contains).
   */
  filters?: unknown | null;

  /**
   * Optional folder scope for the operation. Accepts a single folder name or a list
   * of folder names.
   */
  folder_name?: string | Array<string> | null;

  /**
   * Name of the graph to use for knowledge graph-enhanced retrieval
   */
  graph_name?: string | null;

  /**
   * Number of relationship hops to traverse in the graph
   */
  hop_depth?: number | null;

  /**
   * Whether to include relationship paths in the response
   */
  include_paths?: boolean | null;

  /**
   * Maximum number of chunks or documents to return.
   */
  k?: number;

  /**
   * Minimum similarity score a result must meet before it is returned.
   */
  min_score?: number;

  /**
   * How to return image chunks: base64 data URI (default) or a presigned URL
   */
  output_format?: 'base64' | 'url' | null;

  /**
   * Number of additional chunks/pages to retrieve before and after matched chunks
   * (ColPali only)
   */
  padding?: number;

  /**
   * When provided, uses Morphik's finetuned ColPali style embeddings (recommended to
   * be True for high quality retrieval).
   */
  use_colpali?: boolean | null;

  /**
   * When provided, overrides the workspace reranking configuration for this request.
   */
  use_reranking?: boolean | null;
}

Retrieve.Chunks = Chunks;

export declare namespace Retrieve {
  export {
    type RetrieveCreateDocsResponse as RetrieveCreateDocsResponse,
    type RetrieveCreateDocsParams as RetrieveCreateDocsParams,
  };

  export {
    Chunks as Chunks,
    type ChunkResult as ChunkResult,
    type RetrieveRequest as RetrieveRequest,
    type ChunkCreateResponse as ChunkCreateResponse,
    type ChunkCreateGroupedResponse as ChunkCreateGroupedResponse,
    type ChunkCreateParams as ChunkCreateParams,
    type ChunkCreateGroupedParams as ChunkCreateGroupedParams,
  };
}
