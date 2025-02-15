function tabs (tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
	const tabs = document.querySelectorAll(tabsSelector),
				tabsContent = document.querySelectorAll(tabsContentSelector),
				tabsParent = document.querySelector(tabsParentSelector);

	function hideTabContent () {
		tabsContent.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show');
		}); 

		tabs.forEach(item => {
			item.classList.remove(activeClass);
		});
	};

	function showContent (i = 0) {
		tabsContent[i].classList.add('show', 'fade');
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add(activeClass);
	}

	hideTabContent();
	showContent();

	tabsParent.addEventListener('click', (event) => {
		const target = event.target;
		if (target && target.classList.contains(tabsSelector.slice(1))) {
			tabs.forEach((item, i) => {
				if(target == item) {
					hideTabContent();
					showContent(i);
				}
			});
		}
	});
}

export default tabs;