// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Cloud extends APIResource {
  /**
   * Delete all resources associated with a given cloud application.
   */
  deleteApp(params: CloudDeleteAppParams, options?: RequestOptions): APIPromise<CloudDeleteAppResponse> {
    const { app_name, 'X-Morphik-Admin-Secret': xMorphikAdminSecret } = params;
    return this._client.delete('/apps', {
      query: { app_name },
      ...options,
      headers: buildHeaders([
        { ...(xMorphikAdminSecret != null ? { 'X-Morphik-Admin-Secret': xMorphikAdminSecret } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Generate an authenticated URI for a cloud-hosted Morphik application.
   */
  generateUri(
    params: CloudGenerateUriParams,
    options?: RequestOptions,
  ): APIPromise<CloudGenerateUriResponse> {
    const { 'X-Morphik-Admin-Secret': xMorphikAdminSecret, ...body } = params;
    return this._client.post('/cloud/generate_uri', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xMorphikAdminSecret != null ? { 'X-Morphik-Admin-Secret': xMorphikAdminSecret } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * List provisioned apps for the specified organization/user.
   */
  listApps(
    params: CloudListAppsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { 'X-Morphik-Admin-Secret': xMorphikAdminSecret, ...query } = params ?? {};
    return this._client.get('/apps', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xMorphikAdminSecret != null ? { 'X-Morphik-Admin-Secret': xMorphikAdminSecret } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Rename an existing cloud application.
   */
  renameApp(params: CloudRenameAppParams, options?: RequestOptions): APIPromise<CloudRenameAppResponse> {
    const { new_name, app_id, app_name, 'X-Morphik-Admin-Secret': xMorphikAdminSecret } = params;
    return this._client.patch('/apps/rename', {
      query: { new_name, app_id, app_name },
      ...options,
      headers: buildHeaders([
        { ...(xMorphikAdminSecret != null ? { 'X-Morphik-Admin-Secret': xMorphikAdminSecret } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Rotate the token for an existing application.
   */
  rotateAppToken(
    params: CloudRotateAppTokenParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CloudRotateAppTokenResponse> {
    const { app_id, app_name, expiry_days, 'X-Morphik-Admin-Secret': xMorphikAdminSecret } = params ?? {};
    return this._client.post('/apps/rotate_token', {
      query: { app_id, app_name, expiry_days },
      ...options,
      headers: buildHeaders([
        { ...(xMorphikAdminSecret != null ? { 'X-Morphik-Admin-Secret': xMorphikAdminSecret } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export type CloudDeleteAppResponse = { [key: string]: unknown };

export type CloudGenerateUriResponse = { [key: string]: string };

export type CloudListAppsResponse = unknown;

export type CloudRenameAppResponse = { [key: string]: unknown };

export type CloudRotateAppTokenResponse = { [key: string]: unknown };

export interface CloudDeleteAppParams {
  /**
   * Query param: Name of the application to delete
   */
  app_name: string;

  /**
   * Header param
   */
  'X-Morphik-Admin-Secret'?: string;
}

export interface CloudGenerateUriParams {
  /**
   * Body param: Name of the application
   */
  name: string;

  /**
   * Body param: Optional client-generated app ID (UUID recommended). If omitted, the
   * server generates one.
   */
  app_id?: string | null;

  /**
   * Body param: ID of the admin or service user that initiated the request
   */
  created_by_user_id?: string | null;

  /**
   * Body param: Number of days until the token expires (default: 15 years)
   */
  expiry_days?: number;

  /**
   * Body param: Optional organization identifier for multi-tenant control planes
   */
  org_id?: string | null;

  /**
   * Body param: Optional owner user ID. If omitted, derived from the bearer token.
   */
  user_id?: string | null;

  /**
   * Header param
   */
  'X-Morphik-Admin-Secret'?: string;
}

export interface CloudListAppsParams {
  /**
   * Query param: JSON filter expression for app IDs (supports $and/$or/$not/$nor and
   * $eq/$ne/$gt/$gte/$lt/$lte/$in/$nin/$exists/$regex/$contains).
   */
  app_id_filter?: string | null;

  /**
   * Query param: JSON filter expression for app name (supports $and/$or/$not/$nor
   * and $eq/$ne/$gt/$gte/$lt/$lte/$in/$nin/$exists/$regex/$contains).
   */
  app_name_filter?: string | null;

  /**
   * Query param
   */
  limit?: number;

  /**
   * Query param
   */
  offset?: number;

  /**
   * Query param: Filter apps by organization ID
   */
  org_id?: string | null;

  /**
   * Query param: Filter apps by creator
   */
  user_id?: string | null;

  /**
   * Header param
   */
  'X-Morphik-Admin-Secret'?: string;
}

export interface CloudRenameAppParams {
  /**
   * Query param: New application name
   */
  new_name: string;

  /**
   * Query param: Application ID to rename
   */
  app_id?: string | null;

  /**
   * Query param: Current application name to rename
   */
  app_name?: string | null;

  /**
   * Header param
   */
  'X-Morphik-Admin-Secret'?: string;
}

export interface CloudRotateAppTokenParams {
  /**
   * Query param: Application ID to rotate
   */
  app_id?: string | null;

  /**
   * Query param: Application name to rotate
   */
  app_name?: string | null;

  /**
   * Query param: Number of days until the new token expires
   */
  expiry_days?: number;

  /**
   * Header param
   */
  'X-Morphik-Admin-Secret'?: string;
}

export declare namespace Cloud {
  export {
    type CloudDeleteAppResponse as CloudDeleteAppResponse,
    type CloudGenerateUriResponse as CloudGenerateUriResponse,
    type CloudListAppsResponse as CloudListAppsResponse,
    type CloudRenameAppResponse as CloudRenameAppResponse,
    type CloudRotateAppTokenResponse as CloudRotateAppTokenResponse,
    type CloudDeleteAppParams as CloudDeleteAppParams,
    type CloudGenerateUriParams as CloudGenerateUriParams,
    type CloudListAppsParams as CloudListAppsParams,
    type CloudRenameAppParams as CloudRenameAppParams,
    type CloudRotateAppTokenParams as CloudRotateAppTokenParams,
  };
}
