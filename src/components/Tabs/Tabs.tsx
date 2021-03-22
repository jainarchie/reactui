import React, {useState} from 'react';
import './style';

export interface ITabsProps {
  children: any | any[];
  onChange?: Function;
  className?: string;
  type?: 'horizontal' | 'vertical';
}

const findHeader = (vNode: any) => {
  return vNode.props.children.find(
    // @ts-ignore
    (child) => child.props['data-type'] === 'header'
  );
};

const Tabs = (props: ITabsProps) => {
  const [selected, setSelected] = useState(0);
  const {
    children,
    onChange = () => {},
    className,
    type = 'horizontal',
  } = props;
  const TAB_TYPE = 'tab-type--';

  const classes = `${className} ${TAB_TYPE + type}`;

  const childArray = children;
  const clickHandler = (i: number) => {
    setSelected(i);
    onChange(i);
  };

  const getBody = (c: any) => {
    if (c.props.title) {
      return c;
    }
    return c.props.children.find(
      (content: any) => content.props['data-type'] === 'body'
    );
  };

  return (
    <div className={`${classes} tabsWrapper`}>
      <ul className="tabs">
        {childArray.map((child: any, i: number) => (
          <li
            className={`tab-header ${i === selected ? 'active' : ''} ${
              child.props.className
            }`}
            onClick={() => clickHandler(i)}
            role="presentation"
          >
            {child.props && child.props.title ? (
              <div>
                {child.props.title}
                {child.props.subTitle ? (
                  <div className="subTitle">{child.props.subTitle}</div>
                ) : null}
              </div>
            ) : (
              findHeader(child)
            )}
          </li>
        ))}
      </ul>
      {childArray.map((child: any, i: number) => {
        return i === selected ? getBody(child) : null;
      })}
    </div>
  );
};

export default Tabs;
