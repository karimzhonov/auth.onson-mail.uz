import type { Updater } from '@tanstack/vue-table'
import type { Ref } from 'vue'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { token } from "@/composables"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function valueUpdater<T extends Updater<any>>(updaterOrValue: T, ref: Ref) {
  ref.value
    = typeof updaterOrValue === 'function'
      ? updaterOrValue(ref.value)
      : updaterOrValue
}

export function redirect() {
  let next = `https://onson-mail.uz`
  next = `${next}?access=${token.value.access}&refresh=${token.value.refresh}`
  if (useRoute().query.next) next = `${next}&next=${useRoute().query.next}`
  window.location.href = next
}
