import React, {Component} from 'react';
import { canvasStyles } from '.'

export interface PageProps { height: number; width: number; }

export class Page extends Component<PageProps, {}> {
  render() {

    return (
      <div>
      <canvas width={this.props.height} height={this.props.width} style={canvasStyles}></canvas>
      </div>
    )
  }
}
