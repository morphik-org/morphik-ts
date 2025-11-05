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
    body: ConnectorIngestRepositoryParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(path`/ee/connectors/${connectorType}/ingest-repository`, { body, ...options });
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
  auth_response_data: unknown;

  connector_type: string;
}

export interface ConnectorHandleOAuthCallbackParams {
  code?: string | null;

  error?: string | null;

  error_description?: string | null;

  state?: string | null;
}

export interface ConnectorIngestFileParams {
  file_id: string;

  folder_name?: string | null;

  metadata?: unknown | null;

  [k: string]: unknown;
}

export interface ConnectorIngestRepositoryParams {
  repo_path: string;

  compress?: boolean;

  body_connector_type?: string;

  folder_name?: string | null;

  force?: boolean;

  ignore_patterns?: Array<string> | null;

  include_patterns?: Array<string> | null;

  metadata?: unknown | null;
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
