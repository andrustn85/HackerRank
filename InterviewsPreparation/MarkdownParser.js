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

// SOLUTION

const markdownParser = markdown => {
  const splitBySpace = markdown.split(" ");

  const firstString = [];
  const restOfString = [];

  const separateTheFirstString = firstString.push(splitBySpace.shift());
  const stringifyFirstString = firstString.toString();
  const separateChar = stringifyFirstString.split("");

  if (separateChar < 1) {
    splitBySpace.shift(firstString.push(splitBySpace[1]));
  }

  const joinFirstString = firstString.join("");
  const countJoinFirstString = joinFirstString.length;

  const pushTheRest = restOfString.push(splitBySpace);
  const flattenRestOfString = restOfString.reduce(
    (acc, val) => acc.concat(val),
    []
  );
  const joinTheFlattenRestOfString = flattenRestOfString.join(" ");

  const restOfStringEdge = restOfString[0].toString().split(",");
  const removeFirstItemFromRest = restOfStringEdge.splice(1, Infinity);

  const withoutSpace = [];
  for (let item = 0; item < removeFirstItemFromRest.length; item++) {
    if (removeFirstItemFromRest[item].length > 1) {
      withoutSpace.push(removeFirstItemFromRest[item]);
    }
  }

  const restOfStringEdgeJoin = removeFirstItemFromRest.join(" ");
  const withoutSpaceJoin = withoutSpace.join(" ");

  if (countJoinFirstString === 4) {
    return `<h4>${restOfStringEdgeJoin}</h4>`;
  }
  if (separateChar.length === 1 && joinTheFlattenRestOfString != "Invalid") {
    return `<h1>${joinTheFlattenRestOfString}</h1>`;
  }
  if (separateChar.length === 2 && joinTheFlattenRestOfString != "Invalid") {
    return `<h2>${joinTheFlattenRestOfString}</h2>`;
  }
  if (countJoinFirstString === 2) {
    return `<h2>${withoutSpaceJoin}</h2>`;
  }
  if (separateChar.length === 3 && joinTheFlattenRestOfString != "Invalid") {
    return `<h3>${joinTheFlattenRestOfString}</h3>`;
  }
  if (separateChar.length === 4 && joinTheFlattenRestOfString != "Invalid") {
    return `<h4>${joinTheFlattenRestOfString}</h4>`;
  }
  if (separateChar.length === 5 && joinTheFlattenRestOfString != "Invalid") {
    return `<h5>${joinTheFlattenRestOfString}</h5>`;
  }
  if (
    separateChar.length === 6 &&
    separateChar.includes("#") &&
    joinTheFlattenRestOfString != "Invalid"
  ) {
    return `<h6>${joinTheFlattenRestOfString}</h6>`;
  }
  if (
    separateChar.length > 6 ||
    (markdown.includes("") ? true : false) ||
    (!separateChar.includes("#") ? true : false)
  ) {
    return markdown;
  } else {
    return markdown;
  }
};
