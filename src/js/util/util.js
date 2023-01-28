export function importImages(imageList) {
	let images = {};

	imageList.keys().forEach((item, index) => { images[item.replace('./', '')] = imageList(item); });

	return images
}

export const observeAnimateOnScroll = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		}
		// else { // Enable to have the effect repeat when scrolling up and down
		// 	entry.target.classList.remove('show');
		// }
	});
});