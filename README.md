# GTA 6 meme for make.fun bounty gta6-meme-x-01

Entry for [@sheikhakash69](https://make.fun/u/sheikhakash69) on
[Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01).

## Joke

Thirteen years waiting for GTA 6. The make.fun ghost already rolled out in
Leonida neon and started farming open bounties for real money.

Files:
- `meme.png` / `meme.jpg` — the meme (make.fun mark composited from https://make.fun/press/mark-1024.png)
- `make-fun-mark.png` — press kit mark used as reference
- `POST.json` — X post URL (filled after Akash posts)
- `main.ts` — copies `POST.json` to `/output` for the program/v1 harness

## Run locally

```bash
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT (see `LICENSE`).
