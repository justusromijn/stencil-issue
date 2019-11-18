import { Component, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'child-component',
  styleUrl: 'child-component.css',
  shadow: true
})
export class ChildComponent {

  @Event() private inputStateChanged: EventEmitter;

  componentDidLoad(): void {
    this.inputStateChanged.emit({connected: true})
  }

  componentDidUnload(): void {
    console.log('child component did unload');
    this.inputStateChanged.emit({connected: true});
  }

  render() {
    return <div class='child-component'>
      I'm the child component
    </div>;
  }
}
