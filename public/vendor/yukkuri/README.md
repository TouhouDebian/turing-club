# Browser-local Yukkuri synthesis

Source: https://github.com/Love-Kogasa/zh-yukkuri-offline
Revision: a42d4dd7e732807962b1d284345f25ba5e4e68c9

Only the bundled browser synthesizer, pronunciation map, v86 runtime and f1/f2
voice packages are included. Synthesis runs on the visitor's device; text is not
sent to an external TTS service. The synthesizer is loaded only when an
unrecorded line needs speech and the visitor has enabled audio.

Voice packages preserve AquesTalk.dll and the accompanying AqLicence.txt.
Read that bundled agreement before redistribution; the engine is not open source.
AQUEST owns the engine. The JS bundle's accompanying LICENSE.txt preserves
its bundled dependency notices and is not a blanket license for all assets.
Upstream does not provide a repository-wide LICENSE file; consult its author
before reusing its original code beyond this integration.

Reimu and other characters use f1; Marisa (including Event) uses f2.
Fixed prerecorded lines remain the fast path. Dynamic text is limited to 240
characters for speech; the complete reply remains visible in chat. English
pronunciation is experimental with the upstream default converter.
