[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/mediabeyondatlas-dev/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/mediabeyondatlas-dev/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

# The World Today — Wednesday 25 November 2026

A newspaper-style infographic (1024×1024 PNG) summing up the world news of
Wednesday 25 November 2026. Six stories, each with a short headline, a
two-to-three line summary and a simple drawn icon.

## The six stories

1. **Middle East: Two tankers hit mines in Strait of Hormuz** — Iran's
   Revolutionary Guard says two oil tankers struck naval mines and caught
   fire early Wednesday while using an unauthorised route through the strait,
   raising fears for global energy shipping. (Just Security Early Edition,
   25 Nov 2026)
2. **Europe: Ukraine hits Russian oil refineries again** — Ukrainian drones
   strike Russian oil refineries overnight, setting plants ablaze, as Putin
   says Kyiv keeps hitting refineries despite Trump's requests. Zelensky says
   Ukraine needs €115 billion in foreign aid for 2027. (Just Security,
   Principia, 25 Nov 2026)
3. **Markets: Asian stocks tumble as chip shares plunge** — South Korea's
   KOSPI falls 6.2%, Japan's Nikkei 2.8% and Taiwan's Taiex 4.8% on
   Wednesday as chipmakers slide: Samsung down 9.9%, SK Hynix 11.1%,
   SoftBank 14.8%. (AP, 25 Nov 2026)
4. **Americas: Colombia frees all hostages in supermarket siege** —
   Security forces storm a supermarket in Cartagena early Wednesday, freeing
   every remaining hostage after a day-long siege. One captor is killed.
   (Principia, Daily Summary of World, 25 Nov 2026)
5. **Space: China carries Pakistan's first astronaut to Tiangong** —
   Shenzhou-24 docks with the Tiangong space station on Wednesday, about
   three and a half hours after launch, carrying Pakistan's first astronaut
   into orbit. (Open Chronicle, 25 Nov 2026)
6. **Pacific: Australia and Solomons sign security treaty** — Australia and
   Solomon Islands sign a treaty in Canberra on Wednesday that would
   preclude a foreign military or security base being established on the
   islands. (Just Security, Open Chronicle, 25 Nov 2026)

Stories were checked against their reporting dates: Tuesday 24 November
events (the Huawei jury verdict, the Dow's first close above 50,000) were
deliberately left out — only events that happened, or were first reported,
on Wednesday 25 November 2026 are shown.

## How it works

`main.ts` (Node 22, standard library only) copies the bundled `entry.png`
byte-for-byte to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output/entry.png`).
No network access and no randomness, so two runs write identical bytes.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Licence

MIT — see `LICENSE`.
