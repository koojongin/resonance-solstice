export enum ItemBoxViewMode {
  'MAXIMIZED' = 'MAXIMIZED',
  'MINIMIZED' = 'MINIMIZED',
}

export enum ItemBoxKind {
  EQUIPMENT = 'EQUIPMENT',
  CHARACTER = 'CHARACTER',
  MATERIAL = 'MATERIAL',
  TRAIN_EQUIPMENT = 'TRAIN_EQUIPMENT',
}

export enum RSItemType {
  EQUIPMENT = 'EQUIPMENT',
  TRAIN_EQUIPMENT = 'TRAIN_EQUIPMENT',
  MATERIAL = 'MATERIAL',
}

export interface RSItemEarnPath {
  desc: string
  tags: string[]
  map?: string
}
