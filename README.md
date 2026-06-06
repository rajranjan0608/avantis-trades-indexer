# Ponder Indexer

Indexes Avantis protocol events on Base.

## Quick Start

To run the indexer, you'll need a **Postgres database** and a **Base RPC URL**. Once you have them, set the values as environment variables. You can either define them in a `.env.local` file or export them directly in your terminal session.

Example `.env.local` file (see `.env.example` for all available options):

```bash
DATABASE_URL=postgres://username:password@localhost:5433/db_name
PONDER_RPC_URL_1=https://mainnet.base.org
PONDER_WS_URL_1=wss://base-rpc.publicnode.com
```

The WebSocket endpoint is optional, but recommended. When provided, the indexer can receive chain updates in real time, resulting in lower indexing latency. Without it, the indexer will fall back to HTTP polling and continue to work normally.

For production workloads, consider using a dedicated RPC provider instead of public endpoints to avoid rate limits and improve reliability. Checkout Coinbase's official [Developer Platform](https://docs.cdp.coinbase.com/data/node/overview).

Once your environment variables are configured, install the dependencies and start the indexer:

```bash
pnpm install
pnpm ponder dev
```

That's it, the indexer will connect to your database, sync historical data, and begin indexing new blocks as they arrive.

## Block Range

By default, the indexer starts from block `0` and continues in real-time as new blocks arrive. You can narrow the range with two optional environment variables:

| Variable | Description |
|----------|-------------|
| `PONDER_START_BLOCK` | Block number to begin indexing from. Defaults to `0`. |
| `PONDER_END_BLOCK` | Block number to stop indexing at (inclusive). When unset, indexing continues in real-time. |

```bash
PONDER_START_BLOCK=46901433
PONDER_END_BLOCK=46901533
```

Useful for backfilling a specific window of history without syncing from genesis, or for running a one-off historical sync that stops at a known block. Especially useful to debug events in a specific period.

## Project Structure

```
├── abis/                    # Contract ABIs (one file per contract version)
├── src/
│   ├── handlers/            # Generated event handlers
│   │   └── extensions/      # Custom handler logic (not overwritten)
│   └── utils/helpers.ts     # Common helper functions
├── ponder.config.ts         # Ponder configuration
└── ponder.schema.ts         # Generated database schema
```

## Configuration

All event-specific configuration lives in `scripts/config.ts`.
