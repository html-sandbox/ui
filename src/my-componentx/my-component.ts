import {
  LitElement,
  customElement,
  property,
  html,
  css,
  CSSResultArray,
  CSSResult,
  TemplateResult,
} from 'lit-element'

export interface MyComponentxData {
  key: number
  name: string
}

declare global {
  interface DocumentEventMap {
    'my-componentx-click': CustomEvent<MyComponentxData>
  }

  interface HTMLElementTagNameMap {
    'my-componentx': MyComponentxElement
  }
}

@customElement('my-componentx')
export class MyComponentxElement extends LitElement {
  @property({ type: Boolean, reflect: true }) selected: boolean = false
  @property({ type: Number }) key: number = 0
  @property({ type: String }) name: string = 'Oswee'

  onButtonClick(): void {
    const evt = new CustomEvent('my-componentx-click', {
      bubbles: true,
      composed: true,
      detail: {
        key: this.key,
        name: this.name,
      },
    })
    this.dispatchEvent(evt)
  }

  render(): TemplateResult {
    return html`
      <p>Hello from ${this.name}</p>
      <button @click=${this.onButtonClick}>Select</button>
    `
  }

  static get styles(): CSSResult | CSSResultArray {
    return css`
      :host {
        display: block;
        padding: 10px;
        border: 1px solid #999;
        border-radius: 6px;
      }

      :host([selected]) {
        background-color: #f0fff0;
        border-color: #339933;
      }
    `
  }
}
