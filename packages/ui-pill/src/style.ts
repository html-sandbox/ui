import { css } from 'lit-element';

export default css`
    * {
        box-sizing: border-box;
    }
    :host([hidden]) {
        display: none;
    }
    :host {
        --height: 1rem;
        --background: #006AFF;
        --color: #FFFFFF;
        display: inline-block;
        width: auto;
        min-width: var(--height);
        height: var(--height);
        border-radius: calc(var(--height) / 2);
        background-color: var(--background);
        font-size: var(--height);
        cursor: default;
    }
    p {
        font-size: calc(var(--height) * 0.8);
        text-align: center;
        text-decoration: none;
        color: var(--color);
        margin: auto 0.5em;
    }`
