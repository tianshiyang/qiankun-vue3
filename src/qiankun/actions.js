function emptyAction() {
  // 提示当前使用的是空 Action
  console.warn("Current execute action is empty!");
}

class Actions {
  // 默认值为空 Action
  actions = {
      onGlobalStateChange: emptyAction,
      setGlobalState: emptyAction,
      offGlobalStateChange: emptyAction
  };

  /**
   * 设置 actions
   */
  setActions(actions, parentRouter) {
    this.actions = actions
    this.parentRouter = parentRouter
  }

  /**
   * 映射
   */
  onGlobalStateChange() {
      return this.actions.onGlobalStateChange(...arguments);
  }
  /**
   * 映射
   */
  setGlobalState() {
      return this.actions.setGlobalState(...arguments);
  }

  offGlobalStateChange() {
    return this.actions.offGlobalStateChange(...arguments)
  }

  parentRouter() {
    return this.parentRouter
  }
}

const actions = new Actions();

export default actions;