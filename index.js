const btn = document.querySelector(".map");
let isTransformed = false;
console.log(btn);
const colors = [
  "red",
  "blue",
  "green",
  "grey",
  "orange",
  "brown",
  "yellow",
  "pink",
  "purple",
];
const pieces = {
  one: `
		top: 0;
		left: 0;
    `,
  two: `
		top: 0;
		left: 201px;
    `,
  three: `
    	top: 0;
    	left: 402px;
    `,
  four: `
	  	top: 201px;
	  	left: 201px;
    `,
  five: `
	  	top: 201px;
	  	left: 0;
    `,
  six: `
    	top: 201px;
    	left: 402px;
    `,
  seven: `
    	top: 402px;
    	left: 0;
    `,
  eight: `
    	top: 402px;
    	left: 201px;
    `,
  nine: `
    	top: 402px;
    	left: 402px;
    `,
};
const transformedPieces = {
  one: `
	top: -50px;
    left: -150px; 
    transform: rotate(6.02deg);
  `,
  two: `
	top: -160px;
    left: 201px;
    transform: rotate(16.02deg);
  `,
  three: `
	top: -130px;
    left: 605px;
    transform: rotate(-6.02deg);
  `,
  four: `
	top: 201px;
    left: 150px;
    transform: rotate(32.02deg);
  `,
  five: `
	top: 130px;
    left: 450px;
    transform: rotate(12.02deg);
  `,
  six: `
	top: 350px;
    left: 540px;
    transform: rotate(78.02deg);
  `,
  seven: `
	top: 500px;
    left: -200px;
    transform: rotate(27.02deg);
  `,
  eight: `
	top: 600px;
    left: 100px;
    transform: rotate(35.02deg);
  `,
  nine: `
	top: 700px;
    left: 650px;
    transform: rotate(17.02deg);
  `,
};

const mounted = () => {
  const piecesStyles = Object.values(pieces);
  Object.keys(pieces).forEach((item, index) => {
    let itemPiece = document.querySelector(`.${item}`);
    itemPiece.style.cssText = piecesStyles[index];
    itemPiece.style.transform = "rotate(0deg)";
  });
  isTransformed = false;
};
btn.addEventListener("click", () => {
  if (!isTransformed) {
    const piecesStyles = Object.values(transformedPieces);
    Object.keys(transformedPieces).forEach((item, index) => {
      let itemPiece = document.querySelector(`.${item}`);
      itemPiece.style.cssText = piecesStyles[index];
      itemPiece.style.background = colors[index];
    });
    isTransformed = true;
  } else {
    mounted();
  }
});

setTimeout(() => {
  mounted();
}, 1000);
