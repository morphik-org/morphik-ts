// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AuthAPI from './auth';
import {
  Auth,
  AuthFinalizeManualAuthParams,
  AuthFinalizeManualAuthResponse,
  AuthGetInitiateAuthURLParams,
  AuthGetInitiateAuthURLResponse,
} from './auth';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Connectors extends APIResource {
  auth: AuthAPI.Auth = new AuthAPI.Auth(this._client);

  /**
   * Disconnect from a connector and remove credentials.
   */
  disconnect(body: ConnectorDisconnectParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/ee/connectors/disconnect', { body, ...options });
  }

  /**
   * Finalize the OAuth flow and exchange the code for a token.
   */
  finalizeAuth(body: ConnectorFinalizeAuthParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/ee/connectors/finalize-auth', { body, ...options });
  }

  /**
   * Checks the current authentication status for the given connector type.
   */
  getAuthStatus(connectorType: string, options?: RequestOptions): APIPromise<ConnectorGetAuthStatusResponse> {
    return this._client.get(path`/ee/connectors/${connectorType}/auth_status`, options);
  }

  /**
   * Handles the OAuth 2.0 callback from the authentication provider. Validates
   * state, finalizes authentication, and stores credentials.
   */
  handleOAuthCallback(
    connectorType: string,
    query: ConnectorHandleOAuthCallbackParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(path`/ee/connectors/${connectorType}/oauth2callback`, { query, ...options });
  }

  /**
   * Ingest a single file from a connector.
   */
  ingestFile(
    connectorType: string,
    body: ConnectorIngestFileParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(path`/ee/connectors/${connectorType}/ingest`, { body, ...options });
  }

  /**
   * Ingest an entire GitHub repository.
   */
  ingestRepository(
    connectorType: string,
    params: ConnectorIngestRepositoryParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { body_connector_type, ...body } = params;
    return this._client.post(path`/ee/connectors/${connectorType}/ingest-repository`, {
      body: { connector_type: body_connector_type, ...body },
      ...options,
    });
  }

  /**
   * Initiate the OAuth flow for a connector.
   */
  initiateAuth(body: ConnectorInitiateAuthParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/ee/connectors/initiate-auth', { body, ...options });
  }

  /**
   * Lists files and folders from the specified connector.
   */
  listFiles(
    connectorType: string,
    query: ConnectorListFilesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConnectorListFilesResponse> {
    return this._client.get(path`/ee/connectors/${connectorType}/files`, { query, ...options });
  }

  /**
   * List files from a connector.
   */
  listFilesViaBody(body: ConnectorListFilesViaBodyParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/ee/connectors/list-files', { body, ...options });
  }

  /**
   * Get the authentication status for a connector.
   */
  status(body: ConnectorStatusParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/ee/connectors/status', { body, ...options });
  }
}

export type ConnectorDisconnectResponse = unknown;

export type ConnectorFinalizeAuthResponse = unknown;

export interface ConnectorGetAuthStatusResponse {
  is_authenticated: boolean;

  auth_url?: string | null;

  message?: string | null;
}

export type ConnectorHandleOAuthCallbackResponse = unknown;

export type ConnectorIngestFileResponse = unknown;

export type ConnectorIngestRepositoryResponse = unknown;

export type ConnectorInitiateAuthResponse = unknown;

export interface ConnectorListFilesResponse {
  files: Array<ConnectorListFilesResponse.File>;

  next_page_token?: string | null;
}

export namespace ConnectorListFilesResponse {
  export interface File {
    id: string;

    name: string;

    is_folder?: boolean;

    mime_type?: string | null;

    modified_date?: string | null;

    size?: number | null;
  }
}

export type ConnectorListFilesViaBodyResponse = unknown;

export type ConnectorStatusResponse = unknown;

export interface ConnectorDisconnectParams {
  connector_type: string;
}

export interface ConnectorFinalizeAuthParams {
  auth_response_data: { [key: string]: unknown };

  connector_type: string;
}

export interface ConnectorHandleOAuthCallbackParams {
  code?: string | null;

  error?: string | null;

  error_description?: string | null;

  state?: string | null;
}

export interface ConnectorIngestFileParams {
  /**
   * Identifier of the connector file being ingested.
   */
  file_id: string;

  /**
   * Optional Morphik folder name applied to the ingested document.
   */
  folder_name?: string | null;

  /**
   * Metadata attached to the document when ingesting from the connector.
   */
  metadata?: { [key: string]: unknown } | null;

  [k: string]: unknown;
}

export interface ConnectorIngestRepositoryParams {
  /**
   * Repository path in the format "owner/repo".
   */
  repo_path: string;

  /**
   * When true, package repository files before uploading to Morphik.
   */
  compress?: boolean;

  body_connector_type?: string;

  /**
   * Optional Morphik folder for the ingested repository documents.
   */
  folder_name?: string | null;

  /**
   * Re-ingest the repository even if it was previously processed.
   */
  force?: boolean;

  /**
   * Optional glob patterns for files that should be skipped.
   */
  ignore_patterns?: Array<string> | null;

  /**
   * Optional glob patterns restricting which files are ingested.
   */
  include_patterns?: Array<string> | null;

  /**
   * Metadata applied to each document created from the repository.
   */
  metadata?: { [key: string]: unknown } | null;
}

export interface ConnectorInitiateAuthParams {
  connector_type: string;
}

export interface ConnectorListFilesParams {
  page_size?: number;

  page_token?: string | null;

  path?: string | null;

  q_filter?: string | null;
}

export interface ConnectorListFilesViaBodyParams {
  connector_type: string;

  page_token?: string | null;

  path?: string | null;
}

export interface ConnectorStatusParams {
  connector_type: string;
}

Connectors.Auth = Auth;

export declare namespace Connectors {
  export {
    type ConnectorDisconnectResponse as ConnectorDisconnectResponse,
    type ConnectorFinalizeAuthResponse as ConnectorFinalizeAuthResponse,
    type ConnectorGetAuthStatusResponse as ConnectorGetAuthStatusResponse,
    type ConnectorHandleOAuthCallbackResponse as ConnectorHandleOAuthCallbackResponse,
    type ConnectorIngestFileResponse as ConnectorIngestFileResponse,
    type ConnectorIngestRepositoryResponse as ConnectorIngestRepositoryResponse,
    type ConnectorInitiateAuthResponse as ConnectorInitiateAuthResponse,
    type ConnectorListFilesResponse as ConnectorListFilesResponse,
    type ConnectorListFilesViaBodyResponse as ConnectorListFilesViaBodyResponse,
    type ConnectorStatusResponse as ConnectorStatusResponse,
    type ConnectorDisconnectParams as ConnectorDisconnectParams,
    type ConnectorFinalizeAuthParams as ConnectorFinalizeAuthParams,
    type ConnectorHandleOAuthCallbackParams as ConnectorHandleOAuthCallbackParams,
    type ConnectorIngestFileParams as ConnectorIngestFileParams,
    type ConnectorIngestRepositoryParams as ConnectorIngestRepositoryParams,
    type ConnectorInitiateAuthParams as ConnectorInitiateAuthParams,
    type ConnectorListFilesParams as ConnectorListFilesParams,
    type ConnectorListFilesViaBodyParams as ConnectorListFilesViaBodyParams,
    type ConnectorStatusParams as ConnectorStatusParams,
  };

  export {
    Auth as Auth,
    type AuthFinalizeManualAuthResponse as AuthFinalizeManualAuthResponse,
    type AuthGetInitiateAuthURLResponse as AuthGetInitiateAuthURLResponse,
    type AuthFinalizeManualAuthParams as AuthFinalizeManualAuthParams,
    type AuthGetInitiateAuthURLParams as AuthGetInitiateAuthURLParams,
  };
}
