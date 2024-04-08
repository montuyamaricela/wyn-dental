export function Container({
  children,
  backgroundImage = "",
  position,
  styling = {},
}: {
  children?: React.ReactNode;
  backgroundImage?: string;
  styling?: object;
  position?: string;
}) {
  let style: object = {
    backgroundImage: `url('${backgroundImage}')`,
    backgroundPosition: position || "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  if (styling) {
    // combine the styling
    style = { ...style, ...styling };
  }
  return (
    <div className="relative " style={style}>
      <div className="container mx-auto bg-cover  px-5 py-10 md:py-32 lg:px-0">
        {children}
      </div>
    </div>
  );
}
