// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as WorkflowAPI from './workflow';
import { Workflow } from './workflow';

export class Graph extends APIResource {
  workflow: WorkflowAPI.Workflow = new WorkflowAPI.Workflow(this._client);
}

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
export interface EntityExtractionPromptOverride {
  /**
   * Examples of entities to extract, used to guide the LLM toward domain-specific
   * entity types and patterns.
   */
  examples?: Array<EntityExtractionPromptOverride.Example> | null;

  /**
   * Custom prompt template, MUST include both {content} and {examples} placeholders.
   * The {content} placeholder will be replaced with the text to analyze, and
   * {examples} will be replaced with formatted examples.
   */
  prompt_template?: string | null;
}

export namespace EntityExtractionPromptOverride {
  /**
   * Example entity for guiding entity extraction.
   *
   * Used to provide domain-specific examples to the LLM of what entities to extract.
   * These examples help steer the extraction process toward entities relevant to
   * your domain.
   */
  export interface Example {
    /**
     * The entity label (e.g., 'John Doe', 'Apple Inc.')
     */
    label: string;

    /**
     * The entity type (e.g., 'PERSON', 'ORGANIZATION', 'PRODUCT')
     */
    type: string;

    /**
     * Optional properties of the entity (e.g., {'role': 'CEO', 'age': 42})
     */
    properties?: { [key: string]: unknown } | null;
  }
}

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
export interface EntityResolutionPromptOverride {
  /**
   * Examples of entity resolution groups showing how variants of the same entity
   * should be resolved to their canonical forms. This is particularly useful for
   * domain-specific terminology, abbreviations, and naming conventions.
   */
  examples?: Array<EntityResolutionPromptOverride.Example> | null;

  /**
   * Custom prompt template that MUST include both {entities_str} and {examples_json}
   * placeholders. The {entities_str} placeholder will be replaced with the extracted
   * entities, and {examples_json} will be replaced with JSON-formatted examples of
   * entity resolution groups.
   */
  prompt_template?: string | null;
}

export namespace EntityResolutionPromptOverride {
  /**
   * Example for entity resolution, showing how variants should be grouped.
   *
   * Entity resolution is the process of identifying when different references
   * (variants) in text refer to the same real-world entity. These examples help the
   * LLM understand domain-specific patterns for resolving entities.
   */
  export interface Example {
    /**
     * The canonical (standard/preferred) form of the entity
     */
    canonical: string;

    /**
     * List of variant forms that should resolve to the canonical form
     */
    variants: Array<string>;
  }
}

Graph.Workflow = Workflow;

export declare namespace Graph {
  export {
    type EntityExtractionPromptOverride as EntityExtractionPromptOverride,
    type EntityResolutionPromptOverride as EntityResolutionPromptOverride,
  };

  export { Workflow as Workflow };
}
