// ============================================================
// CẤU HÌNH WEBSITE - Chỉnh sửa thông tin tại đây
// ============================================================

export const siteInfo = {
  name: 'Quảng Cáo - Sự kiện & Nội Thất Ngọc Long',
  slogan: 'Chi nhánh làm việc bao phủ khắp các quận và khu vực lân cận tại TP.HCM',
  address: '[Khu vực TP.HCM]',
  email: '[ngoclongcompany010500@gmail.com]',
};

// Thông tin liên hệ theo từng Tab/Trang
// Thay đổi số điện thoại và link mạng xã hội tại đây
export const contactByPage = {
  default: {
    phone: '0373 132 811', phoneDisplay: '0373.132.811',
    zaloLink: 'https://zalo.me/0373132811', facebookLink: '', zaloId: '0373132811',
  },
  'bien-quang-cao': {
    phone: '0373 132 811', phoneDisplay: '0373.132.811',
    zaloLink: 'https://zalo.me/0373132811', facebookLink: '', zaloId: '0373132811',
  },
  'noi-that': {
    phone: '0373 132 811', phoneDisplay: '0373.132.811',
    zaloLink: 'https://zalo.me/0373132811', facebookLink: '', zaloId: '0373132811',
  },
  'du-an': {
    phone: '0373 132 811', phoneDisplay: '0373.132.811',
    zaloLink: 'https://zalo.me/0373132811', facebookLink: '', zaloId: '0373132811',
  },
  'lien-he': {
    phone: '0373 132 811', phoneDisplay: '0373.132.811',
    zaloLink: 'https://zalo.me/0373132811', facebookLink: '', zaloId: '0373132811',
  },
  'su-kien': {
    phone: '0373 132 811', phoneDisplay: '0373.132.811',
    zaloLink: 'https://zalo.me/0373132811', facebookLink: '', zaloId: '0373132811',
  },
};

// ── BIỂN QUẢNG CÁO – tất cả ảnh _ADV ───────────────────────────────────
const P = '[Liên hệ để báo giá]';
const M = '[Liên hệ để biết thêm]';
const S = '[Theo yêu cầu]';
const D = '[Mô tả chi tiết sản phẩm]';

export const signageProducts = [
  // Hộp Đèn (hop-den)
  { id: 1, name: 'Biển Hộp Đèn', category: 'hop-den', material: M, size: S, price: P, description: D, image: '/images/4_ADV.webp' },
  { id: 2, name: 'Biển Hộp Đèn LED quán ăn', category: 'hop-den', material: M, size: S, price: P, description: D, image: '/images/38_ADV.webp' },
  { id: 3, name: 'Biển Hộp Đèn LED sửa chữa điện thoại', category: 'hop-den', material: M, size: S, price: P, description: D, image: '/images/55_ADV.webp' },
  { id: 4, name: 'Biển Hộp Đèn LED chào mừng năm mới', category: 'hop-den', material: M, size: S, price: P, description: D, image: '/images/49_ADV.webp' },
  { id: 5, name: 'Biển Hộp Đèn LED khu vui chơi', category: 'hop-den', material: M, size: S, price: P, description: D, image: '/images/13.webp' },
  { id: 6, name: 'Biển Hộp Đèn LED 24/24', category: 'hop-den', material: M, size: S, price: P, description: D, image: '/images/51_ADV.webp' },
  { id: 7, name: 'Biển Hộp Đèn LED Coffee', category: 'hop-den', material: M, size: S, price: P, description: D, image: '/images/53_ADV.webp' },
  { id: 8, name: 'Biển Hộp Đèn LED quán ăn', category: 'hop-den', material: M, size: S, price: P, description: D, image: '/images/27_ADV.webp' },
  // Biển Alu (alu)
  { id: 9, name: 'Biển Alu LUCKY STAR', category: 'alu', material: M, size: S, price: P, description: D, image: '/images/14_ADV.webp' },
  { id: 10, name: 'Biển Alu Cellphone S', category: 'alu', material: M, size: S, price: P, description: D, image: '/images/15_ADV.webp' },
  { id: 11, name: 'Biển Alu TRUNG TÂM PCCC', category: 'alu', material: M, size: S, price: P, description: D, image: '/images/18_ADV.webp' },
  { id: 12, name: 'Biển Alu SAIGON JANE', category: 'alu', material: M, size: S, price: P, description: D, image: '/images/21_ADV.webp' },
  { id: 13, name: 'Biển Alu RƯỢU THE WIN', category: 'alu', material: M, size: S, price: P, description: D, image: '/images/28_ADV.webp' },
  { id: 14, name: 'Biển Alu TÔN HOA SEN', category: 'alu', material: M, size: S, price: P, description: D, image: '/images/41_ADV.webp' },
  // Loại Khác (khac)
  { id: 15, name: 'Biển Quảng Cáo ', category: 'khac', material: M, size: S, price: P, description: D, image: '/images/40_ADV.webp' },
  { id: 16, name: 'Biển Quảng Cáo ', category: 'khac', material: M, size: S, price: P, description: D, image: '/images/36_ADV.webp' },
  // Chữ Nổi (chu-noi) – tất cả ảnh còn lại
  { id: 17, name: 'Chữ Nổi NHA KHOA VGOLD', category: 'chu-noi', material: M, size: S, price: P, description: D, image: '/images/5_ADV.webp' },
  { id: 18, name: 'Chữ Nổi NHA KHOA SÀI GÒN', category: 'chu-noi', material: M, size: S, price: P, description: D, image: '/images/7_ADV.webp' },
  { id: 19, name: 'Chữ Nổi BISSPORT', category: 'chu-noi', material: M, size: S, price: P, description: D, image: '/images/8_ADV.webp' },
  { id: 20, name: 'Chữ Nổi NHA KHOA NAM ANH', category: 'chu-noi', material: M, size: S, price: P, description: D, image: '/images/9_ADV.webp' },
  { id: 21, name: 'Chữ Nổi NHÀ THUỐC MINH - NGỌC', category: 'chu-noi', material: M, size: S, price: P, description: D, image: '/images/11_ADV.webp' },
  { id: 22, name: 'Chữ Nổi BEBE MÁT KIDS', category: 'chu-noi', material: M, size: S, price: P, description: D, image: '/images/16_ADV.webp' },
  { id: 23, name: 'Chữ Nổi NHA KHOA NAM ANH', category: 'chu-noi', material: M, size: S, price: P, description: D, image: '/images/17_ADV.webp' },
  { id: 24, name: 'Chữ Nổi NHA KHOA NAM ANH', category: 'chu-noi', material: M, size: S, price: P, description: D, image: '/images/19_ADV.webp' },
  { id: 25, name: 'Chữ Nổi KHOA NAM ANH', category: 'chu-noi', material: M, size: S, price: P, description: D, image: '/images/20_ADV.webp' },
  { id: 26, name: 'Chữ Nổi NAVY NAIL', category: 'chu-noi', material: M, size: S, price: P, description: D, image: '/images/23_ADV.webp' },
  { id: 27, name: 'Chữ Nổi NHÀ HÀNG RỪNG TRÀM 1', category: 'chu-noi', material: M, size: S, price: P, description: D, image: '/images/24_ADV.webp' },
  { id: 28, name: 'Chữ Nổi NHA KHOA SÀI GÒN SMILE', category: 'chu-noi', material: M, size: S, price: P, description: D, image: '/images/25_ADV.webp' },
  { id: 29, name: 'Chữ Nổi THUẬN HÒA CLUB', category: 'chu-noi', material: M, size: S, price: P, description: D, image: '/images/39_ADV.webp' },
  { id: 30, name: 'Chữ Nổi NHA KHOA NAM ANH', category: 'chu-noi', material: M, size: S, price: P, description: D, image: '/images/42_ADV.webp' },
  { id: 31, name: 'Chữ Nổi MỘC MIÊN', category: 'chu-noi', material: M, size: S, price: P, description: D, image: '/images/43_ADV.webp' },
  { id: 32, name: 'Chữ Nổi AKA COFFEE', category: 'chu-noi', material: M, size: S, price: P, description: D, image: '/images/44_ADV.webp' },
  { id: 33, name: 'Chữ Nổi Chivago', category: 'chu-noi', material: M, size: S, price: P, description: D, image: '/images/45_ADV.webp' },
  { id: 34, name: 'Chữ Nổi QUEEN LỬA', category: 'chu-noi', material: M, size: S, price: P, description: D, image: '/images/46_ADV.webp' },
  { id: 35, name: 'Chữ Nổi NIRO GRANITE', category: 'chu-noi', material: M, size: S, price: P, description: D, image: '/images/47_ADV.webp' },
  { id: 36, name: 'Chữ Nổi VIỆN THẨM MỸ BIO CELL', category: 'chu-noi', material: M, size: S, price: P, description: D, image: '/images/48_ADV.webp' },
  { id: 37, name: 'Chữ Nổi KEN - CLUP', category: 'chu-noi', material: M, size: S, price: P, description: D, image: '/images/54_ADV.webp' },
];

// ── NỘI THẤT – ảnh thực tế từ thư mục /images/noi-that/ ──────────────────
export const furnitureProducts = [
  // ─ Tủ ─
  { id: 1, name: 'Tủ Nội Thất', category: 'tu', material: M, size: S, price: P, description: D, image: '/images/noi-that/3_noi-that_tu.webp' },
  { id: 2, name: 'Tủ Nội Thất', category: 'tu', material: M, size: S, price: P, description: D, image: '/images/noi-that/5_noi-that_tu.webp' },
  { id: 3, name: 'Tủ Nội Thất', category: 'tu', material: M, size: S, price: P, description: D, image: '/images/noi-that/6_noi-that_tu.webp' },
  { id: 4, name: 'Tủ Nội Thất', category: 'tu', material: M, size: S, price: P, description: D, image: '/images/noi-that/17_noi-that_tu.webp' },
  { id: 5, name: 'Tủ Nội Thất', category: 'tu', material: M, size: S, price: P, description: D, image: '/images/noi-that/18_noi-that.webp' },
  { id: 6, name: 'Tủ Nội Thất', category: 'tu', material: M, size: S, price: P, description: D, image: '/images/noi-that/22_noi-that_tu.webp' },
  { id: 7, name: 'Tủ Nội Thất', category: 'tu', material: M, size: S, price: P, description: D, image: '/images/noi-that/30_noi-that_tu.webp' },
  { id: 8, name: 'Tủ Nội Thất', category: 'tu', material: M, size: S, price: P, description: D, image: '/images/noi-that/31_noi-that_tu.webp' },
  { id: 9, name: 'Tủ Nội Thất', category: 'tu', material: M, size: S, price: P, description: D, image: '/images/noi-that/32_noi-that_tu.webp' },
  { id: 10, name: 'Tủ Nội Thất', category: 'tu', material: M, size: S, price: P, description: D, image: '/images/noi-that/34_noi-that_tu.webp' },
  { id: 11, name: 'Tủ Nội Thất', category: 'tu', material: M, size: S, price: P, description: D, image: '/images/noi-that/39_noi-that_tu.webp' },
  { id: 12, name: 'Tủ Nội Thất', category: 'tu', material: M, size: S, price: P, description: D, image: '/images/noi-that/41_noi-that_tu.webp' },
  { id: 13, name: 'Tủ Nội Thất', category: 'tu', material: M, size: S, price: P, description: D, image: '/images/noi-that/44_noi-that_tu.webp' },
  // ─ Bếp ─
  { id: 14, name: 'Nội Thất Bếp', category: 'bep', material: M, size: S, price: P, description: D, image: '/images/noi-that/1_noi-that_bep.webp' },
  { id: 15, name: 'Nội Thất Bếp', category: 'bep', material: M, size: S, price: P, description: D, image: '/images/noi-that/7_noi-that_bep.webp' },
  { id: 16, name: 'Nội Thất Bếp', category: 'bep', material: M, size: S, price: P, description: D, image: '/images/noi-that/8_noi-that_bep.webp' },
  { id: 17, name: 'Nội Thất Bếp', category: 'bep', material: M, size: S, price: P, description: D, image: '/images/noi-that/10_noi-that_bep.webp' },
  { id: 18, name: 'Nội Thất Bếp', category: 'bep', material: M, size: S, price: P, description: D, image: '/images/noi-that/12_noi-that_bep.webp' },
  { id: 19, name: 'Nội Thất Bếp', category: 'bep', material: M, size: S, price: P, description: D, image: '/images/noi-that/14_noi-that_bep.webp' },
  { id: 20, name: 'Nội Thất Bếp', category: 'bep', material: M, size: S, price: P, description: D, image: '/images/noi-that/20_noi-that_bep.webp' },
  { id: 21, name: 'Nội Thất Bếp', category: 'bep', material: M, size: S, price: P, description: D, image: '/images/noi-that/21_noi-that_bep.webp' },
  { id: 22, name: 'Nội Thất Bếp', category: 'bep', material: M, size: S, price: P, description: D, image: '/images/noi-that/25_noi-that_bep.webp' },
  { id: 23, name: 'Nội Thất Bếp', category: 'bep', material: M, size: S, price: P, description: D, image: '/images/noi-that/26_noi-that_bep.webp' },
  { id: 24, name: 'Nội Thất Bếp', category: 'bep', material: M, size: S, price: P, description: D, image: '/images/noi-that/27_noi-that_bep.webp' },
  { id: 25, name: 'Nội Thất Bếp', category: 'bep', material: M, size: S, price: P, description: D, image: '/images/noi-that/35_noi-that_bep.webp' },
  { id: 26, name: 'Nội Thất Bếp', category: 'bep', material: M, size: S, price: P, description: D, image: '/images/noi-that/38_noi-that_bep.webp' },
  { id: 27, name: 'Nội Thất Bếp', category: 'bep', material: M, size: S, price: P, description: D, image: '/images/noi-that/40_noi-that_bep.webp' },
  { id: 28, name: 'Nội Thất Bếp', category: 'bep', material: M, size: S, price: P, description: D, image: '/images/noi-that/45_noi-that_bep.webp' },
  // ─ Giường Tủ ─
  { id: 29, name: 'Giường Tủ', category: 'giuong-tu', material: M, size: S, price: P, description: D, image: '/images/noi-that/2_noi-that_giuong-tu.webp' },
  { id: 30, name: 'Giường Tủ', category: 'giuong-tu', material: M, size: S, price: P, description: D, image: '/images/noi-that/9_noi-that_giuong-tu.webp' },
  { id: 31, name: 'Giường Tủ', category: 'giuong-tu', material: M, size: S, price: P, description: D, image: '/images/noi-that/11_noi-that_giuong-tu.webp' },
  { id: 32, name: 'Giường Tủ', category: 'giuong-tu', material: M, size: S, price: P, description: D, image: '/images/noi-that/13_noi-that_giuong-tu.webp' },
  { id: 33, name: 'Giường Tủ', category: 'giuong-tu', material: M, size: S, price: P, description: D, image: '/images/noi-that/19_noi-that_giuong-tu.webp' },
  { id: 34, name: 'Giường Tủ', category: 'giuong-tu', material: M, size: S, price: P, description: D, image: '/images/noi-that/24_noi-that_giuong-tu.webp' },
  { id: 35, name: 'Giường Tủ', category: 'giuong-tu', material: M, size: S, price: P, description: D, image: '/images/noi-that/28_noi-that_giuong-tu.webp' },
  { id: 36, name: 'Giường Tủ', category: 'giuong-tu', material: M, size: S, price: P, description: D, image: '/images/noi-that/29_noi-that_giuong-tu.webp' },
  { id: 37, name: 'Giường Tủ', category: 'giuong-tu', material: M, size: S, price: P, description: D, image: '/images/noi-that/33_noi-that_giuong-tu.webp' },
  { id: 38, name: 'Giường Tủ', category: 'giuong-tu', material: M, size: S, price: P, description: D, image: '/images/noi-that/36_noi-that_giuong-tu.webp' },
  { id: 39, name: 'Giường Tủ', category: 'giuong-tu', material: M, size: S, price: P, description: D, image: '/images/noi-that/37_noi-that_giuong-tu.webp' },
  { id: 40, name: 'Giường Tủ', category: 'giuong-tu', material: M, size: S, price: P, description: D, image: '/images/noi-that/42_noi-that_giuong-tu.webp' },
  // ─ Bàn ─
  { id: 41, name: 'Bàn Nội Thất', category: 'ban', material: M, size: S, price: P, description: D, image: '/images/noi-that/4_noi-that_ban.webp' },
  { id: 42, name: 'Bàn Nội Thất', category: 'ban', material: M, size: S, price: P, description: D, image: '/images/noi-that/15_noi-that_ban.webp' },
  { id: 43, name: 'Bàn Nội Thất', category: 'ban', material: M, size: S, price: P, description: D, image: '/images/noi-that/23_noi-that_ban.webp' },
  // ─ Tủ Kệ Tivi ─
  { id: 44, name: 'Tủ Kệ Tivi', category: 'tu-ke-tivi', material: M, size: S, price: P, description: D, image: '/images/noi-that/43_noi-that_tu-ke-tivi.webp' },
  // ─ Tủ Kệ ─
  { id: 45, name: 'Tủ Kệ', category: 'tu-ke', material: M, size: S, price: P, description: D, image: '/images/noi-that/46_noi-that_tu-ke.webp' },
  { id: 46, name: 'Tủ Kệ', category: 'tu-ke', material: M, size: S, price: P, description: D, image: '/images/noi-that/47_noi-that_tu-ke.webp' },
];

// ── DỰ ÁN (dùng cho homepage preview) ────────────────────────────────────
export const featuredProjects = [
  { id: 1, name: 'Biển Quảng Cáo TÔN HOA SEN', category: 'Biển quảng cáo', description: '[Mô tả chi tiết dự án]', image: '/images/41_ADV.webp', year: '2024' },
  { id: 2, name: 'Biển Quảng Cáo NHA KHOA VGOLD', category: 'Biển quảng cáo', description: '[Mô tả chi tiết dự án]', image: '/images/5_ADV.webp', year: '2024' },
  { id: 3, name: 'Biển Quảng Cáo NHA KHOA SÀI GÒN', category: 'Biển quảng cáo', description: '[Mô tả chi tiết dự án]', image: '/images/7_ADV.webp', year: '2024' },
  { id: 4, name: 'Biển Quảng Cáo Cellphone S', category: 'Biển quảng cáo', description: '[Mô tả chi tiết dự án]', image: '/images/15_ADV.webp', year: '2023' },
  { id: 5, name: 'Sự Kiện Booth Triển Lãm', category: 'Sự kiện', description: '[Mô tả chi tiết dự án]', image: '/images/30_Event.webp', year: '2024' },
  { id: 6, name: 'Sự Kiện Standee & Banner', category: 'Sự kiện', description: '[Mô tả chi tiết dự án]', image: '/images/32_Event.webp', year: '2024' },
  { id: 7, name: 'Sự Kiện Booth 31', category: 'Sự kiện', description: '[Mô tả chi tiết dự án]', image: '/images/31_Event.webp', year: '2023' },
  { id: 8, name: 'Sự Kiện Phông Nền', category: 'Sự kiện', description: '[Mô tả chi tiết dự án]', image: '/images/12_Event.webp', year: '2023' },
];

// ── SỰ KIỆN – ảnh thực tế (_Event.webp) ──────────────────────────────────
export const eventProducts = [
  { id: 1, name: 'Sự Kiện', category: 'phong-nen', material: M, size: S, price: P, description: D, image: '/images/12_Event.webp' },
  { id: 2, name: 'Trang trí Noel', category: 'trang-tri', material: M, size: S, price: P, description: D, image: '/images/30_Event.webp' },
  { id: 3, name: 'Trang trí Noel', category: 'trang-tri', material: M, size: S, price: P, description: D, image: '/images/31_Event.webp' },
  { id: 4, name: 'Trang trí Noel', category: 'trang-tri', material: M, size: S, price: P, description: D, image: '/images/32_Event.webp' },
  { id: 5, name: 'Bánh lái', category: 'trang-tri', material: M, size: S, price: P, description: D, image: '/images/33_Event.webp' },
  { id: 6, name: 'Thùng trang trí', category: 'trang-tri', material: M, size: S, price: P, description: D, image: '/images/34_Event.webp' },
  { id: 7, name: 'Trang trí', category: 'trang-tri', material: M, size: S, price: P, description: D, image: '/images/50_Event.webp' },
  { id: 8, name: 'Cổng chào Long Thành', category: 'cong-chao', material: M, size: S, price: P, description: D, image: '/images/37_Other.webp' },
];
