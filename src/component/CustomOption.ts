import {Element} from '../core/Element';

class CustomOption extends Element {
    @property() dataValue:String = '';
    
    // rendering the option
    render() {
        return html`
        <div class="main" data-value="${this.dataValue}" @click=${this.onClick}>
            ${this.dataValue}
        </div>`;
    }
    
    // onclick event where we change the value of dropdown and remove all options
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
    
    // styles
    static styles = css`${this.styles}
        .main {
           border-top: 1px solid #ddd;
        }
    `;
  }