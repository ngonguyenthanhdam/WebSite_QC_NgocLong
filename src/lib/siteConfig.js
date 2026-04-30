// ============================================================
// CẤU HÌNH WEBSITE - Chỉnh sửa thông tin tại đây
// ============================================================

export const siteInfo = {
  name: 'Long Quảng Cáo & Nội Thất',
  slogan: 'Chất lượng cao - Giá thành hợp lý - Sự lựa chọn tin cậy cho mọi công trình',
  address: '[Địa chỉ công ty]',
  email: '[email@example.com]',
};

// Thông tin liên hệ theo từng Tab/Trang
// Thay đổi số điện thoại và link mạng xã hội tại đây
export const contactByPage = {
  default: {
    phone: '0901 234 567', phoneDisplay: '0901.234.567',
    zaloLink: 'https://zalo.me/0901234567', facebookLink: '', zaloId: '0901234567',
  },
  'bien-quang-cao': {
    phone: '0901 234 567', phoneDisplay: '0901.234.567',
    zaloLink: 'https://zalo.me/0901234567', facebookLink: '', zaloId: '0901234567',
  },
  'noi-that': {
    phone: '0912 345 678', phoneDisplay: '0912.345.678',
    zaloLink: 'https://zalo.me/0912345678', facebookLink: '', zaloId: '0912345678',
  },
  'du-an': {
    phone: '0901 234 567', phoneDisplay: '0901.234.567',
    zaloLink: 'https://zalo.me/0901234567', facebookLink: '', zaloId: '0901234567',
  },
  'lien-he': {
    phone: '0901 234 567', phoneDisplay: '0901.234.567',
    zaloLink: 'https://zalo.me/0901234567', facebookLink: '', zaloId: '0901234567',
  },
  'su-kien': {
    phone: '0901 234 567', phoneDisplay: '0901.234.567',
    zaloLink: 'https://zalo.me/0901234567', facebookLink: '', zaloId: '0901234567',
  },
};

// ── BIỂN QUẢNG CÁO — tất cả ảnh _ADV ───────────────────────
const P = '[Liên hệ để báo giá]';
const M = '[Liên hệ để biết thêm]';
const S = '[Theo yêu cầu]';
const D = '[Mô tả chi tiết sản phẩm]';

export const signageProducts = [
  // Hộp Đèn (hop-den)
  { id: 1,  name: 'Biển Hộp Đèn LED 01',    category: 'hop-den', material: M, size: S, price: P, description: D, image: '/images/4_ADV.webp' },
  { id: 2,  name: 'Biển Hộp Đèn LED 02',    category: 'hop-den', material: M, size: S, price: P, description: D, image: '/images/5_ADV.webp' },
  { id: 3,  name: 'Biển Hộp Đèn LED 03',    category: 'hop-den', material: M, size: S, price: P, description: D, image: '/images/7_ADV.webp' },
  { id: 4,  name: 'Biển Hộp Đèn LED 04',    category: 'hop-den', material: M, size: S, price: P, description: D, image: '/images/8_ADV.webp' },
  { id: 5,  name: 'Biển Hộp Đèn LED 05',    category: 'hop-den', material: M, size: S, price: P, description: D, image: '/images/9_ADV.webp' },
  { id: 6,  name: 'Biển Hộp Đèn LED 06',    category: 'hop-den', material: M, size: S, price: P, description: D, image: '/images/11_ADV.webp' },
  { id: 7,  name: 'Biển Hộp Đèn Premium',   category: 'hop-den', material: '[Mica, Nhôm định hình]', size: S, price: P, description: D, image: '/images/product_lightbox.png' },
  // Biển Alu (alu)
  { id: 8,  name: 'Biển Alu 01',            category: 'alu', material: M, size: S, price: P, description: D, image: '/images/14_ADV.webp' },
  { id: 9,  name: 'Biển Alu 02',            category: 'alu', material: M, size: S, price: P, description: D, image: '/images/15_ADV.webp' },
  { id: 10, name: 'Biển Alu 03',            category: 'alu', material: M, size: S, price: P, description: D, image: '/images/16_ADV.webp' },
  { id: 11, name: 'Biển Alu 04',            category: 'alu', material: M, size: S, price: P, description: D, image: '/images/17_ADV.webp' },
  { id: 12, name: 'Biển Alu 05',            category: 'alu', material: M, size: S, price: P, description: D, image: '/images/18_ADV.webp' },
  { id: 13, name: 'Biển Alu Cao Cấp In UV', category: 'alu', material: '[Tôn Alu 4mm, In UV]', size: S, price: P, description: D, image: '/images/product_alu.png' },
  // Chữ Nổi (chu-noi)
  { id: 14, name: 'Chữ Nổi 01',            category: 'chu-noi', material: M, size: S, price: P, description: D, image: '/images/19_ADV.webp' },
  { id: 15, name: 'Chữ Nổi 02',            category: 'chu-noi', material: M, size: S, price: P, description: D, image: '/images/20_ADV.webp' },
  { id: 16, name: 'Chữ Nổi 03',            category: 'chu-noi', material: M, size: S, price: P, description: D, image: '/images/21_ADV.webp' },
  { id: 17, name: 'Chữ Nổi 04',            category: 'chu-noi', material: M, size: S, price: P, description: D, image: '/images/23_ADV.webp' },
  { id: 18, name: 'Chữ Nổi 05',            category: 'chu-noi', material: M, size: S, price: P, description: D, image: '/images/24_ADV.webp' },
  { id: 19, name: 'Chữ Nổi Inox Vàng',    category: 'chu-noi', material: '[Inox 304, Mạ vàng]', size: S, price: P, description: D, image: '/images/product_raised.png' },
  // Loại Khác (khac)
  { id: 20, name: 'Biển Quảng Cáo 01',     category: 'khac', material: M, size: S, price: P, description: D, image: '/images/25_ADV.webp' },
  { id: 21, name: 'Biển Quảng Cáo 02',     category: 'khac', material: M, size: S, price: P, description: D, image: '/images/27_ADV.webp' },
  { id: 22, name: 'Biển Quảng Cáo 03',     category: 'khac', material: M, size: S, price: P, description: D, image: '/images/28_ADV.webp' },
  { id: 23, name: 'Biển Quảng Cáo 04',     category: 'khac', material: M, size: S, price: P, description: D, image: '/images/36_ADV.webp' },
  { id: 24, name: 'Biển Quảng Cáo 05',     category: 'khac', material: M, size: S, price: P, description: D, image: '/images/38_ADV.webp' },
  { id: 25, name: 'Biển Quảng Cáo 06',     category: 'khac', material: M, size: S, price: P, description: D, image: '/images/39_ADV.webp' },
  { id: 26, name: 'Biển Quảng Cáo 07',     category: 'khac', material: M, size: S, price: P, description: D, image: '/images/40_ADV.webp' },
  { id: 27, name: 'Biển Quảng Cáo 08',     category: 'khac', material: M, size: S, price: P, description: D, image: '/images/41_ADV.webp' },
  { id: 28, name: 'Biển Quảng Cáo 09',     category: 'khac', material: M, size: S, price: P, description: D, image: '/images/42_ADV.webp' },
  { id: 29, name: 'Biển Quảng Cáo 10',     category: 'khac', material: M, size: S, price: P, description: D, image: '/images/43_ADV.webp' },
  { id: 30, name: 'Biển Quảng Cáo 11',     category: 'khac', material: M, size: S, price: P, description: D, image: '/images/44_ADV.webp' },
  { id: 31, name: 'Biển Quảng Cáo 12',     category: 'khac', material: M, size: S, price: P, description: D, image: '/images/45_ADV.webp' },
  { id: 32, name: 'Biển Quảng Cáo 13',     category: 'khac', material: M, size: S, price: P, description: D, image: '/images/46_ADV.webp' },
  { id: 33, name: 'Biển Quảng Cáo 14',     category: 'khac', material: M, size: S, price: P, description: D, image: '/images/47_ADV.webp' },
  { id: 34, name: 'Biển Quảng Cáo 15',     category: 'khac', material: M, size: S, price: P, description: D, image: '/images/48_ADV.webp' },
  { id: 35, name: 'Biển Quảng Cáo 16',     category: 'khac', material: M, size: S, price: P, description: D, image: '/images/49_ADV.webp' },
  { id: 36, name: 'Biển Quảng Cáo 17',     category: 'khac', material: M, size: S, price: P, description: D, image: '/images/51_ADV.webp' },
  { id: 37, name: 'Biển Quảng Cáo 18',     category: 'khac', material: M, size: S, price: P, description: D, image: '/images/53_ADV.webp' },
  { id: 38, name: 'Biển Quảng Cáo 19',     category: 'khac', material: M, size: S, price: P, description: D, image: '/images/54_ADV.webp' },
  { id: 39, name: 'Biển Quảng Cáo 20',     category: 'khac', material: M, size: S, price: P, description: D, image: '/images/55_ADV.webp' },
];

// ── NỘI THẤT — Interior + product_ ──────────────────────────
export const furnitureProducts = [
  { id: 1, name: 'Nội Thất Cao Cấp',        category: 'tu',  material: '[Gỗ tự nhiên, Sơn PU]',         size: S, price: P, description: D, image: '/images/22_Interior.webp' },
  { id: 2, name: 'Tủ Quần Áo Gỗ Công Nghiệp',category: 'tu', material: '[MDF phủ Melamine]',             size: S, price: P, description: D, image: '/images/product_cabinet.png' },
  { id: 3, name: 'Tủ Bếp Cao Cấp',          category: 'tu',  material: '[Gỗ Sồi Tự Nhiên]',            size: S, price: P, description: D, image: '/images/product_cabinet.png' },
  { id: 4, name: 'Tủ Đầu Giường Hiện Đại',  category: 'tu',  material: '[Gỗ công nghiệp cao cấp]',     size: S, price: P, description: D, image: '/images/product_cabinet.png' },
  { id: 5, name: 'Tủ Giày Cửa Gương',       category: 'tu',  material: '[MDF, Gương cao cấp]',         size: S, price: P, description: D, image: '/images/product_cabinet.png' },
  { id: 6, name: 'Kệ Sách Treo Tường',      category: 'ke',  material: '[Gỗ thông, Sắt]',             size: S, price: P, description: D, image: '/images/product_shelf.png' },
  { id: 7, name: 'Kệ Tivi Phòng Khách',     category: 'ke',  material: '[MDF phủ veneer sồi]',         size: S, price: P, description: D, image: '/images/product_shelf.png' },
  { id: 8, name: 'Kệ Trưng Bày Showroom',   category: 'ke',  material: '[Sắt sơn tĩnh điện, Gỗ]',    size: S, price: P, description: D, image: '/images/product_shelf.png' },
  { id: 9, name: 'Kệ Bếp Treo Tường',       category: 'ke',  material: '[Inox 304, Thép sơn tĩnh điện]', size: S, price: P, description: D, image: '/images/product_shelf.png' },
];

// ── DỰ ÁN (dùng cho homepage preview) ───────────────────────
export const featuredProjects = [
  { id: 1, name: 'Dự Án Chuỗi Cửa Hàng ABC',        category: 'Biển quảng cáo', description: '[Mô tả chi tiết dự án]', image: '/images/project_showcase1.png', year: '2024' },
  { id: 2, name: 'Nội Thất Văn Phòng XYZ',           category: 'Nội thất',       description: '[Mô tả chi tiết dự án]', image: '/images/hero_furniture.png',   year: '2024' },
  { id: 3, name: 'Hệ Thống Biển Hiệu Nhà Hàng',      category: 'Biển quảng cáo', description: '[Mô tả chi tiết dự án]', image: '/images/hero_signage.png',     year: '2023' },
  { id: 4, name: 'Showroom Nội Thất Cao Cấp',         category: 'Nội thất',       description: '[Mô tả chi tiết dự án]', image: '/images/product_cabinet.png',  year: '2023' },
  { id: 5, name: 'Bộ Chữ Nổi Trung Tâm Thương Mại',  category: 'Biển quảng cáo', description: '[Mô tả chi tiết dự án]', image: '/images/product_raised.png',   year: '2024' },
  { id: 6, name: 'Hệ Thống Kệ Siêu Thị Mini',        category: 'Nội thất',       description: '[Mô tả chi tiết dự án]', image: '/images/product_shelf.png',    year: '2023' },
  { id: 7, name: 'Biển Hộp Đèn Phòng Khám',          category: 'Biển quảng cáo', description: '[Mô tả chi tiết dự án]', image: '/images/product_lightbox.png', year: '2024' },
  { id: 8, name: 'Nội Thất Căn Hộ Luxury',           category: 'Nội thất',       description: '[Mô tả chi tiết dự án]', image: '/images/hero_furniture.png',   year: '2024' },
];

// ── SỰ KIỆN — Event + event_ ─────────────────────────────────
export const eventProducts = [
  // Ảnh thực tế (_Event)
  { id: 1,  name: 'Sự Kiện 12',                 category: 'phong-nen',   material: M, size: S, price: P, description: D, image: '/images/12_Event.webp' },
  { id: 2,  name: 'Sự Kiện 30',                 category: 'booth',       material: M, size: S, price: P, description: D, image: '/images/30_Event.webp' },
  { id: 3,  name: 'Sự Kiện 31',                 category: 'booth',       material: M, size: S, price: P, description: D, image: '/images/31_Event.webp' },
  { id: 4,  name: 'Sự Kiện 32',                 category: 'standee',     material: M, size: S, price: P, description: D, image: '/images/32_Event.webp' },
  { id: 5,  name: 'Sự Kiện 33',                 category: 'cong-chao',   material: M, size: S, price: P, description: D, image: '/images/33_Event.webp' },
  { id: 6,  name: 'Sự Kiện 34',                 category: 'bien-chi-dan',material: M, size: S, price: P, description: D, image: '/images/34_Event.webp' },
  { id: 7,  name: 'Sự Kiện 50',                 category: 'bien-chi-dan',material: M, size: S, price: P, description: D, image: '/images/50_Event.webp' },
  // Ảnh mẫu (event_*)
  { id: 8,  name: 'Phông Nền Backdrop',          category: 'phong-nen',   material: '[Vải thun, In kỹ thuật số]',  size: S, price: P, description: D, image: '/images/event_backdrop.png' },
  { id: 9,  name: 'Booth Triển Lãm & Hội Chợ',  category: 'booth',       material: '[Nhôm định hình, In Hiflex]', size: S, price: P, description: D, image: '/images/event_booth.png' },
  { id: 10, name: 'Standee & Banner Cuộn',       category: 'standee',     material: '[In PP, Khung nhôm]',         size: S, price: P, description: D, image: '/images/event_standee.png' },
  { id: 11, name: 'Cổng Chào Sự Kiện',           category: 'cong-chao',   material: '[Sắt hộp, Hoa vải, Đèn LED]',size: S, price: P, description: D, image: '/images/event_arch.png' },
  { id: 12, name: 'Màn Hình LED Sân Khấu',       category: 'man-hinh',    material: '[Module LED P3, P4]',         size: S, price: P, description: D, image: '/images/event_led_screen.png' },
  { id: 13, name: 'Lều Popup Quảng Cáo',         category: 'booth',       material: '[Vải oxford, Khung nhôm gấp]',size: S, price: P, description: D, image: '/images/event_popup_booth.png' },
  { id: 14, name: 'Bộ Biển Chỉ Dẫn Sự Kiện',    category: 'bien-chi-dan',material: '[Mica, Nhôm, In UV]',         size: S, price: P, description: D, image: '/images/event_signage_set.png' },
  { id: 15, name: 'Khung Photo Booth',            category: 'phong-nen',   material: '[Gỗ MDF, Mica, Đèn LED viền]',size: S, price: P, description: D, image: '/images/event_photobooth.png' },
];
