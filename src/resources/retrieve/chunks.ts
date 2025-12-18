// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ChunksAPI from './chunks';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Chunks extends APIResource {
  /**
   * Retrieve relevant chunks.
   *
   * The optional `request.filters` payload accepts equality checks (which also match
   * scalars inside JSON arrays) plus the logical operators `$and`, `$or`, `$nor`,
   * and `$not`. Field-level predicates include `$eq`, `$ne`, `$in`, `$nin`,
   * `$exists`, `$type`, `$regex`, `$contains`, and the comparison operators `$gt`,
   * `$gte`, `$lt`, and `$lte`. Comparison clauses evaluate typed metadata (`number`,
   * `decimal`, `datetime`, or `date`) and raise detailed validation errors when
   * operands cannot be coerced. Regex filters allow the optional `i` flag for
   * case-insensitive matching, while `$contains` performs substring checks
   * (case-insensitive by default, configurable via `case_sensitive`). Filters can be
   * nested freely, for example:
   *
   * ```json
   * {
   *   "$and": [
   *     { "category": "policy" },
   *     { "$or": [{ "region": "emea" }, { "priority": { "$in": ["p0", "p1"] } }] }
   *   ]
   * }
   * ```
   *
   * Returns a list of `ChunkResult` objects ordered by relevance.
   */
  create(body: ChunkCreateParams, options?: RequestOptions): APIPromise<ChunkCreateResponse> {
    return this._client.post('/retrieve/chunks', { body, ...options });
  }

  /**
   * Retrieve relevant chunks with grouped response format.
   *
   * Uses the same filter operators as `/retrieve/chunks` (equality, `$eq/$ne`,
   * `$gt/$gte/$lt/$lte`, `$in/$nin`, `$exists`, `$type`, `$regex`, `$contains`, and
   * the logical `$and/$or/$nor/$not`), with arbitrary nesting supported inside
   * `request.filters`.
   *
   * Returns both flat results (for backward compatibility) and grouped results (for
   * UI). When padding > 0, groups chunks by main matches and their padding chunks.
   */
  createGrouped(
    body: ChunkCreateGroupedParams,
    options?: RequestOptions,
  ): APIPromise<ChunkCreateGroupedResponse> {
    return this._client.post('/retrieve/chunks/grouped', { body, ...options });
  }
}

/**
 * Query result at chunk level
 */
export interface ChunkResult {
  chunk_number: number;

  content: string;

  content_type: string;

  document_id: string;

  metadata: { [key: string]: unknown };

  score: number;

  download_url?: string | null;

  filename?: string | null;

  /**
   * Whether this chunk was added as padding
   */
  is_padding?: boolean;
}

/**
 * Base retrieve request model
 */
export interface RetrieveRequest {
  /**
   * Optional end-user scope for the operation
   */
  end_user_id?: string | null;

  /**
   * Metadata filters supporting logical operators ($and/$or/$not/$nor) and field
   * predicates ($eq/$ne/$gt/$gte/$lt/$lte/$in/$nin/$exists/$type/$regex/$contains).
   */
  filters?: { [key: string]: unknown } | null;

  /**
   * Folder scope depth. 0 or None = exact folder only, -1 = include all descendants,
   * n > 0 = include descendants up to n levels deeper.
   */
  folder_depth?: number | null;

  /**
   * Optional folder scope. Accepts a folder PATH (e.g., '/Company/Reports') or list
   * of paths.
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
   * Output format for image chunks in retrieval results.
   */
  output_format?: 'base64' | 'url' | 'text' | null;

  /**
   * Number of additional chunks/pages to retrieve before and after matched chunks
   * (ColPali only)
   */
  padding?: number;

  /**
   * Natural-language query used to retrieve relevant chunks or documents.
   */
  query?: string | null;

  /**
   * Base64-encoded image to use as query for Morphik multimodal retrieval. Requires
   * use_colpali=True. Mutually exclusive with 'query'.
   */
  query_image?: string | null;

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

export type ChunkCreateResponse = Array<ChunkResult>;

/**
 * Response that includes both flat results and grouped results for UI
 */
export interface ChunkCreateGroupedResponse {
  /**
   * Flat list of all chunks (for backward compatibility)
   */
  chunks: Array<ChunkResult>;

  /**
   * Grouped chunks for UI display
   */
  groups: Array<ChunkCreateGroupedResponse.Group>;

  /**
   * Whether padding was applied to any results
   */
  has_padding: boolean;

  /**
   * Total number of unique chunks
   */
  total_results: number;
}

export namespace ChunkCreateGroupedResponse {
  /**
   * Represents a group of chunks: one main match + its padding chunks
   */
  export interface Group {
    /**
     * Query result at chunk level
     */
    main_chunk: ChunksAPI.ChunkResult;

    /**
     * Total number of chunks in this group
     */
    total_chunks: number;

    padding_chunks?: Array<ChunksAPI.ChunkResult>;
  }
}

export interface ChunkCreateParams {
  /**
   * Optional end-user scope for the operation
   */
  end_user_id?: string | null;

  /**
   * Metadata filters supporting logical operators ($and/$or/$not/$nor) and field
   * predicates ($eq/$ne/$gt/$gte/$lt/$lte/$in/$nin/$exists/$type/$regex/$contains).
   */
  filters?: { [key: string]: unknown } | null;

  /**
   * Folder scope depth. 0 or None = exact folder only, -1 = include all descendants,
   * n > 0 = include descendants up to n levels deeper.
   */
  folder_depth?: number | null;

  /**
   * Optional folder scope. Accepts a folder PATH (e.g., '/Company/Reports') or list
   * of paths.
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
   * Output format for image chunks in retrieval results.
   */
  output_format?: 'base64' | 'url' | 'text' | null;

  /**
   * Number of additional chunks/pages to retrieve before and after matched chunks
   * (ColPali only)
   */
  padding?: number;

  /**
   * Natural-language query used to retrieve relevant chunks or documents.
   */
  query?: string | null;

  /**
   * Base64-encoded image to use as query for Morphik multimodal retrieval. Requires
   * use_colpali=True. Mutually exclusive with 'query'.
   */
  query_image?: string | null;

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

export interface ChunkCreateGroupedParams {
  /**
   * Optional end-user scope for the operation
   */
  end_user_id?: string | null;

  /**
   * Metadata filters supporting logical operators ($and/$or/$not/$nor) and field
   * predicates ($eq/$ne/$gt/$gte/$lt/$lte/$in/$nin/$exists/$type/$regex/$contains).
   */
  filters?: { [key: string]: unknown } | null;

  /**
   * Folder scope depth. 0 or None = exact folder only, -1 = include all descendants,
   * n > 0 = include descendants up to n levels deeper.
   */
  folder_depth?: number | null;

  /**
   * Optional folder scope. Accepts a folder PATH (e.g., '/Company/Reports') or list
   * of paths.
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
   * Output format for image chunks in retrieval results.
   */
  output_format?: 'base64' | 'url' | 'text' | null;

  /**
   * Number of additional chunks/pages to retrieve before and after matched chunks
   * (ColPali only)
   */
  padding?: number;

  /**
   * Natural-language query used to retrieve relevant chunks or documents.
   */
  query?: string | null;

  /**
   * Base64-encoded image to use as query for Morphik multimodal retrieval. Requires
   * use_colpali=True. Mutually exclusive with 'query'.
   */
  query_image?: string | null;

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

export declare namespace Chunks {
  export {
    type ChunkResult as ChunkResult,
    type RetrieveRequest as RetrieveRequest,
    type ChunkCreateResponse as ChunkCreateResponse,
    type ChunkCreateGroupedResponse as ChunkCreateGroupedResponse,
    type ChunkCreateParams as ChunkCreateParams,
    type ChunkCreateGroupedParams as ChunkCreateGroupedParams,
  };
}
