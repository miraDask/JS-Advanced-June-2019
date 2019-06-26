function sortRectangles(rectData) {
    const createRectangle = (width, height) => {
        let rectangle = {
            width : width,
            height : height,
            area: () => rectangle.width * rectangle.height,
            compareTo: function (other) {
                return other.area() - rectangle.area() || other.width - rectangle.width;
            }
        }

        return rectangle;
    }

    let rectangles = [];
    rectData.forEach(rd => {
        const [width, height] = [...rd];
        rectangles.push(createRectangle(width, height));
    });

    const sortedRectangles = rectangles.sort((r1, r2) => r1.compareTo(r2));
    return sortedRectangles;
}
//test:
// sortRectangles([
//     [10, 5],
//     [3, 20],
//     [5, 12]
// ]);