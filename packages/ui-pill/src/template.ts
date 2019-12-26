import { html } from 'lit-element';
import { UiPill } from './index';

export default function template(this: UiPill) {
	return html`
		<p>${this.pill.text}</p>
	`;
}
