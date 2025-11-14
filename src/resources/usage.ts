// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Usage extends APIResource {
  /**
   * Retrieve recent telemetry records for the user or application.
   */
  listRecent(
    query: UsageListRecentParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UsageListRecentResponse> {
    return this._client.get('/usage/recent', { query, ...options });
  }

  /**
   * Get usage statistics for the authenticated user.
   */
  retrieveStats(options?: RequestOptions): APIPromise<UsageRetrieveStatsResponse> {
    return this._client.get('/usage/stats', options);
  }
}

export type UsageListRecentResponse = Array<unknown>;

export type UsageRetrieveStatsResponse = { [key: string]: number };

export interface UsageListRecentParams {
  operation_type?: string | null;

  since?: string | null;

  status?: string | null;
}

export declare namespace Usage {
  export {
    type UsageListRecentResponse as UsageListRecentResponse,
    type UsageRetrieveStatsResponse as UsageRetrieveStatsResponse,
    type UsageListRecentParams as UsageListRecentParams,
  };
}
