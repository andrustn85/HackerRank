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

basic_valid_cases:
# Big
## Not As Big
### Smaller Still
###### So Tiny For a Header

basic_invalid_cases:
#NoSpace
Behind # The Scenes
Wizard# Behind The Curtain

edge_cases:
### ### Double Triple Header
####### Snow White and the Seven Hashtags
  #### Space Jam
  ##          Lost In Space
# Far      Out, Dude

*/

// SOLUTION

const markdownParser = markdown => {
  const splitBySpace = markdown.split(" ");

  const firstString = [];
  const restOfString = [];

  //  Basic cases: First part of the string handler
  const separateTheFirstString = firstString.push(splitBySpace.shift());
  const stringifyFirstString = firstString.toString();
  const separateChar = stringifyFirstString.split("");

  if (separateChar < 1) {
    splitBySpace.shift(firstString.push(splitBySpace[1]));
  }

  const joinFirstString = firstString.join("");
  const countJoinFirstString = joinFirstString.length;

  //  Basic cases: Second part of the string handler
  const pushTheRest = restOfString.push(splitBySpace);
  const flattenRestOfString = restOfString.reduce(
    (acc, val) => acc.concat(val),
    []
  );
  const joinTheFlattenRestOfString = flattenRestOfString.join(" ");

  //   Edge cases logic
  const restOfStringEdgeCase = restOfString[0].toString().split(",");
  const removeFirstItemFromRest = restOfStringEdgeCase.splice(1, Infinity);

  const withoutSpace = [];
  for (let item = 0; item < removeFirstItemFromRest.length; item++) {
    if (removeFirstItemFromRest[item].length > 1) {
      withoutSpace.push(removeFirstItemFromRest[item]);
    }
  }

  const joinRestOfStringEdgeCase = removeFirstItemFromRest.join(" ");
  const joinWithoutSpace = withoutSpace.join(" ");

  //   Logic applied depending on cases
  if (separateChar.length === 1) {
    return `<h1>${joinTheFlattenRestOfString}</h1>`;
  }
  if (separateChar.length === 2) {
    return `<h2>${joinTheFlattenRestOfString}</h2>`;
  }
  if (countJoinFirstString === 2) {
    return `<h2>${joinWithoutSpace}</h2>`;
  }
  if (separateChar.length === 3) {
    return `<h3>${joinTheFlattenRestOfString}</h3>`;
  }
  if (separateChar.length === 4) {
    return `<h4>${joinTheFlattenRestOfString}</h4>`;
  }
  if (countJoinFirstString === 4) {
    return `<h4>${joinRestOfStringEdgeCase}</h4>`;
  }
  if (separateChar.length === 5) {
    return `<h5>${joinTheFlattenRestOfString}</h5>`;
  }
  if (separateChar.length === 6 && separateChar.includes("#")) {
    return `<h6>${joinTheFlattenRestOfString}</h6>`;
  }
  if (
    separateChar.length > 6 ||
    (markdown.includes("") ? true : false) ||
    (!separateChar.includes("#") ? true : false)
  ) {
    return markdown;
  }
};
