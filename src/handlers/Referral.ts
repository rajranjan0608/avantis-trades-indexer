import { ponder } from "ponder:registry";
import { SetTraderReferralCode } from "../../ponder.schema";
import {
  getCommonFields,
  getGasFields,
  getFromFields,
} from "../utils/helpers";

ponder.on("Referral:SetTraderReferralCode", async ({ event, context }) => {
  const schemaVersion = "v1" as const;

  await context.db
    .insert(SetTraderReferralCode)
    .values({
      ...getCommonFields(event, context, schemaVersion),
      account: event.args.account,
      code: event.args.code,
    })
    .onConflictDoNothing();
});

