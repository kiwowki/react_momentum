const images = ["0.png", "1.png"]

const chosenImage = images[Math.floor(Math.random() * images.length)]

document.body.style.backgroundImage = `url('/img/${chosenImage}')`;
document.body.style.backgroundSize = 'cover'; // 배경 이미지를 화면에 맞게 채우기
document.body.style.backgroundRepeat = 'no-repeat'; // 이미지 반복 제거
document.body.style.backgroundPosition = 'center'; // 이미지를 가운데 정렬