export const TradingCallbacks_v1_5Abi = [
  {
    "type": "event",
    "name": "LimitExecuted",
    "anonymous": false,
    "inputs": [
      {
        "name": "orderId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "limitIndex",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "t",
        "type": "tuple",
        "indexed": false,
        "internalType": "tuple",
        "components": [
          {
            "name": "trader",
            "type": "address",
            "indexed": false,
            "internalType": "address"
          },
          {
            "name": "pairIndex",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          },
          {
            "name": "index",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          },
          {
            "name": "initialPosToken",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          },
          {
            "name": "positionSizeUSDC",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          },
          {
            "name": "openPrice",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          },
          {
            "name": "buy",
            "type": "bool",
            "indexed": false,
            "internalType": "bool"
          },
          {
            "name": "leverage",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          },
          {
            "name": "tp",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          },
          {
            "name": "sl",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          },
          {
            "name": "timestamp",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "orderType",
        "type": "uint8",
        "indexed": false,
        "internalType": "uint8"
      },
      {
        "name": "price",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "positionSizeUSDC",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "percentProfit",
        "type": "int256",
        "indexed": false,
        "internalType": "int256"
      },
      {
        "name": "usdcSentToTrader",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "isPnl",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      }
    ]
  },
  {
    "type": "event",
    "name": "MarketExecuted",
    "anonymous": false,
    "inputs": [
      {
        "name": "orderId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "t",
        "type": "tuple",
        "indexed": false,
        "internalType": "tuple",
        "components": [
          {
            "name": "trader",
            "type": "address",
            "indexed": false,
            "internalType": "address"
          },
          {
            "name": "pairIndex",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          },
          {
            "name": "index",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          },
          {
            "name": "initialPosToken",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          },
          {
            "name": "positionSizeUSDC",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          },
          {
            "name": "openPrice",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          },
          {
            "name": "buy",
            "type": "bool",
            "indexed": false,
            "internalType": "bool"
          },
          {
            "name": "leverage",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          },
          {
            "name": "tp",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          },
          {
            "name": "sl",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          },
          {
            "name": "timestamp",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "open",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      },
      {
        "name": "price",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "positionSizeUSDC",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "percentProfit",
        "type": "int256",
        "indexed": false,
        "internalType": "int256"
      },
      {
        "name": "usdcSentToTrader",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "isPnl",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      }
    ]
  },
  {
    "type": "event",
    "name": "MarketOpenCanceled",
    "anonymous": false,
    "inputs": [
      {
        "name": "orderId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
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
      }
    ]
  }
] as const;
