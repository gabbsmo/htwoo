import * as React from "react";
import { IHOOStandardProps } from "../../Common.model";
import HOOPivotButton from "../../../components/atoms/HOOPivotButton/HOOPivotButton";
import HOOIconOverflow from "../../../HOOIconOverflow";
import { IOverflowResizer, OverflowResizer } from "../../common/OverflowObserver";
import { getRandomString } from "../../common/Common";

export interface IHOOPivotItem {
  key: number | string;
  text: string;
}

export interface IHOOPivotBarProps extends IHOOStandardProps {
  /**
   * Key of currently selected Pivot Item
  */
  selectedKey: number | string;
  /**
   * Menu items to render in Pivot Bar
  */
  pivotItems: IHOOPivotItem[];
  /**
   * Pivot Item click event handler.
   */
  onClick: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>, key: number | string) => void;
  /**
   * (Optional) Overflow enabled - default false
   */
  hasOverflow?: boolean;
  /**
  * (Optional) HTMLButtonElement attributes that will be applied to all Pivot Buttons.
  * Class names will be appended to the end of the default class string - hoo-button-pivot {rootElementAttributes.class}
 */
  pivotButtonAttributes?: React.HTMLAttributes<HTMLButtonElement>;
  /**
   * (Optional) HTMLDivElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-pivotbar {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLDivElement>;
}

export interface IHOOPivotBarState {
  showOverflow: boolean;
}

export class HOOPivotBarState implements IHOOPivotBarState {
  constructor(
    public showOverflow: boolean = false
  ) { }
}

export default class HOOPivotBar extends React.PureComponent<IHOOPivotBarProps, IHOOPivotBarState> {
  private LOG_SOURCE: string = "💦HOOPivotBar";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-pivotbar";
  private _overflowResizer: IOverflowResizer;
  private _overflowContainer: React.RefObject<HTMLDivElement>;

  constructor(props: IHOOPivotBarProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOPivotBar";
    props.hasOverflow = props.hasOverflow || false;
    this.state = new HOOPivotBarState();
    this._overflowResizer = new OverflowResizer(`HOOPivotBarOR_${getRandomString(10)}`);
    this._overflowContainer = React.createRef<HTMLDivElement>();
  }

  public componentDidMount(): void {
    try {
      if (this.props.hasOverflow && this._overflowResizer != null && this._overflowContainer.current != null) {
        this._overflowResizer.ObserveElement = this._overflowContainer.current;
      }
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (componentDidMount) - ${err}`);
    }
  }

  private _renderPivotItems() {
    let retVal = null;
    try {
      if (this.props.pivotItems) {
        retVal = this.props.pivotItems.map((pi, index) => {
          const isSelected = (pi.key === this.props.selectedKey);
          return (
            <HOOPivotButton reactKey={pi.key} label={pi.text} isActive={isSelected} onClick={(ev) => { this.props.onClick(ev, pi.key); }} rootElementAttributes={this.props.pivotButtonAttributes} />
          );
        });
      }
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_renderPivotItems) - ${err}`);
    }
    return retVal;
  }

  public render(): React.ReactElement<IHOOPivotBarProps> {
    try {
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      let className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      if (this.props.hasOverflow) {
        className += " has-overflow";
      }
      return (
        <div {...this._rootProps} {...this.props.rootElementAttributes} className={className}>
          {!this.props.hasOverflow &&
            this._renderPivotItems()
          }
          {this.props.hasOverflow &&
            <div ref={this._overflowContainer} className={`hoo-overflow ${(this.state.showOverflow ? "show-flyout" : "")}`}>
              {this._renderPivotItems()}
              <HOOIconOverflow overflowClicked={() => { this.setState({ showOverflow: !this.state.showOverflow }); }} />
            </div>
          }
        </div>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}
