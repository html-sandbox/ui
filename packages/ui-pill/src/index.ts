import { LitElement, customElement, property } from 'lit-element';
import GlobalStyle from '../../assets/global-style';
import Style from './style';
import template from './template';
import { Pill, Styling } from './models';

@customElement('ui-pill')
export class UiPill extends LitElement {
    public static styles = [GlobalStyle, Style];
    // public static get styles() {
    //   return [
    //     GlobalStyle,
    //     Style
    //   ];
    // }
  
    @property({ type: Object })
    public pill: Pill = {
      text: 'Not set',
    };

    @property({ type: Object})
    public styling: Styling = {
      height: '1rem',
      background: '#006AFF',
      color: '#FFFFFF',
    };

    protected render() {
      return template.call(this);
    }
    
  // protected updated(changed) {
	// 	if (changed.has('background')) this.style.setProperty('--background', this.background);
	// 	if (changed.has('color')) this.style.setProperty('--color', this.color);
	// 	if (changed.has('height')) this.style.setProperty('--height', this.height);
	// }
}

declare global {
	interface HTMLElementTagNameMap {
	  'ui-pill': UiPill;
	}
}
