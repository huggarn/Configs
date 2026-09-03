==UserScript==
// @name         Universal Faucet - Add Slots Link
// @namespace    http://tampermonkey.net
// @version      1.2
// @description  Adds a dynamic link to Egyptian Slots on any faucet page.
// @author       You
// @match        *://*/faucet.php*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 1. Try common main layout wrappers used in faucet themes
    const centerContainer = document.querySelector('.card-body, .container, main, #main-content');

    if (centerContainer) {
        // 2. Build the link container
        const linkWrapper = document.createElement('div');
        linkWrapper.style.margin = '20px auto';
        linkWrapper.style.textAlign = 'center';
        linkWrapper.style.padding = '10px';

        // 3. Configure the link styling to stand out
        const slotsLink = document.createElement('a');
        
        // DYNAMIC CHANGE: Automatically gets the current website's domain name
        slotsLink.href = window.location.origin + '/egyptian_slots.php';
        
        slotsLink.textContent = '🎰 Play Egyptian Slots 🎰';
        slotsLink.style.fontSize = '18px';
        slotsLink.style.fontWeight = 'bold';
        slotsLink.style.color = '#007bff';
        slotsLink.style.textDecoration = 'none';
        slotsLink.style.display = 'inline-block';
        
        // Add hover properties
        slotsLink.onmouseover = () => slotsLink.style.textDecoration = 'underline';
        slotsLink.onmouseout = () => slotsLink.style.textDecoration = 'none';

        linkWrapper.appendChild(slotsLink);

        // 4. Inject into the center of the main layout block
        centerContainer.appendChild(linkWrapper);
    }
})();