import { ponder } from "ponder:registry";
import { TradeReferred } from "../../ponder.schema";
import {
  getCommonFields,
  getGasFields,
  getFromFields,
} from "../utils/helpers";

ponder.on("TradingStorage:TradeReferred", async ({ event, context }) => {
  const schemaVersion = "v1_5" as const;

  await context.db
    .insert(TradeReferred)
    .values({
      ...getCommonFields(event, context, schemaVersion),
      trader: event.args._trader,
      referrer: event.args._referrer,
      leveragedPosition: event.args._leveragedPosition,
      traderFeePostDiscount: event.args._traderFeePostDiscount,
      startingFees: event.args._startingFees,
      referrerRebate: event.args._referrerRebate,
      pairIndex: event.args._pairIndex,
    })
    .onConflictDoNothing();
});

