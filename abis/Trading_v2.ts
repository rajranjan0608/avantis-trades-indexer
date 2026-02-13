export const Trading_v2Abi = [
  {
    "type": "event",
    "name": "MarketOrderInitiated",
    "anonymous": false,
    "inputs": [
      {
        "name": "trader",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "pairIndex",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "open",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      },
      {
        "name": "orderId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "timestamp",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "isBuy",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      },
      {
        "name": "isPnl",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      },
      {
        "name": "initialPosToken",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "leverage",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ]
  }
] as const;
