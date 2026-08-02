import { create, type StateCreator } from "zustand";
import { immer } from "zustand/middleware/immer";

/**
 * 创建标准 Zustand Store（不包含中间件）
 * Create a standard Zustand store (without middleware)
 *
 * @template T - Store 状态对象的类型 / The type of the store state object
 * @param initializer - 状态初始化函数，定义 state 和 actions / State initializer function that defines state and actions
 * @returns 返回 Zustand Store 实例 / Returns a Zustand store instance
 *
 * @example
 * ```ts
 * const useStore = createStore((set) => ({
 *   count: 0,
 *   increment: () => set((state) => ({ count: state.count + 1 })),
 * }));
 * ```
 */
export function createStore<T extends object>(
  initializer: StateCreator<T, [], []>
) {
  return create<T>()(initializer);
}

/**
 * 创建集成 Immer 中间件的 Zustand Store
 * Create a Zustand store integrated with Immer middleware
 *
 * Immer 中间件允许使用 mutable 语法更新状态，内部自动转换为不可变更新
 * The Immer middleware allows using mutable syntax to update state,
 * automatically converting it to immutable updates internally
 *
 * @template T - Store 状态对象的类型 / The type of the store state object
 * @param initializer - 状态初始化函数，支持 Immer 的 set 函数 / State initializer function with Immer-enabled set function
 * @returns 返回集成了 Immer 中间件的 Zustand Store 实例 / Returns a Zustand store instance with Immer middleware integrated
 *
 * @example
 * ```ts
 * const useStore = createImmerStore((set) => ({
 *   user: { name: 'John', age: 30 },
 *   updateName: (name: string) => set((state) => {
 *     state.user.name = name;
 *   }),
 * }));
 * ```
 */
export function createImmerStore<T extends object>(
  initializer: StateCreator<T, [["zustand/immer", never]]>
) {
  return create<T>()(immer(initializer));
}
