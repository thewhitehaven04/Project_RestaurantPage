import style from './shadowed.css';

/** Applies a shadow effect to the element */
function SoftShadowed(element) {
  const _SOFT_SHADOW_CLASS = 'soft-shadow';

  const wrap = function () {
    element.classList.add(_SOFT_SHADOW_CLASS);
    return element;
  };

  return { wrap };
}

export { SoftShadowed };
