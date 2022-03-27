# 取得個人github repo相關資訊

**[觀看最後結果請點我](https://leave3310.github.io/get-repo/)**

## 使用步驟

```sh
# clone專案
$ git clone git@github.com:leave3310/get-repo.git
```
![Imgur](https://i.imgur.com/KBfAbgG.gif)

```sh
# 進入專案
$ cd get-repo

# 安裝相關依賴
$ yarn install
```
![Imgur](https://i.imgur.com/JuFp3QX.gif)

```sh
# 啟動react
$ yarn start
```
![Imgur](https://i.imgur.com/cBXemjh.gif)

### 貼心小提醒
建議輸入個人認證的代碼輸入至 `.env.development` ，避免request過多導致無法存取API本身

## 路徑命名
假如今天想要新增別的路徑，讓自己在import檔案時能夠更清楚檔案位置，以及不讓import檔案時會出現一堆...的情況，像是 `../../components` 這樣，此時需更動兩個檔案：

**以下用`@redux`為路徑名稱**
### `config-overrides.js`

```js
...
module.exports = function override(config) {
    config.resolve = {
        ...,
        alias: {
            ...,
            '@redux': path.resolve(__dirname, 'src/redux/')
        },
    };
    return config;
};

```

### `tsconfig.paths.json`

```js
{
    "compilerOptions": {
        ...,
        "paths": {
            ...,
            "@redux/*": [
                "./src/redux/*"
            ],
        }
    }
}
```
新增完後**建議重啟**專案，避免此次執行沒有載入新的路徑設定檔

## 介紹版面內容

第一個數字是 stargazers_count，後面為repo名稱
![Imgur](https://i.imgur.com/kdw9Srk.jpg)

## 程式碼內容介紹

### `fetch-all-user`

這是獲得使用者所有公開的repo名稱，裡面api回傳的state都會放入redux裡。當初新增可更換使用者名稱的功能時發現會出現bug，發現原因是`fetch-all-user` 沒有偵測到使用者名字更換，進而導致不會發送api，而之後採用redux時則解決此問題。

### `fetch-one-user`

這是獲得使用者公開的repo的詳細資訊，而這邊需要使用redux裡的name欄位，而repo名稱則是使用list本身的repo name傳入 `fetch-one-user` 裡來進行呼叫。回傳的資料沒有放入redux裡，而是讓hook本身進行管理。

### `interfaces`

裡面放的是比較容易使用到的interface，若是只有單一檔案使用到的話則是宣告在使用到的檔案本身，之後若是要尋找interface本身也較方便尋找。

### `components`

裡面都是渲染畫面用的component，CSS部分則是由Bootstrap來協助完成。