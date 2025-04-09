const images = [
    "MyAlbum\\2.jpg",
    "MyAlbum\\3.jpg",
    "MyAlbum\\4.jpg",
    "MyAlbum\\5.jpg",
    "MyAlbum\\6.jpg",
    "MyAlbum\\7.jpg",
    "MyAlbum\\8.jpg",
    "MyAlbum\\9.jpg",
    "MyAlbum\\10.jpg",
    "MyAlbum\\11.jpg",
    "MyAlbum\\1.jpg",
];

let currentIndex = 0;

function changeImage(direction) {
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % images.length; // ไปข้างหน้า
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // ถอยหลัง
    }

    document.getElementById("carouselImage").src = images[currentIndex];
}