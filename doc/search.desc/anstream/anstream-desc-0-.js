searchState.loadedDescShard("anstream", 0, "<strong>Auto-adapting <code>stdout</code> / <code>stderr</code> streams</strong>\n<code>std::io::Write</code> that adapts ANSI escape codes to the …\nIn-memory <code>RawStream</code>\nSelection for overriding color output Selection for …\nExplicitly lock a <code>std::io::Write</code>able\nRequired functionality for underlying <code>std::io::Write</code> for …\nOnly pass printable data to the inner <code>Write</code>\nGracefully degrade styled output\nForce color, no matter what the inner <code>Write</code> supports.\nForce ANSI escape codes to be passed through as-is, no …\nAuto-adapt for the stream’s capabilities\nReport the desired choice for the given stream\nPrints to <code>stderr</code>.\nPrints to <code>stderr</code>, with a newline.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet the current <code>ColorChoice</code> state\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nGet the wrapped <code>RawStream</code>\nGet the wrapped <code>RawStream</code>\nGet exclusive access to the <code>AutoStream</code>\nGet exclusive access to the <code>AutoStream</code>\nOnly pass printable data to the inner <code>Write</code>.\nRuntime control over styling behavior\nOnly pass printable data to the inner <code>Write</code>\nPanics the current thread.\nPrints to <code>stdout</code>.\nPrints to <code>stdout</code>, with a newline.\nCreate an ANSI escape code compatible stderr\nCreate an ANSI escape code compatible stdout\nOverride the detected <code>ColorChoice</code>\nIncrementally strip non-contiguous data\nSee <code>StripBytes</code>\nIncrementally strip non-contiguous data\nSee <code>StripStr</code>\nSee <code>strip_bytes</code>\nSee <code>strip_str</code>\nIncrementally convert to wincon calls for non-contiguous …\nSee <code>WinconBytes</code>\nStrip the next slice of bytes\nStrip the next segment of data\n<strong>Note:</strong> this does <em>not</em> exhaust the <code>Iterator</code>\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a <code>Vec</code> of the printable content\nReport the bytes has been exhausted\nInitial state\nSee <code>strip_bytes</code>\nInitial state\nInitial state\nStrip ANSI escapes from bytes, returning the printable …\nStrip the next segment of data\nStrip the next segment of data\nStrip ANSI escapes from a <code>&amp;str</code>, returning the printable …\nCreate a <code>String</code> of the printable content")