export function clickOutside(
	node: HTMLElement,
	params: { trigger?: HTMLElement; handler: () => void }
): { destroy: () => void } {
	function onClick(event: MouseEvent) {
		if (
			node &&
			!node.contains(event.target as HTMLElement) &&
			!params.trigger?.contains(event.target as HTMLElement)
		) {
			params.handler();
		}
	}

	document.addEventListener('click', onClick, true);
	return {
		destroy() {
			document.removeEventListener('click', onClick, true);
		}
	};
}