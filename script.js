// ตั้งค่าปีในฟุตเตอร์
document.getElementById('year').textContent = new Date().getFullYear();

// สร้างรายการห้อง (ตัวอย่าง 16 ห้อง)
// คุณเปลี่ยนชื่อรูป/ขนาด/ราคาได้ตามจริง และวางไฟล์ไว้ใน pic/
const rooms = [
  { id:1,  name:"ห้องสตูดิโอ A1", size:"22 ตร.ม.", price:1500, img:"pic/room1.jpg" },
  { id:2,  name:"ห้องสตูดิโอ A2", size:"22 ตร.ม.", price:1600, img:"pic/room2.jpg" },
  { id:3,  name:"ห้องมุม B1",    size:"25 ตร.ม.", price:1700, img:"pic/room3.jpg" },
  { id:4,  name:"ห้องมุม B2",    size:"25 ตร.ม.", price:1700, img:"pic/room4.jpg" },
  { id:5,  name:"ห้องมาตรฐาน C1",size:"24 ตร.ม.", price:1800, img:"pic/room5.jpg" },
  { id:6,  name:"ห้องมาตรฐาน C2",size:"24 ตร.ม.", price:1800, img:"pic/room6.jpg" },
  { id:7,  name:"ห้องมาตรฐาน C3",size:"24 ตร.ม.", price:1800, img:"pic/room7.jpg" },
  { id:8,  name:"ห้องมาตรฐาน C4",size:"24 ตร.ม.", price:1800, img:"pic/room8.jpg" },
  { id:9,  name:"ห้องใหญ่ D1",   size:"28 ตร.ม.", price:1900, img:"pic/room9.jpg" },
  { id:10, name:"ห้องใหญ่ D2",   size:"28 ตร.ม.", price:1900, img:"pic/room10.jpg" },
  { id:11, name:"ห้องใหญ่ D3",   size:"28 ตร.ม.", price:1900, img:"pic/room11.jpg" },
  { id:12, name:"ห้องใหญ่ D4",   size:"28 ตร.ม.", price:1900, img:"pic/room12.jpg" },
  { id:13, name:"ห้องพิเศษ E1",  size:"30 ตร.ม.", price:2000, img:"pic/room13.jpg" },
  { id:14, name:"ห้องพิเศษ E2",  size:"30 ตร.ม.", price:2000, img:"pic/room14.jpg" },
  { id:15, name:"ห้องพิเศษ E3",  size:"30 ตร.ม.", price:2000, img:"pic/room15.jpg" },
  { id:16, name:"ห้องพิเศษ E4",  size:"30 ตร.ม.", price:2000, img:"pic/room16.jpg" }
];

const listEl = document.getElementById('roomList');
const priceMinEl = document.getElementById('priceMin');
const priceMaxEl = document.getElementById('priceMax');
const priceLabel = document.getElementById('priceLabel');

function numberWithCommas(x){ return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }

function render(){
  const min = +priceMinEl.value;
  const max = +priceMaxEl.value;
  const [lo, hi] = min <= max ? [min, max] : [max, min];
  priceLabel.textContent = `${numberWithCommas(lo)} - ${numberWithCommas(hi)}`;

  listEl.innerHTML = '';
  rooms.filter(r => r.price >= lo && r.price <= hi).forEach(r => {
    const card = document.createElement('article');
    card.className = 'room-card';
    card.innerHTML = `
      <img src="${r.img}" alt="${r.name}" loading="lazy">
      <div class="pad">
        <h3>${r.name}</h3>
        <div class="meta">ขนาด: ${r.size}</div>
        <div class="meta">ค่าเช่า: <strong>${numberWithCommas(r.price)} บาท/เดือน</strong></div>
        <span class="badge">ใกล้ราชภัฏเพชรบุรี</span>
      </div>
    `;
    listEl.appendChild(card);
  });
}

priceMinEl.addEventListener('input', render);
priceMaxEl.addEventListener('input', render);
render();
