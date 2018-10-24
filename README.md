# @tsx-react-ui/backtop

* 作者：maqing01
* 邮箱：475986855@qq.com

## 介绍

_The backtop component of the react written in Typescript_

---

## 安装

组件使用 `npm` 进行管理，请使用以下命令进行组件安装：

```
npm i @tsx-react-ui/backtop --save
```

- 安装cnpm `npm install -g cnpm --registry=https://registry.npm.taobao.org`


---

## 使用

### 样例文档

- 待开发

### 使用
最少配置参数为：

```jsx
<Backtop />

```
详细配置：
```jsx
<Backtop className="custom-back-top" showHeight={300} target={() => document.getElementById('target')} >
    <div className="custom-back-top-icon">UP</div>
</Backtop>

```
### 配置参数

| Prop | Type | Default | Description |
| ---- |:----:|:-------:| :----------:|
| **`showHeight`** | `number` | `200` | 当滚动高度超过此值时显示"返回顶部"按钮 |
| **`className`** | `string` | `undefined` | 自定义样式 |
| **`target`** | `function` | `() => window` | 返回指定滚动的DOM元素，默认为window |
| **`children`** | `ReactNode` | `undefined` | 自定义图标 |

---

## 注意事项

- 组件注意事项

---

## Changelog

---
