searchState.loadedDescShard("winnow", 0, "winnow, making parsing a breeze\nCore trait for parsing\nApplies a second parser over the output of the first one\nApplies a second parser over the output of the first one\nCharacter specific parsers and combinators\nParsers recognizing numbers\nTreat <code>&amp;mut Self</code> as a parser\nTreat <code>&amp;mut Self</code> as a parser\nList of parsers and combinators\nTransforms <code>Incomplete</code> into <code>Backtrack</code>\nTransforms <code>Incomplete</code> into <code>Backtrack</code>\nIf parsing fails, add context to the error\nIf parsing fails, add context to the error\nConvert the parser’s error to another type using …\nConvert the parser’s error to another type using …\nError management\nCreates a parser from the output of this one\nCreates a parser from the output of this one\nMaps a function over the output of a parser\nMaps a function over the output of a parser\nConvert the parser’s output to another type using …\nConvert the parser’s output to another type using …\nParse all of <code>input</code>, generating <code>O</code> from it\nParse all of <code>input</code>, generating <code>O</code> from it\nTake tokens from the <code>Stream</code>, turning it into the output\nTake tokens from the <code>Stream</code>, turning it into the output\nTake tokens from the <code>Stream</code>, turning it into the output\nApply <code>std::str::FromStr</code> to the output of the parser\nApply <code>std::str::FromStr</code> to the output of the parser\nCore concepts available for glob import\nProduce the consumed input as produced value.\nProduce the consumed input as produced value.\nProduce the location of the consumed input as produced …\nProduce the location of the consumed input as produced …\nStream capability for combinators to parse\nParsers extracting tokens from the stream\nParser execution tracing\nApplies a function returning a <code>Result</code> over the output of a …\nApplies a function returning a <code>Result</code> over the output of a …\nConvert a <code>Parser::parse_peek</code> style parse function to be a …\nProduce the provided value\nProduce the provided value\nReturns the output of the child parser if it satisfies a …\nReturns the output of the child parser if it satisfies a …\nApply both <code>Parser::verify</code> and <code>Parser::map</code>.\nApply both <code>Parser::verify</code> and <code>Parser::map</code>.\nDiscards the output of the <code>Parser</code>\nDiscards the output of the <code>Parser</code>\nProduce the consumed input with the output\nProduce the consumed input with the output\nProduce the location of consumed input with the output\nProduce the location of consumed input with the output\nMetadata for parsing hex numbers, see <code>hex_uint</code>\nMetadata for parsing signed integers, see <code>dec_int</code>\nMetadata for parsing unsigned integers, see <code>dec_uint</code>\nRecognizes zero or more lowercase and uppercase ASCII …\nRecognizes one or more lowercase and uppercase ASCII …\nRecognizes zero or more ASCII numerical and alphabetic …\nRecognizes one or more ASCII numerical and alphabetic …\nRecognizes the string <code>&quot;\\r\\n&quot;</code>.\nDecode a decimal signed integer (e.g. <code>i32</code>)\nDecode a decimal unsigned integer (e.g. <code>u32</code>)\nRecognizes zero or more ASCII numerical characters: …\nRecognizes one or more ASCII numerical characters: …\nMatches a byte string with escaped characters.\nMatches a byte string with escaped characters.\nRecognizes floating point number in text format and …\nRecognizes zero or more ASCII hexadecimal numerical …\nRecognizes one or more ASCII hexadecimal numerical …\nDecode a variable-width hexadecimal integer (e.g. <code>u32</code>)\nRecognizes an end of line (both <code>&quot;\\n&quot;</code> and <code>&quot;\\r\\n&quot;</code>).\nRecognizes zero or more spaces, tabs, carriage returns and …\nRecognizes one or more spaces, tabs, carriage returns and …\nMatches a newline character <code>&#39;\\n&#39;</code>.\nRecognizes a string of any char except <code>&quot;\\r\\n&quot;</code> or <code>&quot;\\n&quot;</code>.\nRecognizes zero or more octal characters: <code>&#39;0&#39;..=&#39;7&#39;</code>\nRecognizes one or more octal characters: <code>&#39;0&#39;..=&#39;7&#39;</code>\nRecognizes zero or more spaces and tabs.\nRecognizes zero or more spaces and tabs.\nMatches a tab character <code>&#39;\\t&#39;</code>.\nBig endian\nConfigurable endianness\nLittle endian\nWill match the host’s endianness\nRecognizes a big endian 4 bytes floating point number.\nRecognizes a big endian 8 bytes floating point number.\nRecognizes a big endian signed 16 bytes integer.\nRecognizes a big endian signed 2 bytes integer.\nRecognizes a big endian signed 3 bytes integer.\nRecognizes a big endian signed 4 bytes integer.\nRecognizes a big endian signed 8 bytes integer.\nRecognizes a signed 1 byte integer.\nRecognizes a big endian unsigned 16 bytes integer.\nRecognizes a big endian unsigned 2 bytes integer.\nRecognizes a big endian unsigned 3 byte integer.\nRecognizes a big endian unsigned 4 bytes integer.\nRecognizes a big endian unsigned 8 bytes integer.\nRecognizes an unsigned 1 byte integer.\nBit level parsers\nRecognizes a 4 byte floating point number\nRecognizes an 8 byte floating point number\nReturns the argument unchanged.\nRecognizes a signed 16 byte integer\nRecognizes a signed 2 byte integer\nRecognizes a signed 3 byte integer\nRecognizes a signed 4 byte integer\nRecognizes a signed 8 byte integer\nRecognizes a signed 1 byte integer\nCalls <code>U::from(self)</code>.\nRecognizes a little endian 4 bytes floating point number.\nRecognizes a little endian 8 bytes floating point number.\nRecognizes a little endian signed 16 bytes integer.\nRecognizes a little endian signed 2 bytes integer.\nRecognizes a little endian signed 3 bytes integer.\nRecognizes a little endian signed 4 bytes integer.\nRecognizes a little endian signed 8 bytes integer.\nRecognizes a signed 1 byte integer.\nRecognizes a little endian unsigned 16 bytes integer.\nRecognizes a little endian unsigned 2 bytes integer.\nRecognizes a little endian unsigned 3 byte integer.\nRecognizes a little endian unsigned 4 bytes integer.\nRecognizes a little endian unsigned 8 bytes integer.\nRecognizes an unsigned 1 byte integer.\nGets a number from the first parser, then applies the …\nGets a number from the parser and returns a subslice of …\nGets a number from the first parser, takes a subslice of …\nRecognizes an unsigned 16 byte integer\nRecognizes an unsigned 2 bytes integer\nRecognizes an unsigned 3 byte integer\nRecognizes an unsigned 4 byte integer\nRecognizes an unsigned 8 byte integer\nRecognizes an unsigned 1 byte integer\nConverts a byte-level input to a bit-level input\nParses one specific bit as a bool.\nConvert a <code>bits</code> stream back into a byte stream\nParse taking <code>count</code> bits and comparing them to <code>pattern</code>\nParse taking <code>count</code> bits\nHelper trait for the alt() combinator.\nImplementation of <code>Parser::and_then</code>\nImplementation of <code>Parser::by_ref</code>\nImplementation of <code>Parser::complete_err</code>\nImplementation of <code>Parser::context</code>\nImplementation of <code>Parser::err_into</code>\nImplementation of <code>Parser::flat_map</code>\nImplementation of <code>Parser::map</code>\nImplementation of <code>Parser::output_into</code>\nImplementation of <code>Parser::parse_to</code>\nMain structure associated to <code>iterator</code>.\nHelper trait for the permutation() combinator.\nImplementation of <code>Parser::recognize</code>\nImplementation of <code>Parser::span</code>\nImplementation of <code>Parser::try_map</code>\nImplementation of <code>Parser::value</code>\nImplementation of <code>Parser::verify</code>\nImplementation of <code>Parser::verify_map</code>\nImplementation of <code>Parser::void</code>\nImplementation of <code>Parser::with_recognized</code>\nImplementation of <code>Parser::with_span</code>\nPick the first successful parser\nTransforms an <code>ErrMode::Cut</code> (unrecoverable) to …\nTests each parser in the tuple and returns the result of …\nCalls the parser if the condition is met.\nTransforms an <code>ErrMode::Backtrack</code> (recoverable) to …\nSequence three parsers, only returning the output of the …\n<code>match</code> for parsers\nMatch the end of the <code>Stream</code>\nA parser which always fails.\nRepeats the embedded parser, filling the given slice with …\nReturns the remaining input if parsing was successful, or …\nRepeats the embedded parser <code>m..=n</code> times, calling <code>g</code> to …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nRepeats the embedded parser, lazily returning the results\nSucceeds if the child parser returns an error.\nApply a <code>Parser</code>, producing <code>None</code> on <code>ErrMode::Backtrack</code>.\nTries to apply its parser without consuming the input.\nApplies a list of parsers in any order.\nTries to apply all parsers in the tuple in various orders …\nSequence two parsers, only returning the output from the …\n<code>Accumulate</code> the output of a parser into a container, like …\n<code>Accumulate</code> the output of parser <code>f</code> into a container, like …\nReturn the remaining input.\nReturn the length of the remaining input.\n<code>Accumulate</code> the output of a parser, interleaed with <code>sep</code>\n<code>Accumulate</code> the output of a parser, interleaed with <code>sep</code>\nAlternates between two parsers, merging the results (left …\nAlternates between two parsers, merging the results (right …\nSequence three parsers, only returning the values of the …\nAlways succeeds with given value without consuming any …\nSequence two parsers, only returning the output of the …\nA placeholder for a not-yet-implemented <code>Parser</code>\nUsed by <code>Parser::context</code> to add custom data to error while …\nAll failed branches of an <code>alt</code>\nThe parser failed with a recoverable error (the default).\nInitial error that kicked things off\nA <code>char</code> token\nSee <code>AddContext::add_context</code>\nStatic string added by the <code>context</code> function\nAccumulate context while backtracking errors\nThe parser had an unrecoverable error.\nA description of what was being parsed\nAdd parse error state to <code>ParserError</code>s\nEquivalent of <code>From</code> implementation to avoid orphan rules in …\nProvide some minor debug context for errors\nGrammar item that was expected\nCreate a new error with an external error, from …\nHolds the result of <code>Parser</code>\nThere was not enough data to determine the appropriate …\nCapture input on error\nSee <code>ParserError::append</code>\nDescription of what is currently being parsed\nContains information on needed data if a parser returned …\nHolds the result of <code>Parser</code>\nSee <code>Parser::parse</code>\nThe basic <code>Parser</code> trait for errors\nContains the required data size in bytes\nTraces added to the error while walking back up the stack\nAdditional parse context for <code>ContextError</code> added via …\nSee <code>StrContext</code>\nA <code>&amp;str</code> token\nTrace all error paths, particularly for tests\nSee <code>TreeErrorFrame::Kind</code>, <code>ParserError::append</code>\nSee <code>TreeErrorFrame::Context</code>, <code>AddContext::add_context</code>\nSee <code>TreeError::Stack</code>\nNeeds more data, but we do not know how much\nDeprecated, replaced with <code>ContextError</code>\nDeprecated, replaced with <code>ContextError</code>\nError kind given by various parsers\nAppend to an existing error custom data\nLike <code>ParserError::from_error_kind</code> but merges it with the …\nProcess a parser assertion\nEnable backtracking support\nOriginating <code>std::error::Error</code>\nSee <code>FromExternalError::from_external_error</code>\nAccess context from <code>Parser::context</code>\nSee <code>AddContext::add_context</code>\nTransform to another error type\nAutomatically converts between errors if the underlying …\nPrevent backtracking, bubbling the error up to the top\nConverts an <code>ErrorKind</code> to a text description\nAccumulated error information\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates an error from the input position and an <code>ErrorKind</code>\nLike <code>ParserError::from_error_kind</code> but also include an …\nCreate a new error from an input position and an external …\nCreate a new error from an input position and an external …\nCreate a new error from an input position and an external …\nThe original <code>ParserError</code>\nThe <code>Stream</code> at the initial location when parsing started\nThe input stream, pointing to the location where the error …\nParsed input, at the location where the error occurred\nParsed input, at the location where the error occurred\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nUnwrap the mode, returning the underlying error\nThe original <code>ParserError</code>\nObtaining ownership\nObtaining ownership\nObtaining ownership\nTests if the result is Incomplete\nIndicates if we know how many bytes we need\nA rudimentary error kind\nDebug context\nMaps a <code>Needed</code> to <code>Needed</code> by applying a function to a …\nApplies the given function to the inner error\nMaps <code>ErrMode&lt;InputError&lt;T&gt;&gt;</code> to <code>ErrMode&lt;InputError&lt;U&gt;&gt;</code> with …\nTranslate the input type\nTranslate the input type\nTranslate the input type\nCreates <code>Needed</code> instance, returns <code>Needed::Unknown</code> if the …\nCreates a new basic error\nCreate an empty error\nThe location in <code>ParseError::input</code> where parsing failed\nCombines errors from two different parse branches.\nInitial error that kicked things off\nTraces added to the error while walking back up the stack\nAbstracts something which can extend an <code>Extend</code>. Used to …\nHelper trait for types that can be viewed as a byte slice\nHelper trait for types that can be viewed as a byte slice\nTransforms a token into a char for basic string parsing\nImproved <code>Debug</code> experience for <code>&amp;[u8]</code> UTF-8-ish streams\nIterator for bit stream (<code>(I, usize)</code>)\nImproved <code>Debug</code> experience for <code>&amp;[u8]</code> byte streams\nEnsure checkpoint details are kept privazte\nA parse location within the stream\nAbstracts comparison operations\nResult of <code>Compare::compare</code>\nCheck if a token in in a set of possible tokens\nComparison failed\nLook for a slice in self\nWe need more data to be sure\nIterate with the offset from the current location\nAllow collecting the span of a parsed token\nNumber of indices input has advanced since start of parsing\nUseful functions to calculate the offset between slices …\nComparison was successful\nUsed to integrate <code>str</code>’s <code>parse()</code> method\nMark the input as a partial buffer for streaming input.\nWhether the stream is currently partial or complete\nA range bounded inclusively for counting parses performed\nSequence of <code>Token</code>s\nAbstract method to calculate the input length\nThread global state through your parsers\nUTF-8 Stream\nCore definition for parser input state\nMarks the input as being the complete buffer or a partial …\nHelper trait to convert numbers to usize.\nThe smallest unit being parsed\nConvert a <code>Stream</code> into an appropriate <code>Output</code> type\nAccumulate the input into an accumulator\nCasts the input type to a byte slice\nCasts the input type to a byte slice\nMakes a char from self\nSave the current parse location within the stream\nCompares self to another value for equality\nCompares self to another value for equality independently …\nMark the stream is complete\nReturns true if self contains the token\nReturns the offaet to the end of the input\nReturns the offset of the slice if it is found\nAdvance to the end of the stream\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreate a new <code>Extend</code> of the correct type\nInner input being wrapped in state\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nExtract the original <code>Stream</code>\nTests that self is an alphabetic character\nTests that self is an alphabetic character or a decimal …\nTests that self is a decimal digit\nTests that self is an hex digit\nTests if byte is ASCII newline: \\n\nTests that self is an octal digit\nReport whether the <code>Stream</code> is currently incomplete\nReport whether the <code>Stream</code> is can ever be incomplete\nTests that self is ASCII space or tab\nIterate with the offset from the current location\nGets the len in bytes for self\nNumber of indices input has advanced since start of parsing\nMake a stream out of a byte slice-like.\nMake a stream out of a byte slice-like.\nWrap another Stream with span tracking\nCreate a partial input\nSplit off a slice of tokens from the input\nSplit off the next token from the input\nGet the offset for the number of <code>tokens</code> into the stream\nFinds the offset of the next matching token\nOffset between the first byte of <code>start</code> and the first byte …\nSucceeds if <code>parse()</code> succeededThe\nAdvance to the end of the stream\nSplit off a slice of tokens from the input\nSplit off the next token from the input\nReturn the inner-most stream\nRevert the stream to a prior <code>Self::Checkpoint</code>\nRestore the stream back to its previous state\nCalculates the input length, as indicated by its name, and …\nUser-provided state\nconverts self to usize\nConvert an <code>Output</code> type to be used as <code>Stream</code>\nMatches one token\nRecognize a token that does not match the pattern\nRecognize a token that matches the pattern\nRecognizes a literal\nRecognizes a case insensitive literal.\nRecognize an input slice containing the first N input …\nRecognize the longest input slice (if any) till a pattern …\nRecognize the longest (at least 1) input slice till a …\nRecognize the input slice up to the first occurrence of …\nRecognize the non empty input slice up to the first …\nRecognize the longest (m &lt;= len &lt;= n) input slice that …\nTrace the execution of the parser")