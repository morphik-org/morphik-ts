// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Chat extends APIResource {
  /**
   * List chat conversations available to the current user.
   */
  list(
    query: ChatListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ChatListResponse> {
    return this._client.get('/chats', { query, ...options });
  }

  /**
   * Retrieve the message history for a chat conversation.
   */
  retrieveHistory(chatID: string, options?: RequestOptions): APIPromise<ChatRetrieveHistoryResponse> {
    return this._client.get(path`/chat/${chatID}`, options);
  }

  /**
   * Update the title of a chat conversation.
   */
  updateTitle(
    chatID: string,
    params: ChatUpdateTitleParams,
    options?: RequestOptions,
  ): APIPromise<ChatUpdateTitleResponse> {
    const { title } = params;
    return this._client.patch(path`/chats/${chatID}/title`, { query: { title }, ...options });
  }
}

export type ChatListResponse = Array<unknown>;

export type ChatRetrieveHistoryResponse = Array<ChatRetrieveHistoryResponse.ChatRetrieveHistoryResponseItem>;

export namespace ChatRetrieveHistoryResponse {
  /**
   * Simple chat message model for chat persistence.
   */
  export interface ChatRetrieveHistoryResponseItem {
    content: string;

    role: 'user' | 'assistant';

    timestamp?: string;
  }
}

/**
 * Response for chat title update endpoint
 */
export interface ChatUpdateTitleResponse {
  message: string;

  status: string;

  title: string;
}

export interface ChatListParams {
  limit?: number;
}

export interface ChatUpdateTitleParams {
  /**
   * New title for the chat
   */
  title: string;
}

export declare namespace Chat {
  export {
    type ChatListResponse as ChatListResponse,
    type ChatRetrieveHistoryResponse as ChatRetrieveHistoryResponse,
    type ChatUpdateTitleResponse as ChatUpdateTitleResponse,
    type ChatListParams as ChatListParams,
    type ChatUpdateTitleParams as ChatUpdateTitleParams,
  };
}
