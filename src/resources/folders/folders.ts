// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DocumentsAPI from './documents';
import { Documents } from './documents';
import * as WorkflowsAPI from './workflows';
import { Workflows } from './workflows';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Folders extends APIResource {
  documents: DocumentsAPI.Documents = new DocumentsAPI.Documents(this._client);
  workflows: WorkflowsAPI.Workflows = new WorkflowsAPI.Workflows(this._client);

  /**
   * Create a new folder.
   *
   * Args: folder_create: Folder creation request containing name and optional
   * description auth: Authentication context
   *
   * Returns: Folder: Created folder
   */
  create(body: FolderCreateParams, options?: RequestOptions): APIPromise<Folder> {
    return this._client.post('/folders', { body, ...options });
  }

  /**
   * List all folders the user has access to.
   *
   * Args: auth: Authentication context
   *
   * Returns: List[Folder]: List of folders
   */
  list(options?: RequestOptions): APIPromise<FolderListResponse> {
    return this._client.get('/folders', options);
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

  description?: string | null;

  document_ids?: Array<string> | null;

  end_user_id?: string | null;

  system_metadata?: unknown;
}

export type FolderListResponse = Array<Folder>;

export type FolderListSummariesResponse = Array<FolderListSummariesResponse.FolderListSummariesResponseItem>;

export namespace FolderListSummariesResponse {
  export interface FolderListSummariesResponseItem {
    id: string;

    name: string;

    description?: string | null;

    doc_count?: number;

    updated_at?: string | null;
  }
}

export interface FolderCreateParams {
  name: string;

  description?: string | null;
}

Folders.Documents = Documents;
Folders.Workflows = Workflows;

export declare namespace Folders {
  export {
    type Folder as Folder,
    type FolderListResponse as FolderListResponse,
    type FolderListSummariesResponse as FolderListSummariesResponse,
    type FolderCreateParams as FolderCreateParams,
  };

  export { Documents as Documents };

  export { Workflows as Workflows };
}
