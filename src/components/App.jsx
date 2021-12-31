import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

//1.Create a Entry component.
//2.Create props to replace hardcoded data.
//3(a).Import the imogipedia const.
//3(b).Map through the imojipedia array and render Entry components.
function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
