import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'test-web-comp',
  styleUrl: 'test-web-comp.scss',
  shadow: true,
})
export class TestWebComp implements ComponentInterface {

  render() {
    return (
      <Host>
        <h1>Hey</h1>
      </Host>
    );
  }

}
