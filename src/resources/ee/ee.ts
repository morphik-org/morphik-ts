// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConnectorsAPI from './connectors/connectors';
import {
  ConnectorDisconnectParams,
  ConnectorDisconnectResponse,
  ConnectorFinalizeAuthParams,
  ConnectorFinalizeAuthResponse,
  ConnectorGetAuthStatusResponse,
  ConnectorHandleOAuthCallbackParams,
  ConnectorHandleOAuthCallbackResponse,
  ConnectorIngestFileParams,
  ConnectorIngestFileResponse,
  ConnectorIngestRepositoryParams,
  ConnectorIngestRepositoryResponse,
  ConnectorInitiateAuthParams,
  ConnectorInitiateAuthResponse,
  ConnectorListFilesParams,
  ConnectorListFilesResponse,
  ConnectorListFilesViaBodyParams,
  ConnectorListFilesViaBodyResponse,
  ConnectorStatusParams,
  ConnectorStatusResponse,
  Connectors,
} from './connectors/connectors';

export class Ee extends APIResource {
  connectors: ConnectorsAPI.Connectors = new ConnectorsAPI.Connectors(this._client);
}

Ee.Connectors = Connectors;

export declare namespace Ee {
  export {
    Connectors as Connectors,
    type ConnectorDisconnectResponse as ConnectorDisconnectResponse,
    type ConnectorFinalizeAuthResponse as ConnectorFinalizeAuthResponse,
    type ConnectorGetAuthStatusResponse as ConnectorGetAuthStatusResponse,
    type ConnectorHandleOAuthCallbackResponse as ConnectorHandleOAuthCallbackResponse,
    type ConnectorIngestFileResponse as ConnectorIngestFileResponse,
    type ConnectorIngestRepositoryResponse as ConnectorIngestRepositoryResponse,
    type ConnectorInitiateAuthResponse as ConnectorInitiateAuthResponse,
    type ConnectorListFilesResponse as ConnectorListFilesResponse,
    type ConnectorListFilesViaBodyResponse as ConnectorListFilesViaBodyResponse,
    type ConnectorStatusResponse as ConnectorStatusResponse,
    type ConnectorDisconnectParams as ConnectorDisconnectParams,
    type ConnectorFinalizeAuthParams as ConnectorFinalizeAuthParams,
    type ConnectorHandleOAuthCallbackParams as ConnectorHandleOAuthCallbackParams,
    type ConnectorIngestFileParams as ConnectorIngestFileParams,
    type ConnectorIngestRepositoryParams as ConnectorIngestRepositoryParams,
    type ConnectorInitiateAuthParams as ConnectorInitiateAuthParams,
    type ConnectorListFilesParams as ConnectorListFilesParams,
    type ConnectorListFilesViaBodyParams as ConnectorListFilesViaBodyParams,
    type ConnectorStatusParams as ConnectorStatusParams,
  };
}
