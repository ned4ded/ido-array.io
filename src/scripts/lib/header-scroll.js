function runHeaderScroll(scroll) {
  const $header = $( '#header' );
  const className = 'header--behavior--sticky';

  function triggerClass(ev) {
    const { top } = this.getMeta();

    if(top > 0 && !$header.hasClass(className)) {
      $header.addClass(className);
    } else if(top === 0) {
      $header.removeClass(className);
    }

    return
  }

  triggerClass.bind(scroll)(null);

  scroll.setCallback(triggerClass);
}
