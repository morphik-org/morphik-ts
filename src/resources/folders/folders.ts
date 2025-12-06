// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FoldersAPI from './folders';
import * as DocumentsAPI from './documents';
import { DocumentAddParams, DocumentAddResponse, DocumentRemoveParams, Documents } from './documents';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Folders extends APIResource {
  documents: DocumentsAPI.Documents = new DocumentsAPI.Documents(this._client);

  /**
   * Create a new folder.
   */
  create(body: FolderCreateParams, options?: RequestOptions): APIPromise<Folder> {
    return this._client.post('/folders', { body, ...options });
  }

  /**
   * Get a folder by ID or name.
   */
  retrieve(folderIDOrName: string, options?: RequestOptions): APIPromise<Folder> {
    return this._client.get(path`/folders/${folderIDOrName}`, options);
  }

  /**
   * List all folders the user has access to.
   */
  list(options?: RequestOptions): APIPromise<FolderListResponse> {
    return this._client.get('/folders', options);
  }

  /**
   * Delete a folder and all associated documents.
   */
  delete(
    folderIDOrName: string,
    params: FolderDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FolderDeleteResponse> {
    const { recursive } = params ?? {};
    return this._client.delete(path`/folders/${folderIDOrName}`, { query: { recursive }, ...options });
  }

  /**
   * Retrieve folder metadata with optional document statistics and projections.
   */
  details(body: FolderDetailsParams, options?: RequestOptions): APIPromise<FolderDetailsResponse> {
    return this._client.post('/folders/details', { body, ...options });
  }

  /**
   * Return compact folder list (id, name, doc_count, updated_at).
   */
  listSummaries(options?: RequestOptions): APIPromise<FolderListSummariesResponse> {
    return this._client.get('/folders/summary', options);
  }
}

/**
 * Represents a folder that contains documents
 */
export interface Folder {
  name: string;

  id?: string;

  app_id?: string | null;

  child_count?: number | null;

  depth?: number | null;

  description?: string | null;

  document_ids?: Array<string> | null;

  end_user_id?: string | null;

  full_path?: string | null;

  parent_id?: string | null;

  system_metadata?: { [key: string]: unknown };
}

export type FolderListResponse = Array<Folder>;

/**
 * Response for folder deletion endpoint
 */
export interface FolderDeleteResponse {
  message: string;

  status: string;
}

/**
 * Response wrapping folder detail entries.
 */
export interface FolderDetailsResponse {
  folders: Array<FolderDetailsResponse.Folder>;
}

export namespace FolderDetailsResponse {
  /**
   * Folder details with optional document summary.
   */
  export interface Folder {
    /**
     * Represents a folder that contains documents
     */
    folder: FoldersAPI.Folder;

    /**
     * Document summary for a folder.
     */
    document_info?: Folder.DocumentInfo | null;
  }

  export namespace Folder {
    /**
     * Document summary for a folder.
     */
    export interface DocumentInfo {
      document_count?: number | null;

      documents?: Array<unknown>;

      has_more?: boolean;

      limit?: number;

      next_skip?: number | null;

      returned_count?: number;

      skip?: number;

      status_counts?: { [key: string]: number } | null;
    }
  }
}

export type FolderListSummariesResponse = Array<FolderListSummariesResponse.FolderListSummariesResponseItem>;

export namespace FolderListSummariesResponse {
  export interface FolderListSummariesResponseItem {
    id: string;

    name: string;

    depth?: number | null;

    description?: string | null;

    doc_count?: number;

    full_path?: string | null;

    updated_at?: string | null;
  }
}

export interface FolderCreateParams {
  name: string;

  description?: string | null;

  full_path?: string | null;

  parent_id?: string | null;
}

export interface FolderDeleteParams {
  recursive?: boolean;
}

export interface FolderDetailsParams {
  /**
   * Optional list of fields to project for folder documents (dot notation supported)
   */
  document_fields?: Array<string> | null;

  /**
   * Optional metadata filters applied when computing folder document statistics
   */
  document_filters?: { [key: string]: unknown } | null;

  /**
   * Maximum number of documents to return per folder when include_documents is true
   */
  document_limit?: number;

  /**
   * Number of documents to skip within each folder when include_documents is true
   */
  document_skip?: number;

  /**
   * List of folder IDs or names. If omitted, returns details for all accessible
   * folders.
   */
  identifiers?: Array<string> | null;

  /**
   * Include total document count when true
   */
  include_document_count?: boolean;

  /**
   * Include a paginated list of documents for each folder when true
   */
  include_documents?: boolean;

  /**
   * Include document counts grouped by status when true
   */
  include_status_counts?: boolean;

  /**
   * Field to sort folder documents by when include_documents is true
   */
  sort_by?: 'created_at' | 'updated_at' | 'filename' | 'external_id' | null;

  /**
   * Sort direction for folder documents when include_documents is true
   */
  sort_direction?: 'asc' | 'desc';
}

Folders.Documents = Documents;

export declare namespace Folders {
  export {
    type Folder as Folder,
    type FolderListResponse as FolderListResponse,
    type FolderDeleteResponse as FolderDeleteResponse,
    type FolderDetailsResponse as FolderDetailsResponse,
    type FolderListSummariesResponse as FolderListSummariesResponse,
    type FolderCreateParams as FolderCreateParams,
    type FolderDeleteParams as FolderDeleteParams,
    type FolderDetailsParams as FolderDetailsParams,
  };

  export {
    Documents as Documents,
    type DocumentAddResponse as DocumentAddResponse,
    type DocumentAddParams as DocumentAddParams,
    type DocumentRemoveParams as DocumentRemoveParams,
  };
}
