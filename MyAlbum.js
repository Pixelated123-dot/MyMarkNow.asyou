const cardStacks = document.querySelectorAll('.card-stack');

// ฟังก์ชันเพื่อรีเซ็ตการ์ด
function resetCards(cardStack) {
  const cards = cardStack.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.style.transform = 'translateY(0)'; // รีเซ็ตการ์ดกลับมาตำแหน่งเดิม
    card.classList.remove('clicked'); // เอา class clicked ออก
    card.style.zIndex = index + 1; // ให้การ์ดกลับมาตำแหน่ง z-index ตามลำดับ
  });
}

// เพิ่ม event listener ให้กับการ์ดในแต่ละกอง
cardStacks.forEach(cardStack => {
  const cards = cardStack.querySelectorAll('.card');
  
  cards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.add('clicked'); // เพิ่ม class clicked เพื่อให้เลื่อนการ์ดลง
      card.style.zIndex = 0; // เปลี่ยน z-index เพื่อให้การ์ดที่คลิกอยู่ข้างล่างสุด

      // ตรวจสอบว่าเมื่อการ์ดทั้งหมดถูกเลื่อนออกไปแล้ว
      const remainingCards = cardStack.querySelectorAll('.card:not(.clicked)');
      if (remainingCards.length === 0) {
        // เมื่อไม่มีการ์ดเหลือแล้ว ให้รีเซ็ตทุกการ์ด
        setTimeout(() => {
          resetCards(cardStack);
        }, 1000); // รีเซ็ตหลังจากการเคลื่อนไหวเสร็จสิ้น
      }
    });
  });
});