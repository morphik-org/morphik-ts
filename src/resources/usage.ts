// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Usage extends APIResource {
  /**
   * Get App Storage Usage
   */
  appStorageUsage(options?: RequestOptions): APIPromise<AppStorageUsageResponse> {
    return this._client.get('/usage/app-storage', options);
  }
}

export interface AppStorageUsageResponse {
  app_id: string;

  chunk_raw_bytes_mb: number;

  doc_raw_bytes_mb: number;

  document_count: number;

  multivector_mb: number;

  total_mb: number;
}

export declare namespace Usage {
  export { type AppStorageUsageResponse as AppStorageUsageResponse };
}
