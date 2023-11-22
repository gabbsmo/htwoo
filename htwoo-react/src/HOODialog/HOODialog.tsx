import * as React from "react";
import { IHOOStandardProps } from "../common/IHOOStandardProps";
//import { isEqual } from "../common/Common";

export enum HOODialogType {
  "Standard",
  "StandardError",
  "StandardSuccess",
  "StandardWarning",
  "SidebarLeft",
  "SidebarRight",
  "Topbar",
  "Bottombar"
}

export interface IHOODialogProps extends IHOOStandardProps {
  /**
   * Is dialog visible
  */
  type: HOODialogType;
  /**
   * Is dialog visible
  */
  visible: boolean;  
  /**
   * Change event handler returns the new field value based on the selected items key
  */
  changeVisibility: () => void;
  /**
   * Dialog height (e.g. "30vh" or "30%" or "30px")
  */
  height?: string;
  /**
   * Dialog width (e.g. "40vw" or "40%" or "40px")
  */
  width?: string;
  /**
   * (Optional) HTMLDialogElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-mdldialog-outer {rootElementAttributes.class}
  */
  rootElementAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;
}

export interface IHOODialogState {
}

export class HOODialogState implements IHOODialogState {
  constructor() { }
}

export default class HOODialog extends React.Component<IHOODialogProps, IHOODialogState> {
  private LOG_SOURCE: string = "💦HOODialog";
  private _rootProps = { "data-component": this.LOG_SOURCE };
  private _componentClass: string = "hoo-dlg";
  private _modal: boolean = false;
  private _updateShow: boolean = false;
  private _dialogElement: React.RefObject<HTMLDialogElement>;

  constructor(props: IHOODialogProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOODialog";
    switch (props.type) {
      case HOODialogType.Standard:
        this._componentClass = `${this._componentClass} statusbar`;
        break;
      case HOODialogType.StandardError:
        this._componentClass = `${this._componentClass} statusbar error`;
        break;
      case HOODialogType.StandardSuccess:
        this._componentClass = `${this._componentClass} statusbar success`;
        break;
      case HOODialogType.StandardWarning:
        this._componentClass = `${this._componentClass} statusbar warning`;
        break;
      case HOODialogType.SidebarLeft:
        this._componentClass = `${this._componentClass} sidebar left`;
        this._modal = true;
        break;
      case HOODialogType.SidebarRight:
        this._componentClass = `${this._componentClass} sidebar right`;
        this._modal = true;
        break;
      case HOODialogType.Topbar:
        this._componentClass = `${this._componentClass} topbar`;
        this._modal = true;
        break;
      case HOODialogType.Bottombar:
        this._componentClass = `${this._componentClass} bottombar`;
        this._modal = true;
        break;
    }
    this.state = new HOODialogState();
    this._dialogElement = React.createRef<HTMLDialogElement>();
  }

  public shouldComponentUpdate(nextProps: Readonly<IHOODialogProps>, nextState: Readonly<IHOODialogState>) {
    // if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
    //   return false;
    if (nextProps.visible != this.props.visible) { this._updateShow = true; }
    return true;
  }

  public componentDidUpdate(prevProps: Readonly<IHOODialogProps>, prevState: Readonly<IHOODialogState>, snapshot?: any): void {
    try {
      if (this._updateShow) {
        this._updateShow = false;
        if (this._dialogElement != null && this._dialogElement.current != null) {
          if (this.props.visible && this._modal) {
            this._dialogElement.current.showModal();
          } else if (this.props.visible && !this._modal) {
            this._dialogElement.current.show();
          } else {
            this._dialogElement.current.close();
          }
        }
      }
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (componentDidUpdate) - ${err}`);
    }
  }

  private _backdropClick  = (event: React.MouseEvent<HTMLDialogElement, MouseEvent>): void => {
    try {
      if (this._dialogElement != null && this._dialogElement.current != null) {
        const rect = this._dialogElement.current.getBoundingClientRect();
        const isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
        
        if (!isInDialog && event.target === this._dialogElement.current) {
          this.props.changeVisibility();
        }
      }
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_backdropClick) - ${err}`);
    }
  }

  private _handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>): void => {
    try {
      if (event.key === "Escape") {
        this.props.changeVisibility();
      }
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (_handleKeyDown) - ${err}`);
    }
  }

  public render(): React.ReactElement<IHOODialogProps> {
    try {
      const events: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDialogElement>, HTMLDialogElement> = {};
      if (this.props.reactKey) { this._rootProps["key"] = this.props.reactKey }
      let className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      let styleBlock = {} as React.CSSProperties;
      if (this.props.width !== undefined) { styleBlock["--hoo-dlg-width"] = this.props.width; }
      if (this.props.height !== undefined) { styleBlock["--hoo-dlg-height"] = this.props.height; }
      events.onKeyDown = this._handleKeyDown;
      if (this._modal) { events.onClick = this._backdropClick; }
      return (
        <dialog ref={this._dialogElement} {...this._rootProps} {...this.props.rootElementAttributes} className={className} style={styleBlock} {...events}>
          {this.props.children}
        </dialog>
      );
    } catch (err) {
      console.error(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}