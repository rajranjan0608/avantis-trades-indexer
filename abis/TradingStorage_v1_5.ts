export const TradingStorage_v1_5Abi = [
  {
    "type": "event",
    "name": "TradeReferred",
    "anonymous": false,
    "inputs": [
      {
        "name": "_trader",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "_referrer",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "_leveragedPosition",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "_traderFeePostDiscount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "_startingFees",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "_referrerRebate",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "_pairIndex",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ]
  }
] as const;
