// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CustomModelsAPI from './custom-models';
import { CustomModels } from './custom-models';

export class ModelConfig extends APIResource {
  customModels: CustomModelsAPI.CustomModels = new CustomModelsAPI.CustomModels(this._client);
}

ModelConfig.CustomModels = CustomModels;

export declare namespace ModelConfig {
  export { CustomModels as CustomModels };
}
