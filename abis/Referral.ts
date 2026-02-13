export const ReferralAbi = [
  {
    "type": "event",
    "name": "SetTraderReferralCode",
    "anonymous": false,
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "code",
        "type": "bytes32",
        "indexed": false,
        "internalType": "bytes32"
      }
    ]
  }
] as const;
