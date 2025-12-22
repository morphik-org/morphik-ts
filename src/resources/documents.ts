// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path } from '../internal/utils/path';

export class Documents extends APIResource {
  /**
   * Retrieve a single document by its external identifier.
   *
   * Returns the :class:`Document` metadata if found or raises 404.
   */
  retrieve(documentID: string, options?: RequestOptions): APIPromise<Document> {
    return this._client.get(path`/documents/${documentID}`, options);
  }

  /**
   * List accessible documents with metadata filtering.
   *
   * **Supported operators**: `$and`, `$or`, `$nor`, `$not`, `$eq`, `$ne`, `$gt`,
   * `$gte`, `$lt`, `$lte`, `$in`, `$nin`, `$exists`, `$type`, `$regex`, `$contains`.
   *
   * **Implicit equality** (backwards compatible):
   *
   * ```json
   * { "status": "active" }
   * ```
   *
   * Uses JSONB containment, matches scalars inside arrays, JSON-serializable types
   * only.
   *
   * **Explicit operators** (typed comparisons):
   *
   * ```json
   * {
   *   "priority": { "$eq": 42 },
   *   "created_date": { "$gte": "2024-01-01T00:00:00Z" }
   * }
   * ```
   *
   * Supports typed metadata (number, decimal, datetime, date) with safe casting.
   */
  list(params: DocumentListParams, options?: RequestOptions): APIPromise<DocumentListResponse> {
    const { end_user_id, folder_depth, folder_name, ...body } = params;
    return this._client.post('/documents', {
      query: { end_user_id, folder_depth, folder_name },
      body,
      ...options,
    });
  }

  /**
   * Delete a document and all associated data.
   *
   * This endpoint deletes a document and all its associated data, including:
   *
   * - Document metadata
   * - Document content in storage
   * - Document chunks and embeddings in vector store
   */
  delete(documentID: string, options?: RequestOptions): APIPromise<DocumentDeleteResponse> {
    return this._client.delete(path`/documents/${documentID}`, options);
  }

  /**
   * Download the actual file content for a document. This endpoint is used for local
   * storage when file:// URLs cannot be accessed by browsers.
   */
  downloadFile(documentID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/documents/${documentID}/file`, options);
  }

  /**
   * Get document by filename.
   */
  getByFilename(
    filename: string,
    query: DocumentGetByFilenameParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Document> {
    return this._client.get(path`/documents/filename/${filename}`, { query, ...options });
  }

  /**
   * Get a download URL for a specific document.
   */
  getDownloadURL(
    documentID: string,
    query: DocumentGetDownloadURLParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DocumentDownloadURLResponse> {
    return this._client.get(path`/documents/${documentID}/download_url`, { query, ...options });
  }

  /**
   * Get the processing status of a document.
   */
  getStatus(documentID: string, options?: RequestOptions): APIPromise<DocumentGetStatusResponse> {
    return this._client.get(path`/documents/${documentID}/status`, options);
  }

  /**
   * Retrieve the latest summary for a document.
   */
  getSummary(documentID: string, options?: RequestOptions): APIPromise<SummaryResponse> {
    return this._client.get(path`/documents/${documentID}/summary`, options);
  }

  /**
   * Flexible document listing with aggregates, projections, and advanced pagination.
   *
   * **Supported operators**: `$and`, `$or`, `$nor`, `$not`, `$eq`, `$ne`, `$gt`,
   * `$gte`, `$lt`, `$lte`, `$in`, `$nin`, `$exists`, `$type`, `$regex`, `$contains`.
   *
   * **Implicit equality** (backwards compatible, JSONB containment):
   *
   * ```json
   * { "status": "active" }
   * ```
   *
   * **Explicit operators** (typed comparisons for number, decimal, datetime, date):
   *
   * ```json
   * { "priority": { "$gte": 40 }, "end_date": { "$lt": "2025-01-01" } }
   * ```
   *
   * Use `folder_name` and `end_user_id` query parameters to scope system metadata.
   */
  listDocs(params: DocumentListDocsParams, options?: RequestOptions): APIPromise<DocumentListDocsResponse> {
    const { end_user_id, folder_depth, folder_name, ...body } = params;
    return this._client.post('/documents/list_docs', {
      query: { end_user_id, folder_depth, folder_name },
      body,
      ...options,
    });
  }

  /**
   * Extract specific pages from a document (PDF, PowerPoint, or Word) as
   * base64-encoded images or URLs. When output_format="url", pages that fail URL
   * generation fall back to base64 data URIs (mixed output possible).
   */
  pages(body: DocumentPagesParams, options?: RequestOptions): APIPromise<DocumentPagesResponse> {
    return this._client.post('/documents/pages', { body, ...options });
  }

  /**
   * Update a document by replacing its content with a new file.
   */
  updateFile(
    documentID: string,
    body: DocumentUpdateFileParams,
    options?: RequestOptions,
  ): APIPromise<Document> {
    return this._client.post(
      path`/documents/${documentID}/update_file`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Update only a document's metadata.
   */
  updateMetadata(
    documentID: string,
    body: DocumentUpdateMetadataParams,
    options?: RequestOptions,
  ): APIPromise<Document> {
    return this._client.post(path`/documents/${documentID}/update_metadata`, { body, ...options });
  }

  /**
   * Update a document by replacing its text content.
   */
  updateText(
    documentID: string,
    body: DocumentUpdateTextParams,
    options?: RequestOptions,
  ): APIPromise<Document> {
    return this._client.post(path`/documents/${documentID}/update_text`, { body, ...options });
  }

  /**
   * Create or update a document summary with optional versioning.
   */
  upsertSummary(
    documentID: string,
    body: DocumentUpsertSummaryParams,
    options?: RequestOptions,
  ): APIPromise<SummaryResponse> {
    return this._client.put(path`/documents/${documentID}/summary`, { body, ...options });
  }
}

/**
 * Represents a document stored in the database documents collection
 */
export interface Document {
  content_type: string;

  additional_metadata?: { [key: string]: unknown };

  app_id?: string | null;

  chunk_ids?: Array<string>;

  end_user_id?: string | null;

  external_id?: string;

  filename?: string | null;

  folder_id?: string | null;

  folder_name?: string | null;

  folder_path?: string | null;

  metadata?: { [key: string]: unknown };

  metadata_types?: { [key: string]: string };

  storage_info?: { [key: string]: unknown };

  summary_bucket?: string | null;

  summary_storage_key?: string | null;

  summary_updated_at?: string | null;

  summary_version?: number | null;

  system_metadata?: { [key: string]: unknown };
}

/**
 * Response for document deletion endpoint
 */
export interface DocumentDeleteResponse {
  message: string;

  status: string;
}

/**
 * Response for document download URL endpoint
 */
export interface DocumentDownloadURLResponse {
  download_url: string;

  expires_in: number;
}

/**
 * Response payload returned when reading or writing summaries.
 */
export interface SummaryResponse {
  content: string;

  storage_key: string;

  version: number;

  bucket?: string | null;

  updated_at?: string | null;
}

export type DocumentListResponse = Array<Document>;

export type DocumentDownloadFileResponse = unknown;

export type DocumentGetStatusResponse = { [key: string]: unknown };

/**
 * Flexible response for listing documents with aggregates.
 */
export interface DocumentListDocsResponse {
  limit: number;

  returned_count: number;

  skip: number;

  documents?: Array<unknown>;

  folder_counts?: Array<DocumentListDocsResponse.FolderCount> | null;

  has_more?: boolean;

  next_skip?: number | null;

  status_counts?: { [key: string]: number } | null;

  total_count?: number | null;
}

export namespace DocumentListDocsResponse {
  /**
   * Count of documents grouped by folder name.
   */
  export interface FolderCount {
    count: number;

    folder: string | null;
  }
}

/**
 * Response for document pages extraction endpoint
 */
export interface DocumentPagesResponse {
  document_id: string;

  end_page: number;

  pages: Array<string>;

  start_page: number;

  total_pages: number;
}

export interface DocumentListParams {
  /**
   * Query param:
   */
  end_user_id?: string | null;

  /**
   * Query param: Folder scope depth: 0/None = exact, -1 = all descendants, n > 0 =
   * include descendants up to n levels.
   */
  folder_depth?: number | null;

  /**
   * Query param:
   */
  folder_name?: string | Array<string> | null;

  /**
   * Body param: Metadata filters with operator support: $and, $or, $nor, $not, $eq,
   * $ne, $gt, $gte, $lt, $lte, $in, $nin, $exists, $type, $regex, $contains.
   * Implicit equality uses JSONB containment; explicit operators support typed
   * comparisons.
   */
  document_filters?: { [key: string]: unknown } | null;

  /**
   * Body param: Maximum number of documents to return.
   */
  limit?: number;

  /**
   * Body param: Number of documents to skip before returning results.
   */
  skip?: number;
}

export interface DocumentGetByFilenameParams {
  end_user_id?: string | null;

  /**
   * Folder scope depth: 0/None = exact, -1 = all descendants, n > 0 = include
   * descendants up to n levels.
   */
  folder_depth?: number | null;

  folder_name?: string | Array<string> | null;
}

export interface DocumentGetDownloadURLParams {
  /**
   * URL expiration time in seconds
   */
  expires_in?: number;
}

export interface DocumentListDocsParams {
  /**
   * Query param:
   */
  end_user_id?: string | null;

  /**
   * Query param: Folder scope depth: 0/None = exact, -1 = all descendants, n > 0 =
   * include descendants up to n levels.
   */
  folder_depth?: number | null;

  /**
   * Query param:
   */
  folder_name?: string | Array<string> | null;

  /**
   * Body param: When true, only documents with completed processing status are
   * returned and counted
   */
  completed_only?: boolean;

  /**
   * Body param: Metadata filters with operator support: $and, $or, $nor, $not, $eq,
   * $ne, $gt, $gte, $lt, $lte, $in, $nin, $exists, $type, $regex, $contains.
   * Implicit equality uses JSONB containment; explicit operators support typed
   * comparisons.
   */
  document_filters?: { [key: string]: unknown } | null;

  /**
   * Body param: Optional list of fields to project for each document (dot notation
   * supported). Derived fields such as 'page_count' are also supported.
   */
  fields?: Array<string> | null;

  /**
   * Body param: Include document counts grouped by folder when true
   */
  include_folder_counts?: boolean;

  /**
   * Body param: Include document counts grouped by processing status when true
   */
  include_status_counts?: boolean;

  /**
   * Body param: Include total number of matching documents when true
   */
  include_total_count?: boolean;

  /**
   * Body param: Maximum number of documents to return
   */
  limit?: number;

  /**
   * Body param: When false, only aggregates are returned
   */
  return_documents?: boolean;

  /**
   * Body param: Number of documents to skip
   */
  skip?: number;

  /**
   * Body param: Field to sort the results by
   */
  sort_by?: 'created_at' | 'updated_at' | 'filename' | 'external_id' | null;

  /**
   * Body param: Sort direction for the results
   */
  sort_direction?: 'asc' | 'desc';
}

export interface DocumentPagesParams {
  /**
   * ID of the document to extract pages from
   */
  document_id: string;

  /**
   * Ending page number (1-indexed)
   */
  end_page: number;

  /**
   * Starting page number (1-indexed)
   */
  start_page: number;

  /**
   * How to return page images: base64 (default) or url
   */
  output_format?: 'base64' | 'url' | null;
}

export interface DocumentUpdateFileParams {
  file: Uploadable;

  metadata?: string;

  metadata_types?: string;

  use_colpali?: boolean | null;
}

export interface DocumentUpdateMetadataParams {
  /**
   * Metadata fields to merge into the document.
   */
  metadata?: { [key: string]: unknown };

  /**
   * Optional per-field type hints: 'string', 'number', 'decimal', 'datetime',
   * 'date', 'boolean', 'array', 'object'. Enables typed comparisons.
   */
  metadata_types?: { [key: string]: string } | null;
}

export interface DocumentUpdateTextParams {
  /**
   * Raw text content to store as a document.
   */
  content: string;

  /**
   * Optional end-user scope for the operation
   */
  end_user_id?: string | null;

  /**
   * Optional filename hint used when inferring MIME type or displaying the document.
   */
  filename?: string | null;

  /**
   * Optional folder scope for the operation
   */
  folder_name?: string | null;

  /**
   * User-defined metadata stored with the document (JSON-serializable).
   */
  metadata?: { [key: string]: unknown };

  /**
   * Optional per-field type hints: 'string', 'number', 'decimal', 'datetime',
   * 'date', 'boolean', 'array', 'object'. Enables typed comparisons with $eq, $gt,
   * etc. Types are inferred if omitted.
   */
  metadata_types?: { [key: string]: string } | null;

  /**
   * When provided, uses Morphik's finetuned ColPali style embeddings (recommended to
   * be True for high quality retrieval).
   */
  use_colpali?: boolean | null;

  [k: string]: unknown;
}

export interface DocumentUpsertSummaryParams {
  /**
   * Summary content to persist (markdown/text)
   */
  content: string;

  /**
   * Allow overwriting the latest summary when versioning is disabled
   */
  overwrite_latest?: boolean;

  /**
   * When true, automatically increments the summary version instead of overwriting
   * the latest version
   */
  versioning?: boolean;
}

export declare namespace Documents {
  export {
    type Document as Document,
    type DocumentDeleteResponse as DocumentDeleteResponse,
    type DocumentDownloadURLResponse as DocumentDownloadURLResponse,
    type SummaryResponse as SummaryResponse,
    type DocumentListResponse as DocumentListResponse,
    type DocumentDownloadFileResponse as DocumentDownloadFileResponse,
    type DocumentGetStatusResponse as DocumentGetStatusResponse,
    type DocumentListDocsResponse as DocumentListDocsResponse,
    type DocumentPagesResponse as DocumentPagesResponse,
    type DocumentListParams as DocumentListParams,
    type DocumentGetByFilenameParams as DocumentGetByFilenameParams,
    type DocumentGetDownloadURLParams as DocumentGetDownloadURLParams,
    type DocumentListDocsParams as DocumentListDocsParams,
    type DocumentPagesParams as DocumentPagesParams,
    type DocumentUpdateFileParams as DocumentUpdateFileParams,
    type DocumentUpdateMetadataParams as DocumentUpdateMetadataParams,
    type DocumentUpdateTextParams as DocumentUpdateTextParams,
    type DocumentUpsertSummaryParams as DocumentUpsertSummaryParams,
  };
}
