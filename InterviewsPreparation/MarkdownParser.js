/*

INSTRUCTIONS

Background
Markdown is a formatting syntax used by many documents (these instructions, for example!) because of it's plain-text simplicity and it's ability to be translated directly into HTML.

Task
Let's write a simple markdown parser function that will take in a single line of markdown and be translated into the appropriate HTML. To keep it simple, we'll support only one feature of markdown in atx syntax: headers.

Headers are designated by (1-6) hashes followed by a space, followed by text. The number of hashes determines the header level of the HTML output.

Specifications
markdownParser(markdown)
Transforms given string into correct header form

Parameters
markdown: String - String to be changed into markdown format

Return Value
String - Formatted string

Examples
markdown	Return Value
"# Header"	"<h1>Header</h1>"
"## Header"	"<h2>Header</h2>"
"###### Header"	"<h6>Header</h6>"

Additional Rules
Header content should only come after the initial hashtag(s) plus a space character.

Invalid headers should just be returned as the markdown that was recieved, no translation necessary.

Spaces before and after both the header content and the hashtag(s) should be ignored in the resulting output.

Sample tests:
let assert = require("chai").assert;
describe('Markdown Headers', function() {
  it('basic_valid_cases', function() {
    assert.deepEqual(markdownParser("# header"), "<h1>header</h1>");
    assert.deepEqual(markdownParser("## smaller header"), "<h2>smaller header</h2>");
  });
  it('basic_invalid_cases', function() {
    assert.deepEqual(markdownParser("#Invalid"), "#Invalid");
  });
});

*/
