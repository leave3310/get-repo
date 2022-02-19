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