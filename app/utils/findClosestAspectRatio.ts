/*
Write a function that takes in a width and height of a pixel and return the aspect ratio that is closest to one of the following ratios: [
  [1, 1],
  [16, 9],
  [21, 9],
  [3, 2],
  [2, 3],
  [4, 5],
  [5, 4],
  [3, 4],
  [4, 3],
  [9, 16],
  [9, 21],
]
give 100 by 100 return [1,1]
give 100 by 101 return [1,1] becaust it is closest
*/

const ratios = [
  [1, 1],
  [16, 9],
  [21, 9],
  [3, 2],
  [2, 3],
  [4, 5],
  [5, 4],
  [3, 4],
  [4, 3],
  [9, 16],
  [9, 21],
];

export default function findClosestAspectRatio(width: number, height: number) {
  // Calculate the actual ratio of the input
  const actualRatio = width / height;

  let closestRatio = ratios[0];
  let smallestDifference = Infinity;

  // Compare with each predefined ratio
  for (const ratio of ratios) {
    const predefinedRatio = ratio[0] / ratio[1];
    const difference = Math.abs(actualRatio - predefinedRatio);

    if (difference < smallestDifference) {
      smallestDifference = difference;
      closestRatio = ratio;
    }
  }

  return closestRatio;
}
