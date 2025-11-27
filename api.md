# Ping

Types:

- <code><a href="./src/resources/ping.ts">PingCheckResponse</a></code>
- <code><a href="./src/resources/ping.ts">PingStatusResponse</a></code>

Methods:

- <code title="get /ping">client.ping.<a href="./src/resources/ping.ts">check</a>() -> PingCheckResponse</code>
- <code title="get /health">client.ping.<a href="./src/resources/ping.ts">status</a>() -> PingStatusResponse</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">ModelResponse</a></code>
- <code><a href="./src/resources/models.ts">ModelListResponse</a></code>
- <code><a href="./src/resources/models.ts">ModelDeleteResponse</a></code>
- <code><a href="./src/resources/models.ts">ModelListAvailableResponse</a></code>
- <code><a href="./src/resources/models.ts">ModelListCustomResponse</a></code>

Methods:

- <code title="post /models">client.models.<a href="./src/resources/models.ts">create</a>({ ...params }) -> ModelResponse</code>
- <code title="get /models">client.models.<a href="./src/resources/models.ts">list</a>() -> ModelListResponse</code>
- <code title="delete /models/{model_id}">client.models.<a href="./src/resources/models.ts">delete</a>(modelID) -> ModelDeleteResponse</code>
- <code title="get /models/available">client.models.<a href="./src/resources/models.ts">listAvailable</a>() -> unknown</code>
- <code title="get /models/custom">client.models.<a href="./src/resources/models.ts">listCustom</a>() -> ModelListCustomResponse</code>

# Ingest

Types:

- <code><a href="./src/resources/ingest.ts">Document</a></code>
- <code><a href="./src/resources/ingest.ts">TextRequest</a></code>
- <code><a href="./src/resources/ingest.ts">IngestBatchIngestFilesResponse</a></code>
- <code><a href="./src/resources/ingest.ts">IngestDocumentQueryResponse</a></code>
- <code><a href="./src/resources/ingest.ts">IngestRequeueResponse</a></code>

Methods:

- <code title="post /ingest/files">client.ingest.<a href="./src/resources/ingest.ts">batchIngestFiles</a>({ ...params }) -> IngestBatchIngestFilesResponse</code>
- <code title="post /ingest/document/query">client.ingest.<a href="./src/resources/ingest.ts">documentQuery</a>({ ...params }) -> IngestDocumentQueryResponse</code>
- <code title="post /ingest/file">client.ingest.<a href="./src/resources/ingest.ts">ingestFile</a>({ ...params }) -> Document</code>
- <code title="post /ingest/text">client.ingest.<a href="./src/resources/ingest.ts">ingestText</a>({ ...params }) -> Document</code>
- <code title="post /ingest/requeue">client.ingest.<a href="./src/resources/ingest.ts">requeue</a>({ ...params }) -> IngestRequeueResponse</code>

# Folders

Types:

- <code><a href="./src/resources/folders/folders.ts">Folder</a></code>
- <code><a href="./src/resources/folders/folders.ts">FolderListResponse</a></code>
- <code><a href="./src/resources/folders/folders.ts">FolderDeleteResponse</a></code>
- <code><a href="./src/resources/folders/folders.ts">FolderDetailsResponse</a></code>
- <code><a href="./src/resources/folders/folders.ts">FolderListSummariesResponse</a></code>

Methods:

- <code title="post /folders">client.folders.<a href="./src/resources/folders/folders.ts">create</a>({ ...params }) -> Folder</code>
- <code title="get /folders/{folder_id_or_name}">client.folders.<a href="./src/resources/folders/folders.ts">retrieve</a>(folderIDOrName) -> Folder</code>
- <code title="get /folders">client.folders.<a href="./src/resources/folders/folders.ts">list</a>() -> FolderListResponse</code>
- <code title="delete /folders/{folder_id_or_name}">client.folders.<a href="./src/resources/folders/folders.ts">delete</a>(folderIDOrName) -> FolderDeleteResponse</code>
- <code title="post /folders/details">client.folders.<a href="./src/resources/folders/folders.ts">details</a>({ ...params }) -> FolderDetailsResponse</code>
- <code title="get /folders/summary">client.folders.<a href="./src/resources/folders/folders.ts">listSummaries</a>() -> FolderListSummariesResponse</code>

## Documents

Types:

- <code><a href="./src/resources/folders/documents.ts">DocumentAddResponse</a></code>

Methods:

- <code title="post /folders/{folder_id_or_name}/documents/{document_id}">client.folders.documents.<a href="./src/resources/folders/documents.ts">add</a>(documentID, { ...params }) -> DocumentAddResponse</code>
- <code title="delete /folders/{folder_id_or_name}/documents/{document_id}">client.folders.documents.<a href="./src/resources/folders/documents.ts">remove</a>(documentID, { ...params }) -> DocumentDeleteResponse</code>

# ModelConfig

Types:

- <code><a href="./src/resources/model-config/model-config.ts">ModelConfigResponse</a></code>
- <code><a href="./src/resources/model-config/model-config.ts">ModelConfigListResponse</a></code>
- <code><a href="./src/resources/model-config/model-config.ts">ModelConfigDeleteResponse</a></code>

Methods:

- <code title="post /model-config/">client.modelConfig.<a href="./src/resources/model-config/model-config.ts">create</a>({ ...params }) -> ModelConfigResponse</code>
- <code title="get /model-config/{config_id}">client.modelConfig.<a href="./src/resources/model-config/model-config.ts">retrieve</a>(configID) -> ModelConfigResponse</code>
- <code title="put /model-config/{config_id}">client.modelConfig.<a href="./src/resources/model-config/model-config.ts">update</a>(configID, { ...params }) -> ModelConfigResponse</code>
- <code title="get /model-config/">client.modelConfig.<a href="./src/resources/model-config/model-config.ts">list</a>() -> ModelConfigListResponse</code>
- <code title="delete /model-config/{config_id}">client.modelConfig.<a href="./src/resources/model-config/model-config.ts">delete</a>(configID) -> ModelConfigDeleteResponse</code>

## CustomModels

Types:

- <code><a href="./src/resources/model-config/custom-models.ts">CustomModel</a></code>
- <code><a href="./src/resources/model-config/custom-models.ts">CustomModelListResponse</a></code>

Methods:

- <code title="post /model-config/custom-models">client.modelConfig.customModels.<a href="./src/resources/model-config/custom-models.ts">create</a>({ ...params }) -> CustomModel</code>
- <code title="get /model-config/custom-models/list">client.modelConfig.customModels.<a href="./src/resources/model-config/custom-models.ts">list</a>() -> CustomModelListResponse</code>

# APIKeys

Types:

- <code><a href="./src/resources/api-keys.ts">APIKeyCreateResponse</a></code>
- <code><a href="./src/resources/api-keys.ts">APIKeyListResponse</a></code>

Methods:

- <code title="post /api-keys">client.apiKeys.<a href="./src/resources/api-keys.ts">create</a>({ ...params }) -> APIKeyCreateResponse</code>
- <code title="get /api-keys">client.apiKeys.<a href="./src/resources/api-keys.ts">list</a>() -> APIKeyListResponse</code>

# Logs

Types:

- <code><a href="./src/resources/logs.ts">LogListResponse</a></code>

Methods:

- <code title="get /logs/">client.logs.<a href="./src/resources/logs.ts">list</a>({ ...params }) -> LogListResponse</code>

# Graph

Types:

- <code><a href="./src/resources/graph/graph.ts">EntityExtractionPromptOverride</a></code>
- <code><a href="./src/resources/graph/graph.ts">EntityResolutionPromptOverride</a></code>
- <code><a href="./src/resources/graph/graph.ts">Graph</a></code>
- <code><a href="./src/resources/graph/graph.ts">GraphPromptOverrides</a></code>
- <code><a href="./src/resources/graph/graph.ts">GraphListResponse</a></code>
- <code><a href="./src/resources/graph/graph.ts">GraphDeleteResponse</a></code>
- <code><a href="./src/resources/graph/graph.ts">GraphStatusResponse</a></code>
- <code><a href="./src/resources/graph/graph.ts">GraphVisualizationResponse</a></code>

Methods:

- <code title="post /graph/create">client.graph.<a href="./src/resources/graph/graph.ts">create</a>({ ...params }) -> Graph</code>
- <code title="get /graph/{name}">client.graph.<a href="./src/resources/graph/graph.ts">retrieve</a>(name, { ...params }) -> Graph</code>
- <code title="post /graph/{name}/update">client.graph.<a href="./src/resources/graph/graph.ts">update</a>(name, { ...params }) -> Graph</code>
- <code title="get /graph/">client.graph.<a href="./src/resources/graph/graph.ts">list</a>({ ...params }) -> GraphListResponse</code>
- <code title="delete /graph/{name}">client.graph.<a href="./src/resources/graph/graph.ts">delete</a>(name) -> unknown</code>
- <code title="get /graph/{name}/status">client.graph.<a href="./src/resources/graph/graph.ts">status</a>(name, { ...params }) -> unknown</code>
- <code title="get /graph/{name}/visualization">client.graph.<a href="./src/resources/graph/graph.ts">visualization</a>(name, { ...params }) -> unknown</code>

## Workflow

Types:

- <code><a href="./src/resources/graph/workflow.ts">WorkflowStatusResponse</a></code>

Methods:

- <code title="get /graph/workflow/{workflow_id}/status">client.graph.workflow.<a href="./src/resources/graph/workflow.ts">status</a>(workflowID, { ...params }) -> unknown</code>

# Ee

## Connectors

Types:

- <code><a href="./src/resources/ee/connectors/connectors.ts">ConnectorDisconnectResponse</a></code>
- <code><a href="./src/resources/ee/connectors/connectors.ts">ConnectorFinalizeAuthResponse</a></code>
- <code><a href="./src/resources/ee/connectors/connectors.ts">ConnectorGetAuthStatusResponse</a></code>
- <code><a href="./src/resources/ee/connectors/connectors.ts">ConnectorHandleOAuthCallbackResponse</a></code>
- <code><a href="./src/resources/ee/connectors/connectors.ts">ConnectorIngestFileResponse</a></code>
- <code><a href="./src/resources/ee/connectors/connectors.ts">ConnectorIngestRepositoryResponse</a></code>
- <code><a href="./src/resources/ee/connectors/connectors.ts">ConnectorInitiateAuthResponse</a></code>
- <code><a href="./src/resources/ee/connectors/connectors.ts">ConnectorListFilesResponse</a></code>
- <code><a href="./src/resources/ee/connectors/connectors.ts">ConnectorListFilesViaBodyResponse</a></code>
- <code><a href="./src/resources/ee/connectors/connectors.ts">ConnectorStatusResponse</a></code>

Methods:

- <code title="post /ee/connectors/disconnect">client.ee.connectors.<a href="./src/resources/ee/connectors/connectors.ts">disconnect</a>({ ...params }) -> unknown</code>
- <code title="post /ee/connectors/finalize-auth">client.ee.connectors.<a href="./src/resources/ee/connectors/connectors.ts">finalizeAuth</a>({ ...params }) -> unknown</code>
- <code title="get /ee/connectors/{connector_type}/auth_status">client.ee.connectors.<a href="./src/resources/ee/connectors/connectors.ts">getAuthStatus</a>(connectorType) -> ConnectorGetAuthStatusResponse</code>
- <code title="get /ee/connectors/{connector_type}/oauth2callback">client.ee.connectors.<a href="./src/resources/ee/connectors/connectors.ts">handleOAuthCallback</a>(connectorType, { ...params }) -> unknown</code>
- <code title="post /ee/connectors/{connector_type}/ingest">client.ee.connectors.<a href="./src/resources/ee/connectors/connectors.ts">ingestFile</a>(connectorType, { ...params }) -> unknown</code>
- <code title="post /ee/connectors/{connector_type}/ingest-repository">client.ee.connectors.<a href="./src/resources/ee/connectors/connectors.ts">ingestRepository</a>(connectorType, { ...params }) -> unknown</code>
- <code title="post /ee/connectors/initiate-auth">client.ee.connectors.<a href="./src/resources/ee/connectors/connectors.ts">initiateAuth</a>({ ...params }) -> unknown</code>
- <code title="get /ee/connectors/{connector_type}/files">client.ee.connectors.<a href="./src/resources/ee/connectors/connectors.ts">listFiles</a>(connectorType, { ...params }) -> ConnectorListFilesResponse</code>
- <code title="post /ee/connectors/list-files">client.ee.connectors.<a href="./src/resources/ee/connectors/connectors.ts">listFilesViaBody</a>({ ...params }) -> unknown</code>
- <code title="post /ee/connectors/status">client.ee.connectors.<a href="./src/resources/ee/connectors/connectors.ts">status</a>({ ...params }) -> unknown</code>

### Auth

Types:

- <code><a href="./src/resources/ee/connectors/auth.ts">AuthFinalizeManualAuthResponse</a></code>
- <code><a href="./src/resources/ee/connectors/auth.ts">AuthGetInitiateAuthURLResponse</a></code>

Methods:

- <code title="post /ee/connectors/{connector_type}/auth/finalize">client.ee.connectors.auth.<a href="./src/resources/ee/connectors/auth.ts">finalizeManualAuth</a>(connectorType, { ...params }) -> unknown</code>
- <code title="get /ee/connectors/{connector_type}/auth/initiate_url">client.ee.connectors.auth.<a href="./src/resources/ee/connectors/auth.ts">getInitiateAuthURL</a>(connectorType, { ...params }) -> AuthGetInitiateAuthURLResponse</code>

# Retrieve

Types:

- <code><a href="./src/resources/retrieve/retrieve.ts">RetrieveCreateDocsResponse</a></code>

Methods:

- <code title="post /retrieve/docs">client.retrieve.<a href="./src/resources/retrieve/retrieve.ts">createDocs</a>({ ...params }) -> RetrieveCreateDocsResponse</code>

## Chunks

Types:

- <code><a href="./src/resources/retrieve/chunks.ts">ChunkResult</a></code>
- <code><a href="./src/resources/retrieve/chunks.ts">RetrieveRequest</a></code>
- <code><a href="./src/resources/retrieve/chunks.ts">ChunkCreateResponse</a></code>
- <code><a href="./src/resources/retrieve/chunks.ts">ChunkCreateGroupedResponse</a></code>

Methods:

- <code title="post /retrieve/chunks">client.retrieve.chunks.<a href="./src/resources/retrieve/chunks.ts">create</a>({ ...params }) -> ChunkCreateResponse</code>
- <code title="post /retrieve/chunks/grouped">client.retrieve.chunks.<a href="./src/resources/retrieve/chunks.ts">createGrouped</a>({ ...params }) -> ChunkCreateGroupedResponse</code>

# Batch

Types:

- <code><a href="./src/resources/batch.ts">BatchRetrieveChunksResponse</a></code>
- <code><a href="./src/resources/batch.ts">BatchRetrieveDocumentsResponse</a></code>

Methods:

- <code title="post /batch/chunks">client.batch.<a href="./src/resources/batch.ts">retrieveChunks</a>({ ...params }) -> BatchRetrieveChunksResponse</code>
- <code title="post /batch/documents">client.batch.<a href="./src/resources/batch.ts">retrieveDocuments</a>({ ...params }) -> BatchRetrieveDocumentsResponse</code>

# Search

Types:

- <code><a href="./src/resources/search.ts">SearchDocumentsResponse</a></code>

Methods:

- <code title="post /search/documents">client.search.<a href="./src/resources/search.ts">documents</a>({ ...params }) -> SearchDocumentsResponse</code>

# Query

Types:

- <code><a href="./src/resources/query.ts">QueryGenerateCompletionResponse</a></code>

Methods:

- <code title="post /query">client.query.<a href="./src/resources/query.ts">generateCompletion</a>({ ...params }) -> QueryGenerateCompletionResponse</code>

# Local

Types:

- <code><a href="./src/resources/local.ts">LocalGenerateUriResponse</a></code>

Methods:

- <code title="post /local/generate_uri">client.local.<a href="./src/resources/local.ts">generateUri</a>({ ...params }) -> LocalGenerateUriResponse</code>

# Cloud

Types:

- <code><a href="./src/resources/cloud.ts">CloudDeleteAppResponse</a></code>
- <code><a href="./src/resources/cloud.ts">CloudGenerateUriResponse</a></code>
- <code><a href="./src/resources/cloud.ts">CloudListAppsResponse</a></code>

Methods:

- <code title="delete /apps">client.cloud.<a href="./src/resources/cloud.ts">deleteApp</a>({ ...params }) -> unknown</code>
- <code title="post /cloud/generate_uri">client.cloud.<a href="./src/resources/cloud.ts">generateUri</a>({ ...params }) -> CloudGenerateUriResponse</code>
- <code title="get /apps">client.cloud.<a href="./src/resources/cloud.ts">listApps</a>({ ...params }) -> unknown</code>

# Documents

Types:

- <code><a href="./src/resources/documents/documents.ts">DocumentChatRequest</a></code>
- <code><a href="./src/resources/documents/documents.ts">DocumentDeleteResponse</a></code>
- <code><a href="./src/resources/documents/documents.ts">DocumentListResponse</a></code>
- <code><a href="./src/resources/documents/documents.ts">DocumentDownloadFileResponse</a></code>
- <code><a href="./src/resources/documents/documents.ts">DocumentGetDownloadURLResponse</a></code>
- <code><a href="./src/resources/documents/documents.ts">DocumentGetStatusResponse</a></code>
- <code><a href="./src/resources/documents/documents.ts">DocumentListDocsResponse</a></code>
- <code><a href="./src/resources/documents/documents.ts">DocumentPagesResponse</a></code>

Methods:

- <code title="get /documents/{document_id}">client.documents.<a href="./src/resources/documents/documents.ts">retrieve</a>(documentID) -> Document</code>
- <code title="post /documents">client.documents.<a href="./src/resources/documents/documents.ts">list</a>({ ...params }) -> DocumentListResponse</code>
- <code title="delete /documents/{document_id}">client.documents.<a href="./src/resources/documents/documents.ts">delete</a>(documentID) -> DocumentDeleteResponse</code>
- <code title="get /documents/{document_id}/file">client.documents.<a href="./src/resources/documents/documents.ts">downloadFile</a>(documentID) -> unknown</code>
- <code title="get /documents/filename/{filename}">client.documents.<a href="./src/resources/documents/documents.ts">getByFilename</a>(filename, { ...params }) -> Document</code>
- <code title="get /documents/{document_id}/download_url">client.documents.<a href="./src/resources/documents/documents.ts">getDownloadURL</a>(documentID, { ...params }) -> DocumentGetDownloadURLResponse</code>
- <code title="get /documents/{document_id}/status">client.documents.<a href="./src/resources/documents/documents.ts">getStatus</a>(documentID) -> unknown</code>
- <code title="post /documents/list_docs">client.documents.<a href="./src/resources/documents/documents.ts">listDocs</a>({ ...params }) -> DocumentListDocsResponse</code>
- <code title="post /documents/pages">client.documents.<a href="./src/resources/documents/documents.ts">pages</a>({ ...params }) -> DocumentPagesResponse</code>
- <code title="post /documents/{document_id}/update_file">client.documents.<a href="./src/resources/documents/documents.ts">updateFile</a>(documentID, { ...params }) -> Document</code>
- <code title="post /documents/{document_id}/update_metadata">client.documents.<a href="./src/resources/documents/documents.ts">updateMetadata</a>(documentID, { ...params }) -> Document</code>
- <code title="post /documents/{document_id}/update_text">client.documents.<a href="./src/resources/documents/documents.ts">updateText</a>(documentID, { ...params }) -> Document</code>

## Chat

Types:

- <code><a href="./src/resources/documents/chat.ts">ChatCompleteResponse</a></code>
- <code><a href="./src/resources/documents/chat.ts">ChatRetrieveHistoryResponse</a></code>

Methods:

- <code title="post /document/chat/{chat_id}/complete">client.documents.chat.<a href="./src/resources/documents/chat.ts">complete</a>(chatID, { ...params }) -> unknown</code>
- <code title="get /document/chat/{chat_id}">client.documents.chat.<a href="./src/resources/documents/chat.ts">retrieveHistory</a>(chatID) -> unknown</code>

# Chat

Types:

- <code><a href="./src/resources/chat.ts">ChatListResponse</a></code>
- <code><a href="./src/resources/chat.ts">ChatRetrieveHistoryResponse</a></code>
- <code><a href="./src/resources/chat.ts">ChatUpdateTitleResponse</a></code>

Methods:

- <code title="get /chats">client.chat.<a href="./src/resources/chat.ts">list</a>({ ...params }) -> ChatListResponse</code>
- <code title="get /chat/{chat_id}">client.chat.<a href="./src/resources/chat.ts">retrieveHistory</a>(chatID) -> ChatRetrieveHistoryResponse</code>
- <code title="patch /chats/{chat_id}/title">client.chat.<a href="./src/resources/chat.ts">updateTitle</a>(chatID, { ...params }) -> ChatUpdateTitleResponse</code>
