import {html, css, LitElement} from 'lit';
import {property} from 'lit/decorators.js';

// core element
export class Element extends LitElement {
   @property() text:String = '';

   // clear the listed elements
   clearOptions(fromDropdown:boolean = true) {
      let customOptions = null;

      // separe logic for the different parent elements
      if(fromDropdown) {
         customOptions = this.shadowRoot?.querySelector('.custom-options');
      } else {
         customOptions = this.closest('.custom-options');
      }

      while (customOptions?.firstChild) {
         customOptions.removeChild(customOptions.lastChild);
      }

      this.setOpened(false, fromDropdown);
   }

   // get opened status from data-attribute
   getOpened() {
      return this.shadowRoot?.querySelector('.custom-element').getAttribute('data-opened');
   }

   // set opened status in data-attribute
   setOpened(opened:boolean, fromDropdown:boolean = true) {
      if(fromDropdown) {
         this.shadowRoot?.querySelector('.custom-element').setAttribute('data-opened', opened.toString());
      } else {
         this.parentElement?.closest('.custom-element').setAttribute('data-opened', opened.toString());
      }
   }

   // main styles
   static styles = css`
      :host {
         user-select: none;
      }

      ::-webkit-scrollbar {
         width: 10px;
      }

      ::-webkit-scrollbar-track {
         background: #f1f1f1; 
      }

      ::-webkit-scrollbar-thumb {
         background: #888; 
      }

      ::-webkit-scrollbar-thumb:hover {
         background: #555; 
      }

      .main {
         padding: 4px 10px;
         background: #fafafa;
         font-family: 'Verdana';
         font-size: 14px;
         cursor: pointer;
         height: 18px;
         width: 120px;
      }

      .main div {
         float: left;
      }

      .main:after {
         clear: both;
      }

      .main:hover {
         background: #f5f5f5;
      }`;
}