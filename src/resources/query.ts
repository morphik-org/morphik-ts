// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as GraphAPI from './graph/graph';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Query extends APIResource {
  /**
   * Generate completion using relevant chunks as context.
   */
  generateCompletion(
    body: QueryGenerateCompletionParams,
    options?: RequestOptions,
  ): APIPromise<QueryGenerateCompletionResponse> {
    return this._client.post('/query', { body, ...options });
  }
}

/**
 * Response from completion generation
 */
export interface QueryGenerateCompletionResponse {
  /**
   * Structured completion object for schema-based responses
   */
  completion: string | { [key: string]: unknown };

  usage: { [key: string]: number };

  finish_reason?: string | null;

  metadata?: { [key: string]: unknown } | null;

  sources?: Array<QueryGenerateCompletionResponse.Source>;
}

export namespace QueryGenerateCompletionResponse {
  /**
   * Source information for a chunk used in completion
   */
  export interface Source {
    chunk_number: number;

    document_id: string;

    score?: number | null;
  }
}

export interface QueryGenerateCompletionParams {
  /**
   * Optional chat session ID for persisting conversation history
   */
  chat_id?: string | null;

  /**
   * Optional end-user scope for the operation
   */
  end_user_id?: string | null;

  /**
   * Metadata filters supporting logical operators ($and/$or/$not/$nor) and field
   * predicates ($eq/$ne/$gt/$gte/$lt/$lte/$in/$nin/$exists/$type/$regex/$contains).
   */
  filters?: { [key: string]: unknown } | null;

  /**
   * Folder scope depth. 0 or None = exact folder only, -1 = include all descendants,
   * n > 0 = include descendants up to n levels deeper.
   */
  folder_depth?: number | null;

  /**
   * Optional folder scope. Accepts a folder PATH (e.g., '/Company/Reports') or list
   * of paths.
   */
  folder_name?: string | Array<string> | null;

  /**
   * Whether to include inline citations with filename and page number in the
   * response
   */
  inline_citations?: boolean | null;

  /**
   * Maximum number of chunks or documents to return.
   */
  k?: number;

  /**
   * LiteLLM-compatible model configuration (e.g., model name, API key, base URL)
   */
  llm_config?: { [key: string]: unknown } | null;

  /**
   * Maximum number of tokens allowed in the generated completion.
   */
  max_tokens?: number | null;

  /**
   * Minimum similarity score a result must meet before it is returned.
   */
  min_score?: number;

  /**
   * Output format for image chunks in retrieval results.
   */
  output_format?: 'base64' | 'url' | 'text' | null;

  /**
   * Number of additional chunks/pages to retrieve before and after matched chunks
   * (ColPali only)
   */
  padding?: number;

  /**
   * Container for query-related prompt overrides.
   *
   * Use this class when customizing prompts for query operations, which may include
   * customizations for entity extraction, entity resolution, and the query/response
   * generation itself.
   *
   * This is the most feature-complete override class, supporting all customization
   * types.
   *
   * Available customizations:
   *
   * - entity_extraction: Customize how entities are identified in text
   * - entity_resolution: Customize how entity variants are grouped
   * - query: Customize response generation style, format, and tone
   *
   * Each type has its own required placeholders. See the specific class
   * documentation for details and examples.
   */
  prompt_overrides?: QueryGenerateCompletionParams.PromptOverrides | null;

  /**
   * Natural-language query used to retrieve relevant chunks or documents.
   */
  query?: string | null;

  /**
   * Base64-encoded image to use as query for Morphik multimodal retrieval. Requires
   * use_colpali=True. Mutually exclusive with 'query'.
   */
  query_image?: string | null;

  /**
   * Schema for structured output, can be a Pydantic model or JSON schema dict
   */
  schema?: unknown | { [key: string]: unknown } | null;

  /**
   * Whether to stream the response back in chunks
   */
  stream_response?: boolean | null;

  /**
   * Sampling temperature passed to the completion model (None uses provider
   * default).
   */
  temperature?: number | null;

  /**
   * When provided, uses Morphik's finetuned ColPali style embeddings (recommended to
   * be True for high quality retrieval).
   */
  use_colpali?: boolean | null;

  /**
   * When provided, overrides the workspace reranking configuration for this request.
   */
  use_reranking?: boolean | null;
}

export namespace QueryGenerateCompletionParams {
  /**
   * Container for query-related prompt overrides.
   *
   * Use this class when customizing prompts for query operations, which may include
   * customizations for entity extraction, entity resolution, and the query/response
   * generation itself.
   *
   * This is the most feature-complete override class, supporting all customization
   * types.
   *
   * Available customizations:
   *
   * - entity_extraction: Customize how entities are identified in text
   * - entity_resolution: Customize how entity variants are grouped
   * - query: Customize response generation style, format, and tone
   *
   * Each type has its own required placeholders. See the specific class
   * documentation for details and examples.
   */
  export interface PromptOverrides {
    /**
     * Configuration for customizing entity extraction prompts.
     *
     * This allows you to override both the prompt template used for entity extraction
     * and provide domain-specific examples of entities to be extracted.
     *
     * If only examples are provided (without a prompt_template), they will be
     * incorporated into the default prompt. If only prompt_template is provided, it
     * will be used with default examples (if any).
     *
     * Required placeholders:
     *
     * - {content}: Will be replaced with the text to analyze for entity extraction
     * - {examples}: Will be replaced with formatted examples of entities to extract
     *
     * Example prompt template:
     *
     * ```
     * Extract entities from the following text. Look for entities similar to these examples:
     *
     * {examples}
     *
     * Text to analyze:
     * {content}
     *
     * Extracted entities (in JSON format):
     * ```
     */
    entity_extraction?: GraphAPI.EntityExtractionPromptOverride | null;

    /**
     * Configuration for customizing entity resolution prompts.
     *
     * Entity resolution identifies and groups variant forms of the same entity. This
     * override allows you to customize how this process works by providing a custom
     * prompt template and/or domain-specific examples.
     *
     * If only examples are provided (without a prompt_template), they will be
     * incorporated into the default prompt. If only prompt_template is provided, it
     * will be used with default examples (if any).
     *
     * Required placeholders:
     *
     * - {entities_str}: Will be replaced with the extracted entities
     * - {examples_json}: Will be replaced with JSON-formatted examples of entity
     *   resolution groups
     *
     * Example prompt template:
     *
     * ```
     * I have extracted the following entities:
     *
     * {entities_str}
     *
     * Below are examples of how different entity references can be grouped together:
     *
     * {examples_json}
     *
     * Group the above entities by resolving which mentions refer to the same entity.
     * Return the results in JSON format.
     * ```
     */
    entity_resolution?: GraphAPI.EntityResolutionPromptOverride | null;

    /**
     * Configuration for customizing query prompts.
     *
     * This allows you to customize how responses are generated during query
     * operations. Query prompts guide the LLM on how to format and style responses,
     * what tone to use, and how to incorporate retrieved information into the
     * response.
     *
     * Required placeholders:
     *
     * - {question}: Will be replaced with the user's query
     * - {context}: Will be replaced with the retrieved content/context
     *
     * Example prompt template:
     *
     * ```
     * Answer the following question based on the provided information.
     *
     * Question: {question}
     *
     * Context:
     * {context}
     *
     * Answer:
     * ```
     */
    query?: PromptOverrides.Query | null;
  }

  export namespace PromptOverrides {
    /**
     * Configuration for customizing query prompts.
     *
     * This allows you to customize how responses are generated during query
     * operations. Query prompts guide the LLM on how to format and style responses,
     * what tone to use, and how to incorporate retrieved information into the
     * response.
     *
     * Required placeholders:
     *
     * - {question}: Will be replaced with the user's query
     * - {context}: Will be replaced with the retrieved content/context
     *
     * Example prompt template:
     *
     * ```
     * Answer the following question based on the provided information.
     *
     * Question: {question}
     *
     * Context:
     * {context}
     *
     * Answer:
     * ```
     */
    export interface Query {
      /**
       * Custom prompt template for generating responses to queries. REQUIRED
       * PLACEHOLDERS: {question} and {context} must be included in the template. The
       * {question} placeholder will be replaced with the user query, and {context} will
       * be replaced with the retrieved content. Use this to control response style,
       * format, and tone.
       */
      prompt_template?: string | null;

      /**
       * Custom system prompt that replaces Morphik's default query agent instructions.
       * Use this to fully control the assistant's behavior when generating responses.
       */
      system_prompt?: string | null;
    }
  }
}

export declare namespace Query {
  export {
    type QueryGenerateCompletionResponse as QueryGenerateCompletionResponse,
    type QueryGenerateCompletionParams as QueryGenerateCompletionParams,
  };
}
