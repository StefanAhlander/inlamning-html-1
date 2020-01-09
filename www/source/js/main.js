/*  Remove .preload class from elements. The .preload class is used
    to prevent CSS transforms fireing on page load. */
[].forEach.call(document.getElementsByClassName("preload"), function (element) {
  element.classList.remove("preload");
});

/*  Check if user agent is not IE or Edge. If so remove .ie class
    from body element to permit parallax scrolling effect. */
if (!/Edge|MSIE|Trident/i.test(navigator.userAgent))
  document.body.classList.remove("ie");