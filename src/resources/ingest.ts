// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';

export class Ingest extends APIResource {
  /**
   * Batch ingest **multiple files** (async).
   *
   * Each file is treated the same as :func:`ingest_file` but sharing the same
   * request avoids many round-trips. All heavy work is still delegated to the
   * background worker pool.
   */
  batchIngestFiles(
    body: IngestBatchIngestFilesParams,
    options?: RequestOptions,
  ): APIPromise<IngestBatchIngestFilesResponse> {
    return this._client.post(
      '/ingest/files',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Execute a one-off analysis for a document using Morphik On-the-Fly, optionally
   * enforcing structured output and scheduling a follow-up ingestion.
   *
   * `ingestion_options` is a JSON string controlling post-analysis ingestion
   * behaviour via keys such as `ingest`, `metadata`, `use_colpali`, `folder_name`,
   * and `end_user_id`. Additional keys are ignored. A :class:`DocumentQueryResponse`
   * describing the inline analysis and any queued ingestion is returned.
   */
  documentQuery(
    body: IngestDocumentQueryParams,
    options?: RequestOptions,
  ): APIPromise<IngestDocumentQueryResponse> {
    return this._client.post(
      '/ingest/document/query',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Ingest a **file** asynchronously.
   *
   * The file is uploaded to object storage, a _Document_ stub is persisted with
   * `status='processing'` and a background worker picks up the heavy parsing /
   * chunking work.
   */
  ingestFile(body: IngestIngestFileParams, options?: RequestOptions): APIPromise<Document> {
    return this._client.post('/ingest/file', multipartFormRequestOptions({ body, ...options }, this._client));
  }

  /**
   * Ingest a **text** document.
   */
  ingestText(body: IngestIngestTextParams, options?: RequestOptions): APIPromise<Document> {
    return this._client.post('/ingest/text', { body, ...options });
  }

  /**
   * Requeue ingestion jobs for documents stuck in processing or marked as failed.
   */
  requeue(body: IngestRequeueParams, options?: RequestOptions): APIPromise<IngestRequeueResponse> {
    return this._client.post('/ingest/requeue', { body, ...options });
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

  folder_name?: string | null;

  folder_path?: string | null;

  metadata?: { [key: string]: unknown };

  metadata_types?: { [key: string]: string };

  storage_files?: Array<Document.StorageFile>;

  storage_info?: { [key: string]: unknown };

  system_metadata?: { [key: string]: unknown };
}

export namespace Document {
  /**
   * Information about a file stored in storage
   */
  export interface StorageFile {
    bucket: string;

    key: string;

    content_type?: string | null;

    filename?: string | null;

    timestamp?: string;

    version?: number;
  }
}

/**
 * Request model for ingesting text content
 */
export interface TextRequest {
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

/**
 * Response model for batch ingestion
 */
export interface IngestBatchIngestFilesResponse {
  documents: Array<Document>;

  errors: Array<{ [key: string]: string }>;
}

/**
 * Response model for document query with optional ingestion follow-up.
 */
export interface IngestDocumentQueryResponse {
  /**
   * Metadata that would be used if ingestion is performed
   */
  combined_metadata?: { [key: string]: unknown };

  /**
   * Structured output coerced to metadata when possible
   */
  extracted_metadata?: { [key: string]: unknown } | null;

  /**
   * Represents a document stored in the database documents collection
   */
  ingestion_document?: Document | null;

  /**
   * True when the document was queued for ingestion after extraction
   */
  ingestion_enqueued?: boolean;

  /**
   * Normalized ingestion options applied to this request
   */
  ingestion_options?: { [key: string]: unknown };

  /**
   * Original metadata supplied alongside the request
   */
  input_metadata?: { [key: string]: unknown };

  /**
   * Raw structured output returned from Morphik On-the-Fly (may be list/dict)
   */
  structured_output?: unknown;

  /**
   * Raw text returned from Morphik On-the-Fly when no schema is provided
   */
  text_output?: string | null;
}

/**
 * Response payload for requeueing ingestion jobs.
 */
export interface IngestRequeueResponse {
  /**
   * Per-document outcomes
   */
  results: Array<IngestRequeueResponse.Result>;
}

export namespace IngestRequeueResponse {
  /**
   * Result information for an individual requeued ingestion job.
   */
  export interface Result {
    /**
     * Document external identifier
     */
    external_id: string;

    /**
     * Outcome status for this job
     */
    status: string;

    /**
     * Optional human-readable message describing the outcome
     */
    message?: string | null;
  }
}

export interface IngestBatchIngestFilesParams {
  files: Array<Uploadable>;

  end_user_id?: string | null;

  folder_name?: string | null;

  metadata?: string;

  metadata_types?: string;

  use_colpali?: boolean | null;
}

export interface IngestDocumentQueryParams {
  file: Uploadable;

  prompt: string;

  ingestion_options?: string;

  response_schema?: string | null;
}

export interface IngestIngestFileParams {
  file: Uploadable;

  end_user_id?: string | null;

  folder_name?: string | null;

  metadata?: string;

  metadata_types?: string;

  use_colpali?: boolean | null;
}

export interface IngestIngestTextParams {
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

export interface IngestRequeueParams {
  /**
   * When true, requeue every accessible document whose status matches `statuses`
   * (defaults to processing/failed).
   */
  include_all?: boolean;

  /**
   * Collection of jobs to requeue, each with optional ColPali override.
   */
  jobs?: Array<IngestRequeueParams.Job>;

  /**
   * Maximum number of documents to auto-select from the provided statuses when
   * include_all is true.
   */
  limit?: number | null;

  /**
   * Processing statuses to include when `include_all` is true. Defaults to
   * ['processing', 'failed'].
   */
  statuses?: Array<string> | null;
}

export namespace IngestRequeueParams {
  /**
   * Job descriptor for requeuing an ingestion task.
   */
  export interface Job {
    /**
     * External identifier of the document to requeue
     */
    external_id: string;

    /**
     * When provided, uses Morphik's finetuned ColPali style embeddings (recommended to
     * be True for high quality retrieval).
     */
    use_colpali?: boolean | null;
  }
}

export declare namespace Ingest {
  export {
    type Document as Document,
    type TextRequest as TextRequest,
    type IngestBatchIngestFilesResponse as IngestBatchIngestFilesResponse,
    type IngestDocumentQueryResponse as IngestDocumentQueryResponse,
    type IngestRequeueResponse as IngestRequeueResponse,
    type IngestBatchIngestFilesParams as IngestBatchIngestFilesParams,
    type IngestDocumentQueryParams as IngestDocumentQueryParams,
    type IngestIngestFileParams as IngestIngestFileParams,
    type IngestIngestTextParams as IngestIngestTextParams,
    type IngestRequeueParams as IngestRequeueParams,
  };
}
