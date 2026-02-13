import { ponder } from "ponder:registry";
import { LimitExecuted, MarketExecuted, MarketOpenCanceled } from "../../ponder.schema";
import {
  getCommonFields,
  getGasFields,
  getFromFields,
} from "../utils/helpers";
import { getLimitExecutedExtras, getMarketExecutedExtras } from "./extensions/TradingCallbacks";

ponder.on("TradingCallbacks:LimitExecuted", async ({ event, context }) => {
  const extras = await getLimitExecutedExtras(event.args, context);

  const schemaVersion = "v1_5" as const;

  await context.db
    .insert(LimitExecuted)
    .values({
      ...getCommonFields(event, context, schemaVersion),
      ...extras,
      orderId: event.args.orderId,
      limitIndex: event.args.limitIndex,
      t_trader: event.args.t.trader,
      t_pairIndex: event.args.t.pairIndex,
      t_index: event.args.t.index,
      t_initialPosToken: event.args.t.initialPosToken,
      t_positionSizeUSDC: event.args.t.positionSizeUSDC,
      t_openPrice: event.args.t.openPrice,
      t_buy: event.args.t.buy,
      t_leverage: event.args.t.leverage,
      t_tp: event.args.t.tp,
      t_sl: event.args.t.sl,
      t_timestamp: event.args.t.timestamp,
      orderType: event.args.orderType,
      price: event.args.price,
      positionSizeUSDC: event.args.positionSizeUSDC,
      percentProfit: event.args.percentProfit,
      usdcSentToTrader: event.args.usdcSentToTrader,
      isPnl: event.args.isPnl,
    })
    .onConflictDoNothing();
});

ponder.on("TradingCallbacks:MarketExecuted", async ({ event, context }) => {
  const extras = await getMarketExecutedExtras(event.args, context);

  const schemaVersion = "v1_5" as const;

  await context.db
    .insert(MarketExecuted)
    .values({
      ...getCommonFields(event, context, schemaVersion),
      ...extras,
      orderId: event.args.orderId,
      t_trader: event.args.t.trader,
      t_pairIndex: event.args.t.pairIndex,
      t_index: event.args.t.index,
      t_initialPosToken: event.args.t.initialPosToken,
      t_positionSizeUSDC: event.args.t.positionSizeUSDC,
      t_openPrice: event.args.t.openPrice,
      t_buy: event.args.t.buy,
      t_leverage: event.args.t.leverage,
      t_tp: event.args.t.tp,
      t_sl: event.args.t.sl,
      t_timestamp: event.args.t.timestamp,
      open: event.args.open,
      price: event.args.price,
      positionSizeUSDC: event.args.positionSizeUSDC,
      percentProfit: event.args.percentProfit,
      usdcSentToTrader: event.args.usdcSentToTrader,
      isPnl: event.args.isPnl,
    })
    .onConflictDoNothing();
});

ponder.on("TradingCallbacks:MarketOpenCanceled", async ({ event, context }) => {
  const schemaVersion = "v1" as const;

  await context.db
    .insert(MarketOpenCanceled)
    .values({
      ...getCommonFields(event, context, schemaVersion),
      orderId: event.args.orderId,
      trader: event.args.trader,
      pairIndex: event.args.pairIndex,
    })
    .onConflictDoNothing();
});

