import { createConfig, mergeAbis } from "ponder";
import { TradingStorage_v1_5Abi } from "./abis/TradingStorage_v1_5";
import { Trading_v2Abi } from "./abis/Trading_v2";
import { ReferralAbi } from "./abis/Referral";
import { TradingCallbacks_v1_5Abi } from "./abis/TradingCallbacks_v1_5";

// Set to a block number to skip earlier history, or leave unset to start from genesis.
// Set endBlock to stop indexing at a specific block, or leave unset to continue in real-time.
const blockConfig = {
  startBlock: parseInt(process.env.PONDER_START_BLOCK ?? "0"),
  endBlock: process.env.PONDER_END_BLOCK === undefined ? undefined : parseInt(process.env.PONDER_END_BLOCK)
};

export default createConfig({
  database: {
    kind: "postgres",
    connectionString: process.env.DATABASE_URL!,
  },
  chains: {
    base: {
      id: 8453,
      rpc: process.env.PONDER_RPC_URL_1!,
      ws: process.env.PONDER_WS_URL_1!,
    },
  },
  contracts: {
    TradingStorage: {
      abi: mergeAbis([TradingStorage_v1_5Abi]),
      address: "0x8a311D7048c35985aa31C131B9A13e03a5f7422d",
      chain: "base",
      ...blockConfig,
    },
    Trading: {
      abi: mergeAbis([Trading_v2Abi]),
      address: [
        "0x5FF292d70bA9cD9e7CCb313782811b3D7120535f",
      ],
      chain: "base",
      ...blockConfig,
    },
    Referral: {
      abi: ReferralAbi,
      address: [
        "0x1A110bBA13A1f16cCa4b79758BD39290f29De82D"
      ],
      chain: "base",
      ...blockConfig,
    },
    TradingCallbacks: {
      abi: mergeAbis([TradingCallbacks_v1_5Abi]),
      address: "0x0C16ff40065Cc3Ab4bc55B60E447504AFB9C7970",
      chain: "base",
      ...blockConfig,
    }
  },
});
