# Font provenance

Shell fonts are self-hosted Latin WOFF2 assets retrieved 16 July 2026 from Google
Fonts' static service after verifying each family in the official
[`google/fonts`](https://github.com/google/fonts) repository. That repository states
its files may be redistributed and self-hosted subject to each family license.

| Asset | Family/style | SHA-256 |
| --- | --- | --- |
| `newsreader-latin-variable.woff2` | Newsreader roman, 300–500 | `6e4f2958c3a7c4a80acde4e5a679abe7e01bc1e30b92be3c7a8b696ef401d101` |
| `newsreader-latin-variable-italic.woff2` | Newsreader italic, 300–500 | `5dfcd10d24af8c82927ba57f7983dd997f7b200594c09c35a1b1ed9fc4597506` |
| `onest-latin-variable.woff2` | Onest roman, 300–800 | `67849bcc11e02177442da14ad954bfe1cc709553dad137b5003449b303e83fc3` |
| `space-mono-latin-400.woff2` | Space Mono roman, 400 | `fb4a81a2d0a893e5c38c394a7e716a1cef0b24610a0af49c96f6d529bd66bf2b` |
| `space-mono-latin-700.woff2` | Space Mono roman, 700 | `2d46bd159b53f55c41167a4f1540a074649464194fd1e416f5b4694a6c0f282c` |
| `source-serif-4-latin-variable.woff2` | Source Serif 4 roman, 200–900 | `f2ea9c12d2fe9bd3a9589b02ad2c0909da88f30938c91adc838c4f4098f9f9e0` |
| `archivo-latin-variable.woff2` | Archivo roman, 100–900 | `e3a28eade21a900c7155a247757f4b2834c07bb7ef07ad7efa55cebaac1e8f5e` |
| `anton-latin-400.woff2` | Anton roman, 400 | `d0fa07ff63dd60cbc0e2f58e29c802dca2a5ae0276c999f59c6111ab7bbaec3b` |
| `karla-latin-variable.woff2` | Karla roman, 200–800 | `cd614fed3fa0bf1b083d1a127a593081e2a1aa732ad61481eb12baee212c933d` |
| `anybody-latin-variable.woff2` | Anybody roman, 100–900 with width axis | `041c675622919a7a380210851ecb00be81458a886441dab13269e1339b492354` |
| `public-sans-latin-variable.woff2` | Public Sans roman, 100–900 | `5ed4d31c988e73b258894244f209069ebe77dc7e564861954b21198b6de90d68` |

Exact SIL Open Font License 1.1 text and family copyright statements live under
`licenses/`. Source URLs contain no credentials. Newsreader roman and Onest preload;
remaining faces use `font-display: swap` and load on demand. System fallbacks keep
shell usable when downloads fail.

Study-owned files are sourced now but intentionally remain undeclared until their
route plans begin. Their future `@font-face` declarations and tokens must stay in
matching study styles, and no study font may enter shell preloads.
