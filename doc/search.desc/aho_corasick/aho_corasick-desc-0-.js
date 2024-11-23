searchState.loadedDescShard("aho_corasick", 0, "A library for finding occurrences of many patterns at …\nAn automaton for searching multiple strings in linear time.\nA builder for configuring an Aho-Corasick automaton.\nThe type of Aho-Corasick implementation to use in an …\nThe type of anchored search to perform.\nSupport only anchored searches. Requesting an unanchored …\nSupport both anchored and unanchored searches.\nAn error that occurred during the construction of an …\nUse a contiguous NFA.\nUse a DFA. Warning: DFAs typically use a large amount of …\nAn iterator of non-overlapping matches in a particular …\nAn iterator of overlapping matches in a particular …\nThe configuration and the haystack to use for an …\nAn error indicating that an anchored search was requested, …\nAn error indicating that an unanchored search was …\nThe total number of values that can be represented.\nUse leftmost-first match semantics, which reports leftmost …\nUse leftmost-longest match semantics, which reports …\nThe maximum value.\nA representation of a match reported by an Aho-Corasick …\nAn error that occurred during an Aho-Corasick search.\nThe underlying kind of a <code>MatchError</code>.\nA knob for controlling the match semantics of an …\nRun an unanchored search. This means a match may occur …\nUse a noncontiguous NFA.\nThe identifier of a pattern in an Aho-Corasick automaton.\nThis error occurs when an ID could not be constructed.\nThe number of bytes that a single value uses in memory.\nA representation of a range in a haystack.\nUse standard match semantics, which support overlapping …\nThe kind of anchored starting configurations to support in …\nAn iterator that reports Aho-Corasick matches in a stream.\nSupport only unanchored searches. Requesting an anchored …\nAn error indicating that the operation requested doesn’t …\nAn error indicating that an overlapping search was …\nAn error indicating that a stream search was attempted on …\nRun an anchored search. This means that a match must begin …\nThe zero value.\nSets the anchor mode of a search.\nReturn the internal value as a <code>i32</code>. This is guaranteed to …\nReturn the internal value as a <code>u32</code>. This is guaranteed to …\nReturn the internal value as a <code>u64</code>. This is guaranteed to …\nReturn the internal value as a <code>usize</code>. This is guaranteed to\nEnable ASCII-aware case insensitive matching.\nReturns the value that could not be converted to an ID.\nProvides <code>Automaton</code> trait for abstracting over Aho-Corasick …\nBuild an Aho-Corasick automaton using the configuration …\nA convenience method for returning a new Aho-Corasick …\nA debug settting for whether to attempt to shrink the size …\nReturns true when the given offset is contained within …\nSet the limit on how many states use a dense …\nProvides direct access to a DFA implementation of …\nWhether to execute an “earliest” search or not.\nReturn the end position of this search.\nThe ending position of the match.\nThe end offset of the span, exclusive.\nReturns the location of the first match according to the …\nReturns an iterator of non-overlapping matches, using the …\nReturns the location of the first overlapping match in the …\nReturns an iterator of overlapping matches. Stated …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nDecode this value from the bytes given using the native …\nDecode this value from the bytes given using the native …\nCreate a new value from a <code>u32</code> without checking whether the …\nReturn the anchored mode for this search configuration.\nReturn whether this search should execute in “earliest”…\nReturn the span as a range for this search configuration.\nReturn the span for this search configuration.\nReturn a borrow of the underlying haystack as a slice of …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a new “invalid anchored search” error. This …\nCreate a new “invalid unanchored search” error. This …\nReturns true if and only if this anchor mode corresponds …\nReturn true if this input has been exhausted, which in …\nReturns true when this span is empty. That is, when …\nReturns true when the span in this match is empty.\nReturns true if and only if this automaton matches the …\nReturns the kind of the Aho-Corasick automaton used by …\nChoose the type of underlying automaton to use.\nReturns a reference to the underlying error kind.\nReturns the length of this span.\nReturns the length of this match.\nReturns the match kind used by this automaton.\nSet the desired match semantics.\nReturns the length of the longest pattern matched by this …\nReturns the approximate total amount of heap used by this …\nReturns the length of the shortest pattern matched by this …\nLike <code>new</code>, but panics if the given value is not valid.\nCreate a new match from a pattern ID and a byte offset …\nCreate a new Aho-Corasick automaton using the default …\nCreate a new builder for configuring an Aho-Corasick …\nCreate a new error value with the given kind.\nCreate a new value that is represented by a “small index.…\nCreate a new search configuration for the given haystack.\nCreate a new match from a pattern ID and a span.\nCreate a new value without checking whether the given …\nProvides direct access to NFA implementations of …\nReturns a new span with <code>offset</code> added to this span’s <code>start</code>…\nReturns a new match with <code>offset</code> added to its span’s <code>start</code>…\nReturns one more than this value as a usize.\nProvides packed multiple substring search, principally for …\nReturns the ID of the pattern that matched.\nReturn the total number of patterns matched by this …\nEnable heuristic prefilter optimizations.\nLike <code>Input::span</code>, but accepts any range instead.\nReturns this span as a range.\nReturns the match span as a range.\nReplace all matches with a corresponding value in the …\nReplace all matches using raw bytes with a corresponding …\nReplace all matches using a closure called on each match. …\nReplace all matches using raw bytes with a closure called …\nSet the anchor mode of a search.\nSet whether the search should execute in “earliest” …\nSet the ending offset for the span for this search …\nSet the span for this search configuration given any range.\nSet the span for this search configuration.\nSet the starting offset for the span for this search …\nSet the span for this search.\nReturns the span for this match.\nReturn the start position of this search.\nThe starting position of the match.\nThe start offset of the span, inclusive.\nReturns the type of starting search configuration …\nSets the starting state configuration for the automaton.\nReturns an iterator of non-overlapping matches in the given\nReturn the underlying integer as raw bytes in native endian\nReturns the location of the first match according to the …\nReturns an iterator of non-overlapping matches, using the …\nReturns the location of the first overlapping match in the …\nReturns an iterator of overlapping matches.\nReplace all matches with a corresponding value in the …\nReplace all matches using raw bytes with a corresponding …\nReplace all matches using a closure called on each match. …\nReplace all matches using raw bytes with a closure called …\nReturns an iterator of non-overlapping matches in the given\nSearch for and replace all matches of this automaton in …\nSearch the given reader and replace all matches of this …\nCreate a new “unsupported empty pattern” error. This …\nCreate a new “unsupported overlapping search” error. …\nCreate a new “unsupported stream search” error. This …\nThe match semantics for the automaton that was used.\nThe match semantics for the automaton that was used.\nA trait that abstracts over Aho-Corasick automata.\nA candidate is the result of running a prefilter on a …\nAn iterator of non-overlapping matches in a particular …\nAn iterator of overlapping matches in a particular …\nThe total number of values that can be represented.\nThe maximum value.\nA confirmed match was found. Callers do not need to …\nNo match was found. Since false negatives are not …\nRepresents the current state of an overlapping search.\nThe start of a possible match was found. Callers must …\nA prefilter for accelerating a search.\nThe number of bytes that a single value uses in memory.\nThe identifier of a finite automaton state.\nThis error occurs when an ID could not be constructed.\nAn iterator that reports matches in a stream.\nThe zero value.\nReturn the internal value as a <code>i32</code>. This is guaranteed to …\nReturn the internal value as a <code>u32</code>. This is guaranteed to …\nReturn the internal value as a <code>u64</code>. This is guaranteed to …\nReturn the internal value as a <code>usize</code>. This is guaranteed to\nReturns the value that could not be converted to an ID.\nExecute a search in the haystack within the span given. If …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nDecode this value from the bytes given using the native …\nDecode this value from the bytes given using the native …\nCreate a new value from a <code>u32</code> without checking whether the …\nReturn the match result of the most recent search to …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConvert this candidate into an option. This is useful when …\nReturns true if the given ID represents a dead state.\nReturns true if the given ID represents a match state.\nReturns true if the given ID represents a “special” …\nReturns true if the given ID represents a start state.\nReturns the match semantics that this automaton was built …\nReturns the total number of matches for the given state ID.\nReturns the pattern ID for the match state given by <code>sid</code> at …\nReturns the length, in bytes, of the longest pattern in …\nReturns the heap memory usage, in bytes, used by this …\nReturns the length, in bytes, of the shortest pattern in …\nLike <code>new</code>, but panics if the given value is not valid.\nCreate a new value that is represented by a “small index.…\nCreate a new value without checking whether the given …\nPerforms a state transition from <code>sid</code> for <code>byte</code> and returns …\nReturns one more than this value as a usize.\nReturns the length of the pattern for the given ID.\nReturns the total number of patterns compiled into this …\nReturns a prefilter, if available, that can be used to …\nCreate a new overlapping state that begins at the start …\nReturns the starting state for the given anchor mode.\nReturn the underlying integer as raw bytes in native endian\nExecutes a non-overlapping search with this automaton …\nReturns an iterator of non-overlapping matches with this …\nExecutes a overlapping search with this automaton using …\nReturns an iterator of overlapping matches with this …\nReplaces all non-overlapping matches in <code>haystack</code> with …\nReplaces all non-overlapping matches in <code>haystack</code> with …\nReplaces all non-overlapping matches in <code>haystack</code> by …\nReplaces all non-overlapping matches in <code>haystack</code> by …\nReturns an iterator of non-overlapping matches with this …\nReplaces all non-overlapping matches in <code>rdr</code> with strings …\nReplaces all non-overlapping matches in <code>rdr</code> by calling the …\nA builder for configuring an Aho-Corasick DFA.\nA DFA implementation of Aho-Corasick.\nEnable ASCII-aware case insensitive matching.\nBuild an Aho-Corasick DFA from the given iterator of …\nBuild an Aho-Corasick DFA from the given noncontiguous NFA.\nA convenience method for returning a new Aho-Corasick DFA …\nA debug setting for whether to attempt to shrink the size …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nSet the desired match semantics.\nCreate a new Aho-Corasick DFA using the default …\nCreate a new builder for configuring an Aho-Corasick DFA.\nEnable heuristic prefilter optimizations.\nSets the starting state configuration for the automaton.\nProvides a contiguous NFA implementation of Aho-Corasick.\nProvides a noncontiguous NFA implementation of …\nA builder for configuring an Aho-Corasick contiguous NFA.\nA contiguous NFA implementation of Aho-Corasick.\nEnable ASCII-aware case insensitive matching.\nBuild an Aho-Corasick contiguous NFA from the given …\nBuild an Aho-Corasick contiguous NFA from the given …\nA convenience method for returning a new Aho-Corasick …\nA debug setting for whether to attempt to shrink the size …\nSet the limit on how many states use a dense …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nSet the desired match semantics.\nCreate a new Aho-Corasick contiguous NFA using the default …\nCreate a new builder for configuring an Aho-Corasick …\nEnable heuristic prefilter optimizations.\nA builder for configuring an Aho-Corasick noncontiguous …\nA noncontiguous NFA implementation of Aho-Corasick.\nEnable ASCII-aware case insensitive matching.\nBuild an Aho-Corasick noncontiguous NFA from the given …\nA convenience method for returning a new Aho-Corasick …\nSet the limit on how many states use a dense …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nSet the desired match semantics.\nCreate a new Aho-Corasick noncontiguous NFA using the …\nCreate a new builder for configuring an Aho-Corasick …\nEnable heuristic prefilter optimizations.\nA builder for constructing a packed searcher from a …\nThe configuration for a packed multiple pattern searcher.\nAn iterator over non-overlapping matches from a packed …\nUse leftmost-first match semantics, which reports leftmost …\nUse leftmost-longest match semantics, which reports …\nA knob for controlling the match semantics of a packed …\nA packed searcher for quickly finding occurrences of …\nAdd the given pattern to this set to match.\nBuild a searcher from the patterns added to this builder …\nCreate a packed builder from this configuration. The …\nA convenience function for calling <code>Builder::new()</code>.\nA convenience function for calling <code>Config::new()</code>.\nAdd the given iterator of patterns to this set to match.\nReturn the first occurrence of any of the patterns in this …\nReturn the first occurrence of any of the patterns in this …\nReturn an iterator of non-overlapping occurrences of the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nSet the match semantics for this configuration.\nReturns the match kind used by this packed searcher.\nReturns the approximate total amount of heap used by this …\nReturns the minimum length of a haystack that is required …\nCreate a new default configuration. A default …\nCreate a new builder for constructing a multi-pattern …\nA convenience function for constructing a searcher from an …")