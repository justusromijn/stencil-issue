import { Component, h, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'parent-component',
  shadow: true,
  styleUrl: 'parent-component.css'
})
export class ParentComponent {
  @Prop() public event: boolean = false;

  @Listen('inputStateChanged')
  protected onFormElementStateChange(event: CustomEvent): void {
    console.log('inputStateChanged in parent form', event);
    this.event = event.detail.connected;
  }

  render() {
    return <div class='parent-component'>
      <p>Hi, I'm the parent component.</p>
      <slot />
      <p>{this.event && 'child component is connected'}</p>
    </div>;
  }
}
