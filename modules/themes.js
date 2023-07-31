// beach theme
// function generateRandomBlue() {
//   const hue = Math.floor(Math.random() * (235 - 188) + 188);
//   return `hsl(${hue}, 100%, 50%)`;
// }

// function generateRandomSandColor() {
//   const hue = Math.floor(Math.random() * (37-18) + 18);
//   const saturation = Math.floor(Math.random() * (92-50) + 50);
//   const lightness = Math.floor(Math.random() * (83-73) + 73);
//   return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
// }

// function generateRandomPinkColor() {
//   const hue = Math.floor(Math.random() * (346-330) + 330);
//   const saturation = Math.floor(Math.random() * (100-68) + 68);
//   const lightness = Math.floor(Math.random() * (79-65) + 65);
//   return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
// }

// // night theme
// function generateMidnightBlue() {
//   const HUE = 240;
//   const saturation = Math.floor(Math.random() * (100-50) + 50);
//   const lightness = Math.floor(Math.random() * (45-15) + 15);
//   return `hsl(${HUE}, ${saturation}%, ${lightness}%)`;
// }

// function generateRandomStreetLightColor() {
//   const HUE = 46;
//   const saturation = Math.floor(Math.random() * (100-60) + 60);
//   const lightness = Math.floor(Math.random() * (79-56) + 56);
//   return `hsl(${HUE}, ${saturation}%, ${lightness}%)`;
// }

// function generateRandomPurple() {
//   const hue = Math.floor(Math.random() * (280-260) + 260);
//   const saturation = Math.floor(Math.random() * (100-44) + 44);
//   const lightness = Math.floor(Math.random() * (17-12) + 10);
//   return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
// }

export const themes = {
  beach: [
    {name: 'blue', hue: [188, 235], saturation: [100], lightness: [50], frequency: 1},
    {name: 'sand', hue: [18, 37], saturation: [50, 92], lightness: [73, 83], frequency: 1},
    {name: 'pink', hue: [330, 346], saturation: [68, 100], lightness: [65, 79], frequency: 1},
  ], 
  night: [
    {name: 'midnight-blue', hue: [240], saturation: [50, 100], lightness: [15, 45], frequency: 1},
    {name: 'street-light', hue: [46], saturation: [60, 100], lightness: [56, 79], frequency: 0.5},
    {name: 'purple', hue: [260, 280], saturation: [44, 100], lightness: [12, 17], frequency: 1},
  ],
}
