// 存儲項目介面，定義了存儲在 localStorage/sessionStorage 中的數據結構
interface StorageItem {
  key: string; // 存儲項目的唯一鍵值
  type: "local" | "session"; // 存儲類型：local表示localStorage，session表示sessionStorage
  temporary: boolean; // 是否為臨時存儲項目，true表示需要檢查過期時間
  expires: string; // 過期時間，ISO格式的日期字符串
  value: any; // 存儲的值，可以是任意類型
}

class StorageTimer {
  private static instance: StorageTimer;
  private storageTimerKey = "storageTimer";
  private items: StorageItem[] = [];

  private constructor() {
    this.initializeStorage();
  }

  public static getInstance(): StorageTimer {
    if (!StorageTimer.instance) {
      StorageTimer.instance = new StorageTimer();
    }
    return StorageTimer.instance;
  }

  // 初始化存儲
  private initializeStorage(): void {
    const stored = localStorage.getItem(this.storageTimerKey);
    this.items = stored ? JSON.parse(stored) : [];
  }

  // 設置存儲項目
  public setItem(item: StorageItem): void {
    const existingIndex = this.items.findIndex((i) => i.key === item.key);

    if (existingIndex > -1) {
      // 更新現有項目
      this.items[existingIndex] = item;
    } else {
      // 添加新項目
      this.items.push(item);
    }

    localStorage.setItem(this.storageTimerKey, JSON.stringify(this.items));

    if (item.type === "local") {
      localStorage.setItem(item.key, JSON.stringify(item.value));
    } else {
      sessionStorage.setItem(item.key, JSON.stringify(item.value));
    }
  }

  // 獲取存儲值的方法
  private getStorageValue(type: "local" | "session", key: string): any {
    const value =
      type === "local"
        ? localStorage.getItem(key)
        : sessionStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  // 獲取存儲項目並檢查過期
  public async getItem(
    key: string,
    callback?: () => Promise<any>
  ): Promise<any> {
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

  // 檢查是否過期
  private checkExpiration(expires: string): boolean {
    const expiryDate = new Date(expires);
    const now = new Date();
    return now > expiryDate;
  }

  // 移除過期項目
  private removeItem(key: string): void {
    const index = this.items.findIndex((i) => i.key === key);
    if (index > -1) {
      const item = this.items[index];
      if (item.type === "local") {
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
