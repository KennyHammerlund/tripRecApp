import React from "react";

export default (LargeCardBox = (props, recursive) => {
  const {
    children,
    title,
    size,
    secondaryText,
    className,
    customSize,
    style,
    padding,
    receipt,
    margin,
    blue,
    grid
  } = props;
  const row = size === 12 ? "" : "col-sm-12 col-xs-12";

  if ((size === 12 || grid) && recursive !== 1) {
    return grid ? (
      <div className="row">{LargeCardBox(props, 1)}</div>
    ) : (
      <div className="row">{LargeCardBox(props, 1)}</div>
    );
  }

  return (
    <div
      className={
        customSize
          ? `${customSize} ${className !== undefined ? className : ""}`
          : `col-md-${size} ${row} ${className !== undefined ? className : ""}`
      }
      style={style}
    >
      <div
        className={`card-box ${blue && "blue"} ${
          receipt !== undefined ? receipt : ""
        }`}
        style={{ padding, margin }}
      >
        {title && (
          <h2 className={`text-dark header-title m-t-0 ${!secondaryText}`}>
            {title}
          </h2>
        )}
        {children}
        {secondaryText && <p className="text-muted font-13">{secondaryText}</p>}
        <div className="clearfix" />
      </div>
    </div>
  );
});

LargeCardBox.defaultProps = {
  size: 6
};
