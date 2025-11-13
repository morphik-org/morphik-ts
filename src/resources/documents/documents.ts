// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as IngestAPI from '../ingest';
import * as ChatAPI from './chat';
import { Chat, ChatCompleteParams, ChatCompleteResponse, ChatRetrieveHistoryResponse } from './chat';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Documents extends APIResource {
  chat: ChatAPI.Chat = new ChatAPI.Chat(this._client);

  /**
   * Retrieve a single document by its external identifier.
   *
   * Args: document_id: External ID of the document to fetch. auth: Authentication
   * context used to verify access rights.
   *
   * Returns: The :class:`Document` metadata if found.
   */
  retrieve(documentID: string, options?: RequestOptions): APIPromise<IngestAPI.Document> {
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
   *
   * Args: request: Request body containing filters and pagination auth:
   * Authentication context folder_name: Optional folder to scope the operation to
   * end_user_id: Optional end-user ID to scope the operation to
   *
   * Returns: List[Document]: List of accessible documents
   */
  list(params: DocumentListParams, options?: RequestOptions): APIPromise<DocumentListResponse> {
    const { end_user_id, folder_name, ...body } = params;
    return this._client.post('/documents', { query: { end_user_id, folder_name }, body, ...options });
  }

  /**
   * Delete a document and all associated data.
   *
   * This endpoint deletes a document and all its associated data, including:
   *
   * - Document metadata
   * - Document content in storage
   * - Document chunks and embeddings in vector store
   *
   * Args: document_id: ID of the document to delete auth: Authentication context
   * (must have write access to the document)
   *
   * Returns: Deletion status
   */
  delete(documentID: string, options?: RequestOptions): APIPromise<DocumentDeleteResponse> {
    return this._client.delete(path`/documents/${documentID}`, options);
  }

  /**
   * Download the actual file content for a document. This endpoint is used for local
   * storage when file:// URLs cannot be accessed by browsers.
   *
   * Args: document_id: External ID of the document auth: Authentication context
   *
   * Returns: StreamingResponse with the file content
   */
  downloadFile(documentID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/documents/${documentID}/file`, options);
  }

  /**
   * Get document by filename.
   *
   * Args: filename: Filename of the document to retrieve auth: Authentication
   * context folder_name: Optional folder to scope the operation to end_user_id:
   * Optional end-user ID to scope the operation to
   *
   * Returns: Document: Document metadata if found and accessible
   */
  getByFilename(
    filename: string,
    query: DocumentGetByFilenameParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IngestAPI.Document> {
    return this._client.get(path`/documents/filename/${filename}`, { query, ...options });
  }

  /**
   * Get a download URL for a specific document.
   *
   * Args: document_id: External ID of the document auth: Authentication context
   * expires_in: URL expiration time in seconds (default: 1 hour)
   *
   * Returns: Dictionary containing the download URL and metadata
   */
  getDownloadURL(
    documentID: string,
    query: DocumentGetDownloadURLParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DocumentGetDownloadURLResponse> {
    return this._client.get(path`/documents/${documentID}/download_url`, { query, ...options });
  }

  /**
   * Get the processing status of a document.
   *
   * Args: document_id: ID of the document to check auth: Authentication context
   *
   * Returns: Dict containing status information for the document
   */
  getStatus(documentID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/documents/${documentID}/status`, options);
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
    const { end_user_id, folder_name, ...body } = params;
    return this._client.post('/documents/list_docs', {
      query: { end_user_id, folder_name },
      body,
      ...options,
    });
  }

  /**
   * Extract specific pages from a document (PDF, PowerPoint, or Word) as
   * base64-encoded images.
   *
   * Args: request: Request containing document_id, start_page, and end_page auth:
   * Authentication context
   *
   * Returns: DocumentPagesResponse: Base64-encoded images of the requested pages
   */
  pages(body: DocumentPagesParams, options?: RequestOptions): APIPromise<DocumentPagesResponse> {
    return this._client.post('/documents/pages', { body, ...options });
  }

  /**
   * Update a document with content from a file using the specified strategy.
   *
   * Args: document_id: ID of the document to update file: File to add to the
   * document metadata: JSON string of metadata to merge with existing metadata
   * update_strategy: Strategy for updating the document (default: 'add')
   * use_colpali: Whether to use multi-vector embedding auth: Authentication context
   *
   * Returns: Document: Updated document metadata
   */
  updateFile(
    documentID: string,
    body: DocumentUpdateFileParams,
    options?: RequestOptions,
  ): APIPromise<IngestAPI.Document> {
    return this._client.post(
      path`/documents/${documentID}/update_file`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Update only a document's metadata.
   *
   * Args: document_id: ID of the document to update metadata_updates: New metadata
   * to merge with existing metadata auth: Authentication context
   *
   * Returns: Document: Updated document metadata
   */
  updateMetadata(
    documentID: string,
    body: DocumentUpdateMetadataParams,
    options?: RequestOptions,
  ): APIPromise<IngestAPI.Document> {
    return this._client.post(path`/documents/${documentID}/update_metadata`, { body, ...options });
  }

  /**
   * Update a document with new text content using the specified strategy.
   *
   * Args: document_id: ID of the document to update request: Text content and
   * metadata for the update update_strategy: Strategy for updating the document
   * (default: 'add') auth: Authentication context
   *
   * Returns: Document: Updated document metadata
   */
  updateText(
    documentID: string,
    params: DocumentUpdateTextParams,
    options?: RequestOptions,
  ): APIPromise<IngestAPI.Document> {
    const { update_strategy, ...body } = params;
    return this._client.post(path`/documents/${documentID}/update_text`, {
      query: { update_strategy },
      body,
      ...options,
    });
  }
}

/**
 * Request model for document chat completion.
 */
export interface DocumentChatRequest {
  message: string;

  document_id?: string | null;

  session_id?: string | null;
}

/**
 * Response for document deletion endpoint
 */
export interface DocumentDeleteResponse {
  message: string;

  status: string;
}

export type DocumentListResponse = Array<IngestAPI.Document>;

export type DocumentDownloadFileResponse = unknown;

/**
 * Response for document download URL endpoint
 */
export interface DocumentGetDownloadURLResponse {
  download_url: string;

  expires_in: number;
}

export type DocumentGetStatusResponse = unknown;

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
   * Query param:
   */
  folder_name?: string | Array<string> | null;

  /**
   * Body param: Metadata filters with operator support: $and, $or, $nor, $not, $eq,
   * $ne, $gt, $gte, $lt, $lte, $in, $nin, $exists, $type, $regex, $contains.
   * Implicit equality uses JSONB containment; explicit operators support typed
   * comparisons.
   */
  document_filters?: unknown | null;

  /**
   * Body param:
   */
  limit?: number;

  /**
   * Body param:
   */
  skip?: number;
}

export interface DocumentGetByFilenameParams {
  end_user_id?: string | null;

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
  document_filters?: unknown | null;

  /**
   * Body param: Optional list of fields to project for each document (dot notation
   * supported)
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
}

export interface DocumentUpdateFileParams {
  file: Uploadable;

  metadata?: string;

  metadata_types?: string;

  update_strategy?: string;

  use_colpali?: boolean | null;
}

export interface DocumentUpdateMetadataParams {
  metadata?: unknown;

  /**
   * Optional per-field type hints: 'string', 'number', 'decimal', 'datetime',
   * 'date', 'boolean', 'array', 'object'. Enables typed comparisons.
   */
  metadata_types?: { [key: string]: string } | null;
}

export interface DocumentUpdateTextParams {
  /**
   * Body param:
   */
  content: string;

  /**
   * Query param:
   */
  update_strategy?: string;

  /**
   * Body param: Optional end-user scope for the operation
   */
  end_user_id?: string | null;

  /**
   * Body param:
   */
  filename?: string | null;

  /**
   * Body param: Optional folder scope for the operation
   */
  folder_name?: string | null;

  /**
   * Body param:
   */
  metadata?: unknown;

  /**
   * Body param: Optional per-field type hints: 'string', 'number', 'decimal',
   * 'datetime', 'date', 'boolean', 'array', 'object'. Enables typed comparisons with
   * $eq, $gt, etc. Types are inferred if omitted.
   */
  metadata_types?: { [key: string]: string } | null;

  /**
   * Body param:
   */
  use_colpali?: boolean | null;

  [k: string]: unknown;
}

Documents.Chat = Chat;

export declare namespace Documents {
  export {
    type DocumentChatRequest as DocumentChatRequest,
    type DocumentDeleteResponse as DocumentDeleteResponse,
    type DocumentListResponse as DocumentListResponse,
    type DocumentDownloadFileResponse as DocumentDownloadFileResponse,
    type DocumentGetDownloadURLResponse as DocumentGetDownloadURLResponse,
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
  };

  export {
    Chat as Chat,
    type ChatCompleteResponse as ChatCompleteResponse,
    type ChatRetrieveHistoryResponse as ChatRetrieveHistoryResponse,
    type ChatCompleteParams as ChatCompleteParams,
  };
}
