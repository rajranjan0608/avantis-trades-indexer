# Ponder Indexer

Indexes Avantis protocol events on Base.

## Quick Start

```bash
pnpm install
pnpm ponder dev
```

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
