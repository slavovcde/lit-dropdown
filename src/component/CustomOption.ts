import {Element} from '../core/Element';

class CustomOption extends Element {
    @property() dataValue:String = 'asd';
    
    static styles = css`${this.styles}
        .main {
           border-top: 1px solid #ddd;
        }
  `;
    
    render() {
      return html`
          <div class="main" data-value="${this.dataValue}" @click=${this.onClick}>
             ${this.dataValue}
          </div>`;
    }
    
    onClick(event: Event) {
      let option = event.target?.getAttribute('data-value');
      
      let customElementDiv = this.closest('.custom-element');
      let labelDiv = customElementDiv?.querySelector('.label');
      
      if(labelDiv) {
         labelDiv.innerHTML = option;
         this.setOpened(false, false);
         this.clearOptions(false);
      }
    }
  }