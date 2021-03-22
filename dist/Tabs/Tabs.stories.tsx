import React from 'react';
import Tabs from './Tabs';
import Tab from './Tab/index';

export default { 
  title: 'Tabs',
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'horizontal', 
          'vertical'
        ],
      }
    },
    onChange: {
      action: "onChange"
    }
  }
};

export const tabs = ({...rest}) => {
  const handler = (selectedTab: number) => {
    // eslint-disable-next-line no-console
    console.log('selected tab is: ', selectedTab);
  };
  return (
    <>
      <Tabs {...rest}>
        <Tab title="Title 1" subTitle="Subtitle 1">
          <div>This is the body of the Tab</div>
        </Tab>
        <Tab title="Title 2">
          <div>This is the body of the Tab There is no subtitle</div>
        </Tab>
        <Tab className="abc">
          <div data-type="header">
            <div>Title</div>
            <div className="subTitle">SubTitle</div>
          </div>
          <div data-type="body">
            This is the body. Here Title and subtitles are not passed as props,
            you need to pass the as children to Tab component.
            <br />
            You need to pass own CSS for subtitle.
            <br />
            Dont forget to add attribute&nbsp;
            <strong>data-type</strong>
            &nbsp;with values:
            <ol>
              <li>
                header for header of the tab. This consists of title and
                subtitle both
              </li>
              <li>body for body of the tab</li>
            </ol>
          </div>
        </Tab>
      </Tabs>
    </>
  );
};

tabs.args = {
  type: 'horizontal'
}