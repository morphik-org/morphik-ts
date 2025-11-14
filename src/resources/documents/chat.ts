// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Chat extends APIResource {
  /**
   * Stream a chat completion response for a document chat conversation.
   */
  complete(chatID: string, body: ChatCompleteParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post(path`/document/chat/${chatID}/complete`, { body, ...options });
  }

  /**
   * Retrieve the message history for a document chat conversation.
   */
  retrieveHistory(chatID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/document/chat/${chatID}`, options);
  }
}

export type ChatCompleteResponse = unknown;

export type ChatRetrieveHistoryResponse = unknown;

export interface ChatCompleteParams {
  message: string;

  document_id?: string | null;

  session_id?: string | null;
}

export declare namespace Chat {
  export {
    type ChatCompleteResponse as ChatCompleteResponse,
    type ChatRetrieveHistoryResponse as ChatRetrieveHistoryResponse,
    type ChatCompleteParams as ChatCompleteParams,
  };
}
