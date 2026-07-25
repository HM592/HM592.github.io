// Reusable image cutout: renders the real logo/portrait once a `src` is
// supplied, otherwise falls back to the same diagonal-stripe placeholder
// used throughout the design so the layout looks right before images exist.
function LogoCutout({ src, alt, label = 'logo', className = '', background }) {
  if (src) {
    return (
      <div
        className={`logo-cutout logo-cutout--image ${className}`}
        style={background ? { background } : undefined}
      >
        <img src={src} alt={alt} />
      </div>
    )
  }

  return <div className={`logo-cutout logo-cutout--placeholder ${className}`}>{label}</div>
}

export default LogoCutout
