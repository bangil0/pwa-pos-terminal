import { Category, Item, Order, ClosedOrder, Settings, Tax } from 'common/types';

export type AppState = {
  categories: Category[]; // Categories list
  closedOrders: ClosedOrder[]; // Closed orders list
  currentCategoryId: string; // Current category identifier
  currentItemId: string | null; // Current item identifier
  currentOrderId: string | null; // Current order identifier
  currentTableId: string | null; // Current table identifier
  currentUserId: string | null; // Current user identifier
  isLoading: boolean;
  orders: Order[]; // Orders list
  items: Item[]; // Products list
  settings: Settings;
  taxes: Tax[];
};

export type AppActions = {
  category: CategoryActions;
  item: ItemActions;
  orders: OrdersActions;
  settings: SettingsActions;
  taxes: TaxActions;
};

export type CategoryActions = {
  add: (category?: Partial<Category>) => void;
  remove: (categoryId: string) => void;
  select: (categoryId: string) => void;
  update: (category: Category) => void;
};

export type OrdersActions = {
  add: () => void;
  addItem: (product: Item) => void;
  charge: (closedOrder: ClosedOrder, orderId: string) => void;
  select: (orderId: string) => void;
  updateSelected: (order: Order) => void;
};

export type ItemActions = {
  add: (item?: Partial<Item>) => void;
  remove: (itemId: string) => void;
  select: (itemId: string | null) => void;
  update: (item: Item) => void;
};

export type TaxActions = {
  add: (itemData?: Partial<Tax>) => void;
  remove: (itemId: string) => void;
  update: (itemData: Tax) => void;
};

export type SettingsActions = {
  update: (settings: Partial<Settings>) => void;
};
