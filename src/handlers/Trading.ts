import { ponder } from "ponder:registry";
import { MarketOrderInitiated } from "../../ponder.schema";
import {
  getCommonFields,
  getGasFields,
  getFromFields,
} from "../utils/helpers";

ponder.on("Trading:MarketOrderInitiated", async ({ event, context }) => {
  const schemaVersion = "v2" as const;

  await context.db
    .insert(MarketOrderInitiated)
    .values({
      ...getCommonFields(event, context, schemaVersion),
      trader: event.args.trader,
      pairIndex: event.args.pairIndex,
      open: event.args.open,
      orderId: event.args.orderId,
      timestamp: event.args.timestamp,
      isBuy: event.args.isBuy,
      isPnl: event.args.isPnl,
      initialPosToken: event.args.initialPosToken,
      leverage: event.args.leverage,
    })
    .onConflictDoNothing();
});

