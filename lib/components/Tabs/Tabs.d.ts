/// <reference types="react" />
import './style';
export interface ITabsProps {
    children: any | any[];
    onChange?: Function;
    className?: string;
    type?: 'horizontal' | 'vertical';
}
declare const Tabs: (props: ITabsProps) => JSX.Element;
export default Tabs;
//# sourceMappingURL=Tabs.d.ts.map