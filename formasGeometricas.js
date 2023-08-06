class GeometricShape {
    constructor(type) {
      this.type = type;
    }
  }
  
  class Square extends GeometricShape {
    constructor(side) {
      super('square');
      this.side = side;
    }
  
    calculateArea() {
      return this.side * this.side;
    }
  
    calculatePerimeter() {
      return 4 * this.side;
    }
  }
  
  class Circle extends GeometricShape {
    constructor(radius) {
      super('circle');
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  
    calculatePerimeter() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  class Triangle extends GeometricShape {
    constructor(base, height, side1, side2, side3) {
      super('triangle');
      this.base = base;
      this.height = height;
      this.side1 = side1;
      this.side2 = side2;
      this.side3 = side3;
    }
  
    calculateArea() {
      return (this.base * this.height) / 2;
    }
  
    calculatePerimeter() {
      return this.side1 + this.side2 + this.side3;
    }
  }
  
  // Now we can use the specific classes for each geometric shape
  const square = new Square(5);
  console.log('Area of square:', square.calculateArea());
  console.log('Perimeter of square:', square.calculatePerimeter());
  
  const circle = new Circle(3);
  console.log('Area of circle:', circle.calculateArea());
  console.log('Perimeter of circle:', circle.calculatePerimeter());
  
  const triangle = new Triangle(4, 6, 3, 4, 5);
  console.log('Area of triangle:', triangle.calculateArea());
  console.log('Perimeter of triangle:', triangle.calculatePerimeter());