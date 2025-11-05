// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RunsAPI from './runs';
import { Runs } from './runs';

export class Workflows extends APIResource {
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);
}

Workflows.Runs = Runs;

export declare namespace Workflows {
  export { Runs as Runs };
}
