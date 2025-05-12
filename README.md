# 📦 Inventory Control

A simple inventory management system made with JavaScript and HTML.  
You can add, remove, or view items in stock — all through basic methods and input handling.

---

## 🚀 Features

- ✅ Add new equipment or increase quantity
- ❌ Remove equipment or decrease quantity
- 👁️ Display the full stock list

---

## 🛠️ Main Methods

### `addEquipment(name, quantity)`
Adds a new item or increases the quantity of an existing item.

```
addEquipment("Keyboard", 10);

removeEquipment("Keyboard", 3);

showStock();

```

## ⚠️ Notes
This project uses ES6 modules, so it needs to be run via a local or remote server environment (not directly from the file system).

You can use a simple live server extension or run with tools like http-server or vite.

## 📁 Project Structure
```
inventory-control/
├── index.html
└── StorageManagement/
    └── Equipment.js
    └── StockManager.js
└── README.md 
```
## 💡 Future Improvements
Add support for persistent storage (e.g. localStorage or backend)

Input validation via UI

Create a graphical interface

👨‍💻 Author
Made with 💙 by an0brega
