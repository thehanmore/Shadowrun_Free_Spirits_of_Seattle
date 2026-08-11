# “Update Shadowrun” workflow

When the user says **Update Shadowrun**, perform this workflow:

1. Read `data/sync-state.json`.
2. Use the authenticated Discord session to inspect only the configured Tuesday RPG Group channels.
3. Import messages newer than the recorded checkpoint for each channel.
4. Treat `Cloak`, `Red`, `Prettyboy`, and `Pyrite` as the active runners. Keep Arjun retired and historical.
5. Reconstruct each session recap by its title, session date, and ordered `Part X/Y` messages. Do not publish individual Discord chunks as separate sessions.
6. Download relevant attachments into meaningful repository paths. Never hotlink expiring Discord attachment URLs.
7. Preserve source uncertainty: `SRNET`, `SHADOWLAND`, `OFFICIAL`, `LEAKED`, and `UNVERIFIED` are provenance labels, not truth ratings.
8. Exclude conversation noise, rules discussion, food photos, scheduling chatter, dice results, and anything not intended as an in-character player resource.
9. Never expose GM-only files or infer secret facts into public pages.
10. Build and test locally. Present a concise change summary before any public push unless the user explicitly asked to publish immediately.
11. Commit using `Update Shadowrun: YYYY-MM-DD` and push to `main` after approval.
12. Verify GitHub Pages and update the checkpoints only after the production site succeeds.

## Channel mapping

- `ic-leaks-shadowlands-gossip` → `shadowfeed.html`
- `player-characters` → active runner dossiers
- `whos-who` → people and factions
- `npcs` → people and portrait assets
- `maps` → places and map assets
- `places-of-interest` → places and visual assets
- `recaps-shadowrun` → reconstructed run log and timeline

