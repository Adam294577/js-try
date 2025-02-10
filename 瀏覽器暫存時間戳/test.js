// 存儲項目的數據結構說明：
// key: 存儲項目的唯一鍵值
// type: 存儲類型（local表示localStorage，session表示sessionStorage）
// temporary: 是否為臨時存儲項目，true表示需要檢查過期時間
// expires: 過期時間，ISO格式的日期字符串
// value: 存儲的值，可以是任意類型

class StorageTimer {
  static instance;

  constructor() {
    this.storageTimerKey = 'storageTimer';
    this.items = [];
    this.initializeStorage();
  }

  static getInstance() {
    if (!StorageTimer.instance) {
      StorageTimer.instance = new StorageTimer();
    }
    return StorageTimer.instance;
  }

  initializeStorage() {
    const stored = localStorage.getItem(this.storageTimerKey);
    this.items = stored ? JSON.parse(stored) : [];
  }

  setItem(item) {
    const existingIndex = this.items.findIndex((i) => i.key === item.key);

    if (existingIndex > -1) {
      // 更新現有項目
      this.items[existingIndex] = item;
    } else {
      // 添加新項目
      this.items.push(item);
    }
    localStorage.setItem(this.storageTimerKey, JSON.stringify(this.items));

    if (item.type === 'local') {
      localStorage.setItem(item.key, JSON.stringify(item.value));
    } else {
      sessionStorage.setItem(item.key, JSON.stringify(item.value));
    }
  }

  getStorageValue(type, key) {
    const value =
      type === 'local'
        ? localStorage.getItem(key)
        : sessionStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  async getItem(key, callback) {
    const item = this.items.find((i) => i.key === key);

    if (!item) return null;

    if (!item.temporary) {
      return this.getStorageValue(item.type, key);
    }

    const isExpired = this.checkExpiration(item.expires);

    if (isExpired) {
      this.removeItem(key);
      if (callback) {
        return await callback();
      }
      return null;
    }

    return this.getStorageValue(item.type, key);
  }

  checkExpiration(expires) {
    const expiryDate = new Date(expires);
    const now = new Date();
    return now > expiryDate;
  }

  removeItem(key) {
    const index = this.items.findIndex((i) => i.key === key);
    if (index > -1) {
      const item = this.items[index];
      if (item.type === 'local') {
        localStorage.removeItem(item.key);
      } else {
        sessionStorage.removeItem(item.key);
      }
      this.items.splice(index, 1);
      localStorage.setItem(this.storageTimerKey, JSON.stringify(this.items));
    }
  }
}

export default StorageTimer.getInstance();
