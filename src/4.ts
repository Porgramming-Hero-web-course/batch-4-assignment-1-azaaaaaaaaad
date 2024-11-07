{
  // poblem 4

  //   type declare
  type Circle = {
    shape: `circle`;
    radius: number;
  };
  type Rectangle = {
    shape: `rectangle`;
    width: number;
    height: number;
  };
  type Shape = Circle | Rectangle;

  //   type guard

  const isCircle = (shape: Shape): shape is Circle => shape.shape === `circle`;
  const isRectangle = (shape: Shape): shape is Rectangle =>
    shape.shape === `rectangle`;

  const calculateShapeArea = (shape: Shape) => {
    if (isCircle(shape)) {
      return Math.PI * Math.pow(shape.radius, 2);
    } else if (isRectangle(shape)) {
      return shape.width * shape.height;
    } else {
      return `unknown shape`;
    }
  };

  const circle: Circle = { shape: "circle", radius: 5 };
  const rectangle: Rectangle = { shape: "rectangle", width: 10, height: 20 };

  //   console.log(calculateShapeArea(circle));
  //   console.log(calculateShapeArea(rectangle));
}
