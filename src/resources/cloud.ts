// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Cloud extends APIResource {
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
}

export type CloudGenerateUriResponse = { [key: string]: string };

export interface CloudGenerateUriParams {
  /**
   * Body param: ID of the application
   */
  app_id: string;

  /**
   * Body param: Name of the application
   */
  name: string;

  /**
   * Body param: ID of the user who owns the app
   */
  user_id: string;

  /**
   * Body param: ID of the admin or service user that initiated the request
   */
  created_by_user_id?: string | null;

  /**
   * Body param: Number of days until the token expires
   */
  expiry_days?: number;

  /**
   * Body param: Optional organization identifier for multi-tenant control planes
   */
  org_id?: string | null;

  /**
   * Header param:
   */
  'X-Morphik-Admin-Secret'?: string;
}

export declare namespace Cloud {
  export {
    type CloudGenerateUriResponse as CloudGenerateUriResponse,
    type CloudGenerateUriParams as CloudGenerateUriParams,
  };
}
