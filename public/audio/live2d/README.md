# Live2D prerecorded Yukkuri speech

These WAV files are generated audio, not an embedded speech synthesizer.
No AQUEST engine binaries, voice banks, emulators, or dictionaries are distributed here.

Local generation uses jat785/YouKuLiChaSpeak:
https://github.com/jat785/Text-to-Yukkuri-Voice-Windows-QQ-and-WeChat-only-

The upstream application code is MIT-licensed. AquesTalk itself is proprietary;
the application's MIT license does not license the engine or its voice banks.
See the upstream THIRD_PARTY_NOTICES.md and https://www.a-quest.com/licence.html.
Publishing these recordings does not grant permission to host a synthesis API.

Voice assignment: Reimu and other characters use f1; Marisa uses f2.
Only Reimu/Marisa follow the upstream conventional labels. Other assignments
are site-specific choices, not official character voices.
Recordings cover existing Chinese greetings/click responses and one Japanese greeting.
Unrecorded text, including arbitrary AI replies and English translations, is silent.

To regenerate, install the upstream project's synth dependencies separately and run
`node scripts/generate-live2d-voices.mjs /path/to/upstream/synth/synthesize.mjs`
from the website root. Keep the engine installation outside published assets.
