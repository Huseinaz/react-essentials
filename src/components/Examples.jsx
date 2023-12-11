import { useState } from 'react';

import TabButton from './TabButton.jsx';
import Section from './Section.jsx';
import { EXAMPLES } from '../data.js';


export default function Examples() {
  const [ selectedTopic, setSelectedTopic ] = useState();

  function handleSelect(selectedButton) {
    // selectedButton = 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic); it will show the old state
  }

  let tabContent = <p>Please select a topic.</p>;

  if(selectedTopic) {
    tabContent = (
      <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>
    );
  }

    return (
        <Section title="Exaples" id="examples">
        <menu>
          <TabButton isSlected={selectedTopic === "components"} onClick={() => handleSelect('components')}>Components</TabButton>
          <TabButton isSlected={selectedTopic === "jsx"} onClick={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton isSlected={selectedTopic === "props"} onClick={() => handleSelect('props')}>Props</TabButton>
          <TabButton isSlected={selectedTopic === "state"} onClick={() => handleSelect('state')}>State</TabButton>
        </menu>
        {tabContent}
      </Section>
    )
}