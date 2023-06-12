# Hướng dẫn quá trình làm thử thách

## Cấu hình

**OS**: Window/Linux  
**Node Version**: >=18  
**Package Manager**: Yarn/NPM  

## Cài đặt

Clone repo bằng lệnh sau

```bash
git clone https://github.com/taminhtienhai/js-challenges
cd ./js-challenges
```

Khi repo được cập nhật, chạy lệnh sau để thấy được các thử thách mới

```bash
git pull --rebase
```

## Thử thách

Giả sử ta có thử thách sau

```javascript
/**
 * Nhập vào hàm 1 đoạn text bất kỳ, in ra màn hình đoạn text đó (1)
 * @params {string} mess (2)
 * @returns {void} (3)
 */
function printMessage(mess) {
    /// Write your own implementation (4)
} 
```

- (1): Yêu cầu của bài toán
- (2): Param truyền vào hàm, ở ví dụ trên ta có 1 param là `mess` với kiểu dữ liệu `string`
- (3): Kiểu dữ liệu mà hàm này trả về, ở ví dụ trên trả về `void` tức không có giá trị trả về
- (4): Nơi viết code để giải bài toán

## Test case

Đối với thử thách đã đặt ra ở trên, ta tiến hành giải và chạy các test case tương ứng để kiểm tra kết quả.

**Lưu ý: Test case ở đây sẽ dùng package "Test Runner" do NodeJS hỗ trợ từ phiên bản 18, bạn không cần phải cài thêm package bên ngoài để chạy test*

```javascript
const { test } = require('node:test');
const assert = require('node:assert');

/**
 * Nhập vào hàm 1 đoạn text bất kỳ, in ra màn hình đoạn text đó (1)
 * @params {string} mess (2)
 * @returns {void} (3)
 */
function printMessage(mess) {
    throw new Error("Something went wrong");
} 


test("Test cases", () => {
    assert.doesNotThrow(() => {
        printMessage("Devera KITs");
    }, Error)
})
```

Để chạy test case trên, có 2 cách:

- Cách 1: Dùng lệnh `node --test` để chạy toàn bộ test case
- Cách 2: Dùng lệnh `node --test {your-file-name}` để chạy 1 file chỉ định

Giả sử file của bạn có tên là `sample.test.js`, ta chạy lệnh `node --test sample.test.js`


## Tài liệu tham khảo

- Test Runner: [https://nodejs.org/api/test.html](https://nodejs.org/api/test.html)
- Assertion Testing: [https://nodejs.org/api/assert.html](https://nodejs.org/api/assert.html)
