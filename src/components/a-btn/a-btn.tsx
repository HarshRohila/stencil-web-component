import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'a-btn',
  shadow: true,
})
export class ABtn implements ComponentInterface {

  render() {
    return (
      <Host>
        <button>some btn</button>
      </Host>
    );
  }

}
