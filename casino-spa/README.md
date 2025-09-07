# Casino SPA (React + Vite)

Ứng dụng một trang (SPA) với sidebar, liên kết tới tối thiểu 5 trang: Home, Slots, Blackjack, Roulette, Promotions, VIP. Sử dụng `react-router-dom` và CSS tối giản theo chủ đề casino.

## Chạy dự án
```bash
npm install
npm run dev
```

Mở http://localhost:5173

## Cấu trúc chính
- `src/sidebarConfig.js`: Cấu hình sidebar và thuật toán sinh route.
- `src/App.jsx`: Bố cục, sidebar, và định tuyến.
- `src/pages/*`: Các trang nội dung.
- `src/casino.css`: CSS chủ đề casino.

## Thuật toán liên kết từ sidebar
- Duyệt danh sách `sidebarLinks`.
- Bảo đảm đường dẫn duy nhất bằng `Set`.
- Trả về danh sách route để render vào `react-router-dom`.
