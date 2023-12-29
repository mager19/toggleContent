/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */
const titles = document.querySelectorAll('.toggleItem__header .plusIcon');

if (titles) {
	titles.forEach(title => {
		title.addEventListener('click', function () {
			const clickedItem = this.parentElement.parentElement;

			// Remove 'itemActive' class and set '+' icon for all items
			titles.forEach((otherTitle) => {
				const otherItem = otherTitle.parentElement.parentElement;
				if (otherItem) {
					otherItem.classList.remove('itemActive');

					const svg = otherItem.querySelector('.toggleItem__header svg');
					if (svg) {
						svg.innerHTML = `<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M12 6V18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>`;
					}
				}
			});

			if (clickedItem) {
				clickedItem.classList.add('itemActive');

				const svg = clickedItem.querySelector('.toggleItem__header svg');
				if (svg) {
					svg.innerHTML = `<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.00001 11.25L18 11.25L18 12.75L6.00001 12.75L6.00001 11.25Z" fill="currentColor"></path> </g>`;
				}
			}
		});
	});
}

