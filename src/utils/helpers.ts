import type { Context } from "ponder:registry";
import { eventVersions } from "../../scripts/config.js";

// Common fields that every event handler extracts
export interface CommonFields {
    chainId: bigint;
    blockNumber: bigint;
    logIndex: number;
    contractAddress: `0x${string}`;
    blockTimestamp: bigint;
    txHash: `0x${string}`;
    indexedAt: bigint;
    schemaVersion: "v1" | "v1_5" | "v2";
}

// Gas fields for events that need receipt data
export interface GasFields {
    effectiveGasPrice: bigint;
    gasUsed: bigint;
}

// From field for events that need transaction sender
export interface FromFields {
    txFrom: `0x${string}`;
}

// Event context type
interface EventContext {
    block: {
        number: bigint;
        timestamp: bigint;
    };
    log: {
        address: `0x${string}`;
        logIndex: number;
    };
    transaction: {
        hash: `0x${string}`;
        from: `0x${string}`;
    };
}

/**
 * Extract common fields from event context
 */
export function getCommonFields(
    event: EventContext,
    context: Context,
    schemaVersion: "v1" | "v1_5" | "v2"
): CommonFields {
    return {
        chainId: BigInt(context.chain.id),
        blockNumber: event.block.number,
        logIndex: event.log.logIndex,
        contractAddress: event.log.address,
        blockTimestamp: event.block.timestamp,
        txHash: event.transaction.hash,
        indexedAt: BigInt(Date.now()),
        schemaVersion,
    };
}

/**
 * Get gas fields from transaction receipt
 */
export function getGasFields(receipt: {
    effectiveGasPrice: bigint;
    gasUsed: bigint;
}): GasFields {
    return {
        effectiveGasPrice: receipt.effectiveGasPrice,
        gasUsed: receipt.gasUsed,
    };
}

/**
 * Get from field from transaction
 */
export function getFromFields(event: EventContext): FromFields {
    return {
        txFrom: event.transaction.from,
    };
}

/**
 * Determine schema version based on event args
 * Uses the eventVersions config to check distinguishing fields
 */
export function determineSchemaVersion(
    eventName: string,
    args: Record<string, unknown>
): "v1" | "v1_5" | "v2" {
    const versions = eventVersions[eventName];

    if (!versions) {
        // Default to v1 if no version config exists
        return "v1";
    }

    for (const { version, distinguishingFields } of versions) {
        if (!distinguishingFields || distinguishingFields.length === 0) {
            // No distinguishing fields means this is the default/fallback version
            return version as "v1" | "v1_5" | "v2";
        }

        // Check if ALL distinguishing fields exist and are not undefined
        const allFieldsExist = distinguishingFields.every(
            (field) => args[field] !== undefined
        );

        if (allFieldsExist) {
            return version as "v1" | "v1_5" | "v2";
        }
    }

    // Fallback to v1 if nothing matches
    return "v1";
}

/**
 * Flatten tuple/struct fields with prefix
 * e.g., { t: { trader: "0x...", pairIndex: 1n } } => { t_trader: "0x...", t_pairIndex: 1n }
 */
export function flattenTupleFields<T extends Record<string, unknown>>(
    obj: T,
    prefix: string
): Record<string, unknown> {
    const result: Record<string, unknown> = {};

    for (const [key, value] of Object.entries(obj)) {
        result[`${prefix}_${key}`] = value;
    }

    return result;
}

