import * as React from "react";
import { Logger, LogLevel } from "@pnp/logging";
import isEqual from "lodash-es/isEqual";
import { IHOOStandardProps } from "../../Common.model";

export interface IHOOSplashCardHeaderProps extends IHOOStandardProps {
  /**
   * (Optional) Image source, if omitted HTML children will be rended
  */
  imageSource?: string;
  /**
  * (Optional) ACCESSIBILITY: Image alt, include when using imageSource
 */
  imageAlt?: string;
  /**
   * (Optional) HTMLElement attributes that will be applied to the root element of the component.
   * Class names will be appended to the end of the default class string - hoo-splashcard-header {rootElementAttributes.class}
  */
  rootElementAttributes?: React.HTMLAttributes<HTMLElement>;
}

export interface IHOOSplashCardHeaderState {
}

export class HOOSplashCardHeaderState implements IHOOSplashCardHeaderState {
  constructor() { }
}

export default class HOOSplashCardHeader extends React.Component<IHOOSplashCardHeaderProps, IHOOSplashCardHeaderState> {
  private LOG_SOURCE: string = "💦HOOSplashCardHeader";
  private _componentClass: string = "hoo-splashcard-header";

  constructor(props: IHOOSplashCardHeaderProps) {
    super(props);
    this.LOG_SOURCE = props.dataComponent || "💦HOOSplashCardHeader";
    this.state = new HOOSplashCardHeaderState();
  }

  public shouldComponentUpdate(nextProps: Readonly<IHOOSplashCardHeaderProps>, nextState: Readonly<IHOOSplashCardHeaderState>) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    return true;
  }

  public render(): React.ReactElement<IHOOSplashCardHeaderProps> {
    try {
      const className = (this.props.rootElementAttributes?.className) ? `${this._componentClass} ${this.props.rootElementAttributes?.className}` : this._componentClass;
      return (
        <header data-component={this.LOG_SOURCE} {...this.props.rootElementAttributes} className={className} role="presentation">
          {this.props.imageSource &&
            <img src={this.props.imageSource} alt={this.props.imageAlt} className="hoo-splashcard-img" />
          }
          {!this.props.imageSource &&
            this.props.children
          }
        </header>
      );
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (render) - ${err}`, LogLevel.Error);
      return null;
    }
  }
}