export enum YTApiId {
    // Names of ids for node-controllers should be started with 'ui_'-prefix
    ui_clusterInfo,
    ui_loadColumnPreset,

    // Some ids without specific page
    clusterParams,
    clusterParamsIsDeveloper,

    checkPermissions,
    getPoolTree,
    getPoolTrees,
    getPoolDefaultPoolTreeName,
    getPoolTreesPath,
    listPoolNames,
    getUsableBundles,
    listAccounts,
    listBundles,
    listGroups,
    listUsableAccounts,
    listUsers,
    listUsersUM,
    openAttributesModal,
    pathEditorLoadSuggestions,
    updateAttributes,
    updateNodeAttributes,

    // Page-specific requests
    accountsData,
    accountsEditData,

    attributesEditorGetAttrs,
    attributesEditorMerge,
    attributesEditorSet,

    componentsClusterNodes,
    componentGetRpcProxies,
    componentsRpcProxies,
    componentsShards,
    componentsUpdateNodeData,

    groupsData,
    groupsEditData,
    groupsListAll,

    // dynamic tables
    dynTableCheckPerm,
    dynTableSelectRows,
    dynTableSelectRowsPreload,

    // static tables
    tableReadPreload,
    tableRead,

    navigationAttributes,
    navigationCheckPermissions,
    navigationCopy,
    navigationDelete,
    navigationDynTableState,
    navigationGetAnnotation,
    navigationGetDocument,
    navigationSaveDocument,
    navigationGetPath,
    navigationGetPathInfo,
    navigationGetTabletState,
    navigationIsStaticTable,
    navigationListNodes,
    navigationListTransactions,
    navigationLocks,
    navigationTransactions,
    navigationMove,
    navigationMoveToTrash,
    navigationMoveToTrashRestorePath,
    navigationResourceUsage,
    navigationRestorePath,
    navigationRTReplicas,
    navigationTableSortLoadColumns,
    navigationTabletErrors,
    navigationTabletErrorsCountDynTable,
    navigationTabletErrorsCountReplicatedTable,
    navigationTableMountConfig,
    navigationTypeDynamic,
    navigationUpdateView,
    navigationUserAttributeKeys,

    nodeAttributes,
    nodeMemoryUsage,
    nodeUnrecognizedOptions,

    schedulingData,
    schedulingEditPool,

    listOperations,

    operationGetJobs,
    operationIntermediateResourceUsage,
    operationIsEphemeral,
    operationsSchedulerInstances,
    listJobs100,

    resourcePlannerPoolDetails,

    schedulingGetAttrsBeforeEdit,
    schedulingLoadOperations,
    schedulingLoadOperationsPerPool,
    schedulingLoadTree,
    schedulingTransferPoolQuota,
    schedulingPoolFullPath,
    schedulingLoadPoolsAll,
    schedulingLoadPoolsPerPool,
    schedulingLoadChildrenPerPool,
    schedulingLoadCypressDataPerPool,
    schedulingFilterAttributes,

    systemCAInstances,
    systemCAStates,
    systemChunks,
    systemMasters,
    systemMastersConfig,
    systemMastersConfigDiscoveryServer,
    systemNodes,
    systemProxies,
    systemResources,
    systemRpcProxies,
    systemSchedulers,
    systemSchedulersState,

    tabletAttribute,
    tabletCellAttributes,
    tabletPartitions,
    tabletStores,
    tabletStoresByIds,
    tabletTableAttributes,

    tabletCellBundles,
    tabletCellBundlesEditData,
    tabletCellBundlesInstancesDetails,
    tabletCellBundlesSetAttrs,
    tabletCellBundlesWithAbc,

    chaosCellBundles,
    chaosCellBundlesEditData,
    chaosCellBundlesSetAttrs,

    usersData,
    usersEditData,
    usersSaveData,

    queueStatus,
    queuePartitions,
    queueConsumerStatus,
    queueConsumerPartitions,

    bundleControllerZones,
    tabletBundleControllerState,
    tabletBundlesCheckWrite,
    listQueries,
    getQuery,
    startQuery,
    abortQuery,
    readQueryResults,
    getQueryResults,
    alterQuery,

    addMaintenance,
    removeMaintenance,
    maintenanceRequests,
    getQueryTrackerInfo,
    switchLeader,
}
