/**
 * Custom extensions for TradingCallbacks handlers
 * This file is NOT auto-generated and will NOT be overwritten
 */

import type { Context } from "ponder:registry";

interface TradeInfo {
    trader: `0x${string}`;
    pairIndex: bigint;
    index: bigint;
}

interface MarketExecutedArgs {
    t: TradeInfo;
    open: boolean;
    price: bigint;
    positionSizeUSDC: bigint;
    percentProfit: bigint;
    usdcSentToTrader: bigint;
}

interface LimitExecutedArgs {
    t: TradeInfo;
    orderType: number;
    price: bigint;
    positionSizeUSDC: bigint;
    percentProfit: bigint;
    usdcSentToTrader: bigint;
}

/**
 * Fetch grossPnl for MarketExecuted events when trade is closed
 */
export async function getMarketExecutedExtras(
    args: MarketExecutedArgs,
    context: Context
): Promise<{ grossPnl: bigint }> {
    // Only fetch for closed trades
    if (!args.open) {
        return { grossPnl: BigInt(0) };
    }

    // percentProfit is in 1e10 precision; clamp to min -85 (i.e. -850000000000n)
    const minPercentProfit = -850000000000n;
    const percentProfit = args.percentProfit < minPercentProfit ? minPercentProfit : args.percentProfit;

    return {
        grossPnl: (percentProfit * args.positionSizeUSDC) / BigInt(1e12),
    }
}

/**
 * Fetch grossPnl for LimitExecuted events when orderType is 3 (TP) or opening
 */
export async function getLimitExecutedExtras(
    args: LimitExecutedArgs,
    context: Context
): Promise<{ grossPnl: bigint }> {
    // Only fetch for closed trades
    if (args.orderType === 3) {
        return { grossPnl: BigInt(0) };
    }

    // percentProfit is in 1e10 precision; clamp to min -85 (i.e. -850000000000n)
    const minPercentProfit = -850000000000n;
    const percentProfit = args.percentProfit < minPercentProfit ? minPercentProfit : args.percentProfit;

    return {
        grossPnl: (percentProfit * args.positionSizeUSDC) / BigInt(1e12),
    }
}

