// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Ping extends APIResource {
  /**
   * Simple health check endpoint that returns 200 OK.
   */
  check(options?: RequestOptions): APIPromise<PingCheckResponse> {
    return this._client.get('/ping', options);
  }

  /**
   * Comprehensive health check endpoint that queries all underlying services.
   *
   * Checks the following services:
   *
   * - PostgreSQL database
   * - Redis
   * - PGVector store
   * - Storage service (Local/S3)
   * - ColPali vector store (if enabled)
   *
   * Returns: DetailedHealthCheckResponse with status of each service
   */
  status(options?: RequestOptions): APIPromise<PingStatusResponse> {
    return this._client.get('/health', options);
  }
}

/**
 * Response for health check endpoint
 */
export interface PingCheckResponse {
  message: string;

  status: string;
}

/**
 * Response for detailed health check endpoint
 */
export interface PingStatusResponse {
  services: Array<PingStatusResponse.Service>;

  status: string;

  timestamp: string;
}

export namespace PingStatusResponse {
  /**
   * Status of an individual service
   */
  export interface Service {
    name: string;

    status: string;

    message?: string | null;

    response_time_ms?: number | null;
  }
}

export declare namespace Ping {
  export { type PingCheckResponse as PingCheckResponse, type PingStatusResponse as PingStatusResponse };
}
