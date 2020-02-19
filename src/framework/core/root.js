export class Root {
  constructor(config) {
    this.components = config.components;
  }

  start() {
    this.initComponents();
  }

  initComponents() {
    this.components.forEach(component => component.render());
  }
}