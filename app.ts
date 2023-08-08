import {CustomDropdown} from './src/component/CustomDropdown';
import {CustomOption} from './src/component/CustomOption'

customElements.define('custom-dropdown', CustomDropdown);
customElements.define('custom-option', CustomOption);

function handleClick(event: PointerEvent) {

   if(event.target?.tagName.toLowerCase() !== 'custom-dropdown') {
      document.body.querySelector('custom-dropdown')?.clearOptions();
   }
}
 
 document.body.addEventListener('click', (event) => handleClick(event));