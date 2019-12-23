import { Component, h } from '@stencil/core';

@Component({
  tag: 'child-component',
  styleUrl: 'child-component.css',
  shadow: true
})
export class ChildComponent {


  render() {
    return <div class='child-component'>
      <slot />
      I'm the child component
    </div>;
  }
}
