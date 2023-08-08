import {Element} from '../core/Element';

class CustomDropdown extends Element {
    @property() options:Array<String> = ["Angola","Anguilla","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Botswana","Brazil","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Ecuador","Egypt","El Salvador","Finland","France","Gabon","Gambia","Georgia","Germany"];
    
    
    static styles = css`${this.styles}
        .custom-dropdown {
           height: 27px;
        }
        
        .main {
           border: 1px solid #ccc;
        }
        
        .label {
           width: 111px;
        }
        
        .dropdown-icon {
           width: 9px;
           color: #9a9a9a;
           font-size: 12px;
        }
        
        .custom-options {
           max-height: 88px;
           overflow-x: hidden;
           overflow-y: auto;
           width: 140px;
           border: 1px solid #ccc;
           border-top: 0;
        }
        
        .custom-options .option {
           border: 0 !important;
           color: #ff00ff !important;
        }`;
  
    render() {
      return html`
       <div class="custom-element" data-opened="false">
          <div class="custom-dropdown">
             <div class="main" @click=${this.onClick}>
                <div class="label">
                   ${this.text}
                </div>
                <div class="dropdown-icon">
                   &#8744;
                </div>
             </div>
          </div>
          <div class="custom-options">
  
          </div>
       </div>`;
    }
    
    onClick(event: Event) {
      if(this.getOpened() === 'true') {
         this.clearOptions();
         this.setOpened(false);
      } else {
         this.generateOptions();
         this.setOpened(true);
      }
    }
    
    generateOptions() {
      this.options.forEach((value, key) => {
        let customOption = document.createElement("custom-option");
        customOption.setAttribute('dataValue', value);
        
        this.shadowRoot?.querySelector('.custom-options').append(customOption);
      });
    }
  }