export function selectTab(tabId) {
  return {
    type: "TAB_SELECTED",
    payload: tabId
  };
}

// showTabs('tabList','tabCreate','tabUpdate')
export function showTabs(...tabIds) {
  const tabsToShow = {};
  tabIds.forEach(tab => (tabsToShow[tab] = true));
  return {
    type: "TAB_SHOWED",
    payload: tabsToShow
  };
}
