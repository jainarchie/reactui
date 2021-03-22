import React from 'react';
import '../style/index';

export interface ITabProps {
  title?: string;
  subTitle?: string;
  className?: string;
  children: any;
}

const Tab = (props: ITabProps) => {
  const { children } = props;
  return <div className="tabs-content">{children}</div>;
};

export default Tab;
