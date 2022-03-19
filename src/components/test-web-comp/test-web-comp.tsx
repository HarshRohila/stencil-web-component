import { Component, ComponentInterface, Element, h } from '@stencil/core';

@Component({
  tag: 'test-web-comp',
  styleUrl: 'test-web-comp.scss',
  shadow: true,
})
export class TestWebComp implements ComponentInterface {
  @Element() private element: HTMLElement

  render() {
    return (
      Array.from(this.element.children)
        .map((childElement) => {
          childElement.setAttribute('variant', 'grouped')
          return <div innerHTML={childElement.outerHTML}></div>
        })
    )
  }

}
