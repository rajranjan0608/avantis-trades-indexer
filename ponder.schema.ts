import { onchainEnum, onchainTable, primaryKey } from "ponder";

// Schema version enum for tracking event signature versions
export const schemaVersionEnum = onchainEnum("schema_version", [
  "v1",
  "v1_5",
  "v2",
]);

export const LimitExecuted = onchainTable(
  "LimitExecuted",
  (t) => ({
    // Primary key components
    chainId: t.bigint().notNull(),
    blockNumber: t.bigint().notNull(),
    logIndex: t.integer().notNull(),

    // Common metadata
    contractAddress: t.hex().notNull(),
    blockTimestamp: t.bigint().notNull(),
    txHash: t.hex().notNull(),
    indexedAt: t.bigint().notNull(),
    schemaVersion: schemaVersionEnum("schema_version").notNull(),

    // Extension fields (from custom handlers)
    grossPnl: t.bigint(),

    // Event-specific fields
    isPnl: t.boolean().notNull(),
    limitIndex: t.bigint().notNull(),
    orderId: t.bigint().notNull(),
    orderType: t.integer().notNull(),
    percentProfit: t.bigint().notNull(),
    positionSizeUSDC: t.bigint().notNull(),
    price: t.bigint().notNull(),
    t_buy: t.boolean().notNull(),
    t_index: t.bigint().notNull(),
    t_initialPosToken: t.bigint().notNull(),
    t_leverage: t.bigint().notNull(),
    t_openPrice: t.bigint().notNull(),
    t_pairIndex: t.bigint().notNull(),
    t_positionSizeUSDC: t.bigint().notNull(),
    t_sl: t.bigint().notNull(),
    t_timestamp: t.bigint().notNull(),
    t_tp: t.bigint().notNull(),
    t_trader: t.hex().notNull(),
    usdcSentToTrader: t.bigint().notNull(),
  }),
  (table) => ({
    pk: primaryKey({ columns: [table.chainId, table.blockNumber, table.logIndex] }),
  })
);

export const MarketExecuted = onchainTable(
  "MarketExecuted",
  (t) => ({
    // Primary key components
    chainId: t.bigint().notNull(),
    blockNumber: t.bigint().notNull(),
    logIndex: t.integer().notNull(),

    // Common metadata
    contractAddress: t.hex().notNull(),
    blockTimestamp: t.bigint().notNull(),
    txHash: t.hex().notNull(),
    indexedAt: t.bigint().notNull(),
    schemaVersion: schemaVersionEnum("schema_version").notNull(),

    // Extension fields (from custom handlers)
    grossPnl: t.bigint(),

    // Event-specific fields
    isPnl: t.boolean().notNull(),
    open: t.boolean().notNull(),
    orderId: t.bigint().notNull(),
    percentProfit: t.bigint().notNull(),
    positionSizeUSDC: t.bigint().notNull(),
    price: t.bigint().notNull(),
    t_buy: t.boolean().notNull(),
    t_index: t.bigint().notNull(),
    t_initialPosToken: t.bigint().notNull(),
    t_leverage: t.bigint().notNull(),
    t_openPrice: t.bigint().notNull(),
    t_pairIndex: t.bigint().notNull(),
    t_positionSizeUSDC: t.bigint().notNull(),
    t_sl: t.bigint().notNull(),
    t_timestamp: t.bigint().notNull(),
    t_tp: t.bigint().notNull(),
    t_trader: t.hex().notNull(),
    usdcSentToTrader: t.bigint().notNull(),
  }),
  (table) => ({
    pk: primaryKey({ columns: [table.chainId, table.blockNumber, table.logIndex] }),
  })
);

export const MarketOpenCanceled = onchainTable(
  "MarketOpenCanceled",
  (t) => ({
    // Primary key components
    chainId: t.bigint().notNull(),
    blockNumber: t.bigint().notNull(),
    logIndex: t.integer().notNull(),

    // Common metadata
    contractAddress: t.hex().notNull(),
    blockTimestamp: t.bigint().notNull(),
    txHash: t.hex().notNull(),
    indexedAt: t.bigint().notNull(),
    schemaVersion: schemaVersionEnum("schema_version").notNull(),

    // Event-specific fields
    orderId: t.bigint().notNull(),
    pairIndex: t.bigint().notNull(),
    trader: t.hex().notNull(),
  }),
  (table) => ({
    pk: primaryKey({ columns: [table.chainId, table.blockNumber, table.logIndex] }),
  })
);

export const MarketOrderInitiated = onchainTable(
  "MarketOrderInitiated",
  (t) => ({
    // Primary key components
    chainId: t.bigint().notNull(),
    blockNumber: t.bigint().notNull(),
    logIndex: t.integer().notNull(),

    // Common metadata
    contractAddress: t.hex().notNull(),
    blockTimestamp: t.bigint().notNull(),
    txHash: t.hex().notNull(),
    indexedAt: t.bigint().notNull(),
    schemaVersion: schemaVersionEnum("schema_version").notNull(),

    // Event-specific fields
    initialPosToken: t.bigint().notNull(),
    isBuy: t.boolean().notNull(),
    isPnl: t.boolean().notNull(),
    leverage: t.bigint().notNull(),
    open: t.boolean().notNull(),
    orderId: t.bigint().notNull(),
    pairIndex: t.bigint().notNull(),
    timestamp: t.bigint().notNull(),
    trader: t.hex().notNull(),
  }),
  (table) => ({
    pk: primaryKey({ columns: [table.chainId, table.blockNumber, table.logIndex] }),
  })
);

export const SetTraderReferralCode = onchainTable(
  "SetTraderReferralCode",
  (t) => ({
    // Primary key components
    chainId: t.bigint().notNull(),
    blockNumber: t.bigint().notNull(),
    logIndex: t.integer().notNull(),

    // Common metadata
    contractAddress: t.hex().notNull(),
    blockTimestamp: t.bigint().notNull(),
    txHash: t.hex().notNull(),
    indexedAt: t.bigint().notNull(),
    schemaVersion: schemaVersionEnum("schema_version").notNull(),

    // Event-specific fields
    account: t.hex().notNull(),
    code: t.hex().notNull(),
  }),
  (table) => ({
    pk: primaryKey({ columns: [table.chainId, table.blockNumber, table.logIndex] }),
  })
);

export const TradeReferred = onchainTable(
  "TradeReferred",
  (t) => ({
    // Primary key components
    chainId: t.bigint().notNull(),
    blockNumber: t.bigint().notNull(),
    logIndex: t.integer().notNull(),

    // Common metadata
    contractAddress: t.hex().notNull(),
    blockTimestamp: t.bigint().notNull(),
    txHash: t.hex().notNull(),
    indexedAt: t.bigint().notNull(),
    schemaVersion: schemaVersionEnum("schema_version").notNull(),

    // Event-specific fields
    leveragedPosition: t.bigint().notNull(),
    pairIndex: t.bigint().notNull(),
    referrer: t.hex().notNull(),
    referrerRebate: t.bigint().notNull(),
    startingFees: t.bigint().notNull(),
    trader: t.hex().notNull(),
    traderFeePostDiscount: t.bigint().notNull(),
  }),
  (table) => ({
    pk: primaryKey({ columns: [table.chainId, table.blockNumber, table.logIndex] }),
  })
);

