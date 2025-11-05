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
   *
   * Args: files: List of files to upload. metadata: Either a single JSON-string dict
   * or list of dicts matching the number of files. use_colpali: Enable multi-vector
   * embeddings. folder_name: Optional folder scoping for **all** files. end_user_id:
   * Optional end-user scoping for **all** files. auth: Caller context with _write_
   * permission. redis: arq redis connection to enqueue jobs.
   *
   * Returns: BatchIngestResponse summarising created documents & errors.
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
   * Run an on-demand Gemini document query with optional structured output and
   * ingestion.
   *
   * Args: file: Uploaded source document (PDF or another supported MIME type).
   * prompt: Natural-language instruction to execute against the document. schema:
   * Optional JSON schema enforcing structured Gemini output. ingestion_options: JSON
   * object controlling ingestion follow-up (keys: ingest, use_colpali, folder_name,
   * end_user_id, metadata).
   *
   * Returns: DocumentQueryResponse containing Gemini outputs, original metadata, and
   * ingestion status details.
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
   *
   * Args: file: Uploaded file from multipart/form-data. metadata: JSON-string
   * representing user metadata. auth: Caller context – must include _write_
   * permission. use_colpali: Switch to multi-vector embeddings. folder_name:
   * Optionally scope doc to a folder. end_user_id: Optionally scope doc to an
   * end-user. redis: arq redis connection – used to enqueue the job.
   *
   * Returns: Document stub with `status='processing'`.
   */
  ingestFile(body: IngestIngestFileParams, options?: RequestOptions): APIPromise<Document> {
    return this._client.post('/ingest/file', multipartFormRequestOptions({ body, ...options }, this._client));
  }

  /**
   * Ingest a **text** document.
   *
   * Args: request: IngestTextRequest payload containing: • content – raw text to
   * ingest. • filename – optional filename to help detect MIME-type. • metadata –
   * optional JSON metadata dict. • folder_name – optional folder scope. •
   * end_user_id – optional end-user scope. auth: Decoded JWT context (injected).
   *
   * Returns: Document metadata row representing the newly-ingested text.
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

  additional_metadata?: unknown;

  app_id?: string | null;

  chunk_ids?: Array<string>;

  end_user_id?: string | null;

  external_id?: string;

  filename?: string | null;

  folder_name?: string | null;

  metadata?: unknown;

  storage_files?: Array<Document.StorageFile>;

  storage_info?: unknown;

  system_metadata?: unknown;
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
  content: string;

  /**
   * Optional end-user scope for the operation
   */
  end_user_id?: string | null;

  filename?: string | null;

  /**
   * Optional folder scope for the operation
   */
  folder_name?: string | null;

  metadata?: unknown;

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
  combined_metadata?: unknown;

  /**
   * Structured output coerced to metadata when possible
   */
  extracted_metadata?: unknown | null;

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
  ingestion_options?: unknown;

  /**
   * Original metadata supplied alongside the request
   */
  input_metadata?: unknown;

  /**
   * Raw structured output returned from Gemini (may be list/dict)
   */
  structured_output?: unknown;

  /**
   * Raw text returned from Gemini when no schema is provided
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

  use_colpali?: boolean | null;
}

export interface IngestDocumentQueryParams {
  file: Uploadable;

  prompt: string;

  ingestion_options?: string;

  schema?: string | null;
}

export interface IngestIngestFileParams {
  file: Uploadable;

  end_user_id?: string | null;

  folder_name?: string | null;

  metadata?: string;

  use_colpali?: boolean | null;
}

export interface IngestIngestTextParams {
  content: string;

  /**
   * Optional end-user scope for the operation
   */
  end_user_id?: string | null;

  filename?: string | null;

  /**
   * Optional folder scope for the operation
   */
  folder_name?: string | null;

  metadata?: unknown;

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
     * Override ColPali processing flag. When omitted the server attempts to infer it.
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
